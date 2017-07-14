import React from 'react';
import {shallow,mount} from 'enzyme';
import {NewGraphButton} from './NewGraphButton.js';
describe('<NewGraphButton />',()=>{
    it('Render without crashing!',()=>{
        shallow(<NewGraphButton />);
    });
});