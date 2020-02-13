import React from 'react' ;
import './SideBar.css' ;

class SideBar extends React.Component {

    render() {
        return (
            <div id="wrapper">
                <ul id="link-side">
                    {this.props.content.map((text,link)=>{
                        return <li><a id="link-side" href={link}>{text}</a></li>
                    })}
                </ul>
            </div>
        )
    }
}
export default SideBar ;