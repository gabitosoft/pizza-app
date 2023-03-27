import { Layout, Space } from 'antd'
import SideMenu from './components/SideMenu/SideMenu'
import AppHeader from './components/AppHeader/AppHeader'

import { useContext } from 'react'
import { ThemeContext } from './contexts/ThemeContext'

import { Routes, Route } from 'react-router-dom'

import Home from './views/Home'
import Pizza from './views/Pizza'
import Topping from './views/Topping'

import './App.css'

const { Header, Sider, Content, Footer } = Layout

function displayYear() {
  return new Date().getFullYear()
}

function App() {
  const { contextTheme } = useContext(ThemeContext)

  return (
    <Space direction="vertical" className="App-space">
      <Layout>
        <Header className="App-header" style={{ backgroundColor: contextTheme.background }}>
          <AppHeader />
        </Header>
        <Layout>
          <Sider>
            <SideMenu />
          </Sider>
          <Content className="App-content">
            <Routes>
              <Route path="/" element={<Home />}/>
              <Route path="/pizzas" element={<Pizza />}/>
              <Route path="/toppings" element={<Topping />}/>
            </Routes>
          </Content>
        </Layout>
        <Footer className="App-footer">UMSS &copy; {displayYear()}</Footer>
      </Layout>
    </Space>
  )
}

export default App
