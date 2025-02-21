import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import StudentList from './components/StudentList';
import AddStudent from './components/AddStudent';
import UpdateStudent from './components/UpdateStudent';

const myRouter = createBrowserRouter([
  { 
    path: '/', 
    element: <Dashboard />,  // ✅ Fixed syntax for route elements
    children: [
      { path: '', element: <StudentList /> },   // ✅ Default route
      { path: 'addstudent', element: <AddStudent /> },  // ✅ Corrected `element`
      { path: 'studentlist', element: <StudentList /> },  // ✅ Matches UpdateStudent's navigate path
      { path: 'updatestudent', element: <UpdateStudent /> }  // ✅ Fixed typo in path
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={myRouter} />
  );
}

export default App;
