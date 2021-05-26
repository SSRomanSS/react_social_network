
import Post from './Post/Post.jsx'



function Posts() {

    let PostsData = [
        {message: '111111', likes: '12'},
        {message: '222222', likes: '34'},
        {message: '333333', likes: '55'},
        {message: '444444', likes: '44'},
        {message: '555555', likes: '23'},
        {message: '666666', likes: '14'},
    ]
    return (
        <div>
            <h3>My posts</h3>
            <div>
                <div>New post</div>
                <div><textarea></textarea></div>
                <div><button>Add post</button></div>



            </div>
            <div >
                { PostsData.map(el => <Post text={el.message} likes={el.likes}/>) }
            </div>
        </div>
    )
}
            
export default Posts;