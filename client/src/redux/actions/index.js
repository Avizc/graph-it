export const HANDLE_NEW_POINT = 'HANDLE_NEW_POINT';
export const handleNewPoint = (index, y, columnName) => ({
  type: HANDLE_NEW_POINT,
  index,
  y,
  columnName
});

export const TOGGLE_NEW_DATA = 'TOGGLE_NEW_DATA';
export const toggleNewData = () => ({
  type: TOGGLE_NEW_DATA
});