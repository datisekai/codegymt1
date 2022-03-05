import React from 'react'

const AppInput1 = ({label, type, value, onChangeCallBack}) => {
  return (
    <div>
        <label>{label}</label>
        <input type={type} value={value} onChange={onChangeCallBack}>
        </input>
    </div>
  )
}

export default AppInput1