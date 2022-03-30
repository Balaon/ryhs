export interface News{
    id: number;
    date: Date;
    title: string;
    text: string;
    photoURL: string | null;
    additionalData: string | null;
}