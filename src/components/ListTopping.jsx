import { List } from 'antd'

export default function ListTopping(props) {
  return (
    <div>
      <List dataSource={props.dataSource} renderItem={
        (item) => (
          <List.Item>{item}</List.Item>
        )
      }/>
    </div>
  )
}