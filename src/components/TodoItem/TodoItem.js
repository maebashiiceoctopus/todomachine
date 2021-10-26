import React from 'react';

const TodoItem = (props) => {
    const {text}=props;
    return (

        <li>
            <span>Cerrar</span>
            <p> {text}</p>
        </li>

    );
}

export  {TodoItem};
