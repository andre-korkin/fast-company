import React from 'react'
import PropTypes from 'prop-types'


const RadioField = ({ label, name, value, options, onChange }) => {
    return (
        <div className='mb-4'>
            <label className='mb-2'>{label}</label>
            <div className='input-group'>
                {options.map(option => {
                    return (
                        <div key={option.value} className='form-check form-check-inline'>
                            <input type='radio' id={option.value} name={name} value={option.value}
                                onChange={onChange} checked={option.value === value} className='form-check-input' />
                            <label className="form-check-label" htmlFor={option.value}>{option.name}</label>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

RadioField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    value: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
}

export default RadioField
