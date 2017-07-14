import React from 'react';
import {shallow,mount} from 'enzyme';
import {GraphContainer} from './GraphContainer.js';
describe('<GraphContainer />',()=>{
    it('Render without crashing!',()=>{
        shallow(<GraphContainer />);
    });
});