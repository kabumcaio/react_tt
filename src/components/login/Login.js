import React, { Component } from 'react';

import './login.css';


class Login extends Component {
    constructor(props) {
        super(props);

        this.state = props;
    }

    render() {
        return (
            <div className="flex-wrap">
                <fieldset>
                    <form>
                        <input type="radio" name="rg" id="sign-in" checked/>
                        <input type="radio" name="rg" id="sign-up" />
                        <input type="radio" name="rg" id="reset" />   

                        <div className="functions">
                            <label htmlFor="sign-in">SIGN IN</label>
                            <label htmlFor="sign-up">SIGN UP</label>
                            <label htmlFor="reset">RESET</label>  
                        </div>

                        <div className="inputs">
                            <input className="sign-up sign-in reset" type="email" placeholder="EMAIL" />
                            <input className="sign-up sign-in" type="password" placeholder ="PASSWORD" />
                            <input className="sign-up" type="password" placeholder ="REPEAT PASSWORD" />
                            <button>ENTRAR</button>
                        </div>
                    </form>
                    {/* <small>Based on this <a href="https://codepen.io/jakob-e/pen/PWGWox">pen</a></small> */}
                </fieldset>
            </div>
        );
    }
}
 
export default Login;