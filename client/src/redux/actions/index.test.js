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
} from './index'
describe('handleNewData',()=>{
    it('Should return an action!',()=>{
        const data=undefined;
        const columnName=undefined;
        const action=handleNewData();
        expect(action.type).toEqual(HANDLE_NEW_DATA);
        expect(action.data).toEqual(data);
        expect(action.columnName).toEqual(columnName);
    })
})
describe('handleNewGraph',()=>{
    it('Should return an action!',()=>{
        const title=undefined;
        const prefix=undefined;
        const suffix=undefined;
        const action=handleNewGraph();
        expect(action.type).toEqual(HANDLE_NEW_GRAPH);
        expect(action.title).toEqual(title);
        expect(action.prefix).toEqual(prefix);
        expect(action.suffix).toEqual(suffix);
    })
})
describe('toggleNewData',()=>{
    it('Should return an action!',()=>{
        const action=toggleNewData();
        expect(action.type).toEqual(TOGGLE_NEW_DATA);
    })
})
describe('resetGraph',()=>{
    it('Should return an action!',()=>{
        const action=resetGraph();
        expect(action.type).toEqual(RESET_GRAPH);
    })
})
describe('newGraph',()=>{
    it('Should return an action!',()=>{
        const action=newGraph();
        expect(action.type).toEqual(NEW_GRAPH);
    })
})
describe('handleLoading',()=>{
    it('Should return an action!',()=>{
        const action=handleLoading();
        expect(action.type).toEqual(HANDLE_LOADING);
    })
})
describe('handleError',()=>{
    it('Should return an action!',()=>{
        const error=undefined;
        const action=handleError();
        expect(action.type).toEqual(HANDLE_ERROR);
        expect(action.error).toEqual(error);
    })
})
describe('setGraphToState',()=>{
    it('Should return an action!',()=>{
        //const graphData=; CURRENTLY BROKE FIX IT LATER
        const graphTitle='Alice in Wonderland';
        const prefix='$';
        const suffix='k';
        const action=setGraphToState();
        expect(action.type).toEqual(SET_GRAPH_TO_STATE);
        //expect(action.graphData).toEqual(graphData); FIX THIS
        expect(action.graphTitle).toEqual(graphTitle);
        expect(action.prefix).toEqual(prefix);
        expect(action.suffix).toEqual(suffix);
    })
})
describe('handleSavedUrl',()=>{
    it('Should return an action!',()=>{
        const url=undefined;
        const action=handleSavedUrl();
        expect(action.type).toEqual(HANDLE_SAVED_URL);
        expect(action.url).toEqual(url);
    })
})