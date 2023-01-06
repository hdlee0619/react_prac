import React, { useState } from "react";

function App() {
   const [toDo, setToDo] = useState("");
   const [toDos, setToDos] = useState([]);
   const onChange = (event) => setToDo(event.target.value);
   const onSubmit = (event) => {
      event.preventDefault();
      if (toDo === "") {
         return;
      }
      setToDo(""); // state 함수에 값을 보낼 수 있음
      setToDos((currentArray) => [toDo, ...currentArray]); // state 함수에 함수를 보낼 수 있음
   };

   return (
      <div>
         <form onSubmit={onSubmit}>
            <h1>My To Dos : count ({toDos.length})</h1>
            <input
               value={toDo}
               onChange={onChange}
               type="text"
               placeholder="Write your to do.."
            ></input>
            <button>Add To Do</button>
         </form>
         <hr />
         <ul>
            {toDos.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   );
}

export default App;
