let student =[
  { 
    id: 10000001,
    name: "Иван",
    surname: "Иванов",
    patronymic: "Иванович",
    birthday: new Date("17-05-2010"),
    gender: "male",
    contacts: {
      phone: '+7 900 233 34 56',
      email: 'pirmer1@mail.ru',
      address: 'Москва, ул. Ленина, 1 , кв 1'
    },
    groupID: 40000001,
    parentsID: [30000001,30000002],
  },
  { 
    id: 10000002,
    name: "Петр",
    surname: "Петров",
    patronymic: "Петрович",
    birthday: new Date("01-11-2009"),
    gender: "male",
    contacts: {
      phone: '+7 901 883 34 56',
      email: 'pirmer2@mail.ru',
      address: 'Москва, ул. Маркса, 1 , кв 1'
    },
    groupID: 40000002,
    parentsID: [30000003],
  },
]

const persone = [
  {
    id: 30000001,
    name: "Иван",
    surname: "Иванов",
    patronymic: "Романович",
    birthday: new Date("10-07-1987"),
    gender: "male",
    contacts: {
      phone: '+7 880 854 34 21',
      email: 'pirmer3@mail.ru',
      address: 'Москва, ул. Ленина, 1 , кв 1'
    },
  },
  {
    id: 30000002,
    name: "Катя",
    surname: "Иванова",
    patronymic: "Дмитриевна",
    birthday: new Date("10-07-1989"),
    gender: "female",
    contacts: {
      phone: '+7 822 222 34 21',
      email: 'pirmer4@mail.ru',
      address: 'Москва, ул. Ленина, 1 , кв 1'
    },
  },
  {
    id: 30000003,
    name: "Петр",
    surname: "петров",
    patronymic: "Яковлевич",
    birthday: new Date("19-01-1991"),
    gender: "male",
    contacts: {
      phone: '+7 999 921 21 11',
      email: 'pirmer5@mail.ru',
      address: 'Москва, ул. Маркса, 1 , кв 1'
    },
  },
]

const teachers =[
  {
    id: 20000001,
    name: "Верая",
    surname: "Берг",
    patronymic: "Антоновна",
    birthday: new Date("22-03-1977"),
    gender: "female",
    contacts: {
      phone: '+7 495 333 34 21',
      email: 'pirmer6@mail.ru',
      address: 'Москва, ул. Мира, 1 , кв 1'
    },
    groupsID: [40000001, 40000002],
  },
  {
    id: 20000002,
    name: "Марья",
    surname: "Виноградова",
    patronymic: "Сергеевна",
    birthday: new Date("02-11-1990"),
    gender: "female",
    contacts: {
      phone: '+7 495 322 22 21',
      email: 'pirmer7@mail.ru',
      address: 'Москва, ул. Омара Хаяма, 1 , кв 1'
    },
    groupsID: [40000001, 40000002],
  },
  {
    id: 20000003,
    name: "Наталья",
    surname: "Винт",
    patronymic: "Александровна",
    birthday: new Date("12-09-1980"),
    gender: "female",
    contacts: {
      phone: '+7 495 11 11 21',
      email: 'pirmer8@mail.ru',
      address: 'Москва, ул. Сталина, 1 , кв 1'
    },
    groupsID: [40000001, 40000002],
  },
]

