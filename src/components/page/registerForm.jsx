import React, { useState, useEffect } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import API from '../../api'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'


const RegisterForm = () => {
    const [data, setData] = useState({ email: '', password: '', profession: '', sex: '1', qualities: [] })
    const [errors, setErrors] = useState({})

    const [profs, setProfs] = useState()
    const [quals, setQuals] = useState()

    useEffect(() => {
        API.professions.fetchAll().then(data => setProfs(data))
        API.qualities.fetchAll().then(data => setQuals(data))
    }, [])

    const sex = [
        { value: '1', name: 'Мужской' },
        { value: '2', name: 'Женский' }
    ]

    const validatorConfig = {
        email: {
            isRequired: { message: 'Email обязателен для заполнения' },
            isEmail: { message: 'Неверный формат Email' }
        },
        password: {
            isRequired: { message: 'Пароль обязателен для заполнения' },
            isUpperSymbol: { message: 'Пароль должен содержать хотя бы одну заглавную букву' },
            isDigit: { message: 'Пароль должен содержать хотя бы одну цифру' },
            isMin: {
                message: 'Длина пароля должна быть не менее 8 символов',
                value: 8
            }
        },
        profession: {
            isRequired: { message: 'Необходимо указать профессию' }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    return (
        <>
            <h3 className='mb-4'>Register</h3>
            <form onSubmit={handleSubmit}>
                <TextField label='Email' name='email' value={data.email} errors={errors.email} onChange={handleChange} />
                <TextField label='Пароль' type='password' name='password' value={data.password} errors={errors.password} onChange={handleChange} />
                {profs && <SelectField label='Профессия' name='profession' value={data.profession} data={profs} errors={errors.profession} onChange={handleChange} />}
                <RadioField label='Пол' name='sex' value={data.sex} options={sex} onChange={handleChange} />
                {quals && <MultiSelectField label='Качества' name='qualities' value={data.qualities} data={quals} onChange={handleChange} />}
                <button className='btn btn-primary w-100 mx-auto' disabled={Object.values(errors).join('').trim() !== ''}>Зарегистрироваться</button>
            </form>
        </>
    )


    function handleChange ({ target }) {
        setData((prevState) => ({ ...prevState, [target.name]: target.value }))
    }

    function handleSubmit (event) {
        event.preventDefault()
        console.log(data)
    }

    function validate () {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
    }
}

export default RegisterForm
