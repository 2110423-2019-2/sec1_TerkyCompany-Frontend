import React from 'react';
import './Edit.css';

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';


class Edit extends React.Component {
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
            gender: 'male',
            organization: '',
            nationalId: '',
            registerFlag: 'owner',
            checkConfirmPassword: 'white',
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleChangeConfirmPassword = this.handleChangeConfirmPassword.bind(this);
    }
    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11,16)
        let date = timeStamp.slice(0,10)
        let timeAndDate = {"time":time, "date":date}
        return timeAndDate
    }
    convertDateAndTimeToTimeStamp = (date, time) => {
        let timeStamp = `${date}T${time}:00.000Z`
        return timeStamp
    }

    componentWillMount(){

    }

    componentDidMount(){
        // get init data into state
        const { username} = this.props.match.params
        axios.get(`http://localhost:3001/members-t/findbyusername/${username}`).then(res => {
            //console.log(res.data)
            let initUsers = res.data
            let initState = this.state
            console.log(initState.dateOfBirth)
            console.log(initUsers.dateOfBirth)
            initState = {
                "username": initUsers.username,
                "password": '',
                "confirmPassword": '',
                "email": initUsers.email,
                "firstName": initUsers.fullname.split(" ")[0],
                "lastName": initUsers.fullname.split(" ")[1],
                "dateOfBirth": new Date(initUsers.dateOfBirth),
                "gender": initUsers.gender,
                "organization": initUsers.organization,
                "nationalId": initUsers.nationalID,
                "registerFlag": initUsers.userType,
            }
                
            this.setState(initState)

        })
    }

    handleChangeDate(value,e){
        //console.log(value.toString()[0])
        //console.log(value)
        //let arr = value.toString().split(" ");
        // console.log(arr)
        this.setState({dateOfBirth: value});
    }

    handleChange(e){
        this.setState({[e.target.name]:e.target.value});
    }
    
    handleEdit(e){
        e.preventDefault();
        // handle with database to confirm the user
        console.log(this.state.dateOfBirth)
        console.log(typeof this.state.dateOfBirth)
        
        let date  = this.convertMonthToDate(this.state.dateOfBirth)
        let sendData = {
            "username": this.state.username,
            "password":this.state.password,
            "email": this.state.email,
            "dateOfBirth": this.convertMonthToDate(this.state.dateOfBirth),
            "fullname": this.state.firstName + " " + this.state.lastName,
            "gender": this.state.gender,
            "isSuspended": false,
            "userType": this.state.editFlag,
            "organization": this.state.organization,
            "nationalID": this.state.nationalId,
            "profileURL": "test.jpg"
        }
        console.log("sending")
        console.log(sendData)
        axios.post(`http://localhost:3001/members-t/create`, sendData ).then(res => {
            console.log(res);
            console.log(res.data);
        })
        window.alert('You are now our member!')
        console.log('Jobs done!');
        window.location.assign('/')
    }

    convertMonthToDate = (date) => {
        let month = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]
        let arr = date.toString().split(" ");
        //console.log(arr)
        let inputM = arr[1]
        console.log(inputM)
        let outD = arr[2]
        let outY = arr[3]
        console.log(outY)
        console.log(outD)
        let outM = month.findIndex(element=>{
            console.log(element)
            return element === inputM
        })
        outM = outM+1
        console.log(outM)  
        return outY+"-"+outM+"-"+outD
    }
    handleChangeConfirmPassword(e){
        this.setState({[e.target.name]:e.target.value});
        if(e.target.value === ''){
            this.setState({checkConfirmPassword: 'white'});
        }
        else if(this.state.password === e.target.value){
            this.setState({checkConfirmPassword: 'rgba(0, 255, 0, 0.4)'});
        }else{
            this.setState({checkConfirmPassword: 'rgba(255, 0, 0, 0.4)'});
        }
    }

    render() {
        return(
            <div className ='edit-page-container'>
                <div className='edit-header'>Edit User</div>
                <div className='edit-container'>
                    <form onSubmit={this.handleEdit}>
                        <div className='edit-component-full'>
                            <label className='label'>Username</label><br/>
                            <input className='input-box' type='text' name='username' onChange={this.handleChange} pattern="[A-Za-z0-9]{5,20}" value={this.state.username} required />
                        </div>
                        <div className='edit-subcontainer'> 
                            <div className='edit-component-half'>
                                <label className='label'>Password</label><br/>
                                <input className='input-box' type='text' name='password' onChange={this.handleChange} pattern="[A-Za-z0-9]{5,20}" value={this.state.password}  required />
                            </div>
                        </div>
                        <div className='edit-component-full'>
                            <label className='label'>Email</label><br/>
                            <input className='input-box' type='email' name='email' onChange={this.handleChange} value={this.state.email} required />
                        </div>
                        <div className='edit-subcontainer'> 
                            <div className='edit-component-half'>
                                <label className='label'>First Name</label><br/>
                                <input className='input-box' type='text' name='firstName' onChange={this.handleChange} pattern="[A-Za-z]{5,20}" value={this.state.firstName} required />
                            </div>
                            <div className='edit-component-half'>
                                <label className='label'>Last Name</label><br/>
                                <input className='input-box' type='text' name='lastName' onChange={this.handleChange}  pattern="[A-Za-z]{5,30}" value={this.state.lastName} required />
                            </div>
                        </div>
                        <div className='edit-subcontainer'> 
                            <div className='edit-component-half'>
                                <label className='label'>Date of birth</label><br/>
                                <DatePicker
                                    
                                    onChange={(value,e) => this.handleChangeDate(value,e)}
                                    selected={this.state.dateOfBirth}
                                    dateFormat={['dd MMM yyyy', 'dd/MM/yyyy', 'dd-MM-yyyy']}
                                    //dateFormat = 'dd-MM-yyyy'
                                />
                            </div>
                            <div className='edit-component-half'>
                                <label className='label'>Gender</label><br/>
                                <div className='edit-subcontainer-radio' onChange={this.handleChange} >
                                    <input className='input-radio' id='r1' type='radio' value='male' name='gender' defaultChecked/>Male
                                    <input className='input-radio' id='r2' type='radio' value='female' name='gender'/>Female
                                </div>
                            </div>
                        </div>
                        <div className='edit-component-full' id='organization-container'>
                                <label className='label'>Organization</label><br/>
                                <input className='input-box' type='text' name='organization' onChange={this.handleChange} pattern="[A-Za-z]{5,30}"  value={this.state.organization} required />
                        </div>
                        <div className='edit-subcontainer'> 
                            <div className='edit-component-half'>
                                <label className='label'>National ID</label><br/>
                                <input className='input-box' type='text' name='nationalId' onChange={this.handleChange} pattern="[0-9]{13}" minlength='13' maxlength='13' value={this.state.nationalId} required />
                            </div>
                            <div className='edit-component-half'>
                                <label className='label'>Role</label><br/>
                                <div className='edit-subcontainer-radio' onChange={this.handleChange} >
                                    <input className='input-radio' id='r3' type='radio' value='owner' name='editFlag' defaultChecked/>Owner
                                    <input className='input-radio' id='r4' type='radio' value='participant' name='editFlag'/>Participant
                                </div>
                            </div>
                        </div>
                        <div>
                            <input className='edit-button' type='submit' value='Confirm' />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Edit;