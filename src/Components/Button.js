import React from 'react'

const Clicked = text => {
  console.log('you clicked', text)
}

const Button = props => (
  <button onClick={() => Clicked(props.onClick)}>{props.text}</button>
)

export default Button
