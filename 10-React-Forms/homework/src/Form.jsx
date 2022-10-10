import React from 'react';
import { useState } from 'react/cjs/react.development';

export function validate(input) {
  let errors = {};
  if (!input.username) {
    errors.username = 'Username is required';
  } else if (!/\S+@\S+\.\S+/.test(input.username)) {
    errors.username = 'Username is invalid';
  }
  
  if (!input.password) {
    errors.password = 'Password is required'
  } else if((!/(?=.*[0-9])/.test(input.password))) {
      errors.password= 'Password is invalid';
    }

  return errors;
};



export default function  Form() {
//  const [username, setUsername] = React.useState('');
//  const [password, setPassword] = React.useState('');

const [input, setInput] = React.useState({
  username: '',
  password: ''
});
const [errors, setErrors] = React.useState({});


const handleInputChange = (e) => 
{setErrors(validate ({
  ...input,
  [e.target.name]: e.target.value,
}));

setInput({
  ...input,
  [e.target.name]: e.target.value,
});}
// setErrors(validate({
//   ...input,
//   [e.target.name]: e.target.value
// }));

// function validateUser(value) {
//   let errors={};
//   if (!input.username) {setError('Username is required')}
//   else if(!/\S+@\S+\.\S+/.test(input.username)) {
//     setError('Username should be an email');
//   } else {
//     setError('');
//   }
//   setInput({username:value});
// }

// function validatePassword(value) {
//   if (!input.password) {setError('Password is required')}
//   else if((!/(?=.*[0-9])/.test(input.password))) {
//     setError('The password should contain at leat one digit');
//   } else {
//     setError('');
//   }
//   setInput({password:value});
// }

  return (
      <div>
        <form>
          <div>
          <label htmlFor='Username:'>Username:</label>
            <input name= 'username' className= {errors.username && 'danger'} value={input['username']} key= 'username' type="text" placeholder='Email...' onChange={handleInputChange} /> 
            {errors.username && (
            <p className="danger">{errors.username}</p>
            )}
          </div>
          <div>
          <label htmlFor='Password:'>Password:</label>
            <input name='password' className= {errors.password && 'danger'} value={input['password']} key= 'password' type="password" placeholder='Password...' onChange={handleInputChange} /> 
            {errors.password && (
            <p className="danger">{errors.password}</p>
            )}
          </div>
          <input type="submit" />
        </form>
      </div>
  )
}
