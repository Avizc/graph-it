import React from 'react';
import {shallow,mount} from 'enzyme';
import {ResetGraphButton} from './ResetGraphButton.js';
describe('<ResetGraphButton />',()=>{
    it('Render without crashing!',()=>{
        shallow(<ResetGraphButton />);
    });
});