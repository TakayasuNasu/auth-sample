import {useState, useEffect} from 'react'

const viewModel = (num = 0): [number, (value: number) => void] => {
  const [count, setToCount] = useState(num)
  useEffect(() => {
    console.log(count)
  },[])
  const setCount = (value) => setToCount(count + value)
  return [count, setCount]
}

export default viewModel