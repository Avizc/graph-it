export const HANDLE_NEW_POINT = 'HANDLE_NEW_POINT';
export const handleNewPoint = (index, y, columnName) => ({
  type: HANDLE_NEW_POINT,
  index,
  y,
  columnName
})