import PropTypes from "prop-types";

const Todo = ({ name, isDone }) => {
  return (
    <div>
        {/* <li>{ isDone ? "Finished" : "Work on"}: {name}</li> */}
        {<li>{name}: {(isDone) && 'Finished'}</li>}
    </div>
  );
};
Todo.propTypes = {
  name: PropTypes.string,
  isDone: PropTypes.bool,
};
export default Todo;
