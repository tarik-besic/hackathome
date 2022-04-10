import React from 'react'
import ProjectInfo from '../../components/projectInfo';
const Project = (props) => {
    return (
        <div className='project-wrapper'>

            <ProjectInfo
                image={props?.image}
                organizer={props?.organizer}
                date={props?.date}
                time={props?.time}
                hoursToGet={props?.hoursToGet}
                volNeeded={props?.volNeeded}
                name={props?.name}
                type={props?.type}
                location={props?.location}
                desProj={props?.desProj}
            />
            
        </div>
    )
}

export default Project;