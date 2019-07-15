import React from 'react'
import logo from '../../assests/svg/logo.svg'
import './header.css'
import SearchPosts from '../../container/Search-posts'
export default function header(){
    return (
        <header>
        <div id="logo">
            <img src={logo} />
        </div>
        <div id="info">
            <SearchPosts/>
        </div>
    </header>
    )
}