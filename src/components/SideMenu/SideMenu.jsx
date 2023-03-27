import { Menu } from 'antd'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import { Link } from 'react-router-dom'

import './SideMenu.css'

const items = [
  { key: 1, label: (<Link to="/">Home</Link>)},
  { key: 2, label: (<Link to="/pizzas">Pizzas</Link>)},
  { key: 3, label: (<Link to="toppings">Ingredientes</Link>)}
]

export default function SideMenu(props) {
  const { contextTheme } = useContext(ThemeContext)
  return (
    <Menu 
      className="App-sidemenu"
      theme={contextTheme.name}
      defaultSelectedKeys={['1']}
      items={items}
      mode="inline"
    />
  )
}
