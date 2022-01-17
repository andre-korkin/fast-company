import React from 'react'
import PropTypes from 'prop-types'


const CheckField = ({ label, name, isCheck, errors, onChange }) => {
    return (
        <div className='mb-4'>
            <div className="form-check has-validation">
                <input type='checkbox' id={name} name={name} checked={isCheck} onChange={onChange} className='form-check-input' />
                <label htmlFor={name} className='form-check-label'>{label}</label>
                {errors && <div className='invalid-feedback'>{errors[0]}</div>}
            </div>
        </div>
    )
}

CheckField.propTypes = {
    label: PropTypes.object,
    name: PropTypes.string,
    isCheck: PropTypes.bool,
    errors: PropTypes.array,
    onChange: PropTypes.func
}

export default CheckField
