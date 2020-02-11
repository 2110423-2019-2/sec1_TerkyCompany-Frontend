import React from 'react';
import Tag from './Tag';
import './TagList.css';

class TagList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        }
    }

    render() {
        return (
            <div className="TagList">
                {
                    this.props.tags.map(tag =>{
                        return <Tag tag={tag}/>;
                    })
                }
            </div>
        );

    }
}

export default TagList;