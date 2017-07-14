import{
    HANDLE_NEW_DATA,
    HANDLE_NEW_GRAPH,
    TOGGLE_NEW_DATA,
    RESET_GRAPH,
    NEW_GRAPH,
    HANDLE_LOADING,
    HANDLE_ERROR,
    SET_GRAPH_TO_STATE,
    HANDLE_SAVED_URL,
    handleNewData,
    handleNewGraph,
    toggleNewData,
    resetGraph,
    newGraph,
    handleLoading,
    handleError,
    setGraphToState,
    handleSavedUrl
} from './index';
import reducer from './index';
describe('Reducer',()=>{
    it('Testing initial state',()=>{
        const state=reducer(undefined);//,{type:'__UNKNOWN'});
        expect(state.graphData).toEqual([]);
        expect(state.graphTitle).toEqual('');
        expect(state.prefix).toEqual('');
        expect(state.suffix).toEqual('');
        expect(state.feedback).toEqual('You have not saved your graph just yet. Click to save button when you\'ve finished the graph.');
        expect(state.url).toEqual(null);
        expect(state.newDataToggle).toEqual(false);
        expect(state.newGraphToggle).toEqual(true);
    });
});