import React from "react";
import logo from './logo.svg';
import './App.css';
import Users from "./Users";

/**
  Challenge: Display all users to the browser
**/

const users = [
  { name: "John Doe", id: 1 },
  { name: "Jane Doe", id: 2 },
  { name: "Billy Doe", id: 3 }
];


// comment this out after completion and uncomment code below it to proceed
function Child() {
  return <div>This is children content</div>;
}
/**
  Challenge: Uncomment this code to complete quiz

function Child() {
  return (
    <>
      <div>Child</div>
      <button>Change Parent Value</button>
    </>
  );
}

function Parent() {
  const [value, setValue] = React.useState(
    "I need to be updated from my child"
  );

  return (
    <>
      <h3>Update Parent State Challenge (Using Callback)</h3>
      <div className="wrapper">
        <div>Parent</div>
        <div className="box-wrapper">{value}</div>
      </div>

      <div className="wrapper">
        <Child />
      </div>
    </>
  );
}
Uncomment this to tackle quiz
**/

// Comment out after completion
function Parent() {
  return (
    <div>
      <h3>Parent Component</h3>
    </div>
  );
}
// Comment above code after completion

function App() {

  
  const myList = users.map((user)=>{
    return( <Users key = {user.id} name={user.name}/>
      )
  })
  

  const [] = React.useState(true);
  return (
    
    <>
    <h1>JSX is cool</h1>
    
    <img src="https://media.istockphoto.com/photos/portrait-of-religious-middle-eastern-young-man-praying-on-yellow-picture-id1387120959?b=1&k=20&m=1387120959&s=170667a&w=0&h=ezuPAONEabLN3vSmWgOEOobwlniFZQEcMs03NkwbKyA=" className="App-logo" alt="logo" />
      <h3>User names  {myList}</h3>
      <ul></ul>
      <button>Hide Element Below</button>

      <div>Toggle Challenge</div>
      <Parent>
      <Child />
     
    </Parent>
    </>
  );
}

export default App;
