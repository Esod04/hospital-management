import React from 'react'
import './doctorTiles.css'
const DoctorTiles = ({params}) => {
  return (
    <div>
        <div className="tile_container">
            <div className="tile">
                <div className='tile_details'>
                    <center>
                    <span className='tile_name'>{params.firstName} {params.lastName}</span><br />
                    <span className='tile_spec'>{params.post}</span>
                    </center>
                </div>
                <div className='tile_desc'>
                    <p>{params.phone}</p>
                    <p>{params.mail}</p>
                    <p>{params.education}</p>
                    <p>{params.post}</p>
                    <p>{params.department}</p>
                    <p>{params.specialization}</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default DoctorTiles
