import React, { useState, useEffect } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import CheckField from '../common/form/checkField'


const LoginForm = () => {
    const [data, setData] = useState({ email: '', password: '', checkText: true })
    const [errors, setErrors] = useState({})

    const checkText = <span>Оставаться в системе</span>

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
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    return (
        <>
            <h3 className='mb-4'>Login</h3>
            <form onSubmit={handleSubmit}>
                <TextField label='Email' name='email' value={data.email} errors={errors.email} onChange={handleChange} />
                <TextField label='Пароль' type='password' name='password' value={data.password} errors={errors.password} onChange={handleChange} />
                <CheckField label={checkText} name='checkText' isCheck={data.checkText} onChange={handleChange} />
                <button className='btn btn-primary w-100 mx-auto' disabled={Object.values(errors).join('').trim() !== ''}>Войти</button>
            </form>
        </>
    )


    function handleChange ({ target }) {
        if (target.type === 'checkbox') {
            setData((prevState) => ({ ...prevState, [target.name]: !data[target.name] }))
        }
        else {
            setData((prevState) => ({ ...prevState, [target.name]: target.value }))
        }
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

export default LoginForm
