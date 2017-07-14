import React from 'react';
import {shallow,mount} from 'enzyme';
import CreateGraph from './CreateGraph.js';
describe('<CreateGraph />',()=>{
    it('Render without crashing!',()=>{
        shallow(<CreateGraph />);
    });
});