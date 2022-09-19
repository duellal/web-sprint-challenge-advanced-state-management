import axios from 'axios';

export const ADD_SMURF = 'ADD_SMURF'
export const LOADING = 'LOADING'
export const FETCH_ERROR = 'FETCH_ERROR'
export const FETCH_SMURFS = 'FETCH_SMURFS'
export const ADD_SMURF_START = 'ADD_SMURF_START'

const fetchSmurfs = () => dispatch => {
   dispatch({ type: LOADING })

   axios.get('http://localhost:3333/smurfs')
      .then(res => {
         dispatch({ type: FETCH_SMURFS, payload: res.data })
      })
      .catch(err => {
         dispatch({ type: FETCH_ERROR, payload: err.response.data.Error })
      })
}

export const addSmurf = (smurf) => dispatch => {
   dispatch({ type: ADD_SMURF_START })

   axios.post(`http://localhost:3333/smurfs`, smurf)
      .then(() => {
         dispatch({ type: ADD_SMURF, payload: smurf })
      })
      .catch(err => {
         dispatch({ type: FETCH_ERROR, payload: err.response.data.Error })
      })
}

export default fetchSmurfs

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.