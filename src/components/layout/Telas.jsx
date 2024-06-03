import React from 'react'
import './Telas.css'

function Telas(props) {
    const cardStyle = {
        backgroundColor: props.color || '#F00',
        borderColor: props.color || '#F00',
    }


    return (
        <div className='Card' style={cardStyle}>
            <div className='Title'>Telas</div>
             <div className='Content'></div>
           
        </div>
    );
    
}

export default Telas