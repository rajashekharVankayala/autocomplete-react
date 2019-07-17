import React, { useState, useEffect } from 'react'
import './searchBar.css'
import Suggestions from './suggestions/suggestions'
import Input from '../UI/Input/Input'

/**
 * This component is Implemented using Function and React Hooks
 * 
 * Functionality: Implemented Autocomplete functionality
 *                and the results will pass to ->
 *                Suggestions component
 */

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

    let inputClasses = ['inputElement'];

     /*
     * searchPost function is filter the data in local store according to the user input
     * then updates the state [setSearchResults]
     */

    let searchPost = (userSearch) => {
        if (!userSearch) return setSearchResults([]);
        let result = props.suggestions.filter(data => data.title.toLowerCase().includes(userSearch));
        result = result.length ? result : [{ title: 'No Data found', id:999 }];
        setSearchResults(result);
    };

    /**
     * searchHandler function helps to update the searchField state
     */

    let searchHandler = (value,touched) => {
        let field = {...searchField};
        setSeachField({
            ...field,
            value,
            touched
        });
    }

    /**
     * searchData functions will execute when user enter the text
     */

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

    /**
     * Excute on Blur action
     * Hides the suggestions and updates the state
     */
    let clearSuggestions = function ({ target: { value } }) {
        let userSearch = value.trimLeft().toLowerCase();
        if(!userSearch) {
            setSearchResults([]);
            searchHandler('', true)
        }
        let hideSuggestion = setTimeout(() => {
            clearTimeout(hideSuggestion)
            let field = {...searchField};
            searchHandler(field.value, false)
            setShowSuggestions(false)
        }, 200)
    }

    return (
        <div id="search-box" data-js="search bar element">
            <form onSubmit={(e) => e.preventDefault()}>
                <div className="autocomplete">
                    <Input 
                        onChange={searchData}
                        className={inputClasses}
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
