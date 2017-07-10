export const HANDLE_NEW_POINT = 'HANDLE_NEW_POINT';
export const handleNewPoint = (x, y, columnName) => ({
  type: HANDLE_NEW_POINT,
  x,
  y,
  columnName
})