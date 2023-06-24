import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import { useSocket } from '../../socket'
import { Range, Combo, Switch } from '../../components'
import cn from './styles.module.css'

const Settings = () => {
  const socket = useSocket()
  const navigate = useNavigate()

  const [range, setRange] = useState()
  const [color, setColor] = useState()
  const [swich, setSwich] = useState()

  const handleSubmit = () => {
    socket.send(JSON.stringify({
      data: { range, color, swich }
    }))
    navigate('/')
  }

  const colorItems = [
    {label: 'Белый', value: 'white'},
    {label: 'Черный', value: 'black'},
    {label: 'Красный', value: 'red'},
    {label: 'Зеленый', value: 'green'},
    {label: 'Малиновый', value: 'mangento'},
    {label: 'Синий', value: 'blue'},
  ]

  const isButtonDisabled = !Number.isInteger(Number(range)) || !color

  return (
    <div className={cn.settings}>
      <Box sx={{marginBottom: '30px'}}>
        <Range onChange={value => {
          setRange(value)}
        } />
      </Box>

      <Box sx={{marginBottom: '30px'}}>
        <Combo options={colorItems} onChange={value => setColor(value?.label)} />
      </Box>
      
      <Box sx={{marginBottom: '30px'}}>
        <Switch onChange={value => setSwich(value)} />
      </Box>

      <Button disabled={isButtonDisabled} variant="contained" onClick={handleSubmit}>
        Отправить
      </Button>
    </div>
  )
}

export default Settings