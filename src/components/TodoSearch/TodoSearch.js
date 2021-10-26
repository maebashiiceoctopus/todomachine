import React from 'react';
import './styles.scss';

const TodoSearch = () => {
    return (
        <section className="todo-search__container">
            <input className="todo-search__input" type="text" placeholder="Buscar en TODO" />
        </section>
    );
}

export  {TodoSearch};
