import React from 'react'
import List from '../components/List';
import Form from '../components/Form';
import { useTodoAppContext, TodoAppProvider } from './todoContext/TodoContext';

const Todo = () => {
    const { form, setForm, list, handleSubmit, close } = useTodoAppContext();

    return (
        <div>
            <div className="container">
                <Form setForm={setForm} form={form} handleSubmit={handleSubmit} />
            </div>
            <div className="list-elements">
                {list.map((item, index) => {
                    return <List key={index} list={item} close={close} />;
                })}
            </div>
        </div>
    )
}

const TodoApp = () => {
    return (
        <TodoAppProvider>
            <Todo />
        </TodoAppProvider>
    )
}

export default TodoApp