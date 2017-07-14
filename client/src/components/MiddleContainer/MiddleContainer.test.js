import React from 'react';
import {shallow,mount} from 'enzyme';
import MiddleContainer from './MiddleContainer.js';
describe('<MiddleContainer />',()=>{
    it('Render without crashing!',()=>{
        shallow(<MiddleContainer />);
    });
});