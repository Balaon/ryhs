import { Discipline } from './academicDiscipline'
import { Person } from './persons';

type Mark =  {
  studentInfo: Person;
  point: number;
}
  
interface Lesson {
  time: Date;
  topic: string;
  task: string | null;
}

interface TableLesson extends Lesson{
  day: Date;
  markList: Mark[]
}
interface DiaryLesson extends Lesson {
  discipline: Discipline;
  point: number;
}

// получает пользователь с id ученика
export interface SchoolDay{ // SchoolDay[] => дневник
  date: Date; //дата
  lessons: DiaryLesson[]; //массив уроков в этот день 
}
    
// получает пользователь с учительским id
export interface GradesList{//GradesList[] (табель успеваемости) => 
  disciplineInfo: Pick<Discipline, "id" | "name">;
  lessons: TableLesson[];
}

