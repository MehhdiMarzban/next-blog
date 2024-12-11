import axios, { AxiosError } from "axios";

const app = axios.create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL,
    withCredentials: true,
    // headers: { "Content-Type": "application/json" },
});

app.interceptors.request.use(
    (req) => req,
    (err) => Promise.reject(err)
);

app.interceptors.response.use(
    (res) => res,
    async (err: AxiosError) => {
        type OrginalConfigType = typeof err.config & { _retry?: boolean };

        const orginalConfig: OrginalConfigType = err.config as OrginalConfigType;
        if (err?.response?.status === 401 && !orginalConfig._retry) {
            orginalConfig._retry = true;
            try {
                const { data } = await axios.get(
                    `${process.env.NEXT_PUBLIC_BASE_URL}/user/refresh-token`,
                    { withCredentials: true }
                );
                if (data) return app(orginalConfig);
            } catch (e) {
                return Promise.reject(e);
            }
        }
        return Promise.reject(err);
    }
);

const http = {
    get: app.get,
    post: app.post,
    put: app.put,
    patch: app.patch,
    delete: app.delete,
};

export default http;
