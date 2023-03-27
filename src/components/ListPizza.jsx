import { List } from 'antd'
import { useSelector } from 'react-redux'
import { Button } from 'antd'
import { DeleteOutlined } from '@ant-design/icons'

import { useDispatch } from 'react-redux'
import { deletePizza } from '../features/pizzas/pizzaSlice'

export default function ListPizza(props) {

  const pizzas = useSelector(state => state.pizzas)
  const dispatch = useDispatch()

  const onClickDelete = (id) => {
    dispatch(deletePizza({ id }))
  }

  return (
    <div>
      <List dataSource={pizzas} renderItem={
        (item) => (
          <List.Item 
            key={item.id}
            actions={[<Button onClick={() => onClickDelete(item.id)} type="primary" danger shape="circle" icon={<DeleteOutlined />}></Button>]}>
            <List.Item.Meta
              avatar={<img alt="pizza logo" src="./assets/pizza-image.png" width="40" />}
              title={item.name}
              description={item.description}
            />
          </List.Item>
        )
      }/>
    </div>
  )
}