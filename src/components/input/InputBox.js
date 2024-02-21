import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./InputBox.css"
import 'typeface-roboto';
import { Link } from "react-router-dom";

const InputBox = ({type}) => {
    
    const [password, setPassword] = useState('');
    const [showPassword] = useState(false);

    return(
        <>
            {type === "user" ? (
            <>
                <div className="inputbox-component" style={{ fontFamily: 'Roboto, sans-serif' }}> 
                    <h3 className="inputbox-component-item mb-4">Usuário: </h3>
                    <div className="row justify-content-center inputbox-component-item">
                        <input placeholder="Digite seu CPF" className="inputbbox-input"/>
                    </div>
                </div>
            </>
            ) : type === "password" || type === "text"? (
                <div className="inputbox-component" style={{ fontFamily: 'Roboto, sans-serif'}}> 
                    <h3 className="inputbox-component-item mb-4">Senha: </h3>
                        <div className="row justify-content-center inputbox-component-item">
                            <input 
                                type={showPassword ? 'text' : 'password'}
                                value={password} 
                                placeholder="Digite sua senha"
                                onChange={(e) => setPassword(e.target.value)}
                                className="inputbbox-input"
                            />
                        </div>
                    <div className="password-recovey-container">
                        <Link to="/password-recovery" className="password-recovey-button" style={{ fontFamily: 'Roboto, sans-serif'}}>Esqueceu sua senha?</Link>
                    </div>
            </div>
            ):(
                <></>
            )
            }
        </>
    );
};

export default InputBox;