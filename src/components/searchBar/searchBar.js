import React, { useState, useEffect } from 'react'
import './searchBar.css'
import Suggestions from './suggestions/suggestions'
import Input from '../UI/Input/Input'
import BackDrop from '../UI/Backdrop/Backdrop'

export default function SearchBar(props) {

    let field = {
        elementConfig: {
            type: "text",
            placeholder: 'search posts'
        },
        value: '',
        touched: false
    }
    
    const [searchField, setSeachField] = useState(field)
    const [searchResults, setSearchResults] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);
    useEffect(() => { }, [props.suggestions]);

    let inputClasses = [''];

    let searchPost = (userSearch) => {
        if (!userSearch) return setSearchResults([]);
        let result = props.suggestions.filter(data => data.title.toLowerCase().includes(userSearch));
        result = result.length ? result : [{ title: 'No Data found', id:Math.random() }];
        setSearchResults(result);
    };

    let searchHandler = (value,touched) => {
        let field = {...searchField};
        setSeachField({
            ...field,
            value,
            touched
        });
    }

    let searchData = ({ target: { value } }) => {
        let userSearch = value.trimLeft().toLowerCase();
        if (!userSearch) {
            searchHandler('', true)
            return searchPost('');
        }
        searchHandler(userSearch, true)
        searchPost(userSearch);
        setShowSuggestions(true);
    }


    let clearSuggestions = function ({ target: { value } }) {
        let userSearch = value.trimLeft().toLowerCase();
        if(!userSearch) {
            setSearchResults([]);
            searchHandler('', true)
        }
        let hideSuggestion = setTimeout(() => {
            clearTimeout(hideSuggestion)
            searchHandler('', false)
            setShowSuggestions(false)
        }, 200)
    }

    return (
        <div id="search-box" data-info="search bar element">
            {/* <BackDrop show={true}/> */}
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="autocomplete">
                    <Input 
                        onChange={searchData}
                        className={[]}
                        onBlur={clearSuggestions}
                        elementConfig = {searchField.elementConfig}
                        value={searchField.value}
                    />
                </div>
                {
                    showSuggestions ? (
                        <Suggestions selectedPost={props.selectedPost} searchResults={searchResults}/>
                     ) : null
                }
                
            </form>
        </div>
    );
}
