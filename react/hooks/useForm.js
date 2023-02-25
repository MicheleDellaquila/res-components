import { useCallback, useState } from "react"

const useForm = (initialState, schema) => {
  const [fields, setFields] = useState(initialState)
  const [errors, setErrors] = useState({})

  // reset form
  const resetForm = useCallback(() => {
    setFields({ ...initialState })
  }, [initialState])

  // reset input to intialState's value
  // const resetInput = useCallback(
  //   field => {
  //     setFields(prev => {
  //       return { ...prev, [field]: initialState[field] }
  //     })
  //   },
  //   [initialState]
  // )

  //   set errors
  //   const setErrorsForm = useCallback(errors => {
  //     setErrors({ ...errors })
  //   }, [])

  // clear input error
  const clearInputError = useCallback(
    field => {
      delete errors[field]
      setErrors({ ...errors })
    },
    [errors]
  )

  // change field
  const changeInput = useCallback(
    event => {
      const { name, value, checked } = event?.target

      // clear input error
      if (errors[name]) clearInputError(name)

      setFields(prev => {
        return { ...prev, [name]: value ?? checked }
      })
    },
    [clearInputError]
  )

  // submit
  const onSubmit = useCallback(
    (e, submitFunction) => {
      e.preventDefault()

      // if schema doesn't exist
      if (!schema) return submitFunction()

      // validation form
      const errors = schema.parse(fields)

      // check if there are error
      if (Object.keys(errors).length) {
        setErrors({ ...errors })
      } else {
        return submitFunction()
      }
    },
    [fields, schema]
  )

  return {
    fields,
    errors,
    changeInput,
    clearInputError,
    resetForm,
    onSubmit,
  }
}

export default useForm
