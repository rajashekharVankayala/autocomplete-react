import React, { Component }  from 'react'
import { connect } from 'react-redux'
import * as actions from '../actions/index'
import SearchField from '../components/searchBar/searchBar'
import SelectedDataDetails from '../components/UserInfo/UserInfo'
/**
 * Search Bar container
 *   On Mount Fetches the data from server and Update the state with the result
 *   Pass data to child component
 */

class SearchPosts extends Component {

    constructor(props){
        super(props);
        this.selectedPost = this.selectedPost.bind(this);
        this.hideSearchDetails = this.hideSearchDetails.bind(this) 
        this.state = {
            showSearchBar: true
        };
    }

    selectedPost(index){
        if(index !== 999) {
            this.setState({...this.state, showSearchBar: false })
            this.props.onSetSelectedPost(index)
        } 
    }

    hideSearchDetails(){
        this.setState({...this.state, showSearchBar: true })
    }

    componentDidMount(){
        this.props.onGetPosts('/posts');
    }

    render(){
        const { showSearchBar } = {...this.state};
        let displayComponent;
        if(showSearchBar){
            displayComponent = ( 
                <SearchField
                    selectedPost = {this.selectedPost}
                    suggestions = {this.props.posts} />
                 );
        } else {
            displayComponent = (
                        <SelectedDataDetails
                         hideDetails={this.hideSearchDetails} /> );
        }

        return (
            <div>
               { displayComponent }
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