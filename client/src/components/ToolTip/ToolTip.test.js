import React from 'react';
import {shallow,mount} from 'enzyme';
import {ToolTip} from './ToolTip.js';
describe('<ToolTip />',()=>{
    it('Render without crashing!',()=>{
        shallow(<ToolTip />);
    });
});