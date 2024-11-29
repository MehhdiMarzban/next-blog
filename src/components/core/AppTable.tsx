import { AppTableType } from "@/types";
import { ComponentChildren } from "types/props";

const AppTable: AppTableType = ({ children }) => {
    return (
        <div className="bg-secondary-0 overflow-x-auto">
            <table>{children}</table>
        </div>
    );
};

export default AppTable;

const TableHeader: React.FC<ComponentChildren> = ({ children }) => {
    return (
        <thead>
            <tr className="title-row">{children}</tr>
        </thead>
    );
};

const TableBody: React.FC<ComponentChildren> = ({ children }) => {
    return <tbody>{children}</tbody>;
};

const TableRow: React.FC<ComponentChildren> = ({ children }) => {
    return <tr>{children}</tr>;
};

AppTable.Header = TableHeader;
AppTable.Body = TableBody; 
AppTable.Row = TableRow;
