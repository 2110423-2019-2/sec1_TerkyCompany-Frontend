import React from 'react';
import './Register.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';

let ck = {}

class Register extends React.Component {
    constructor(props) {
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
            gender: 'male',
            organization: '',
            nationalId: '',
            registerFlag: 'owner',
            checkConfirmPassword: 'white',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleRegister = this.handleRegister.bind(this);
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    }

    componentDidMount() {
        let spl = document.cookie.split(';')
        let s = 0
        for (let i = 0; i < spl.length; i++) {
            let temp = spl[i].split('=')
            // // console.log('temp: ',temp)
            ck[temp[0].trim()] = temp[1]
            if (temp[0].trim() === 'username' || temp[0].trim() === 'userType')
                s += 1
        }
        if (s === 2) {
            this.setState({
                isLoading: false,
                username: ck['username'],
                role: ck['userType']
            })
        }
    }

    handleChangeDate(value, e) {
        // console.log(value.toString()[0])
        // console.log(value)
        //let arr = value.toString().split(" ");
        // // console.log(arr)
        this.setState({ dateOfBirth: value });
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleRegister(e) {
        e.preventDefault();
        // handle with database to confirm the user
        // console.log(this.state.dateOfBirth)
        // console.log(typeof this.state.dateOfBirth)

        // let date  = this.convertMonthToDate(this.state.dateOfBirth)
        let sendData = {
            "username": this.state.username,
            "password": this.state.password,
            "email": this.state.email,
            "dateOfBirth": this.convertMonthToDate(this.state.dateOfBirth),
            "fullname": this.state.firstName + " " + this.state.lastName,
            "gender": this.state.gender,
            "isSuspended": false,
            "userType": this.state.registerFlag,
            "organization": this.state.organization,
            "nationalID": this.state.nationalId,
            "profileURL": "test.jpg"
        }
        // console.log("sending")
        // console.log(sendData)
        axios.post(`${process.env.REACT_APP_URL}/members-t/create`, sendData).then(res => {
            // console.log(res);
            // console.log(res.data);
            window.alert('Register complete!')
            // console.log('Jobs done!');
            if (document.cookie === '') {
                window.location.assign('/')
            }
            else {
                if (ck['userType'] === 'admin') {
                    window.location.assign('/management/user')
                }
                else {
                    window.location.assign('/')
                }
            }
        })
    }

    convertMonthToDate = (date) => {
        let month = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
        let arr = date.toString().split(" ");
        // console.log(arr)
        let inputM = arr[1]
        // console.log(inputM)
        let outD = arr[2]
        let outY = arr[3]
        // console.log(outY)
        // console.log(outD)
        let outM = month.findIndex(element => {
            // console.log(element)
            return element === inputM
        })
        outM = outM + 1
        // console.log(outM)
        return outY + "-" + outM + "-" + outD
    }
    handleChangeConfirmPassword(e) {
        this.setState({ [e.target.name]: e.target.value });
        if (e.target.value === '') {
            this.setState({ checkConfirmPassword: 'white' });
        }
        else if (this.state.password === e.target.value) {
            this.setState({ checkConfirmPassword: 'rgba(0, 255, 0, 0.4)' });
        } else {
            this.setState({ checkConfirmPassword: 'rgba(255, 0, 0, 0.4)' });
        }
    }

    render() {
        return (
            <div className='register-page-container'>
                <div className='register-header'>Register</div>
                <div className='register-container'>
                    <form onSubmit={this.handleRegister}>
                        <div className='register-component-full'>
                            <label className='label'>Username</label><br />
                            <input className='input-box' type='text' name='username' onChange={this.handleChange} pattern="[A-Za-z0-9]{5,20}" placeholder=' 5-20 characters and numbers ' required />
                        </div>
                        <div className='register-subcontainer'>
                            <div className='register-component-half'>
                                <label className='label'>Password</label><br />
                                <input className='input-box' type='password' name='password' onChange={this.handleChange} pattern="[A-Za-z0-9]{5,20}" placeholder=' 5-20 characters and numbers ' required />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Confirm Password</label><br />
                                <input className='input-box' type='password' style={{ 'background-color': this.state.checkConfirmPassword }} name='confirmPassword' onChange={this.handleChangeConfirmPassword} pattern="[A-Za-z0-9]{5,20}" placeholder='Comfirm your username' required />
                            </div>
                        </div>
                        <div className='register-component-full'>
                            <label className='label'>Email</label><br />
                            <input className='input-box' type='email' name='email' onChange={this.handleChange} placeholder='Enter your email' required />
                        </div>
                        <div className='register-subcontainer'>
                            <div className='register-component-half'>
                                <label className='label'>First Name</label><br />
                                <input className='input-box' type='text' name='firstName' onChange={this.handleChange} pattern="[A-Za-z]{5,20}" placeholder=' 5-20 characters ' required />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Last Name</label><br />
                                <input className='input-box' type='text' name='lastName' onChange={this.handleChange} pattern="[A-Za-z]{5,30}" placeholder='Enter your last name' required />
                            </div>
                        </div>
                        <div className='register-subcontainer'>
                            <div className='register-component-half'>
                                <label className='label'>Date of birth</label><br />
                                <DatePicker

                                    onChange={(value, e) => this.handleChangeDate(value, e)}
                                    selected={this.state.dateOfBirth}
                                    dateFormat={['dd MMM yyyy', 'dd/MM/yyyy', 'dd-MM-yyyy']}
                                //dateFormat = 'dd-MM-yyyy'
                                />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Gender</label><br />
                                <div className='register-subcontainer-radio' onChange={this.handleChange} >
                                    <input className='input-radio' id='r1' type='radio' value='male' name='gender' defaultChecked />Male
                                    <input className='input-radio' id='r2' type='radio' value='female' name='gender' />Female
                                </div>
                            </div>
                        </div>
                        <div className='register-component-full' id='organization-container'>
                            <label className='label'>Organization</label><br />
                            <input className='input-box' type='text' name='organization' onChange={this.handleChange} pattern="[A-Za-z]{5,30}" placeholder='Enter your organization' required />
                        </div>
                        <div className='register-subcontainer'>
                            <div className='register-component-half'>
                                <label className='label'>National ID</label><br />
                                <input className='input-box' type='text' name='nationalId' onChange={this.handleChange} pattern="[0-9]{13}" minlength='13' maxlength='13' placeholder='Enter your National ID' required />
                            </div>
                            <div className='register-component-half'>
                                <label className='label'>Register as</label><br />
                                <div className='register-subcontainer-radio' onChange={this.handleChange} >
                                    <input className='input-radio' id='r3' type='radio' value='owner' name='registerFlag' defaultChecked />Owner
                                    <input className='input-radio' id='r4' type='radio' value='participant' name='registerFlag' />Participant
                                </div>
                            </div>
                        </div>
                        <div>
                            <input className='register-button' type='submit' value='Register' />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Register;