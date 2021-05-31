import React from 'react'
import type { FC } from 'react'
import viewModel from './viewModel'

const About: FC = () => {
  const [count, setCount] = viewModel(99)
  return (
    <div>
      <p>about</p>
      <p>{count}</p>
      <p onClick={() => setCount(1)}>click if you wanna count up.</p>
    </div>
  )
}

export default About
