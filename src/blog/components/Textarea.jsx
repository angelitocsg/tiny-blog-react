import React from 'react'

const Textarea = ({ label, name, rows, value, onChange }) => (
    <div className="form-group">
        <label htmlFor={name}>
            {label}
        </label>
        <textarea
            id={name}
            name={name}
            className="form-control"
            rows={rows}
            value={value}
            onChange={onChange}
        ></textarea>
        <small>{value.length} caracters</small>
    </div>
)

export default Textarea