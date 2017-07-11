import {HANDLE_NEW_POINT, TOGGLE_NEW_DATA} from '../actions';

const initialState = {
  graphData: [{index: 1, data: 12, columnName: 'hello'}, {index: 2, data: 24, columnName: 'hello'}, {index: 3, data: 72, columnName: 'This is only a test'}],
  graphName: 'New Graph',
  newDataToggle: false
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_NEW_POINT:
      console.log(state.graphData)
      return Object.assign({}, state, {graphData: [...state.graphData, {index: state.graphData.length + 1, data: Number(action.data), columnName: action.columnName}]});
    case TOGGLE_NEW_DATA:
      return Object.assign({}, state, {newDataToggle: !state.newDataToggle})
  default:
    return state;
  }
}