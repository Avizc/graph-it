import React from 'react';
import {shallow,mount} from 'enzyme';
import UpperContainer from './UpperContainer.js';
describe('<UpperContainer />',()=>{
    it('Render without crashing!',()=>{
        shallow(<UpperContainer />);
    });
});