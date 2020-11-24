import React from 'react';

function Login() {

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChange = (e) => {
    if(e.target.name == 'email'){
      setEmail(e.target.value);
    }  
    else{
      setPassword(e.target.value);
    }  
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div>
      <form onSubmit = {handleSubmit}>
        <input type="email" name="email" placeholder="E-mail.." requiered  onChange = {handleChange}/>
        <input type="password" name="password" placeholder="Password.." requiered  onChange = {handleChange}/>
        <button onSubmit = {handleSubmit}>LogIn</button>  <button>Register</button> 
      </form>
    </div>
  );
}

export default Login;