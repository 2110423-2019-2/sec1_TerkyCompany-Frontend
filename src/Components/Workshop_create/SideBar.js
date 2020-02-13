import React from 'react' ;

class SideBar extends React.Component {

    render() {
        return (
            <div>
                <ul>
                    {this.props.content.map(text=>{
                        return <li>text</li>
                    })}
                </ul>
            </div>
        )
    }
}
export default SideBar ;