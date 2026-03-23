import { scp_items } from '../service/Data'
import { useParams } from 'react-router';

export default function Scp_Details()
{
    // instanciate the last string extracted in the URL when clicked on [useParam = URL Reader]
    const {subject} = useParams();
    // loop through the array to find the object value that matches the extracted string. When found stop looping.
    const currentObject = scp_items.find(s => s.subject === subject)
    
    return(
        <div className='shadow_wrapper'>
            
            {/* Header Section */}
            <div className="header_container">

                <div className="header_wrapper">
                    <h2 className='file_heading'>SCP Foundation</h2>

                    <div className="stamp_logo">
                        <img src="/src/assets/images/stamp-Photoroom.png" alt="Scp Logo" className='logo'/>
                    </div>

                    <div className="header_items">
                        <div className='sec_1'>
                            <h3>Subject</h3>
                            <h2>{currentObject.subject}</h2>
                        </div>

                        <div className="sec_2">
                            <h3>Class</h3>
                            <h2>{currentObject.class}</h2>
                        </div>
                    </div>           
                </div>

                <img src={currentObject.icon} alt="Subject Icon" className='currentObjectIcon' />

            </div>
            <div className="glass_morph">
                <div className="desc">
                    <h2>Description</h2>
                    <p>{currentObject.description}</p>
                </div>

                <div className="image_container">
                    <img src={currentObject.image} alt="SCP Image" className="scpImage"/>
                </div>

                <div className="contain">
                    <h2>Containment Procedure</h2>

                    {typeof currentObject.containment === 'string' ? (
                    <p>{currentObject.containment}</p>
                    ) : (
                        Object.values(currentObject.containment).map((procedure, i) => (
                            <p key={i}>{procedure}</p>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}