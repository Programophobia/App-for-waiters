import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import initialState from './initialState';
import tablesReducer from './tablesRedux';


export const getAllTables = state => state.tables;
export const getTableById = (state, id) => state.tables.filter(table => table.id === id);

export const updateTables = payload => ({ type: 'UPDATE_TABLES', payload });
export const updateTable = payload => ({ type: 'UPDATE_TABLE', payload });



const reducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_TABLE':
      console.log(state);
      const otherTables = state.tables.filter(table => table.id !== action.payload.id);
      return {...state, tables: [...otherTables, { id: action.payload.id, status: action.payload.status, peopleAmount: action.payload.peopleAmount, maxPeopleAmount: action.payload.maxPeopleAmount, bill: action.payload.bill }]};
    case 'UPDATE_TABLES':
      return [...action.payload]
    default:
      return state;
  }
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;