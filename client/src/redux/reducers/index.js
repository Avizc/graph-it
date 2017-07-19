import {HANDLE_NEW_DATA, TOGGLE_NEW_DATA, RESET_BAR_GRAPH, HANDLE_NEW_GRAPH, 
  NEW_GRAPH, HANDLE_SAVE, HANDLE_ERROR, SET_GRAPH_TO_STATE, HANDLE_SAVED_URL, 
  HANDLE_GRAPH_TYPE_CHANGE, RESET_LINE_GRAPH, HANDLE_NEW_LINE_DATA, SET_LINE_DATA} from '../actions';

const initialState = {
  graphData: [],
  tempGraphData: [],
  graphTitle: '',
  prefix: '',
  suffix: '',
  feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
  url: null,
  newDataToggle: false,
  newGraphToggle: true,
  linkView: false,
  graphType: 'BAR'
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
    case RESET_BAR_GRAPH:
      return Object.assign({}, state, initialState, {prefix: state.prefix, suffix: state.suffix, graphTitle: state.graphTitle})
    case RESET_LINE_GRAPH:
      return Object.assign({}. state, initialState, {graphType: 'LINE', graphTitle: state.graphTitle})
    case HANDLE_ERROR:
      return Object.assign({}, state, {feedback: action.error})
    case SET_GRAPH_TO_STATE:
      return Object.assign({}, state, {graphData: action.graphData, graphTitle: action.graphTitle, prefix: action.prefix, suffix: action.suffix, newGraphToggle: false, linkView: true});
    case HANDLE_SAVED_URL:
      return Object.assign({}, state, {feedback: `Your graph has been saved! Click this link to view it.`, url: action.url})
    case HANDLE_GRAPH_TYPE_CHANGE:
      return Object.assign({}, state, {graphType: action.graphType})
    case HANDLE_NEW_LINE_DATA:
      return Object.assign({}, state, {tempGraphData: [...state.tempGraphData, {x: state.tempGraphData.length + 1, y: action.y}]})
    case SET_LINE_DATA:
      return Object.assign({}, state, {graphData: [...state.tempGraphData], tempGraphData: []});
    default:
      return state;
  }
}