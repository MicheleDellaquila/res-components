import { useCallback, useState } from "react"

const useForm = (initialState, schema) => {
  const [fields, setFields] = useState(initialState)
  const [errors, setErrors] = useState({})

  // reset form fields
  const resetForm = useCallback(() => {
    setFields({ ...initialState })
  }, [initialState])

  // set errors form
  const setErrorsForm = useCallback(errors => {
    setErrors({ ...errors })
  }, [])

  // clear error
  const onClearError = useCallback(
    field => {
      delete errors[field]
      setErrors({ ...errors })
    },
    [errors]
  )

  // change field
  const onChange = useCallback(
    event => {
      const { type, name, value, checked, files } = event?.target

      // clear error field
      if (errors[name]) onClearError(name)

      // check target event type is checkbox
      if (type === "checkbox") {
        setFields(prev => {
          return { ...prev, [name]: checked }
        })
        return
      }

      setFields(prev => {
        return { ...prev, [name]: value ?? files[0] }
      })
    },
    [onClearError]
  )

  // submit
  const onSubmit = useCallback(
    (e, submit) => {
      e.preventDefault()
      const formData = new FormData(e.currentTarget)

      // if schema doesn't exist
      if (!schema) return submit()

      // validation form with zod
      const errors = schema.parse(fields)

      if (!Object.keys(errors).length) return setErrors({ ...errors })
      submit(formData)
    },
    [fields]
  )

  return {
    fields,
    errors,
    onChange,
    resetForm,
    setErrorsForm,
    onSubmit,
  }
}

export default useForm
