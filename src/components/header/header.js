import React from 'react'
import logo from '../../assests/svg/logo.svg'
import './header.css'
import SearchPosts from '../../container/Search-posts'

/**
 * This component is displays logo
 */
export default function header(){
    return (
        <header data-js="header-component">
            <div id="logo">
                <img data-js="logo-img" src={logo} alt="logo" />
            </div>
    </header>
    )
}