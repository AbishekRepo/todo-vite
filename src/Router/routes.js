import HomePage, { AppList } from "../HomePage";
import TodoApp from "../Apps/TodoApp";
import Ratings from "../Apps/Ratings/Ratings";
import TextExpander from "../Apps/TextExpander/TextExpander";

export default [
  {
    path: "/",
    component: HomePage,
    children: [
      {
        path: "",
        component: AppList,
      },
      {
        path: "todo-app",
        component: TodoApp,
      },
      {
        path: "ratings-app",
        component: Ratings,
      },
      {
        path: "Text-Expander",
        component: TextExpander,
      },
    ],
  },
];
