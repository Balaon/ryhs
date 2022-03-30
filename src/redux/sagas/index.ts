
import {call, spawn, all, fork, delay } from 'redux-saga/effects';


export interface IPeople {
  birth_year: string;
  eye_color: string;
  films: string[];
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  created: Date;
  edited: Date;
  species: string[];
  starships: string[];
  url: string;
  vehicles: string[];
}

function* auth() {
    yield delay(2000);
    console.log('auth true')
    yield call(loadUsers)
    return true;
}

function* loadUsers(){
    const request: Response = yield call(fetch, 'https://swapi.dev/api/people/1/')
    const data: IPeople = yield call([request, request.json])

    console.log("data", data)
}


export function* loadBasicData (){
    yield all([fork(auth)])
}

const sagasHandle = () => {
    const sagas = [ loadBasicData]

    const sarasArray = sagas.map( saga => {
        return spawn( function* (){
            try {
                yield call(saga);
            } catch (error) {
                console.log(error)
            }
        })
    })
    
    return sarasArray;
}

export default function* rootSaga() {
    yield all(sagasHandle())
}

