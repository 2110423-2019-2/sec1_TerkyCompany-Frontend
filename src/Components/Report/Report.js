import React from 'react';
import './Report.css';

class Report extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            subject: "website",
            description:"",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmitReport = this.handleSubmitReport.bind(this);
    }

    componentDidMount() {
    }

    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value });
    }

    handleSubmitReport(e) {
        //handle backend
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