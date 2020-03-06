import React from 'react';
import './Register.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

class Register extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            username: '',
            password: '',
            confirmPassword: '',
            email: '',
            firstName: '',
            lastName: '',
            dateOfBirth: new Date(),
            gender: '',
            organization: '',
            nationalId: '',
            registerFlag: '',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
    }

    handleChangeDate(date){
        this.setState({dateOfBirth: date});
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleRegister(e){
        e.preventDefault();
        console.log('Jobs done!');
    }

    render() {
        return(
            <div className='register-page-container'>
                <div className='register-header'>Register</div>
                <div className='register-container'>
                    <form onSubmit={this.handleRegister}>
                        <div className='register-component-full'>
                            <label className='label'>Username</label><br/>
                            <input className='input-box' type='text' name='username' onChange={this.handleChange} placeholder='Enter your username' required />
                        </div>
                        <div className='register-subcontainer'> 
                            <div className='register-component-half'>
                                <label className='label'>Password</label><br/>
                                <input className='input-box' type='password' name='password' onChange={this.handleChange} placeholder='Enter your password' required />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Confirm Password</label><br/>
                                <input className='input-box' type='password' name='confirmPassword' onChange={this.handleChange} placeholder='Comfirm your username' required />
                            </div>
                        </div>
                        <div className='register-component-full'>
                            <label className='label'>Email</label><br/>
                            <input className='input-box' type='email' name='email' onChange={this.handleChange} placeholder='Enter your email' required />
                        </div>
                        <div className='register-subcontainer'> 
                            <div className='register-component-half'>
                                <label className='label'>First Name</label><br/>
                                <input className='input-box' type='text' name='firstName' onChange={this.handleChange} placeholder='Enter your first name' required />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Last Name</label><br/>
                                <input className='input-box' type='text' name='lastName' onChange={this.handleChange} placeholder='Enter your last name' required />
                            </div>
                        </div>
                        <div className='register-subcontainer'> 
                            <div className='register-component-half'>
                                <label className='label'>Date of birth</label><br/>
                                <DatePicker
                                    selected={this.state.dateOfBirth}
                                    onChange={this.handleChangeDate}
                                    format='yyyy-MM-dd'
                                />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Gender</label><br/>
                                <div className='register-subcontainer-radio' onChange={this.handleChange} >
                                    <input className='input-radio' id='r1' type='radio' value='male' name='gender'/>Male
                                    <input className='input-radio' id='r2' type='radio' value='female' name='gender'/>Female
                                </div>
                            </div>
                        </div>
                        <div className='register-component-full' id='organization-container'>
                                <label className='label'>Organization</label><br/>
                                <input className='input-box' type='text' name='organization' onChange={this.handleChange} placeholder='Enter your organization' required />
                        </div>
                        <div className='register-subcontainer'> 
                            <div className='register-component-half'>
                                <label className='label'>National ID</label><br/>
                                <input className='input-box' type='text' name='nationalId' onChange={this.handleChange} placeholder='Enter your National ID' required />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Register as</label><br/>
                                <div className='register-subcontainer-radio' onChange={this.handleChange} >
                                    <input className='input-radio' id='r3' type='radio' value='owner' name='gender'/>Owner
                                    <input className='input-radio' id='r4' type='radio' value='participant' name='gender'/>Participant
                                </div>
                            </div>
                        </div>
                        <div>
                            <input className='register-button' type='submit' value='register' />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;