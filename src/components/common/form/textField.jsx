import React, { useState } from 'react'
import PropTypes from 'prop-types'


const TextField = ({ label, type, min, max, step, name, value, errors, onChange }) => {
    const [showPass, setShowPass] = useState(false)

    const getInpClass = () => errors === undefined || errors.length === 0 ? 'form-control' : 'form-control is-invalid'

    return (
        <div className='mb-4'>
            <label htmlFor={name} className='mb-2'>{label}</label>
            <div className="input-group has-validation">
                <input type={showPass ? 'text' : type} min={min} max={max} step={step} id={name} name={name} value={value} onChange={onChange} className={getInpClass()} />
                {type === 'password' && (
                    <button className='btn btn-outline-secondary' type='button' onClick={toggleShowPass}>
                        <i className={'bi bi-eye' + (showPass ? '-slash' : '')}></i>
                    </button>
                )}
                {errors && <div className='invalid-feedback'>{errors[0]}</div>}
            </div>
        </div>
    )


    function toggleShowPass () {
        setShowPass(!showPass)
    }
}

TextField.defaultProps = {
    type: 'text'
}

TextField.propTypes = {
    label: PropTypes.string,
    type: PropTypes.string,
    min: PropTypes.number,
    max: PropTypes.number,
    step: PropTypes.number,
    name: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.array,
    onChange: PropTypes.func
}

export default TextField
