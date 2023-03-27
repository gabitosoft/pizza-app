import { Input } from 'antd'
import { useState, useEffect } from 'react'

export default function WithSearch(Component) {
  return function WithSearchComponent({title, items, ...props}) {

    const [dataSource, setDataSource] = useState([])

    useEffect(() => {
      setDataSource(items)
    }, [items])

    function onChangeInput(evt) {
      const text = evt.target.value
      const result = items.filter(item => String(item).toLowerCase().startsWith(String(text).toLowerCase()))
      setDataSource(result)
    }

    return(
      <div>
        <h2>{title}</h2>
        <Input placeholder={"Buscar ".concat(title)} onChange={onChangeInput} />
        <Component dataSource={dataSource} {...props} />
      </div>
    )
  }
}