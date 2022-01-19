import React from 'react'
import PropTypes from 'prop-types'
import Select from 'react-select'


const MultiSelectField = ({ label, name, values, data, onChange }) => {
    const qualities = Object.keys(data).map(qual => {
        return {
            value: data[qual]._id,
            label: data[qual].name
        }
    })

    const defVal = values && values.map(qual => {
        return {
            value: qual._id,
            label: qual.name
        }
    })

    return (
        <div className='mb-4'>
            <label htmlFor={name} className='mb-2'>{label}</label>
            <Select isMulti name={name} defaultValue={defVal || []} options={qualities}
                className='basic-multi-select' classNamePrefix='select' onChange={event => onChange(event, name)} />
        </div>
    )
}

MultiSelectField.propTypes = {
    label: PropTypes.string,
    name: PropTypes.string,
    values: PropTypes.array,
    data: PropTypes.object,
    onChange: PropTypes.func
}

export default MultiSelectField
