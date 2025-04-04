import PropTypes from "prop-types";

const Post = ({post}) => {

    const {userId, id, title, body} = post;
    return (
        <div>
            <h4>Title: {title}</h4>
            <div>
                <p><small>UserID: {userId}</small></p>
                <p><small>postID: {id}</small></p>
            </div>
            <p>Descrition: {body}</p>
        </div>
    )
}

Post.propTypes = {
    post: PropTypes.object,
}

export default Post;