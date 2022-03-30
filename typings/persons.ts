import { Discipline } from "./academicDiscipline";

interface Contacts{ //контакты
  phone: string | string[];
  email: string | null,
  address: string
}

interface PersonalData{ //персональные данные
  name: string;
  surname: string;
  patronymic: string;
  birthday: Date;
  gender: string;
  contacts: Contacts;
}

export interface Person{
  id: number;
  personalData: PersonalData;
}

export interface Student extends Person{ // ученик
  groupID: number;
  parentsID: number[];
}

export interface Teacher extends Person{
  groupsID: number[]
}

