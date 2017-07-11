export const HANDLE_NEW_POINT = 'HANDLE_NEW_POINT';
export const handleNewPoint = (data, columnName) => ({
  type: HANDLE_NEW_POINT,
  data,
  columnName
});

export const TOGGLE_NEW_DATA = 'TOGGLE_NEW_DATA';
export const toggleNewData = () => ({
  type: TOGGLE_NEW_DATA
});

export const RESET_GRAPH = 'RESET_GRAPH';
export const resetGraph = () => ({
  type: RESET_GRAPH
});