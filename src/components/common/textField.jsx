import React, { useState } from 'react'
import PropTypes from 'prop-types'


const TextField = ({ label, type, name, value, errors, onChange }) => {
    const [showPass, setShowPass] = useState(false)

    const getInpClass = () => errors === undefined || errors.length === 0 ? 'form-control' : 'form-control is-invalid'

    return (
        <div className='mb-4'>
            <label htmlFor={name}>{label}</label>
            <div className="input-group has-validation">
                <input type={showPass ? 'text' : type} id={name} name={name} value={value} onChange={onChange} className={getInpClass()} />
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
    name: PropTypes.string,
    value: PropTypes.string,
    errors: PropTypes.array,
    onChange: PropTypes.func
}

export default TextField
