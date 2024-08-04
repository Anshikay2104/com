import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../Login.css';
import {loginUser} from '../services/apiServices';


const Login = () => {
    const [action, setAction] = useState('');
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        email:'',
        password:''
      })

    const registerLink = () => {
        setAction('active');
    };
    const homeLink = () => {
        setAction('active');
    };

    const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value
        });
      };
  
      const handleLogin = async(e) => {
        e.preventDefault();
        try{
          const response = await loginUser(formData);
          console.log("response",response)
          alert("You have successfully login")
          navigate('/');
        }
        catch(error){
          alert('Error during Login, please try again');
        }
       };
    

    return (
        <div className={`wrapper ${action}`}>
            <div className="form-box login">
                <form onSubmit={handleLogin}>
                    <h1>Login</h1>
                    <div className="form-group">
                        <label htmlFor="email">Email:  </label>
                        <input type="email" className="form-control" id="email" name="email" placeholder="abcd@gmai.com" value = {formData.email} onChange = {handleChange}  required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password:  </label>
                    <input type="password" className="form-control" id="password" name="password" placeholder="Password" value = {formData.password} onChange = {handleChange} maxLength={12} minLength={8} required />
                    </div>
                 <button type="submit" className="btn btn-primary btn-block mt-4">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default Login;
