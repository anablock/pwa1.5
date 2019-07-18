import React from 'react'
import ProjectSummary from './ProjectSummary'
import { Link } from 'react-router-dom'

const ProjectList = ({project}) => {
    return (
        <div className = "project-list section">
            { project && project.map(project => {
                return (
                    <Link to={'/project/' + project.id} key={project.id} >
                        <ProjectSummary project={project} />
                    </Link>
                )
            })}
        </div>
    )
}

export default ProjectList