
const initial = {
 
};


export default function reducer (state = initial, action: {type: string; payload:{}}){

  switch(action.type){
    case 'SET_DIARY':{
      return{
        ...state,
        ...action.payload
       
      }
    }
    default:
      return state;
  }
}

