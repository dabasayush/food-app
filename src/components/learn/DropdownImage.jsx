
import React, { useState } from 'react'
import { Dropdown } from 'react-bootstrap'


function DropdownImage() {
    const data = ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg", "https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg", "https://images3.alphacoders.com/133/1332803.png", "https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"]
    const num = ["144px", "260px", "340px", "480px", "760px",]

    const [image , setImage] = useState(0)

    const handleChange = (event) => {
      setImage(event.target.value)
    }

    // const handleSelect = (index) => {
    //   setImage(index)
    // }

    return (
      <div>
        <div>
          <img src={data[image]} style={{objectFit:"contain"}} width={600} Height={500} alt="" />
        </div>

        <div className='d-flex justify-content-center'>
            <select name="select" id="" onChange={handleChange}>
            {num && num.map((px, index)=> (
                <option value={index}>
                    {px}
                </option>
            ))}
            </select>
        </div>

        {/* <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
            </Dropdown.Toggle>
            <Dropdown.Menu>
                {num && num.map((px, index)=> (
                    <Dropdown.Item onClick={()=>{handleSelect(index)}} >{px}</Dropdown.Item>
                ))}
            </Dropdown.Menu>
        </Dropdown> */}
      </div>
    )
}

export default DropdownImage