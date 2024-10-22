interface Response {
    statusCode: number;
    data: {
        message: string;
        [key: string] : object | string;
    }
}

export default Response;