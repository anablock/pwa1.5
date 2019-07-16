import React from 'react'

function ProjectDetails(props) {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className = "container section project-details">
            <div className = "card z-depth-0">
                <div className = "card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>lorem ipsum dolor sit</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Anablock</div>
                    <div>July 14, 2019</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails    