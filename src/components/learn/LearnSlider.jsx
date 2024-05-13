import React, { useEffect, useState } from 'react'
const images = ["https://img.freepik.com/free-photo/painting-mountain-lake-with-mountain-background_188544-9126.jpg", "https://static.vecteezy.com/system/resources/thumbnails/025/067/762/small_2x/4k-beautiful-colorful-abstract-wallpaper-photo.jpg", "https://img.freepik.com/free-photo/snowy-mountain-peak-starry-galaxy-majesty-generative-ai_188544-9650.jpg", "https://images3.alphacoders.com/133/1332803.png", "https://t3.ftcdn.net/jpg/05/85/86/44/360_F_585864419_kgIYUcDQ0yiLOCo1aRjeu7kRxndcoitz.jpg"]


const LearnSlider = () => {
    const [active, setActive] = useState(0)

    const handlerPrev = () => {
        setActive(!active ? (images.length - 1) : (active - 1))
    }
    const handlerNext = () => {
        setActive((active + 1) % images.length)
        console.log("active", active)
    }

    useEffect(()=> {
        const timer = setTimeout(()=> {
            handlerNext();
        },5000)
        return ()=> (
            clearTimeout(timer)
        )
    },[active])

    return(
        <div className='d-flex justify-content-center align-items-center'>
            <button onClick={handlerPrev}>prev</button>
            <div>
                {images && images.map((image, url)=> (
                    <img src={image} alt="images" width={700} height={500} style={{objectFit:"contain"}} className={active === url ? "d-block" : "d-none"}/>
                ))}
            </div>
            <button onClick={handlerNext}>Next</button>
        </div>
    )
}

export default LearnSlider;