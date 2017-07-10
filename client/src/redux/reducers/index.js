import {HANDLE_NEW_POINT} from '../actions';

const initialState = {
  xValues: [],
  yValues: [],
  columnNames: [],
  grapseName: 'New Graph'
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_NEW_POINT:
      return Object.assign({}, state, {xValuesx: [...state.xValues, action.x], yValues: [...state.yValues, action.y], columnNames: [...state.columnNames, action.columnName]})
  default:
    return state;
  }
}