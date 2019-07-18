import React from 'react';
import {configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { findByAttr } from '../../../../Utils/index'
import UserDetail from './userDetail'
configure({adapter: new Adapter()})

const post = {
    "userId": 1,
    "id": 1,
    "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
};

const setUp = (props = {post}) => {
    const component = shallow(<UserDetail {...props}/>);
    return component;
}

describe('UserDetail Component', () => {
    let wrapper , component;

    beforeEach(() => {
        component = setUp();
    })

    it('UserDetail Render', () => {
        expect(component).not.toBe(null)
    })

    it('userDetail body Element', () => {
        wrapper = findByAttr(component, 'user-info-body')
        wrapper = component.find('.user-info-body');
        expect(wrapper.children().length).toBe(2)
    })
})

