import { useState } from "react";
import InputBox from "./reusableComponent/InputBox";
import Login from "./assets/unDraw/loginSVG.svg";
import "./App.css";

const App = () => {
  const [inputValues, setInputValues] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [err, setErr] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const validate = (values) => {
    const err = {};
    const emailRegEx =
      /[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/g;
    const capsLetterRegEx = /[A-Z]/;
    const numberRegEx = /[0-9]/;
    const reqPWDLength = 8;
    const specialCharRegEx = /[!@#$%^&*]/;

    const check = {
      USERNAME_EMPTY: !values.username,
      EMAIL_EMPTY: !values.email,
      EMAIL_VALID: !emailRegEx.test(values.email),
      PWD_EMPTY: !values.password,
      PWD_HAS_CAPS: !capsLetterRegEx.test(values.password),
      PWD_HAS_NUM: !numberRegEx.test(values.password),
      PWD_HAS_SP_CHAR: !specialCharRegEx.test(values.password),
      PWD_LENGTH: values.password.length <= reqPWDLength,
    };

    switch (true) {
      case check.USERNAME_EMPTY:
        err.username = "Enter the Username!";
        break;
      case check.EMAIL_EMPTY || check.EMAIL_VALID:
        check.EMAIL_EMPTY
          ? (err.email = "Enter the Email!")
          : (err.email = "Enter the valid Email");
        break;
      case check.PWD_EMPTY:
        err.password = "Enter the Password!";
        break;
      case check.PWD_HAS_CAPS:
        err.password = "Password must contain atleast 1 Caps Letter";
        break;
      case check.PWD_HAS_NUM:
        err.password = "Password must contain atleast 1 Number";
        break;
      case check.PWD_HAS_SP_CHAR:
        err.password = " Password must contain atleast 1 Special Character";
        break;
      case check.PWD_LENGTH:
        err.password = `Password must be atleast ${reqPWDLength} characters long`;
        break;
      default:
    }
    return err;
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    const err = validate(inputValues);
    setErr(err);
    setIsSubmit(true);
    console.log(inputValues);
  };

  return (
    <div className='form-container'>
      <form className='form' onSubmit={handleOnSubmit}>
        <img className='login-img' src={Login} alt='login' />
        <InputBox
          id='username'
          type='text'
          name='username'
          value={inputValues.username}
          label='Username'
          onChange={handleOnChange}
        />
        <p className='err'>{err.username}</p>
        <InputBox
          id='email'
          type='text'
          name='email'
          value={inputValues.email}
          label='Email'
          onChange={handleOnChange}
        />
        <p className='err'>{err.email}</p>
        <InputBox
          id='password'
          type='password'
          name='password'
          value={inputValues.password}
          label='Password'
          onChange={handleOnChange}
        />
        <p className='err-pwd'>{err.password}</p>
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
};

export default App;
