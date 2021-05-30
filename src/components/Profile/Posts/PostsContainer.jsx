
import {addPostAction, updateTextAction} from "../../../redux/profileReducer";
import Posts from "./Posts";
import {connect} from "react-redux";


const mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        textAreaData: state.profilePage.textAreaData,

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => dispatch(addPostAction()),
        updateData: (text) => dispatch(updateTextAction(text)),
    }


}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)
export default PostsContainer;