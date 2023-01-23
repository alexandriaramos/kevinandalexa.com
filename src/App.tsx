import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import SaveTheDate from './SaveTheDate';

import './App.css';

function App() {
  const router = createBrowserRouter([
    {
      path: 'save-the-date',
      element: <SaveTheDate />,
    },
    {
      path: '*',
      element: <Navigate to="save-the-date" replace />,
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
