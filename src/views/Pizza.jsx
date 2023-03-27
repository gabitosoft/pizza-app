import { Layout } from 'antd'
import ListPizza from '../components/ListPizza'
import FormPizza from '../components/Pizza/FormPizza'

const { Content } = Layout

export default function Pizza () {
  return (
    <Layout>
      <Content>
        <FormPizza />
        <ListPizza />
      </Content>
    </Layout>
  )
}

