import React from 'react';
import {shallow} from 'enzyme';
import {AddPointButton} from './AddDataButton.js';
describe('<AddPointButton />',()=>{
    it('Render without crashing!',()=>{
        shallow(<AddPointButton />);
    });
    it('Renders the adding data button',()=>{
        const callback=jest.fn();
        const wrapper=shallow(<AddPointButton handleClick={callback} />);
        wrapper.find('.dispatch').simulate('click',{
            preventDefault(){}
        });
        expect(callback).toHaveBeenCalled();
    });
});