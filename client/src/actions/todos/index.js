import {
  GET_ALL_TODOS,
  GET_ALL_TODOS_ERROR,
} from '../types';

import axios from 'axios';

// export const getAllTodos = async () => {
//   try {
//     const { data } = await axios.get('/api/todos');
//     return {
//       type: GET_ALL_TODOS,
//       payload: data
//     };
//   } catch (e) {
//     return {
//       type: GET_ALL_TODOS_ERROR,
//       payload: e
//     };
//   }
// }


// export const getAllTodos = () => {
//   return async function(dispatch) {
//     try {
//       const { data } = await axios.get('/api/todos');
//       dispatch({ type: GET_ALL_TODOS, payload: data });
//       dispatch({ type: INCREMENT });
//     } catch (e) {
//       dispatch({ type: GET_ALL_TODOS_ERROR, payload: e });
//     }
//   }
// };

export const getAllTodos = () => async dispatch => {
  try {
    const { data } = await axios.get('/api/todos');
    dispatch({ type: GET_ALL_TODOS, payload: data });
  } catch (e) {
    dispatch({ type: GET_ALL_TODOS_ERROR, payload: 'Something went wrong, please refresh the page to try again'})
  }
}
