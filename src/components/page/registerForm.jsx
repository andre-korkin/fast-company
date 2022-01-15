import React, { useState, useEffect } from 'react'
import TextField from '../common/textField'
import { validator } from '../../utils/validator'
import API from '../../api'
import SelectField from '../common/selectField'


const RegisterForm = () => {
    const [data, setData] = useState({ email: '', password: '', profession: '' })
    const [errors, setErrors] = useState({})

    const [profs, setProfs] = useState()
    useEffect(() => API.professions.fetchAll().then(data => setProfs(data)), [])

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
                {/* <div className="mb-5">
                    <label htmlFor="validationCustom04" className="form-label">Профессия</label>
                    <select className="form-select" id="validationCustom04" name='profession' value={data.profession} errors={errors.profession} onChange={handleChange}>
                        <option disabled value=''>Выбрать...</option>
                        {profs && profs.map(prof => <option key={prof._id} value={prof._id}>{prof.name}</option>)}
                    </select>
                    <div className="invalid-feedback">
                        Необходимо указать профессию.
                    </div>
                </div> */}
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
