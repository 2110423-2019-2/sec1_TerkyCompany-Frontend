import React from 'react';
import InputBox from './InputBox';
// import Multiselect from 'multiselect-react-dropdown';
import './CreateForm.css'
import axios from 'axios';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            errMsg: {
                workshopName: '',
                workshopPic: '',
                speakerName: '',
                date: '',
                sTime: '',
                eTime: '',
                cap: '',
                cost: '',
                place: '',
                ddate: '',
                dtime: '',
                description: '',
                tags: ''
            },
            content: {
                workshopName: '',
                workshopPic: "",
                speakerName: '',
                date: '',
                sTime: '',
                eTime: '',
                cap: '',
                cost: '',
                place: '',
                ddate: '',
                dtime: '',
                description: '',
                tags: [],
                owner: this.props.username
            },
            username: "",
            role: "",
            options: [{ name: 'Business', id: 1 }, { name: 'Data', id: 2 }, { name: 'Design', id: 3 }, { name: "Technology", id: 4 }]
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSelect = this.handleSelect.bind(this);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    handleChange = (e) => {
        e.preventDefault();
        const { name, value } = e.target;
        let err = this.state.errMsg;
        let content = this.state.content;
        switch (name) {
            case "workshopName":
                if (value.length < 5 || value.length > 40) {
                    err.workshopName = "must be between 5-40 characters"
                }
                else {
                    err.workshopName = ""
                    content.workshopName = value;
                }

                break;
            case "speakerName":
                if (value === '') {
                    err.speakerName = "This cannot be empty"
                }
                else if (value.length > 40) {
                    err.speakerName = "must not exceed 40 characters"
                }
                else {
                    err.speakerName = ""
                    content.speakerName = value;
                }
                break;
            case "workshopPic":
                if (value === '') {
                    err.workshopPic = "This cannot be empty"
                }
                else if (value.length > 512) {
                    err.workshopPic = "File's name is too long"
                }
                else {
                    err.workshopPic = ""
                    content.workshopPic = e.target.files[0];
                    // console.log("hard debug > ",e.target.files)
                }
                break;
            case "date":
                if (value === '') {
                    err.date = "This cannot be empty"
                }
                else {
                    err.date = ""
                    content.date = value;
                }
                break;
            case "sTime":
                if (value === '') {
                    err.sTime = "This cannot be empty"
                }
                else {
                    err.sTime = ""
                    content.sTime = value;
                }
                break;
            case "eTime":
                if (value === '') {
                    err.eTime = "This cannot be empty"
                }
                else {
                    err.eTime = ""
                    content.eTime = value;
                }
                break;
            case "cap":
                if (value <= 0 || value > 1000) {
                    err.cap = "must be number between 0-1000"
                }
                else {
                    content.cap = value;
                    err.cap = ""
                }
                break;
            case "cost":
                if (value < 20) {
                    err.cost = "must be more than 20 Baht"
                }
                else {
                    err.cost = ""
                    content.cost = value
                }
                break;
            case "place":
                if (value === '') {
                    err.place = "This cannot be empty"
                }
                else if (value.length > 40) {
                    err.place = "must not exceed 40 characters"
                }
                else {
                    err.place = ""
                    content.place = value;
                }
                break;
            case "ddate":
                if (value === '') {
                    err.ddate = "This cannot be empty"
                }
                else {
                    err.ddate = ""
                    content.ddate = value;
                }
                break;
            case "dtime":
                if (value === '') {
                    err.dtime = "This cannot be empty"
                }
                else {
                    err.dtime = ""
                    content.dtime = value;
                }

                break;
            case "description":
                if (value === '') {
                    err.description = "This cannot be empty"
                }
                else if (value.length > 300) {
                    err.description = "must not exceed 300 characters"
                }
                else {
                    err.description = ""
                    content.description = value;
                }
                break;
            default:
                // console.log(name)
                break;
        }
        this.setState({ errMsg: err, content: content });
    }

    handleSelect = (selectedList, selectedItem) => {
        let err = this.state.errMsg;
        let content = this.state.content;
        if (selectedList.length === 0) {
            err.tags = "This cannot be empty"
        }
        else {
            err.tags = ""
            content.tags = selectedList;
        }
        this.setState({ errMsg: err, content: content });
        // console.log(this.state.content)
    }

    handleRemove(selectedList, removedItem) {
        let err = this.state.errMsg
        let content = this.state.content
        if (selectedList.length === 0) {
            err.tags = "This cannot be empty"
        }
        else {
            err.tags = ""
            content.tags = selectedList;
        }
        content.tags = selectedList
        this.setState({ errMsg: err, content: content })
        // console.log(this.state.content)
    }
    handleSubmit() {
        // console.log("submit clicked")
        let content = this.state.content
        let err = this.state.errMsg
        let valid = true
        if (content.cap <= 0 || content.cap > 1000 || content.cap === "") {
            err.cap = "must be number between 0-1000"
            valid = false
        }
        if (content.cost < 20 || content.cost === "") {
            err.cost = "must be more than 20 Baht"
            valid = false
        }
        if (content.date === "") {
            err.date = "must be specified"
            valid = false
        }
        if (content.ddate === "") {
            err.ddate = "must be specified"
            valid = false
        }
        if (content.description === "") {
            err.description = "must be specified"
            valid = false
        }
        else if (content.description.length > 300) {
            err.description = "must not exceed 300 characters"
            valid = false
        }
        if (content.dtime === "") {
            err.dtime = "must be specified"
            valid = false
        }
        if (content.sTime === "") {
            err.sTime = "must be specified"
            valid = false
        }
        if (content.eTime === "") {
            err.eTime = "must be specified"
            valid = false
        }
        if (content.tags.length === 0) {
            err.tags = "must be specified"
            valid = false
        }
        if (content.workshopName === "") {
            err.workshopName = "must be specified"
            valid = false
        }
        else if (content.workshopName.length > 40) {
            err.workshopName = "must not exceed 40 characters"
            valid = false
        }
        if (content.workshopPic === "") {
            err.workshopPic = "must be specified"
            valid = false
        }
        else if (content.workshopPic.length > 512) {
            err.workshopPic = "File's name is too long"
            valid = false
        }
        if (content.speakerName === "") {
            err.speakerName = "must be specified"
            valid = false
        }
        else if (content.speakerName.length > 40) {
            err.speakerName = "must not exceed 40 characters"
            valid = false
        }
        if (content.place === "") {
            err.place = "must be specified"
            valid = false
        }
        else if (content.place.length > 40) {
            err.place = "must not exceed 40 characters"
            valid = false
        }
        this.setState({ errMsg: err })
        if (valid) {
            // let nowState = this.state.content
            let formData = new FormData();
            formData.append('upload',this.state.content.workshopPic);
            // console.log(formData)
            // console.log("image > ",this.state.content.workshopPic)
            // console.log("sending")
            // // console.log(sendData)
            // // console.log(this.state.workshopPic)
            let data = {upload:this.state.content.workshopPic}
            // console.log(data)
            axios.post(`http://localhost:3001/workshops/fileupload`,formData).then(res=>{
                // console.log(res.data)
                let nowState = this.state.content
                let sendData = {
                    "image": res.data,
                    "request": {
                        "startTime": this.convertDateAndTimeToTimeStamp(nowState.date, nowState.sTime),
                        "endTime": this.convertDateAndTimeToTimeStamp(nowState.date, nowState.eTime),
                        "capacity": nowState.cap,
                        "cost": nowState.cost,
                        "name": nowState.workshopName,
                        "place": nowState.place,
                        "deadlineTime": this.convertDateAndTimeToTimeStamp(nowState.ddate, nowState.dtime),
                        "publishTime": "2015-12-20T03:01:01.000Z",
                        "description": nowState.description,
                        "speakerName": nowState.speakerName,
                        "pictureURL": res.data,
                        "owner": nowState.owner
                    }
                }
                // console.log("send:",sendData)
                axios.post(`http://localhost:3001/workshops/create`, sendData.request).then(res => {
                    // console.log(res);
                    // console.log(res.data);
                    // console.log(nowState.tags)
                    let workshopId = res.data.id
                    nowState.tags.forEach(element => {
                        let sendTag = {
                            "workshop": workshopId,
                            "tag": element.name,
                            "workshopId": workshopId
                        }
                        // console.log(sendTag)
                        axios.post(`http://localhost:3001/tags/create`, sendTag).then(() =>{
                            if(this.props.role === 'admin')
                            {
                                window.location.assign('/management/workshop')
                            }
                            else
                            {
                                window.location.assign('/workshoplist')
                            }
                        })
                            
                    }
                    )
            })
            

            const config = {
                headers: {
                    'image': formData
                } 
            };
            // axios.post(`/localhost:3001/workshops/WORKSHOPID/picture`,config)
            //     .then((response) => {
            //         alert("The file is successfully uploaded");
            //     }).catch((error) => {
            // });
            alert("Workshop Created")

        })
    }
        else {
            alert("Please valid your information")
        }
        // console.log(this.state.errMsg)
        // console.log(this.state.content)
    }

    handleCancel() {
        // console.log("cancel clicked")
        window.location.assign('/workshoplist')
    }

    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11, 16)
        let date = timeStamp.slice(0, 10)
        let timeAndDate = { "time": time, "date": date }
        return timeAndDate
    }
    convertDateAndTimeToTimeStamp = (date, time) => {
        let timeStamp = `${date}T${time}:00.000Z`
        return timeStamp
    }



    render() {
        if (this.state.isLoading) return null;
        // console.log("hello Create form")
        const style = { chips: { background: "#182978" }, searchBox: { background: "white" } }
        return (
            <div id="flex-container-create">
                <div className="form-body">
                    <form>
                        <InputBox label="Workshop's Name" name="workshopName" type="input" inputType="text" onChange={this.handleChange} errMsg={this.state.errMsg.workshopName} placeholder="Workshop's name" />
                        <InputBox label="Speaker's Name" name="speakerName" type="input" inputType="text" onChange={this.handleChange} errMsg={this.state.errMsg.speakerName} placeholder="Speaker's name" />
                        <InputBox label="Workshop's profile picture" name="workshopPic" type="file" inputType="file" onChange={this.handleChange} errMsg={this.state.errMsg.workshopPic} />
                        <InputBox label="Date" name="date" type="input" inputType="date" onChange={this.handleChange} errMsg={this.state.errMsg.date} />
                        <InputBox label="Start time" name="sTime" type="input" inputType="time" onChange={this.handleChange} errMsg={this.state.errMsg.sTime} />
                        <InputBox label="End time" name="eTime" type="input" inputType="time" onChange={this.handleChange} errMsg={this.state.errMsg.eTime} />
                        <InputBox label="Capacity" name="cap" type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cap} min="1" placeholder="Number" />
                        <InputBox label="Cost" name="cost" type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cost} min="1" placeholder="Baht" />
                        <InputBox label="Place" name="place" type="text" row={4} col={50} onChange={this.handleChange} errMsg={this.state.errMsg.place} placeholder="Location of the workshop" />
                        <InputBox label="Deadline date" name="ddate" type="input" inputType="date" onChange={this.handleChange} errMsg={this.state.errMsg.ddate} />
                        <InputBox label="Deadline time" name="dtime" type="input" inputType="time" onChange={this.handleChange} errMsg={this.state.errMsg.dtime} />
                        <InputBox label="Description" name="description" type="text" row={4} col={50} onChange={this.handleChange} errMsg={this.state.errMsg.description} placeholder="Briefly explain the workshop" />
                        <InputBox label="Tags" name="tags" type="dropD" options={this.state.options} tags={this.state.content.tags} onSelect={this.handleSelect} onRemove={this.handleRemove} style={style} errMsg="" placeholder="Choose tags" />
                    </form>
                </div>
                <div id="button-body" className="text-center">
                    <button class="btn btn-primary btn-lg" onClick={() => this.handleSubmit()}>Submit</button>
                    <button class="btn btn-primary btn-lg" onClick={() => this.handleCancel()}>Cancel</button>
                </div>
            </div>
        )
    }
}

export default Form;