import React from 'react';
import {shallow,mount} from 'enzyme';
import {SaveButton} from './SaveButton.js';
describe('<SaveButton />',()=>{
    it('Render without crashing!',()=>{
        shallow(<SaveButton />);
    });
});