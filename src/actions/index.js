import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF'
export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const FETCH_SMURFS = 'FETCH_SMURFS'

const fetchSmurfs = () => dispatch => {
   dispatch({ type: LOADING })

   axios.get(`http://localhost:3333/smurfs`)
      .then(res =>
         console.log(res))
      .catch(err => {
         console.log(err)
      })
}

export default fetchSmurfs

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.