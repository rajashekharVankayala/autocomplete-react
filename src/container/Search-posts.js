import React, { Component }  from 'react'
import { connect } from 'react-redux'
import * as actions from '../store/actions/index'
import SearchField from '../components/searchBar/searchBar'

/**
 * Search Bar container
 *   On Mount Fetches the data from server and Update the state with the result
 *   Pass data to child component
 */

class SearchPosts extends Component {

    constructor(props){
        super(props);
        this.selectedPost = this.selectedPost.bind(this)
    }

    selectedPost(index){
        this.props.onSetSelectedPost(index)
    }


    componentDidMount(){
        this.props.onGetPosts('/posts');
    }

    render(){
        return (
            <div>
                <SearchField
                    selectedPost = {this.selectedPost}
                     suggestions = {this.props.posts}
                />      
            </div>
        );
    }

}

const mapStateToProps = ({posts: {posts}, ...state}) => {
    return {
        posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onGetPosts: () => dispatch(actions.PostsSendRequest()),
        onSetSelectedPost: (index) => dispatch(actions.setSelectedPost(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchPosts);