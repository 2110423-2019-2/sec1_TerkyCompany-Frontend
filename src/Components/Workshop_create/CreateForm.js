import React from 'react' ;
import InputBox from './InputBox' ;
import TagBox from './TagBox' ;

class Form extends React.Component {
    constructor(props) {
        super(props) ;
        this.state = {
            isLoading : false,
            choseTag : [],
            errMsg: {
                workshopName: '',
                cap: '',
                cost: '',
            },
            content:{
                workshopName:null,
                workshopPic:null,
                date:null,
                sTime:null,
                eTime:null,
                cap:0,
                cost:0,
                place:null,
                ddate:null,
                dtime:null,
                description:null,
                tags:null
            }
        }
        this.handleChange = this.handleChange.bind(this) ;
        this.handleChoose = this.handleChoose.bind(this) ;
    }

    handleChange = (e) => {
        e.preventDefault() ;
        const {name,value} = e.target; 
        let err = this.state.errMsg ;
        let content = this.state.content ;
        switch(name) {
            case "workshopName":
                err.workshopName = value.length < 5 ? "Workshop's name must be at least 5 character" : '' ;
                content.workshopName = value ;
                break;
            case "workshopPic" :
                content.workshopPic = value ;
            case "date" :
                content.date = value ;
            case "sTime" :
                content.sTime = value ;
            case "eTime" :
                content.eTime = value ;
            case "cap":
                err.cap = (value < 0 || value > 1000) ? "Capacity must be number between 0-1000" : '' ;
                content.cap = value ;
                break;
            case "cost":
                err.cost = value < 0 ? "Cost must be positive number" : '' ;
                content.cost = value ;
                break;
            case "place" :
                content.place = value ;
            case "ddate" :
                content.ddate = value ;
            case "dtime" :
                content.dtime = value ;
            case "description" :
                content.description = value ;
            case "tags" :
                content.tags = value ;
            default:
                console.log(name)
                break;
        }
        this.setState({errMsg:err, content:content});
    }

    handleChoose = (e) => {
        let val = e.target.value ;
        var tag = this.state.choseTag ;
        if(!tag.includes(val)){
            tag.push(val)
        }
        this.setState({choseTag:tag}) ;
    }

    removeTag(tagName) {
        var tag = this.state.choseTag 
        if(tag.includes(tagName)){
            tag = tag.filter(e => e !== tagName)
        }
    }
    render() {
        if (this.state.isLoading) return null
        console.log("hello Create form")
        return (
            <div>
                <div className="form">
                    <form>
                        <InputBox label="Workshop's Name"               name="workshopName" type="input" inputType="text"   onChange={this.handleChange} errMsg={this.state.errMsg.workshopName} placeholder="Workshop's name" />
                        <InputBox label="Workshop's profile picture"    name="workshopPic"  type="input" inputType="file"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="Date"                          name="date"         type="input" inputType="date"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="Start time"                    name="sTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="End time"                      name="eTime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="Capacity"                      name="cap"          type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cap}  onChange={this.handleChange} min="1" />
                        <InputBox label="Cost"                          name="cost"         type="input" inputType="number" onChange={this.handleChange} errMsg={this.state.errMsg.cost} onChange={this.handleChange} min="1" />
                        <InputBox label="Place"                         name="place"        type="text"  row={3} col={10}   onChange={this.handleChange} placeholder="Location of the workshop"/>
                        <InputBox label="Deadline date"                 name="ddate"        type="input" inputType="date"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="Deadline time"                 name="dtime"        type="input" inputType="time"   onChange={this.handleChange} errMsg="" />
                        <InputBox label="Description"                   name="description"  type="text"  row={3} col={10}   onChange={this.handleChange} placeholder="Briefly explain the workshop"/>
                        <InputBox label="Tags"                          name="tags"         type="dropD" tags={this.props.tags} onChange={this.handleChoose} />
                    </form>
                </div>
                <div>
                    <TagBox tags={this.state.choseTag}/>
                </div>
                <div>
                    <button />
                    <button />
                </div>
            </div>
        )
    }
}

export default Form ;