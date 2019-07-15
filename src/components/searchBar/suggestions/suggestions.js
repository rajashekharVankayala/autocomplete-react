import React from 'react'
import './suggestions.css'

export default function suggestions({searchResults,selectedPost}){

    let showResults = searchResults.length;

    let iterateResults = (
        <ul className="autocomplete-items">
        {  
            searchResults.map((list, index) => (
                <li key={list.id} onClick={()=>selectedPost(Number(list.id))}>
                   { list.title }
                </li>
            ))
        }
       </ul>
    )

    return showResults ? iterateResults : null
}