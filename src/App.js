import { useState } from "react";
import InputBox from "./reusableComponent/InputBox";
import Login from "./assets/unDraw/loginSVG.svg";
import "./App.css";
const App = () => {
  const [input, setInput] = useState({ username: "", email: "", password: "" });

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };
  const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleOnSubmit}>
        <img className='login-img' src={Login} alt='login' />
        <InputBox
          id='username'
          type='text'
          name='username'
          value={input.username}
          label='Username'
          onChange={handleOnChange}
        />
        <InputBox
          id='email'
          type='email'
          name='email'
          value={input.email}
          label='Email'
          onChange={handleOnChange}
        />
        <InputBox
          id='password'
          type='password'
          name='password'
          value={input.password}
          label='Password'
          onChange={handleOnChange}
        />
        <button type='submit'>Login</button>
      </form>
    </div>
  );
};

export default App;
