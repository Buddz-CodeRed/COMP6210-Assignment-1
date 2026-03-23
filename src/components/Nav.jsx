import { Link } from 'react-router'
import { scp_items } from '/src/service/Data'
import homeIcon from '/src/assets/images/home_icon-Photoroom.png'

export const SCPIconList = ({itemClass, iconClass = "navIcon"}) => {
    return (
        <>
            {scp_items.map(objects => (
                <div key={objects.subject} className={itemClass}>
                    <Link to={`/objects/${objects.subject}`}>
                        <img src={objects.icon} alt="Subject Icon" className={iconClass} />              
                    </Link>
                </div>
            ))}
        </>
    );
};

export default function Nav() 
{
    return(
        <div className='navContainer'>
            <nav>
                {/* Create link for Home */}
                <div className='navItem'>
                    <div className="hover_container">
                        <Link to='/Home'>
                            <img src={homeIcon} alt="Home Icon" className='navIcon homeIcon'></img>
                        </Link>
                        <span className='hover-id'>Home</span>
                    </div>
                </div>
                {   // Use the map method to iterate through the scp_items array with the key 'subject' to render a link for each object
                    scp_items.map(
                        // The 'object' variable will represent each individual item currently being processed in the loop e.g. iteration 1: { "subject": "SCP-173", "class": "Euclid", "description": "Statue...", "containment": "Locked container..." }...
                        objects => (
                            // set a unique key 'subject':string for this element block
                            <div key={objects.subject} className='navItem'>
                                {/* set each string value of subject as a url link */}
                                {/* add tooltip when cursor hovers over icon */}
                                <div className="hover_container">
                                    <Link to={`/objects/${objects.subject}`}>
                                        <img src={objects.icon} alt='icon' className='navIcon'></img>
                                    </Link>
                                    <div className="hover_container">
                                        <span className="hover-id">{objects.subject}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    )
                }
            </nav>
        </div>
    )
}
