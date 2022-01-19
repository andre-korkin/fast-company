import React, { useState, useEffect } from 'react'
import TextField from '../common/form/textField'
import { validator } from '../../utils/validator'
import API from '../../api'
import SelectField from '../common/form/selectField'
import RadioField from '../common/form/radioField'
import MultiSelectField from '../common/form/multiSelectField'
import PropTypes from 'prop-types'


const UserEditForm = ({ id }) => {
    const [data, setData] = useState()
    useEffect(() => API.users.getById(id).then(user => setData(user)), [])

    const [errors, setErrors] = useState({})

    const [profs, setProfs] = useState()
    const [quals, setQuals] = useState()

    useEffect(() => {
        API.professions.fetchAll().then(data => setProfs(data))
        API.qualities.fetchAll().then(data => setQuals(data))
    }, [])

    const sex = [
        { value: '1', name: 'мужской' },
        { value: '2', name: 'женский' }
    ]

    const userSex = data && (data.sex === 'мужской' ? '1' : '2')

    const validatorConfig = {
        name: {
            isRequired: { message: 'Имя обязательно для заполнения' }
        },
        email: {
            isRequired: { message: 'Email обязателен для заполнения' },
            isEmail: { message: 'Неверный формат Email' }
        },
        profession: {
            isRequired: { message: 'Необходимо указать профессию' }
        }
    }

    useEffect(() => {
        validate()
    }, [data])

    return (
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-6 offset-md-3 shadow p-4'>
                    <h3 className='mb-4'>ID: {id}</h3>
                    <form onSubmit={handleSave}>
                        {data && <TextField label='Имя' name='name' value={data.name} errors={errors.name} onChange={handleChange} />}
                        {data && <RadioField label='Пол' name='sex' value={userSex} options={sex} onChange={handleChange} />}
                        {data && <TextField label='Email' name='email' value={data.email} errors={errors.email} onChange={handleChange} />}
                        {data && profs && <SelectField label='Профессия' name='profession' value={data.profession._id} data={profs} errors={errors.profession} onChange={handleChange} />}
                        {data && quals && <MultiSelectField label='Качества' name='qualities' values={data.qualities} data={quals} onChange={handleChange} />}
                        {data && <TextField type='number' min={0} label='Завершенных свиданий' name='completedMeetings' value={data.completedMeetings.toString()} errors={errors.completedMeetings} onChange={handleChange} />}
                        {data && <TextField type='number' min={0} max={5} step={0.1} label='Рейтинг' name='rate' value={data.rate.toString()} errors={errors.rate} onChange={handleChange} />}
                        <button className='btn btn-primary w-100 mx-auto' disabled={Object.values(errors).join('').trim() !== ''}>Сохранить</button>
                    </form>
                </div>
            </div>
        </div>
    )


    function handleChange (event, name = undefined) {
        if (Array.isArray(event)) {
            setData((prevState) => ({ ...prevState, [name]: event }))
        }
        else {
            const target = event.target

            if (target.type === 'checkbox') {
                setData((prevState) => ({ ...prevState, [target.name]: !data[target.name] }))
            }
            else {
                setData((prevState) => ({ ...prevState, [target.name]: target.value }))
            }
        }
    }

    function handleSave (event) {
        event.preventDefault()
        console.log(data)
    }

    function validate () {
        const errors = validator(data, validatorConfig)
        setErrors(errors)
    }
}

UserEditForm.propTypes = {
    id: PropTypes.string.isRequired
}

export default UserEditForm
