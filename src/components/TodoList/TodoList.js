import React from 'react';
import "./styles.scss";

const TodoList = (props) => {
    return (
     <>
             <ul className="todo-list">
                {props.children}
            </ul>
        </>
       
    );
}

export  {TodoList};
