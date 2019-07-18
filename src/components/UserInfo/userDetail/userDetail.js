import React, { Fragment } from 'react';
import './userDetail.css'

export default function userDetails({post: {id, title, body}}){
    return (
        <Fragment>
             <div className="user-info-id">
                    <div className="user-idText">{id}</div>
                </div>
            
                <div className="user-info-title">
                    <div className="user-title">Title:</div>
                    <div className="user-titleText">{title}</div>
                </div>
                <div className="user-info-body" data-js="user-info-body">
                    <div className="user-body">Body:</div>
                    <div className="user-bodyText">{body}</div>
                </div>
        </Fragment>
    );
}