import React from 'react';
import {shallow} from 'enzyme';
import {App} from './App.js';
describe('<App />',()=>{
    it('Render without crashing',()=>{
        shallow(<App />);
    });
});