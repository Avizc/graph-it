import {HANDLE_NEW_DATA, TOGGLE_NEW_DATA, RESET_GRAPH} from '../actions';

const initialState = {
  graphData: [],
  graphName: 'New Graph',
  newDataToggle: false,
  newGraphToggle: true
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_NEW_DATA:
      return Object.assign({}, state, {graphData: [...state.graphData, {index: state.graphData.length + 1, data: Number(action.data), columnName: action.columnName}]});
    case TOGGLE_NEW_DATA:
      return Object.assign({}, state, {newDataToggle: !state.newDataToggle})
    case RESET_GRAPH:
      return Object.assign({}, state, initialState)
  default:
    return state;
  }
}