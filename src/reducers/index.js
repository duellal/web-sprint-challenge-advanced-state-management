import { ADD_SMURF, LOADING, ERROR, FETCH_SMURFS } from "../actions";
import { v4 as uuidv4 } from 'uuid'

export const initialState = {
   smurfs: [],
   loading: true,
   errorMessage: ''
}

const reducer = (state = initialState, action) => {
   switch (action.type) {
      case FETCH_SMURFS:
         return {
            ...state,
            loading: false,
            error: '',
            smurfs: action.payload
         }
      case ADD_SMURF:
         return {
            ...state,
            loading: false,
            errorMessage: '',
            smurfs: [...state.smurfs, {
               id: uuidv4(),
               name: action.payload.name,
               position: action.payload.position,
               nickname: action.payload.nickname,
               description: action.payload.description
            }]
         }
      case LOADING:
         return {
            ...state,
            loading: true,
            errorMessage: ''
         }
      case ERROR:
         return {
            ...state,
            loading: false,
            errorMessage: action.payload
         }
      default:
         return state
   }
}

//**************DO NOT EDIT ANY CODE BEYOND THIS POINT**************//
export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.