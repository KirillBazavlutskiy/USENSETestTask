import {useState} from "react";
import './App.css'
import PasswordField from "./components/PasswordField/PasswordField.tsx";
import PasswordChecker from "./components/PasswordChecker/PasswordChecker.tsx";

function App() {

  const [ password, setPassword ] = useState<string>("");

  return (
    <div className='container'>
        <div className='inner'>
            <PasswordField password={password} setPassword={setPassword} placeholder={'Enter the password'} />
            <PasswordChecker password={password} />
        </div>
    </div>
  )
}

export default App
