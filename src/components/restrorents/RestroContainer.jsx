import { Button, Col, Container, Row } from "react-bootstrap";
import RestroCard from "../cards/RestroCard";
import Slider from "react-slick";
import { useEffect, useState } from "react";
import { RESTAURANTS_URL } from "../../common/constants";
import { Link } from "react-router-dom";

const RestroContainer = () => {

    const [restroData, setRestroData] = useState([])
    const [resSearch, setResSerch] = useState("")
    const [searchedRestro, setSearchedRestro] = useState([])
    useEffect(() => {
        const apiData = async () => {
            const response = await fetch(RESTAURANTS_URL);
            const result = await response.json();
            // console.log("result: " , result.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
            setRestroData(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
            setSearchedRestro(result?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        } 
        apiData();
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 5000,
        slidesToShow: 4,
        slidesToScroll: 4,
        arrow: false,
        responsive:[
            {
                breakpoint: 768,
                settings:"unslick",
                settings: {
                    arrow: false,
                    autoplay: true,
                    slidesToScroll: 1,
                    slidesToShow: 1,
                }
            }
        ]
        
      };
      
    
    return(
        <Container>
            <div className="search-box mt-2">
                <input type="text" value={resSearch}
                    onChange={(e) => {
                        setResSerch(e.target.value);
                    }}
                />
                <Button className="btn btn-danger" onClick={()=> {
                    const searchedRestro = restroData.filter((res)=> res.info.name.toLowerCase().includes(resSearch.toLowerCase()))
                    setSearchedRestro(searchedRestro)
                }}>
                    Search
                </Button>
            </div>
            <Row className="restros d-flex justify-content-center mt-2 mb-2">
                <h1 className="restro-name">
                    Restaurants
                </h1>
            </Row>
            {restroData.length ? 
            <Row>
                {/* <Slider className="restro-slider" {...settings}> */}
                    {restroData && searchedRestro.slice(0, 6).map((data) => (
                        <Col md={4} className="pb-4">
                            <Link to={"/restaurants/"+data.info.id}>
                                <RestroCard key={data.info.id} resData={data} />
                            </Link>
                        </Col>
                    ))}
                {/* </Slider> */}
            </Row>
            : ( <>Loading...</> )}
        </Container>
    )
}
export default RestroContainer;