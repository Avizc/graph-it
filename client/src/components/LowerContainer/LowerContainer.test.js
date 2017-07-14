import React from 'react';
import {shallow,mount} from 'enzyme';
import LowerContainer from './LowerContainer.js';
describe('<LowerContainer />',()=>{
    it('Render without crashing!',()=>{
        shallow(<LowerContainer />);
    });
});