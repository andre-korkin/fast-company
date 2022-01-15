import React from 'react'
import PropTypes from 'prop-types'


const RadioField = ({ label, name, options, onChange }) => {
    return (
        <div className='mb-4'>
            <label>{label}</label>
            <div className='input-group'>
                {options.map(option => {
                    if (options[0] === option) {  // первую кнопку ставим выделенной
                        return (
                            <div key={option.value} className='form-check form-check-inline'>
                                <input type='radio' id={option.value} name={name} value={option.value}
                                    onChange={onChange} className='form-check-input' checked />
                                <label className="form-check-label" htmlFor={option.value}>{option.value}</label>
                            </div>
                        )
                    }
                    else {
                        return (
                            <div key={option.value} className='form-check form-check-inline'>
                                <input type='radio' id={option.value} name={name} value={option.value}
                                    onChange={onChange} className='form-check-input' />
                                <label className="form-check-label" htmlFor={option.value}>{option.value}</label>
                            </div>
                        )
                    }
                })}
            </div>
        </div>
    )
}

RadioField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    options: PropTypes.array,
    onChange: PropTypes.func
}

export default RadioField
