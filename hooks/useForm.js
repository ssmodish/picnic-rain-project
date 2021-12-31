import { useState } from 'react'

const useForm = (initialValues) => {
  const [values, setValues] = useState(initialValues)

  const handleChanges = (e) => {
    console.log(e.target.name + ': ' + e.target.value)

    setValues({
      ...values,
      [e.target.name]: e.target.value,
    })
  }

  const clearForm = (e) => {
    e.preventDefault()
    setValues(initialValues)
  }

  return [values, handleChanges, clearForm]
}

export default useForm
