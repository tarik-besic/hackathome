import React from 'react'
import ProjectInfo from '../../components/projectInfo';
import {useLocation} from 'react-router-dom';
const Project = () => {
    const location=useLocation();
    const props=location.state;
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
                active={props?.active}
            />
            
        </div>
    )
}

export default Project;