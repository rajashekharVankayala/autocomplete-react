import  * as actionTypes from '../actions/actionTypes'

const initialState = {
    posts: [],
    selectedPost: ''
};
const reducer = (state = initialState, action) => {
    switch(action.type){
        case actionTypes.SET_POSTS: 
            return {
                ...state,
                posts: [...action.posts]
            }
        case actionTypes.SELECTED_POST:
            const findIndex = action.postIndex ? action.postIndex-1 : action.postIndex
            const post = {...state.posts}[findIndex];
            return {
                ...state,
                selectedPost: post
            }
        case actionTypes.EDIT_POST:
            let findObjIndex = Number(action.userObj.id)-1;
            findObjIndex = findObjIndex ? findObjIndex-1 : findObjIndex;
            const posts = [...state.posts] 
            const postUpdate = posts[findObjIndex];
            const UpdateState = {...postUpdate,...action.userObj};
            posts[findObjIndex] = UpdateState
            return {
                ...state,
                posts
            }
        default:
            return state;
     }
};

export default reducer