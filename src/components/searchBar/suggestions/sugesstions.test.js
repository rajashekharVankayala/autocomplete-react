import React from 'react';
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Suggestions from './suggestions'
import { findByAttr } from '../../../../Utils/index'

configure({ adapter: new Adapter() })

const posts = [
    {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }, {
        "userId": 1,
        "id": 1,
        "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    }];


const setUp = () => {
    const component = shallow(<Suggestions selectedPost={() => { }} searchResults={posts} />);
    return component;
}

describe('Suggestion Component should render', () => {
    let component, wrapper;

    beforeEach(() => {
        component = setUp();
    });

    it('Suggestion Render', () => {
        expect(component).not.toBe(null)
    })

    it('renders list', () => {
        wrapper = findByAttr(component, 'autocomplete-items')
        expect(wrapper.children().length).toBe(2)
    })

    it('renders list', () => {
        wrapper = findByAttr(component, 'autocomplete-items')
        expect(wrapper.find('li').length).toBe(2)
    })

})
