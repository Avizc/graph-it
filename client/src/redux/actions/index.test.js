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
} from './actions'
describe('handleNewData',()=>{
    it('Should return an action!',()=>{
        const action=handleNewData();
    })
})
describe('handleNewGraph',()=>{
    it('Should return an action!',()=>{
        const action=handleNewGraph();
    })
})
describe('toggleNewData',()=>{
    it('Should return an action!',()=>{
        const action=toggleNewData();
    })
})
describe('resetGraph',()=>{
    it('Should return an action!',()=>{
        const action=resetGraph();
    })
})
describe('newGraph',()=>{
    it('Should return an action!',()=>{
        const action=newGraph();
    })
})
describe('handleLoading',()=>{
    it('Should return an action!',()=>{
        const action=handleLoading();
    })
})
describe('handleError',()=>{
    it('Should return an action!',()=>{
        const action=handleError();
    })
})
describe('setGraphToState',()=>{
    it('Should return an action!',()=>{
        const action=setGraphToState();
    })
})
describe('handleSavedUrl',()=>{
    it('Should return an action!',()=>{
        const action=handleSavedUrl();
    })
})