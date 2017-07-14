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
} from '../actions/index.js';
import {reducer} from './index.js';
describe('Reducer',()=>{
    it('Testing initial state',()=>{
        const state=reducer(undefined,{type:'__UNKNOWN'});
        expect(state.graphData).toEqual([]);
        expect(state.graphTitle).toEqual('');
        expect(state.prefix).toEqual('');
        expect(state.suffix).toEqual('');
        expect(state.feedback).toEqual('You have not saved your graph just yet. Click to save button when you\'ve finished the graph.');
        expect(state.url).toEqual(null);
        expect(state.newDataToggle).toEqual(false);
        expect(state.newGraphToggle).toEqual(true);
    });
    //HANDLE_NEW_GRAPH
    it('Should handle a new graph on handleNewGraph()',()=>{
        let testState={
            graphData: [{index:3,data:5,columnName:'Tea'}],
            graphTitle: 'Alice in Wonderland',
            prefix: '$',
            suffix: 'k',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            newDataToggle: true,
            newGraphToggle: false,
            linkView: false
        };
        const state=reducer(testState,handleNewGraph(testState.graphTitle,testState.suffix,testState.prefix));
        expect(state.graphTitle).toEqual('Alice in Wonderland');
        expect(state.prefix).toEqual('$');
        expect(state.suffix).toEqual('k');
        expect(state.newGraphToggle).toEqual(false);
    });
    //NEW_GRAPH
    it('Should reset state to a new graph',()=>{
        let testState={
            graphData: [],
            graphTitle: '',
            prefix: '',
            suffix: '',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            //newDataToggle: true,
            //newGraphToggle: false,
            //linkView: false
        };
        const state=reducer(testState,newGraph());
        expect(state.graphData).toEqual([]);
        expect(state.graphTitle).toEqual('');
        expect(state.prefix).toEqual('');
        expect(state.suffix).toEqual('');
        expect(state.feedback).toEqual("You have not saved your graph just yet. Click to save button when you've finished the graph.");
        expect(state.url).toEqual(null);
        //expect(newDataToggle).toEqual(true);
        //expect(newGraphToggle).toEqual(false);
        //expect(linkView).toEqual(false);
    });
    //HANDLE_NEW_DATA
    it('Should take in new data',()=>{
        let testState={
            graphData: [],
            graphTitle: 'Alice in Wonderland',
            prefix: 'A',
            suffix: 'Z',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            //newDataToggle: true,
            //newGraphToggle: false,
            //linkView: false
        };
        const state=reducer(testState,handleNewData(testState.graphTitle,testState.suffix,testState.prefix));
        expect(state.graphTitle).toEqual('Alice in Wonderland');
        expect(state.prefix).toEqual('A');
        expect(state.suffix).toEqual('Z');
    });
    //TOGGLE_NEW_DATA
    it('Should toggle new data',()=>{
        let testState={
            graphData: [],
            graphTitle: '',
            prefix: '',
            suffix: '',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            newDataToggle: false,
            //newGraphToggle: false,
            //linkView: false
        };
        const state=reducer(testState,toggleNewData());
        expect(state.newDataToggle).toEqual(true);
    });
    //RESET_GRAPH
    it('Reset graph to initial state',()=>{
        let testState={
            graphData: [],
            graphTitle: '',
            prefix: '',
            suffix: '',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            //newDataToggle: true,
            newGraphToggle: false,
            //linkView: false
        };
        const state=reducer(testState,resetGraph());
        expect(state.graphData).toEqual([]);
        expect(state.graphTitle).toEqual('');
        expect(state.prefix).toEqual('');
        expect(state.suffix).toEqual('');
        expect(state.feedback).toEqual("You have not saved your graph just yet. Click to save button when you've finished the graph.");
        expect(state.newGraphToggle).toEqual(false);
    });
    //HANDLE_ERROR
    it('If error return feedback',()=>{
        let testState={
            graphData: [],
            graphTitle: '',
            prefix: '',
            suffix: '',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            //newDataToggle: true,
            //newGraphToggle: false,
            //linkView: false
        };
        const state=reducer(testState,handleError(testState.error)); // Figure out what error is
        expect(state.feedback).toEqual(undefined);
    });
    //SET_GRAPH_TO_STATE
    it('Set the graph to state to save it',()=>{
        let testState={
            graphData: [],
            graphTitle: 'Alice in Wonderland',
            prefix: '$',
            suffix: 'k',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            //newDataToggle: true,
            //newGraphToggle: false,
            //linkView: false
        };
        const state=reducer(testState,setGraphToState(testState.graphData,testState.graphTitle,testState.prefix,testState.suffix));
        expect(state.graphData).toEqual(undefined);
        expect(state.graphTitle).toEqual(undefined);
        expect(state.prefix).toEqual(undefined);
        expect(state.suffix).toEqual(undefined);
    });
    //HANDLE_SAVED_URL
    it('',()=>{
        let testState={
            graphData: [],
            graphTitle: '',
            prefix: '',
            suffix: '',
            feedback: "You have not saved your graph just yet. Click to save button when you've finished the graph.",
            url: null,
            //newDataToggle: true,
            //newGraphToggle: false,
            //linkView: false
        };
        const state=reducer(testState,handleSavedUrl(testState.url));
        expect(state.url).toEqual(null);
    });
});