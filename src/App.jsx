import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import RootLayout from './pages/Root';
import ProjectInfo from './components/ProjectInfo';
import AddProject from './components/AddProject';
import NoProject from './components/NoProject';
import ErrorPage from './pages/Error';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '',
        element: <NoProject />
      },
      {
        path: ':projectId',
        element: <ProjectInfo />
      },
      {
        path: 'new',
        element: <AddProject />
      }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
