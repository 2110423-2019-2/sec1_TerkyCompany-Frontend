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
                workshopName:'test',
                workshopPic:null,
                speakerName:'',
                date:null,
                sTime:null,
                eTime:null,
                cap:0,
                cost:0,
                place:'test',
                ddate:null,
                dtime:null,
                description:'test',
                tags:null
            },
            options: [{name: 'Srigar', id: 1},{name: 'Sam', id: 2},{name: 'Johnny', id: 3}],
            selectedValues: [{name: 'Srigar', id: 1},],
            initData: [],
        }
        this.handleChange = this.handleChange.bind(this)
    }


    handleChange = (e) => {
        e.preventDefault() 
        const {name,value} = e.target 
        let err = this.state.errMsg 
        let content = this.state.content 
        switch(name) {
            case "workshopName":
                if (value.length < 5) {
                    err.workshopName = "Workshop's name must be at least 5 character"
                }
                else if (value.length > 40) {
                    err.workshopName = "Workshop's name must be at most 40 character"
                }
                else {
                    err.workshopName = ''
                    content.workshopName = value
                }
                break
            case "speakerName":
                if (value === '') {
                    err.speakerName = "This cannot be empty"
                }
                else if (value.length > 80) {
                    err.speakerName = "Speaker's name must be at most 80 character"
                }
                else {
                    err.speakerName = ''
                    content.speakerName = value
                }
                break
            case "workshopPic" :
                err.workshopPic = value === '' ? "This cannot be empty" : '' 
                content.workshopPic = value
                console.log(value)
                break
            case "date" :
                err.date = value == null ? "This cannot be empty" : '' 
                content.date = value 
                break
            case "sTime" :
                err.sTime = value == null ? "This cannot be empty" : '' 
                content.sTime = value 
                break
            case "eTime" :
                err.eTime = value == null ? "This cannot be empty" : '' 
                content.eTime = value 
                break
            case "cap":
                err.cap = (value < 0 || value > 1000) ? "Capacity must be number between 0-1000" : '' 
                content.cap = value 
                break
            case "cost":
                err.cost = value < 0 ? "Cost must be positive number" : '' 
                content.cost = value 
                break
            case "place" :
                if (value === '') {
                    err.place = "This cannot be empty"
                }
                else if (value.length > 40) {
                    err.place = "Place must be at most 40 character"
                }
                else {
                    err.place = ''
                    content.place = value
                }
                break
            case "ddate" :
                err.ddate = value == null ? "This cannot be empty" : '' 
                content.ddate = value 
                break
            case "dtime" :
                err.dtime = value == null ? "This cannot be empty" : '' 
                content.dtime = value 
                break
            case "description" :
                err.description = value.length === 0 ? "This cannot be empty" : '' 
                content.description = value 
                break
            default:
                console.log(name)
                break
        }
        this.setState({errMsg:err, content:content})
    }

    onSelect = (selectedList, selectedItem) => {
        let err = this.state.errMsg 
        let content = this.state.content 
        err.tags = selectedList.length === 0 ? "This cannot be empty" : ''
        content.tags = selectedList
        this.setState({errMsg:err, content:content})
    }

    onRemove = (selectedList, removedItem) => {
        let err = this.state.errMsg 
        let content = this.state.content 
        err.tags = selectedList.length === 0 ? "This cannot be empty" : ''
        content.tags = selectedList
        this.setState({errMsg:err, content:content})
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
            axios.get(`http://localhost:3000/workshops`).then(res => {
                const persons = res.data[0];
                console.log('asd');
                console.log(persons);
                this.state.content = {"speakerName":"asd"};
                //this.setState({speakerName:"asd"});
                this.setState(this.state.content);
             })
            alert("Submitted")
            console.log(this.state.content)
        }
    }

    cancelclick() {
        console.log("cancel clicked")
        console.log(window.location.host)
<<<<<<< HEAD
        let err = this.state.errMsg 
        let content = this.state.content
        content.workshopName = "miw.tanakorn"
        this.setState({errMsg:err, content:content})
        console.log(this.state.content);
        
||||||| merged common ancestors
=======
        // let content = this.state.content
        // content.workshopName = "miw.tanakorn"
        // let timeAndDate = this.convertTimeStampToTime("2015-12-20T03:01:01.000z")
        // content.dtime = timeAndDate["time"]
        // content.ddate = timeAndDate["date"]s
        // this.setState({content:content})
        // console.log(this.state.content)
        // console.log(this.convertTimeStampToTime("2015-12-20T03:01:01.000z"))
    }

    convertTimeStampToTime = (timeStamp) => {
        let time = timeStamp.slice(11,16)
        let date = timeStamp.slice(0,10)
        let timeAndDate = {"time":time, "date":date}
        return timeAndDate
>>>>>>> refs/remotes/origin/workshop-editor
    }

    componentDidMount() {
        axios.get('http://localhost:3001/endy/1/get').then(res => { 
            let initData = res.data 
            this.setState({ initData }) 
        })
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
                        <InputBox label="Workshop's profile picture"    name="workshopPic"  type="file"  inputType="file"   onChange={this.handleChange} errMsg={this.state.errMsg.workshopPic} value={this.state.content.workshopPic}/>
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
                <div id="button-body" class="text-center">
                    <button class="btn btn-primary btn-lg" onClick={() => this.submitclick()}>Submit</button>
                    <button class="btn btn-primary btn-lg" onClick={() => this.cancelclick()}>Cancel</button>
                </div>
            </div>
        )
    }
}
export default EditForm
