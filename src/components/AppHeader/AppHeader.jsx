import { Button, } from 'antd'
import { BgColorsOutlined } from '@ant-design/icons'
import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

import './AppHeader.css'

export default function AppHeader(props) {
  const { contextTheme, switchTheme } = useContext(ThemeContext)

  const onClickSwithButton = () => {
    console.log('Click Change Theme')
    switchTheme()
  }

  return (
    <div className="App-container-header">
      <span className="App-title-header" style={{ color: contextTheme.color }}>PizzApp</span>
      <Button shape="circle" onClick={onClickSwithButton} icon={<BgColorsOutlined />}></Button>
    </div>
  )
}
