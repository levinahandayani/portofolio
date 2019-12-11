import React, { Component } from 'react';
import logo from './logo.png';
import './login.css';

class Login extends Component{
    render(){
        return(
            <div className="Sebuah-kotak">
                <h1>Login Page</h1>
                <form>
                    <div className="Logo">
                        <img src={logo} alt="Gambar" className="gambar"/>
                    </div>

                    <div>
                        <label>Username</label>
                        <input type="text" placeholder="enter username"/>
                        <label>Password</label>
                        <input type="text" placeholder="enter username"/>
                        <button type="submit">login</button>
                    </div>
                </form>
            </div>
        )
    }
}
export default Login;