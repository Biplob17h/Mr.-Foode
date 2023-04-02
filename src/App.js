import { RouterProvider } from 'react-router-dom';
import './App.css';
import Routes from './Routes/Routes';
import './Pages/Shared/Css/Style.css'
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className="mx-5 mt-5">
      <RouterProvider router={Routes}></RouterProvider>
      <Toaster
        position="top-center"
        reverseOrder={false}
      />
    </div>
  );
}

export default App;
