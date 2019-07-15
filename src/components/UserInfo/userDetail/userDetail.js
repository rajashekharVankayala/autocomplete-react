import React, { Fragment } from 'react';
import './userDetail.css'

export default function userDetails({post: {id, title, body}}){
    return (
        <Fragment>
             <div className="userInfo--id">
                    <div className="user--idText">{id}</div>
                </div>
            
                <div className="userInfo--title">
                    <div className="user--title">Title:</div>
                    <div className="user--titleText">{title}</div>
                </div>
                <div className="userInfo--body">
                    <div className="user--body">Body:</div>
                    <div className="user--bodyText">{body}</div>
                </div>
        </Fragment>
    );
}