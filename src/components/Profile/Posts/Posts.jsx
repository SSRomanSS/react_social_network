import React from 'react';
import Post from './Post/Post.jsx'


function Posts(props) {
    let PostsData = props.posts;
    let newPostElement = React.createRef();


    let addPost = () => props.dispatch({
        type: 'ADD-NEW-POST'
    })
    let updateData = () => props.dispatch({
        type: 'UPDATE-TEXT',
        newText: newPostElement.current.value
    })


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