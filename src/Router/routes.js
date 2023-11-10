import HomePage, { AppList } from "../HomePage";
import TodoApp from "../TodoApp";
import Ratings from "../Ratings/Ratings";

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
    ],
  },
];
