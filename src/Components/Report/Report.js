import React from 'react';
import './Report.css';
import axios from 'axios';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            subject: "website",
            description:"",
            username: "",
            role: "",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitReport = this.handleSubmitReport.bind(this);
    }

    componentDidMount() {
        //format cookie
        let spl = document.cookie.split(';')
        let ck = {}
        let s=0
        for(let i=0 ;i< spl.length ; i++)
        {
            let temp = spl[i].split('=')
            // console.log('temp: ',temp)
            ck[temp[0].trim()]=temp[1]
            if(temp[0].trim() == 'username' || temp[0].trim() == 'userType')
                s+=1 

        }
        
        if(s==2) {
            this.setState({
                isLoading: false,
                username: ck['username'],
                role: ck['userType']
            })
        }

        if(document.cookie === '') {
            // alert("Please login first!")
            window.location.assign("/login")
        }
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });

    }

    handleSubmitReport(e) {
        //handle backend
        let sendData ={
          'subject': this.state.subject,
          'description': this.state.description,
          'memberT' : this.state.username,
          'memberTUsername': this.state.username,
        }
        console.log("sending")
        console.log(sendData)
        axios.post('http://localhost:3001/feedbacks/create', sendData ).then(res => {
            console.log(res);
            console.log(res.data);
        })
        
    }

    render() {
        return (
            <div className='report-page-container'>
                <div className='report-header'>Report</div>
                <div className='report-container'>
                    <form onSubmit={this.handleSubmitReport}>
                        <div className='report-component'>
                            <label className='label'>Report Subject</label><br />
                            <select className='input-box' id='report-subject' name='subject' onChange={this.handleChange}>
                                <option value="website" defaultChecked>Website Issue</option>
                                <option value="payment">Payment Issue</option>
                                <option value="member">Member Issue</option>
                                <option value="workshop">Workshop Issue</option>
                                <option value="others">Others</option>
                            </select>
                        </div>
                        <div className='report-component'>
                            <label className='label'>Description</label><br />
                            <textarea className='input-box' id='report-description' name='description' onChange={this.handleChange} placeholder='Enter report description' required />
                        </div>
                        <div>
                            <input className='report-button' type='submit' />
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}



export default Report;