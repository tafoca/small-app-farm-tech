import './App.css';
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css'
import TodoView from './compoments/TodoList';

function App() {
 
  
const [todoList, setTodoList] = useState([{}])
const [title, setTitle] = useState('')
const [desc, setDesc] =  useState('')

//read all todos
useEffect(() => {
  axios.get('http://localhost:8000/api/todo')
.then(res => {
    console.log(res.data)
    setTodoList(res.data)
  })
.catch(err => {
    console.log(err)
  })
}, []);

//add todo
const addTodoHandler = () => {
  axios.post('http://localhost:8000/api/todo', {
    'title': title,
    'description': desc
  })
  .then(res => console.log(res))
};
 
  return (
      <div className="App list-group-item justify-content-center
       align-items-center mx-auto" style={{"width":"400p",
       "backgroundColor":"white", "marginTop":"15px"}}>
        <h1 className="card text-white bg-primary mb-1"
        stylename="max-width: 20rem;">Task manager</h1>
         <h6 className="card text-white bg-primary mb-3">
          Farm Tech</h6>
          <div className='card-body'>
            <h5 className="card text-white bg-dark mb-3"> Add Task </h5>
            <span className='card-text'>
              <input type="text" className="mb-2 form-control titleIn" 
              placeholder="Title" 
              onChange={event =>setTitle(event.target.value)} />
              <input type="text" className="mb-2 form-control desIn" 
              placeholder="Description" 
              onChange={event =>setDesc(event.target.value)} />
              <button className='btn btn-outline-primary mx-2 mb-3' 
              onClick={addTodoHandler}
              style={{"borderRaduis":"50px", "fontWeight":"bold"}}>
                Add Task
              </button>
            </span>
            <h5 className="card text-white bg-dark mb-3"> yours Tasks </h5>
            <div>
              {/* Todo items - external component */}
              <TodoView todoList={todoList} />
            </div>
          </div>

          <h6 className="card text-white bg-warning py-1 mb-0"> Copyright 2023, All rights reserved &copy; </h6>



      </div>
  );
}

export default App;
