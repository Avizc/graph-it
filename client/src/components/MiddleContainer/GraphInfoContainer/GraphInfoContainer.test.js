import React from 'react';
import {shallow,mount} from 'enzyme';
import GraphInfoContainer from './GraphInfoContainer.js';
describe('<GraphInfoContainer />',()=>{
    it('Render without crashing!',()=>{
        shallow(<GraphInfoContainer />);
    });
});