import React from 'react';
import ErrorMessage from './ErrorMessage';
import Cookies from 'universal-cookie';
import './Login.css';
import axios from 'axios';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            username: '',
            password: '',
            show: false,
            errorMessage: '',
            token: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    componentDidMount() {
        if (document.cookie !== '') {
            alert('You are already logged in!')
            window.location.assign('/')
        }
    }

    handleChange(e) {
        this.setState({ show: false });
        this.setState({ [e.target.name]: e.target.value });
    }

    handleLogin(e) {
        e.preventDefault();
        let data = { "username": this.state.username, "password": this.state.password }

        if (this.state.username.length > 20) {
            this.setState({ show: true });
            this.setState({ errorMessage: 'username must shorter than 20 characters' })
        } else if (this.state.password.length > 20) {
            this.setState({ show: true });
            this.setState({ errorMessage: 'password must shorter than 20 characters' })
        }
        //this means user is in database
        axios.post(`${process.env.BACKEND_API}/auth/login`, data).then(res => {
            console.log(res.status)
            if (res.status === 201) {
                //pass login
                console.log(res.data.access_token)
                this.setState({
                    token: res.data.access_token
                })

                return axios.get(`${process.env.BACKEND_API}/profile`, { headers: { "Authorization": `Bearer ${this.state.token}` } })
            }
            
        })
            .then(res => {
                if (res !== "fail") {
                    console.log('data after authen: ', res.data)
                    const cookies = new Cookies();
                    cookies.set('username', res.data.username)
                    cookies.set('userType', res.data.userType)
                    window.location.assign('/')
                }
                
            },e => {
                this.setState({ show: true });
                this.setState({ errorMessage: 'Incorrect username or password' })
            })


    }

    render() {
        return (
            <div className='login-page-container'>
                <div className='login-header'>Login</div>
                <div className='login-container'>
                    <form onSubmit={this.handleLogin}>
                        <div className='login-component'>
                            <label className='label'>Username</label><br />
                            <input className='input-box' id='input' type='text' name='username' onChange={this.handleChange} placeholder='Enter your username' required />
                        </div>
                        <div className='login-component'>
                            <label className='label'>Password</label><br />
                            <input className='input-box' id='pass-box' type='password' name='password' onChange={this.handleChange} placeholder='Enter your password' required />
                        </div>
                        <ErrorMessage show={this.state.show}>{this.state.errorMessage}</ErrorMessage>
                        <div>
                            <input className='login-button' type='submit' value='Login' />
                        </div>
                        <div className='link-container'>
                            <div className='link-component'><a className='link' href='/register'>Create a free Matcher Account</a></div>
                            <div className='link-component'><a className='link' href='/login'>forgot your password?</a></div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



export default Login;