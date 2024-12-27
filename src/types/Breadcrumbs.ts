export interface BreadcrumbLink {
    label: string;
    href: string;
    active?: boolean;
}

type BreadCrumb = {
    [key: string] : (BreadcrumbLink[] | ((id: string) => BreadcrumbLink[]))
}

export default BreadCrumb;