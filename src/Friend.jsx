import "./Friends.css"
import PropTypes from "prop-types";

const Friend = ({friend}) => {
    const {name, email} = friend
    return (
        <div className="box">
            <h4>Name: {name}</h4>
            <p>Email: {email}</p>
        </div>
    )
}
Friend.propTypes = {
    friend: PropTypes.object,
}

export default Friend;