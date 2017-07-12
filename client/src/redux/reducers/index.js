import {HANDLE_NEW_DATA, TOGGLE_NEW_DATA, RESET_GRAPH, HANDLE_NEW_GRAPH, NEW_GRAPH} from '../actions';

const initialState = {
  graphData: [],
  graphTitle: '',
  prefix: '',
  suffix: '',
  newDataToggle: false,
  newGraphToggle: false
};

export const reducer = (state = initialState, action) => {
  switch(action.type){
    case HANDLE_NEW_GRAPH:
      return Object.assign({}, state, {graphTitle: action.title, prefix: action.prefix, suffix: action.suffix, newGraphToggle: false})
    case NEW_GRAPH:
      return Object.assign({}, initialState)
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