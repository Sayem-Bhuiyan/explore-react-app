import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Todo from "./Todo";
import Actor from "./Actor";

function App() {
  const [count, setCount] = useState(0);
  const names = ["Sayem Bhuiyan", "Fahim Sarker", "Siam Ahmed", "Asif"];

  return (
    <>
      <div></div>
      <h1>Counter: {count}</h1>
      <div className="card">
        <button
          style={{
            marginRight: "12px",
            backgroundColor: "yellow",
            color: "black",
          }}
          onClick={() => {
            setCount(() => count + 1);
          }}
        >
          Add
        </button>
        <button
          style={{
            backgroundColor: "white",
            color: "black",
          }}
          onClick={() => {
            if (count < 1) {
              alert("Conter can not be lower than 0");
            } else {
              setCount(() => count - 1);
            }
          }}
        >
          Minus
        </button>
        {/* <Person />
        <Student name="Sayem Bhuiyan" age="22 Years" />
        <Student name="Somaia Aketr" age="22 Years" />
        <Device name="Laptop" /> */}
        <Todo name="Learn MERN" isDone={true} />
        <Todo name="Learn WP and Kajabi" isDone={false} />
        <Todo name="Sharpe your coding skill" isDone={true} />
      </div>
      <ul
        style={{
          textAlign: "left",
        }}
      >
        {names.map((name) => (
          <Actor key={name} name={name} />
        ))}
      </ul>
    </>
  );
}

function Person() {
  return (
    <>
      <h2>My name is Sayem</h2>
    </>
  );
}

const Student = ({ name, age }) => {
  return (
    <div className="student">
      <h2>This is a Student</h2>
      <p>Name: {name}</p>
      <p>Age: {age}</p>
    </div>
  );
};

function Device(props) {
  return (
    <div>
      <h2>Device Name: {props.name}</h2>
    </div>
  );
}

Device.propTypes = {
  name: PropTypes.string,
};
Student.propTypes = {
  name: PropTypes.string,
  age: PropTypes.string,
};

// App.propTypes = {
//   name: PropTypes.string,
// }

export default App;
