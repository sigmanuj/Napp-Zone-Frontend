import React from 'react'

const NapCard = (props) => {
  console.log(props.napObj.picture)
  return (
    <div className="ui card">
    <div>
      <h3>{props.napObj.name}</h3>
      <img src={props.napObj.picture} alt="logo" />
      <h5>Location: {props.napObj.location}</h5>
      <p>Description: {props.napObj.description}</p>
    </div>
    <br />
    </div>
  )
}

export default NapCard
// <img src={`../images/${props.napObj.name}.jpg`} alt="logo" />
