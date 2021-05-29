import React from 'react';
import Post from './Post/Post.jsx'


function Posts(props) {
    let PostsData = props.posts;
    let newPostElement = React.createRef();



    let addPost = () => props.addPost(newPostElement.current.value)
    let updateData = () => props.updateData(newPostElement.current.value)


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