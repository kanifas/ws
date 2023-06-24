import React from 'react'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'
import { Table } from '../../components'
import cn from './styles.module.css'

const Main = ({ data = [] }) => {

  return (
    <div className={cn.main}>
      {
        data.length
        ? <Table data={data} />
        : 'Нет данных. Добавьте строки'
      }
      <br /><br /> 
      <Link to="/settings">
        <Button variant="contained">Добавить строку</Button>
      </Link>
    </div>
  )
}

export default Main