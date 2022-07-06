import { Subject } from "./subject";

export class Teacher {
    id: number;
    firstName: String;
    lastName: String;
    email: String;
    subjects: Subject[];
    type: String;
}
