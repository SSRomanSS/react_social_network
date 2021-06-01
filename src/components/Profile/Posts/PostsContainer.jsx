
import {addPost, updateText} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textAreaData: state.profilePage.textAreaData,

    }
}


const PostsContainer = connect(mapStateToProps, {
    addPost,
    updateText,
})(Posts)
export default PostsContainer;