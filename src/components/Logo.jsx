import React from 'react'

const Logo = ({lg}) => {
  return (
    <div style={{right:"30px" , position:"fixed", top:"30px" }}>
      <img style={{width:"80px" ,height:"100px",paddingTop:"10px"}} src={lg} />
    </div>
  )
}

export default Logo
