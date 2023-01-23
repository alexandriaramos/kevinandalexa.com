import {
  createHashRouter,
  RouterProvider,
  Navigate,
} from 'react-router-dom';
import SaveTheDate from './SaveTheDate';

import './App.css';

function App() {
  const router = createHashRouter([
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
