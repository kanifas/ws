import React, { useEffect, useState } from 'react'
import MuiSwitch from '@mui/material/Switch'

const Switch = ({ onChange = () => {} }) => {
  const [value, setValue] = useState(false)

  const handleChange = (event, value) => {
    setValue(value)
    onChange(value)
  }

  return (
    <>
      <MuiSwitch value={value} onChange={handleChange} />
      {value ? 'Вкл' : 'Выкл'}
    </>
  )
}

export default Switch