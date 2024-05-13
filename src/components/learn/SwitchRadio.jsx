import React, { useState } from 'react'
import RadioButtons from './RadioButtons';

function SwitchRadio() {
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (event) => {
    setIsChecked(event.target.checked)
  }
  return (
    <>
      <div>
        <div>
        <label className="switch">
          <input type="checkbox" onChange={handleChange} />
          <span className="slider round"></span>
        </label>
        </div>
      </div>

      <RadioButtons disabled={!isChecked} />
    </>
  )
}

export default SwitchRadio