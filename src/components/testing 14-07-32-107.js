import React, {Component} from 'react'
import {connect} from 'react-redux'
import * as actions from '../store/actions/index'

class Testing extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        this.props.onReqPosts('/posts');
    }

    render(){
        return (
            <ul>
                <li></li>
            </ul>
        )
    }
    
}



const mapStateToProps = state => {
    return {
        posts: state.posts,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onReqPosts: (data) => dispatch(actions.PostsSendRequest(data)),
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Testing)