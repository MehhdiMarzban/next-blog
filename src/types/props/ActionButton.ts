import { BlogType } from "..";

export default interface ActionButton {
    id: BlogType["_id"];
    title? : BlogType["title"];
}
