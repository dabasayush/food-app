import { type } from '@testing-library/user-event/dist/type'
import React from 'react'


function RadioButtons({disabled}) {
  return (
    <div>
      <label>
        <input type="checkbox" name="option" value="option1" disabled={disabled} />
        Option 1
      </label>
      <label>
        <input type="checkbox" name="option" value="option2" disabled={disabled} />
        Option 2
      </label>
      <label>
        <input type="checkbox" name="option" value="option3" disabled={disabled} />
        Option 3
      </label>
    </div>
  )
}

export default RadioButtons