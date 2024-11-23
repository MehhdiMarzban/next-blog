export default interface DashboardCard {
    type: "comments" | "users" | "blogs";
    value: number | string;
    title: "نظرات" | "کاربران" | "وبلاگ ها";
}
