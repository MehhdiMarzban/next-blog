import { ComponentChildren } from "./props";

export default interface AppTable extends React.FC<ComponentChildren> {
    Header: React.FC<ComponentChildren>;
    Body: React.FC<ComponentChildren>;
    Row: React.FC<ComponentChildren>;
}
