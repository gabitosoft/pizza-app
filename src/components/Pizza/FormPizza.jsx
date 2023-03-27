import { Button, Modal, Input } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addPizza } from '../../features/pizzas/pizzaSlice'

export default function FormPizza() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [pizza, setPizza] = useState({
    name: '',
    description: ''
  })

  const dispatch = useDispatch()

  const showModal = () => {
    setIsModalOpen(true)
  }

  const handleOk = () => {
    dispatch(addPizza(pizza))
    setIsModalOpen(false)
  }

  const handleCancel = () => {
    setIsModalOpen(false)
  }

  const onChangeName = (evt) => {
    console.log(evt.target.value)
    setPizza({
      ...pizza,
      name: evt.target.value
    })
  }

  const onChangeDescription = (evt) => {
    console.log(evt.target.value)
    setPizza({
      ...pizza,
      description: evt.target.value
    })
  }

  return (
    <div>
      <Button type="primary" onClick={showModal}>Agreagar Pizza</Button>
      <Modal 
        destroyOnClose
        title="Agregar Pizza" 
        open={isModalOpen} 
        onOk={handleOk} 
        onCancel={handleCancel}>
        <Input name="name" placeholder="Nombre Pizza" onChange={onChangeName}/>
        <Input.TextArea name="description" placeholder="Descripcion" onChange={onChangeDescription}/>
      </Modal>
    </div>
  )
}
