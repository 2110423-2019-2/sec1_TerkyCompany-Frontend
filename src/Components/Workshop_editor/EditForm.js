import React, { Component } from 'react'
import './EditForm.css'
import InputBox from './InputBox'
import axios from 'axios' 

class EditForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            errMsg: {
                workshopName:'',
                workshopPic:'',
                speakerName:'',
                date:'',
                sTime:'',
                eTime:'',
                cap:'',
                cost:'',
                place:'',
                ddate:'',
                dtime:'',
                description:'',
                tags:''
            },
            content:{
                workshopName:'undefine',
                workshopPic:null,
                speakerName:'',
                date:null,
                sTime:null,
                eTime:null,
                cap:0,
                cost:0,
                place:'',
                ddate:null,
                dtime:null,
                description:'',
                publishTime:'',
                tags:[]
            },
            options: [{name: 'business', id: 1},{name: 'data', id: 2},{name: 'design', id: 3},{name:"technology",id:4}],
            selectedValues: [],
            initData: [],
            usernam :'',
        }
        this.handleChange = this.handleChange.bind(this)
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
                }
                content.workshopName = value;
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
                    
                }
                content.speakerName = value;
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
                    
                    console.log("hard debug > ",e.target.files)
                }
                content.workshopPic = e.target.files[0];
                break;
            case "date":
                if (value === '') {
                    err.date = "This cannot be empty"
                }
                else {
                    err.date = ""
                    
                }
                content.date = value;
                break;
            case "sTime":
                if (value === '') {
                    err.sTime = "This cannot be empty"
                }
                else {
                    err.sTime = ""
                    
                }
                content.sTime = value;
                break;
            case "eTime":
                if (value === '') {
                    err.eTime = "This cannot be empty"
                }
                else {
                    err.eTime = ""
                    
                }
                content.eTime = value;
                break;
            case "cap":
                if (value <= 0 || value > 1000) {
                    err.cap = "must be number between 0-1000"
                }
                else {
                    
                    err.cap = ""
                }
                content.cap = value;
                break;
            case "cost":
                if (value < 0) {
                    err.cost = "must be positive number"
                }
                else {
                    err.cost = ""
                    
                }
                content.cost = value
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
                    
                }
                content.place = value;
                break;
            case "ddate":
                if (value === '') {
                    err.ddate = "This cannot be empty"
                }
                else {
                    err.ddate = ""
                    
                }
                content.ddate = value;
                break;
            case "dtime":
                if (value === '') {
                    err.dtime = "This cannot be empty"
                }
                else {
                    err.dtime = ""
                    
                }
                content.dtime = value;
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
                    
                }
                content.description = value;
                break;
            default:
                console.log(name)
                break;
        }
        this.setState({ errMsg: err, content: content });
    }

    onSelect = (selectedList, selectedItem) => {
        let err = this.state.errMsg 
        let content = this.state.content 
        let selValue = this.state.selectedValues
        err.tags = selectedList.length === 0 ? "This cannot be empty" : ''
        content.tags = selectedList
        this.setState({errMsg:err, content:content, selValue:selectedList})
    }

    onRemove = (selectedList, removedItem) => {
        let err = this.state.errMsg 
        let content = this.state.content 
        err.tags = selectedList.length === 0 ? "This cannot be empty" : ''
        content.tags = selectedList
        this.setState({errMsg:err, content:content})
    }
    onCorrectUser = (ownerUser,loginUser,urlUser) => {
        return (ownerUser == loginUser ) || (this.state.role == "admin")
    }

    submitclick = () => {
        console.log("submit clicked")
        console.log(window.location.host)
        let err = this.state.errMsg 
        let errorCheck = false
        for(let key in err) {
            if(err[key].length > 0) {
                errorCheck = true
                break
            }
        }
        if(errorCheck) {
            alert("Invalid input")
        }
        else {
            let nowState = this.state.content
            let formData = new FormData();
            formData.append('upload',this.state.content.workshopPic);
            console.log("sending")
            console.log(this.props.workshopid)
            axios.post(`http://localhost:3001/workshops/fileupload`,formData).then(res=>{
                console.log(res.data)
                let sendData = {
                    "image" :res.data,
                    "req" : {
                    "startTime": this.convertDateAndTimeToTimeStamp(nowState.date,nowState.sTime),
                    "endTime": this.convertDateAndTimeToTimeStamp(nowState.date,nowState.eTime),
                    "capacity": nowState.cap,
                    "cost": nowState.cost,
                    "name": nowState.workshopName,
                    "place": nowState.place,
                    "deadlineTime": this.convertDateAndTimeToTimeStamp(nowState.ddate,nowState.dtime),
                    "publishTime": "2015-12-20T03:01:01.000Z",
                    "description": nowState.description,
                    "speakerName": nowState.speakerName,
                    "pictureURL": res.data,
                    "owner": nowState.owner}
                }
                axios.put(`http://localhost:3001/workshops/${this.props.workshopid}/update`, sendData.req ).then(res => {
                console.log(res);
                console.log(res.data);
                })
                
            })
            /*axios.put(`http://localhost:3001/workshops/${this.props.workshopid}/update`, sendData.req ).then(res => {
                console.log(res);
                console.log(res.data);
            })*/
            alert("Submitted")
            //console.log(this.state.content)
            //---------------------------------------------------tag-------------------------------
            axios.get(`http://localhost:3001/tags/deletebyid/${this.props.workshopid}`).then(res => {
               console.log(res)
            })
            console.log(this.state.selectedValues)
            console.log(this.state.content.tags)
            this.state.content.tags.forEach(element=>{let sendTag = {
                    "workshop":this.props.workshopid,
                    "tag":element.name,
                    "workshopId":this.props.workshopid
                    }
                console.log(sendTag)
                axios.post(`http://localhost:3001/tags/create`,sendTag)
                }
            )
        }
    }
    cancelclick() {
        console.log("cancel clicked")
        window.location.assign('/workshop-detail/'+this.props.workshopid);
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

    componentDidMount() {
        //get workshopid from workshopEditPage
        //console.log(this.props.workshopid)
        
        axios.get(`http://localhost:3001/workshops/${this.props.workshopid}`).then(res => { 
            let initData = res.data
            console.log(initData.owner)
            console.log(this.state.username)
            console.log(this.props.urlUsername)
            //check real owner
            if (!this.onCorrectUser(initData.owner,this.state.username,this.props.urlUsername)) {
                alert("Invalid user")
                return
            }
            //console.log(initData[0])
            let initState = this.state.content
            let startTime = this.convertTimeStampToTime(initData.startTime)
            let endTime = this.convertTimeStampToTime(initData.endTime)
            let deadTime = this.convertTimeStampToTime(initData.deadlineTime)
            console.log(`\\${initData.pictureURL.split(`\\`)[2]}`)
             console.log(initData)
            // console.log(initData.place)
            initState.workshopName = initData.name
            initState.speakerName = initData.speakerName
            initState.date = startTime.date
            initState.sTime = startTime.time
            initState.eTime = endTime.time
            initState.cap = initData.capacity
            initState.cost = initData.cost
            initState.place = initData.place
            initState.ddate = deadTime.date
            initState.dtime = deadTime.time
            initState.publishTime = initData.publishTime
            initState.description = initData.description
            //initState.workshopPic = `\\${initData.pictureURL.split(`\\`)[2]}` 
            this.setState( initState ) 
            console.log(this.state.content)
        })
        axios.get(`http://localhost:3001/tags/findbyid/${this.props.workshopid}`).then(res => {
            let initTag = res.data 
            console.log(initTag)
            //console.log(initTag[1])
            let initState = this.state
            Object.values(initTag).forEach(element => {
                //console.log(element.tag)
                let tagData = {
                    name : element.tag.toLowerCase(),
                }
                //console.log(Object.values(initState.selectedValues))
                initState.selectedValues = initState.selectedValues.concat(tagData)
                initState.content.tags.push(tagData)
            })
            this.setState(initState)
            //console.log(this.state.selectedValues)
        })
    }
    componentWillMount(){
            
            let spl = document.cookie.split(';')
            let ck = {}
            let s=0
            for(let i=0 ;i< spl.length ; i++)
            {
                let temp = spl[i].split('=')
                console.log('temp: ',temp)
                ck[temp[0].trim()]=temp[1]
                if(temp[0].trim() === 'username' || temp[0].trim() === 'userType')
                    s+=1 
            }
            if(s===2) {
                this.setState({
                    isLoading: false,
                    username: ck['username'],
                    role: ck['userType']
                })
            }
        
    }

    render() {
        if (this.state.isLoading) return null
        console.log("hello Workshopeditor")
        return (
            <div>
                <div className="form-body">
                    <form>
                        <InputBox label="Workshop's Name"               name="workshopName" type="input" inputType="text"   onChange={this.handleChange} errMsg={this.state.errMsg.workshopName} value={this.state.content.workshopName}/>
                        <InputBox label="Speaker's Name"                name="speakerName"  type="input" inputType="text"   onChange={this.handleChange} errMsg={this.state.errMsg.speakerName} value={this.state.content.speakerName}/>
                        <InputBox label="Workshop's profile picture"    name="workshopPic"  type="file"  inputType="file"   onChange={this.handleChange} errMsg={this.state.errMsg.workshopPic} />
                        <InputBox label="Date"                          name="date"         type="input" inputType="date"   onChange={this.handleChange} errMsg={this.state.errMsg.date} value={this.state.content.date}/>
                        <InputBox label="Start time"                    name="sTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg={this.state.errMsg.sTime} value={this.state.content.sTime}/>
                        <InputBox label="End time"                      name="eTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg={this.state.errMsg.eTime} value={this.state.content.eTime}/>
                        <InputBox label="Capacity"                      name="cap"          type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cap} min="1" value={this.state.content.cap}/>
                        <InputBox label="Cost"                          name="cost"         type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cost} min="1" value={this.state.content.cost}/>
                        <InputBox label="Place"                         name="place"        type="text"  row={4} col={50}   onChange={this.handleChange} errMsg={this.state.errMsg.place} value={this.state.content.place}/>
                        <InputBox label="Deadline date"                 name="ddate"        type="input" inputType="date"   onChange={this.handleChange} errMsg={this.state.errMsg.ddate} value={this.state.content.ddate}/>
                        <InputBox label="Deadline time"                 name="dtime"        type="input" inputType="time"   onChange={this.handleChange} errMsg={this.state.errMsg.dtime} value={this.state.content.dtime}/>
                        <InputBox label="Description"                   name="description"  type="text"  row={4} col={50}   onChange={this.handleChange} errMsg={this.state.errMsg.description} value={this.state.content.description}/>
                        <InputBox label="Tags"                          type="dropD"        options={this.state.options}    onSelect = {this.onSelect}   onRemove = {this.onRemove}  selectedValues={this.state.selectedValues} errMsg={this.state.errMsg.tags}/>
                    </form>
                </div>
                <div id="button-body" className="text-center">
                    <button class="btn btn-primary btn-lg" onClick={() => this.submitclick()}>Submit</button>
                    <button class="btn btn-primary btn-lg" onClick={() => this.cancelclick()}>Cancel</button>
                </div>
            </div>
        )
    }
}
export default EditForm
