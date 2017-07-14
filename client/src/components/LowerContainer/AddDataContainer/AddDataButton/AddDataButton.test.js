import React from 'react';
import {shallow} from 'enzyme';
import AddPointButton from './AddDataButton.js';
describe('<AddPointButton />',()=>{
    it('Render without crashing!',()=>{
        shallow(<AddPointButton />);
    });
});