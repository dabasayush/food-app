import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap'

function ColorChange() {
  const [color, setColor] = useState();

  return (
    <Row>
      <Col md={12} className='color-box mt-5' style={{backgroundColor:(color)}}>
        
      </Col>
      <Col md={12} className='d-flex justify-content-center mt-5'>
        <input type="text" onChange={(e) => {
          setColor(e.target.value)
          }}
        />
      </Col>
    </Row>
  )
}

export default ColorChange

