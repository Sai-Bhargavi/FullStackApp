import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { FormComponent } from "./FormComponent";
import { LoginComponenet } from './LoginComponent';

function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <LoginComponenet />
    //     {/* <FormComponent /> */}
    //   </header>
    // </div>

    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginComponenet />} />
          <Route path="/home" element={<FormComponent />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
