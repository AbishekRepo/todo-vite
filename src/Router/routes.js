import HomePage, { AppList } from "../HomePage";
import TodoApp from "../TodoApp";

export default [
    {
        path: '/',
        component: HomePage,
        children: [
            {
                path: '',
                component: AppList
            },
            {
                path: 'todo-app',
                component: TodoApp
            },
        ]
    }
]