import React from 'react';
import ErrorMessage from './ErrorMessage';
import './Login.css';

class Login extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            username: '',
            password: '',
            show: false,
            errorMessage: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }


    handleChange(e) {
        this.setState({show: false});
        this.setState({[e.target.name]:e.target.value});
    }

    handleLogin(e) {  
        e.preventDefault();
        
        if(this.state.username.length > 20){
            this.setState({show: true});
            this.setState({errorMessage: 'username must shorter than 20 characters'})
        }else if(this.state.password.length > 20){
            this.setState({show: true});
            this.setState({errorMessage: 'password must shorter than 20 characters'})
        }
        //this means user is in database
        else if(this.state.username === 'win' && this.state.password === 'win'){
            this.setState({show: false});
            //need action
        }else{
            this.setState({show: true});
            this.setState({errorMessage: 'incorrect username or password'})
        }
        

    }

    render() {
        return(
            <div className='login-page-container'>
                <div className='login-header'>Login</div>
                <div className='login-container'>
                    <form onSubmit={this.handleLogin}>
                        <div className='login-component'>
                            <label className='label'>Username</label><br/>
                            <input className='input-box' type='text' name='username' onChange={this.handleChange} placeholder='Enter your username' required />
                        </div>
                        <div className='login-component'>
                            <label className='label'>Password</label><br/>
                            <input className='input-box' id='pass-box' type='password' name='password'onChange={this.handleChange} placeholder='Enter your password' required />
                        </div>
                        <ErrorMessage show={this.state.show}>{this.state.errorMessage}</ErrorMessage>
                        <div>
                            <input className='login-button' type='submit' value='Login' />
                        </div>
                        <div className='link-container'>
                            <div className='link-component'><a className='link' href=''>Create a free Matcher Account</a></div>
                            <div className='link-component'><a className='link' href=''>forgot your password?</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



export default Login;