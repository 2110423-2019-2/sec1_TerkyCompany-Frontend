import React, { Component } from 'react'
import WorkshopItem from '../WorkshopItem/WorkshopItem';

class FilterForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: false,
            workshops:[{
                    id:1,
                    name:'testFirst',
                    workshopPic:null,
                    speakerName:'Park',
                    date:"2015-12-20T03:01:01.000z",
                    startTime:"2015-12-20T03:01:01.000z",
                    endTime:"2015-12-20T03:01:01.000z",
                    cap:111,
                    cost:111,
                    place:'111',
                    ddate:"2015-12-20T03:01:01.000z",
                    dtime:"2015-12-20T03:01:01.000z",
                    description:'fgfgfgfgfgfg',
                    tags:[{name: "business", id: 1},{name: "design", id: 3}]
                },
                {
                    id:2,
                    name:'testSecond',
                    workshopPic:null,
                    speakerName:'Too',
                    date:"2015-12-20T03:01:01.000z",
                    startTime:"2015-12-20T03:01:01.000z",
                    endTime:"2015-12-20T03:01:01.000z",
                    cap:222,
                    cost:222,
                    place:'222',
                    ddate:"2015-12-20T03:01:01.000z",
                    dtime:"2015-12-20T03:01:01.000z",
                    description:'sdsasdsasd',
                    tags:[{name: "data", id: 2}]
                },
                {
                    id:3,
                    name:'testThird',
                    workshopPic:"2015-12-20T03:01:01.000z",
                    speakerName:'Pol',
                    date:"2015-12-20T03:01:01.000z",
                    startTime:"2015-12-20T03:01:01.000z",
                    endTime:"2015-12-20T03:01:01.000z",
                    cap:333,
                    cost:333,
                    place:'333',
                    ddate:"2015-12-20T03:01:01.000z",
                    dtime:"2015-12-20T03:01:01.000z",
                    description:'tytytytytytyt',
                    tags:[{name: "design", id: 3},{name: "technology", id: 4}]
                },
            ],
            selectedFilter:[],
            shownWorkshop:[1,2,3]
        }
    }
    handleClick = (e) => {
        let filterName = e.target.id
        let isChecked = e.target.checked
        let filterList = this.state.selectedFilter
        let shownList = []
        let allWorkshop = this.state.workshops
        if(isChecked && !filterList.includes(filterName)) {
            filterList.push(filterName)
        }
        else if(!isChecked && filterList.includes(filterName)) {
            let index = filterList.indexOf(filterName);
            if (index !== -1) 
            filterList.splice(index, 1);
        }
        filterList.sort()
        if(filterList.length === 0) {
            for(let index in allWorkshop) {
                if(!shownList.includes(allWorkshop[index].id))
                shownList.push(allWorkshop[index].id)
            }
        }
        else {
            for(let index in allWorkshop) {
                let tagsInWorkshop = allWorkshop[index].tags
                for(let indexOfTag in tagsInWorkshop) {
                    let tag = tagsInWorkshop[indexOfTag].name
                    if(filterList.includes(tag) && !shownList.includes(allWorkshop[index].id)) {
                        shownList.push(allWorkshop[index].id)
                        break
                    }
                }
            }
            
        }
        shownList.sort()
        this.setState({selectedFilter:filterList})
        console.log(this.state.selectedFilter)
        this.setState({shownWorkshop:shownList})
        console.log(shownList)
    }

    handleChange = (e) => {
        
    }

    componentDidMount() {

    }

    goto = (id) => {
        window.location.assign('/workshop-detail/' + id)
    }

    filteredWorkshop = (workshop) => {
        let shownList = this.state.shownWorkshop
        if(shownList.includes(workshop.id)) {                
            return (
                <WorkshopItem item={workshop} />
            )
        }
    }

    render() {
        if (this.state.isLoading) return null
        console.log("hello Workshopfilter")
        return (
            <div>
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label className="title1">Search</label>
                        <input className="form-control" id="ex3" type="text" onChange={this.handleChange} placeholder="Search by name or Speaker's name"/>
                    </div>
                    <div className="form-group col-md-6">
                        <label className="title1">Category</label>
                        <form className="form-inline">
                            <input type="checkbox" onClick={this.handleClick} id="business" className="custom-control custom-checkbox"/>
                            <label className="checkbox-inline">Business</label>
                            <input type="checkbox" onClick={this.handleClick} id="data" className="custom-control custom-checkbox"/>
                            <label className="checkbox-inline">Data</label>
                            <input type="checkbox" onClick={this.handleClick} id="design" className="custom-control custom-checkbox"/>
                            <label className="checkbox-inline">Design</label>
                            <input type="checkbox" onClick={this.handleClick} id="technology" className="custom-control custom-checkbox"/>
                            <label className="checkbox-inline">Technology</label>
                        </form>
                    </div>
                </div>
                <div className="content">
                    <div>{this.state.selectedFilter}</div>
                    <div>
                    {
                        this.state.workshops.map(this.filteredWorkshop)
                    }
                    </div>
                </div>
            </div>
        )
    }
}
export default FilterForm
