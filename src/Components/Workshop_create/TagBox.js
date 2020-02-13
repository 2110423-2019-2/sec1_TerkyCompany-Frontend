import React from 'react' ;

class TagBox extends React.Component {
    render() {
        return <div>
            {this.props.tags.map((tag,link)=>{
                return <div>
                    <a href={link}>{tag}</a>
                </div>
            })}
        </div>
    }
}
export default TagBox ;
