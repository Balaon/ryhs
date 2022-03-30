import { Discipline } from './academicDiscipline'

type Mark =  {
  studentID: number;
  point: number
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
  discipline: Discipline;
  lessons: TableLesson[];
}

