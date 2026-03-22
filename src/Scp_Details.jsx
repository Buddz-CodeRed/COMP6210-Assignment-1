import { scp_items } from './Data'
import { useParams } from 'react-router';

export default function Scp_Details()
{
    // instanciate the last string extracted in the URL when clicked on [useParam = URL Reader]
    const {subject} = useParams();
    // loop through the array to find the object value that matches the extracted string. When found stop looping.
    const currentObject = scp_items.find(s => s.subject === subject)
    
    return(
        <div className='shadow_wrapper'>
            <div className='header_wrapper'>

                <h2 className='file_heading'>SCP Foundation</h2>

                <div className='stamp_logo'>
                    <img src="/images/stamp-Photoroom.png" alt="Scp Logo" className='logo'/>
                </div>
                {/* access a specific property of the current array and display it */}
                <div className='header_items'>
                    <div className='sec_1'>
                        <h3>Subject</h3>
                        <h2> {currentObject.subject}</h2>
                    </div>
                    <div className='sec_2'>
                        <h3>Class</h3>
                        <h2>{currentObject.class}</h2>
                    </div>                    
                </div>
                {/* <img src={currentObject.icon} alt="Icon" className='currentObjectIcon'/>                 */}
            </div>
            <img src={currentObject.icon} alt="Icon" className='currentObjectIcon'/>
            <img src={currentObject.image} alt="SCP Image" className="scpImage"/>

            <div className='glass_morph'>
                <div className='desc'>
                    <h2>Description</h2>
                    <p>{currentObject.description}</p>
                </div>
                <div className='contain'>
                    <h2>Containment Procedure</h2>

                    {/* Confirms if the objects type is a string */}
                    {typeof currentObject.containment === 'string' ? (
                        // Display string directly
                        <p>{currentObject.containment}</p>
                    ):(
                        // extract all values from the object and convert is to an array
                        // loop through each item in the array and use the placeholder (count(i)) to id each value
                        Object.values(currentObject.containment).map((procedure, i) => (
                            // display the current value of (i)
                            <p key={i}>{procedure}</p>
                        ))
                    )}
                </div>
            </div>
        </div>
    )
}