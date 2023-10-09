import axios from "axios";
import React from "react";

function TodoItem(props) {
    const deleteTodohanler = (title) => {
        axios.delete(`http://localhost:3000/todo/${title}`).then((res) => {
            console.log(res.data);
        });
    }

    return (
        <div>
            <p>
                
            </p>
        </div>)
         
}