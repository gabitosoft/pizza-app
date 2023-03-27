import { Row, Col } from 'antd'
// import ListPizza from '../components/ListPizza'
// import ListTopping from '../components/ListTopping'
import SignIn from '../components/SignIn'

// import WithSearch from '../components/WithSearch'

// const pizzas = ['Hawaiana', 'Torino', 'Parma', 'Bellagio', 'Especial, Cuatro estaciones', 'Diabla']
// const toppings = ['Tomate', 'Salchicha', 'Muzarella', 'Oliva', 'Peperoni', 'Albaca', 'Tocino']

// const WithSearchListPizza = WithSearch(ListPizza)
// const WithSearchListTopping = WithSearch(ListTopping)

export default function Home() {
  return (
    <Row>
      {/* <Col span={6}>
        <WithSearchListPizza title="Pizzas" items={pizzas} />
        <WithSearchListTopping title="Toppings" items={toppings} />
      </Col> */}
      <Col span={12}>
        <img className="App-image-content" alt="Pizza Menu" src="./assets/pizza-menu.jpg"/>
      </Col>
      <Col span={6}>
        <SignIn />
      </Col>
    </Row>
  )
}
