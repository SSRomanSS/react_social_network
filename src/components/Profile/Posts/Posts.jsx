import React from 'react';
import Post from './Post/Post.jsx'



function Posts(props) {

    let postsData = props.posts;
    let postsList = postsData.map(el => <Post text={el.message} likes={el.likes}/>)
    let newPostElement = React.createRef();


    let addPost = () => {
        props.addPost()
    }

    let updateData = () => {
        let text = newPostElement.current.value
        props.updateData(text)
    }


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
                {postsList}
            </div>
        </div>
    )
}

export default Posts;