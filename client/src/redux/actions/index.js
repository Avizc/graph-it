export const HANDLE_NEW_DATA = 'HANDLE_NEW_DATA';
export const handleNewData = (data, columnName) => ({
  type: HANDLE_NEW_DATA,
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

