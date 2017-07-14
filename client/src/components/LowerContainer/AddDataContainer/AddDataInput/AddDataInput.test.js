import React from 'react';
import {shallow,mount} from 'enzyme';
import {AddDataInput} from './AddDataInput.js';
describe('<AddDataInput />',()=>{
    it('Render without crashing!',()=>{
        shallow(<AddDataInput />);
    });
    // it('Should handle on submit when the form is submitted',()=>{
    //     const callback=jest.fn();
    //     const wrapper=mount(<AddDataInput handleSubmit={callback}/>);
    //     const data=3;
    //     const columnName='Tea';
    //     wrapper.find('input[type="text"]').node.data=data;
    //     wrapper.find('input["type=text"]').node.columnName=columnName;
    //     wrapper.simulate('submit');
    //     expect(callback).toHaveBeenCalledWith(data.toString());
    //     expect(callback).toHaveBeenCalledWith(columnName);
    // });
});