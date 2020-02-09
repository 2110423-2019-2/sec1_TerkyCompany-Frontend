import React from 'react';
import './WorkshopDetail.css';
import WorkshopDetailHeader from './WorkshopDetailHeader';
import WorkshopDetailBody from './WorksopDeatailBody';

class WorkshopDetail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
            workshop: {
                name: "Jojo's pose training",
                place: '@Barn por mueng',
                startTime: '10.00',
                endTime: '12.00',
                pictureUrl: 'https://steamuserimages-a.akamaihd.net/ugc/934932188035608878/D6FEE6A44BB9A268648C65F015737C7A8828D993/?imw=637&imh=358&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=true',
                cost: 5000,
                notAvailableSeat: 20,
                totalSeat: 50,
                description: 'tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie  tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie'+
                'tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie'+
                'tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie'+
                'tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie'+
                'tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie'+
                'tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie'+
                'tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pietagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie tagina bobo gago yolo yolo choco choco pie',
                instructorName: 'Mr.Abe Yaranaika senpai',
                instructorImageSrc: 'https://image.dek-d.com/27/0254/1102/t_114820530',
                tags: ['eiei','hoho','bobo']
            }
        }
    }

    componentDidMount() {
    }

    render() {
        if (this.state.isLoading) return null;
        console.log("hello Workshop-Detail page");
        return (
            <div>
                <WorkshopDetailHeader workshop={this.state.workshop} />
                <WorkshopDetailBody workshop={this.state.workshop} />
            </div>
        );
    }
}

export default WorkshopDetail;