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
                <span style={{fontWeight: 'bold, underline'}}>
                    {props.title} :
                </span> {props.description}
                <button className="btn btn-outline-danger my-2 mx-2"
                style={{"borderRaduis":"50px", "font-weight":"bold"}}
                 onClick={() => deleteTodohanler(props.title)}>X</button>
                 <hr></hr>

            </p>
        </div>
        )
         
}
export default  TodoItem
