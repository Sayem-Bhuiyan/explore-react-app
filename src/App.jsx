import { useState } from "react";
import "./App.css";
import PropTypes from "prop-types";
import Todo from "./Todo";
import Actor from "./Actor";
import BookStore from "./BookStore";
import Friends from "./Friends";
import Posts from "./Posts";

function App() {
  const [count, setCount] = useState(0);
  const names = ["Sayem Bhuiyan", "Fahim Sarker", "Siam Ahmed", "Asif"];

  const books = [
    {id: 1, name: "Physics", price: 220},
    {id: 2, name: "Math", price: 300},
    {id: 3, name: "Bangla", price: 450},
    {id: 4, name: "English", price: 370},
    {id: 5, name: "Biology", price: 250},
  ]

  return (
    <>
      {/* <div></div>
      <h1>Counter: {count}</h1>
      <Friends /> */}
      <Posts />
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