const schoolDay =[  // только ученику
  { 
    date: new Date.now(),
    lessons: [
      {
        discipline: {
          id: 50000001,
          name: "Английский язык",
          teacher: {
            id: 20000001,
            name: "Верая",
            surname: "Берг",
            patronymic: "Антоновна",
            birthday: new Date("22-03-1977"),
            gender: "female",
            contacts: {
              phone: '+7 495 333 34 21',
              email: 'pirmer6@mail.ru',
              address: 'Москва, ул. Мира, 1 , кв 1'
            },
          },
        },
        point: 5,
        time: new Date('01:24:00'),
        topic: "to be",
        task: "задание 5",
      },
      {
        discipline: {
          id: 50000002,
          name: "Русский язык",
          teacherID: {
            id: 20000002,
            name: "Марья",
            surname: "Виноградова",
            patronymic: "Сергеевна",
            birthday: new Date("02-11-1990"),
            gender: "female",
            contacts: {
              phone: '+7 495 322 22 21',
              email: 'pirmer7@mail.ru',
              address: 'Москва, ул. Омара Хаяма, 1 , кв 1'
            },
          },
        },
        point: 5,
        time: new Date('02:24:00'),
        topic: "причастия",
        task: "задание 1",
      },
      {
        discipline: {
          id: 50000003,
          name: "Литература",
          teacherID: {
            id: 20000002,
            name: "Марья",
            surname: "Виноградова",
            patronymic: "Сергеевна",
            birthday: new Date("02-11-1990"),
            gender: "female",
            contacts: {
              phone: '+7 495 322 22 21',
              email: 'pirmer7@mail.ru',
              address: 'Москва, ул. Омара Хаяма, 1 , кв 1'
            },
          },
        },
        point: 5,
        time: new Date('03:24:00'),
        topic: "Пушкин",
        task: "задание 2",
      },
      {
        discipline: {
          id: 50000004,
          name: "Математика",
          teacherID: {
            id: 20000003,
            name: "Наталья",
            surname: "Винт",
            patronymic: "Александровна",
            birthday: new Date("12-09-1980"),
            gender: "female",
            contacts: {
              phone: '+7 495 11 11 21',
              email: 'pirmer8@mail.ru',
              address: 'Москва, ул. Сталина, 1 , кв 1'
            },
          },
        },
        point: 5,
        time: new Date('04:24:00'),
        topic: "Пределы",
        task: "задание 3",
      },
      {
        discipline: {
          id: 50000004 ,
          name: "Математика",
          teacherID: {
            id: 20000003,
            name: "Наталья",
            surname: "Винт",
            patronymic: "Александровна",
            birthday: new Date("12-09-1980"),
            gender: "female",
            contacts: {
              phone: '+7 495 11 11 21',
              email: 'pirmer8@mail.ru',
              address: 'Москва, ул. Сталина, 1 , кв 1'
            },
          },
        },
        point: 5,
        time: new Date('05:24:00'),
        topic: "Пределы",
        task: "задание 3",
      },
    ], 
  }
]

const gradesList = {// Только учителю
  discipline: {
    id: 50000001,
    name: "РУсский язык",
  },
  lessons: [
    {
        day: new Date.now(),
        markList: [
          {
            id: 10000001,
            name: "Иван",
            surname: "Иванов",
            patronymic: "Иванович",
            birthday: new Date("17-05-2010"),
            gender: "male",
            contacts: {
              phone: '+7 900 233 34 56',
              email: 'pirmer1@mail.ru',
              address: 'Москва, ул. Ленина, 1 , кв 1'
            },
            point: 5,
          },
          {
            id: 10000002,
            name: "Петр",
            surname: "Петров",
            patronymic: "Петрович",
            birthday: new Date("01-11-2009"),
            gender: "male",
            contacts: {
              phone: '+7 901 883 34 56',
              email: 'pirmer2@mail.ru',
              address: 'Москва, ул. Маркса, 1 , кв 1'
            },
            point: 4,
          }
        ]
    },
    {
        day: new Date.now(),
        markList: [
          {
            id: 10000002,
            name: "Петр",
            surname: "Петров",
            patronymic: "Петрович",
            birthday: new Date("01-11-2009"),
            gender: "male",
            contacts: {
              phone: '+7 901 883 34 56',
              email: 'pirmer2@mail.ru',
              address: 'Москва, ул. Маркса, 1 , кв 1'
            },
            point: 4,
          }
        ]
    },
    {
        day: new Date.now(),
        markList: [
          {
            id: 10000001,
            name: "Иван",
            surname: "Иванов",
            patronymic: "Иванович",
            birthday: new Date("17-05-2010"),
            gender: "male",
            contacts: {
              phone: '+7 900 233 34 56',
              email: 'pirmer1@mail.ru',
              address: 'Москва, ул. Ленина, 1 , кв 1'
            },
            point: 5,
          },
        ]
    },
    {
        day: new Date.now(),
        markList: [
        ]
    },
    {
        day: new Date.now(),
        markList: [
          {
            id: 10000001,
            name: "Иван",
            surname: "Иванов",
            patronymic: "Иванович",
            birthday: new Date("17-05-2010"),
            gender: "male",
            contacts: {
              phone: '+7 900 233 34 56',
              email: 'pirmer1@mail.ru',
              address: 'Москва, ул. Ленина, 1 , кв 1'
            },
            point: 4,
          },
          {
            id: 10000002,
            name: "Петр",
            surname: "Петров",
            patronymic: "Петрович",
            birthday: new Date("01-11-2009"),
            gender: "male",
            contacts: {
              phone: '+7 901 883 34 56',
              email: 'pirmer2@mail.ru',
              address: 'Москва, ул. Маркса, 1 , кв 1'
            },
            point: 5,
          }
        ]
    },
  ]
}

