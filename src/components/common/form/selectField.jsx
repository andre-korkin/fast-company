import React from 'react'
import PropTypes from 'prop-types'


const SelectField = ({ label, name, data, errors, onChange }) => {
    const getInpClass = () => errors === undefined || errors.length === 0 ? 'form-select' : 'form-select is-invalid'

    return (
        <div className='mb-4'>
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <select id={name} name={name} value='' errors={errors.profession} onChange={onChange} className={getInpClass()}>
                    <option disabled value=''>Выбрать...</option>
                    {data && data.map(item => <option key={item._id} value={item._id}>{item.name}</option>)}
                </select>
                {errors && <div className='invalid-feedback'>{errors[0]}</div>}
            </div>
        </div>
    )
}

SelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    data: PropTypes.array,
    errors: PropTypes.array,
    onChange: PropTypes.func
}

export default SelectField
