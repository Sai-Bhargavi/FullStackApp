import './App.css';
import { FormComponent } from "./FormComponent";
import { LoginComponenet } from './LoginComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LoginComponenet />
        <FormComponent />
      </header>
    </div>
  );
}

export default App;
