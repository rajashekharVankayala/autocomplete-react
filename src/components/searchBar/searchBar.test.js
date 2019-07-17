import React from 'react'
import { configure, shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { findByAttr } from '../../../Utils/index'
import SearchBar from './searchBar'
import Suggestions from './suggestions/suggestions'
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


const setUp = (props) => {
    const component = shallow(<SearchBar {...props} />);
    return component;
}

describe('SearchBar Component should render', () => {
    let component, wrapper;

    beforeEach(() => {
        component = setUp();
    });

    it('SearchBar Render', () => {
        wrapper  = setUp();
        expect(wrapper).not.toBe(null)
    })

    it('Suggestions Component should render', () => {
        wrapper  = findByAttr(component, 'search bar element');
        expect(wrapper.find(Suggestions)).toBeDefined()
    })

    it('showSuggestions', () => {
        wrapper  = findByAttr(component, 'search bar element');
        expect(wrapper.find(Suggestions)).toBeDefined()
    })

    it('Input should render', () => {
        wrapper = findByAttr(component, 'search bar element');
        expect(wrapper.find('form').length).toBe(1)
    })
})