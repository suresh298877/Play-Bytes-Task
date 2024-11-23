import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from './login/login';
import Questions from './Questions/Questions';
import { Provider } from 'react-redux';
import store from './store/store';
import DiscussQuestion from './Questions/DiscussQuestion';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/questions",
    element: <Questions />
  },
  {
    path: "/discuss-question/:id",
    element: <DiscussQuestion />
  }
]);
createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </Provider>
)