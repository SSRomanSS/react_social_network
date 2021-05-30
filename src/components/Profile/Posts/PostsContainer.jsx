import React from 'react';

import {addPostAction, updateTextAction} from "../../../redux/profileReducer";
import Posts from "./Posts";


function PostsContainer(props) {
    let state = props.store.getState();

    let addPost = () => props.store.dispatch(addPostAction());
    let updateData = (text) => props.store.dispatch(updateTextAction(text));


    return (
        <Posts addPost={addPost}
               updateData={updateData}
               posts={state.profilePage.posts}
               textAreaData={state.profilePage.textAreaData}/>
    )
}

export default PostsContainer;