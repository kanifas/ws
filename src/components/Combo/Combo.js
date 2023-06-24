import React from 'react'
import TextField from '@mui/material/TextField'
import Autocomplete from '@mui/material/Autocomplete'

const Combo = ({
  options = [],
  onChange = () => {}
}) => {
  const handleChange = (event, data) => {
    onChange(data)
  }

  return (
    <Autocomplete
      disablePortal
      options={options}
      sx={{ width: 170 }}
      onChange={handleChange}
      renderInput={(params) => <TextField {...params} label="Выберите" />}
    />
  )
}

export default Combo