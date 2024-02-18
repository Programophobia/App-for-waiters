//selectors
 const API_URL = process.env.NODE_ENV === 'production' ?  '/api' : 'http://localhost:3131/api'
// actions
const createActionName = actionName => `app/tables/${actionName}`;

// action creators
const tablesReducer = (statePart = [], action) => {
  switch (action.type) {
    default:
      return statePart;
  };
};
export default tablesReducer;