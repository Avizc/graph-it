import {HANDLE_NEW_POINT} from '../actions';

const initialState = {
  graphData: [{index: 1, y: 12, columnName: 'hello'}, {index: 2, y: 24, columnName: 'hello'}, {index: 3, y: 72, columnName: 'This is only a test'}],
  graphName: 'New Graph'
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_NEW_POINT:
      return Object.assign({}, state, {graphData: [...state.graphData, {index: action.index, y: action.y, columnName: action.columnName}]});
  default:
    return state;
  }
}