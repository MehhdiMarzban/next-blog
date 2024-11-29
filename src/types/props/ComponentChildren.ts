export interface SimpleComponentChildren {
    children: React.ReactNode;
}

type ComponentChildren<T = object> = SimpleComponentChildren & T;
export default ComponentChildren;
