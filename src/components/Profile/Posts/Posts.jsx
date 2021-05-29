import React from 'react';
import Post from './Post/Post.jsx'
import {addPostAction, updateTextAction} from "../../../state";


function Posts(props) {
    let PostsData = props.posts;
    let newPostElement = React.createRef();


    let addPost = () => props.dispatch(addPostAction())
    let updateData = () => props.dispatch(updateTextAction(newPostElement.current.value))


    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>New post</div>
                <div>
                    <textarea onChange={updateData} ref={newPostElement} value={props.textAreaData}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div>
                {PostsData.map(el => <Post text={el.message} likes={el.likes}/>)}
            </div>
        </div>
    )
}

export default Posts;