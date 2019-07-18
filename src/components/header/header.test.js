import React from 'react';
import {configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Header from './header'
import logo from '../../assests/svg/logo.svg'
import { findByAttr } from '../../../Utils/index'
import SearchPosts from '../../container/Search-posts'

configure({adapter: new Adapter()})

const setUp = (props = {}) => {
    const component = shallow(<Header {...props}/>);
    return component;
}

describe('Header Component', () => {
    let wrapper , component;

    beforeEach(() => {
        component = setUp();
    })

    it('Header Render', () => {
        expect(component).not.toBe(null)
    })

    it('HEADER should render', () => {
        wrapper = findByAttr(component,'header-component')
        expect(wrapper.length).toBe(1)
    });

    it('HEADER component children', () => {
        wrapper = findByAttr(component,'header-component')
        expect(wrapper.find('header').children().length).toBe(1)
    });

    it('Image should render', () => {
        wrapper = component.find('img').prop('src');
        expect(wrapper).toEqual(logo)
    });

})

