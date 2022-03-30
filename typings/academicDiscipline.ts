import { Person } from "./persons"

export interface Discipline {
    id: number;
    name: string;
    teacher: Person;
}