import PropTypes from "prop-types";

const Actor = ({name}) => {
return (
    <li>{name}</li>
)
}
Actor.propTypes = {
    name: PropTypes.string,
}
export default Actor;