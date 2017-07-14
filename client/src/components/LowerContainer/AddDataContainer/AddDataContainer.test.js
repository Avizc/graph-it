import React from 'react';
import {shallow,mount} from 'enzyme';
import {AddDataContainer} from './AddDataContainer.js';
describe('<AddDataContainer />',()=>{
    it('Render without crashing!',()=>{
        shallow(<AddDataContainer />);
    });
});