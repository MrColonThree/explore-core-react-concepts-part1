import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from "./todo";
import Actor from "./Actor";
import Singers from "./Singer";
import BookStore from "./BookStore";
import Book from "./Book";

function App() {
  const actors = ["Sakib", "Shoriful Raj", "Jasim", "Rubel", "Salman Shah"];

  const singers = [
    { id: 1, name: "Dr. Mahfujur Rahman", age: "68" },
    { id: 2, name: "Eva Rahman", age: "38" },
    { id: 3, name: "Shuvro Dev", age: "58" },
    { id: 4, name: "Pritom", age: "30" },
  ];

  const books = [
    { id: 1, name: "Physics", price: 100 },
    { id: 2, name: "Chemistry", price: 120 },
    { id: 3, name: "Biology", price: 200 },
    { id: 4, name: "Mathematics", price: 150 },
  ];

  return (
    <>
      <h3>Vite + React</h3>
      <BookStore books={books}></BookStore>

      {singers.map((singer) => (
        <Singers singer={singer}></Singers>
      ))}

      <Actor name={"Bappa Raz"}></Actor>
      {actors.map((actor) => (
        <Actor name={actor}></Actor>
      ))}
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={false}></Todo>
      <Todo task="Try JSX" isDone={true}></Todo> */}
      {/* <Device name="Laptop" price="55000"></Device>
      <Device name="Mobile" price="17000"></Device>
      <Device name="Watch" price="5000"></Device>
      <Person></Person>
      <Student grade="7" score="97"></Student>
      <Student grade={12} score="99"></Student>
      <Student></Student>
      <Developer></Developer> */}
    </>
  );
}

function Device(props) {
  console.log(props);
  return (
    <h2>
      This Device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const person = { name: "Sakib", age: 21 };
  return (
    <h3>
      I am a {person.name} with age: {person.age}
    </h3>
  );
}

function Student({ grade = 1, score = 0 }) {
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Class: {grade}</p>
      <p>score: {score}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid green",
    borderRadius: "20px",
  };
  return (
    <div
      style={{
        margin: "20px",
        padding: "20px",
        border: "2px solid green",
        borderRadius: "20px",
      }}
    >
      <h5>Devo devo</h5>
      <p>Coding:</p>
    </div>
  );
}

export default App;
