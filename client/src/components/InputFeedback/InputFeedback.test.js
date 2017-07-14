import React from 'react';
import {shallow} from 'enzyme';
import {InputFeedback} from './InputFeedback.js';
describe('<InputFeedback />',()=>{
    it('Render without crashing!',()=>{
        shallow(<InputFeedback />);
    });
});