import React, { useState, useRef, useEffect } from 'react'
import TextField from '@mui/material/TextField'

const Range = ({
  onChange = () => {}
}) => {
  const [value, setValue] = useState(0)
  const prev = useRef(value)

  const handleChange = (event) => {
    let { value } = event.target
    const regex = /^\d{0,3}$/

    if (value === '') {
      value = 0
    }

    if (value.length === 2 && value[0] === '0') {
      value = value[1]
    }

    if (regex.test(value) && Number(value) <= 100) {
      setValue(value)
      onChange(Number(value))
      prev.current = value
    } else {
      setValue(prev.current)
      onChange(Number(prev.current))
    }
  }

  useEffect(() => {
    onChange(Number(value))
  }, [onChange, value])

  return (
    <TextField
      label="от 0 до 100"
      variant="standard"
      value={value}
      onChange={handleChange}
    />
  )
}

export default Range