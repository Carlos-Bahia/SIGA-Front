import React from "react";
import Logo from "../../assets/Logo.png";
import { Link } from "react-router-dom";
import "./login.css";
import 'typeface-roboto';
import InputBox from "../../components/input/InputBox";

const Login = () => {
    return(
        <div className="login-container">
            <div className="login-itens-container">
                <Link to="/login" className="logo-button">
                    <img src={Logo} className="login-itens-container" alt="Logo"/>
                </Link>
            </div>
            <div className="login-itens-container">
                <InputBox type="user"/>
            </div>
            <br className="login-line-break"/>
            <div className="login-itens-container">
                <InputBox type="password"/>
            </div>
            <div className="login-itens-container login-button-container">
                <button style={{ fontFamily: 'Roboto, sans-serif'}} className="login-itens-container login-confirm-button">Confirmar</button>
            </div>
            <div>
                <Link to="/help" style={{ fontFamily: 'Roboto, sans-serif'}} className="login-itens-container login-problem-button">Problemas com o acesso?</Link>
            </div>
        </div>
    );
};

export default Login;
