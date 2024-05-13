import { Button, Col, Container, Row } from "react-bootstrap"
import RestaurantMenuCard from "../components/cards/RestaurantMenuCard"
import { CDN_URL } from "../common/constants"
import { useParams } from "react-router-dom"
import useRestaurantMenu from "../utils/useRestaurantMenu"

const RestaurantMenu = () => {
    const {resId} = useParams();

    const resInfo = useRestaurantMenu(resId);
    console.log("first", resInfo)

    console.log("resInfo", resInfo)

    const {name, avgRatingString, totalRatingsString, cloudinaryImageId} = resInfo?.cards[2]?.card?.card?.info;
    const {itemcard} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;
    console.log("itemCard", itemcard )
    return(
        <section>
            <Container>
                <Row className="res-header mt-5">
                    <Col className="d-flex justify-content-center">
                        <div>
                            <h1 className="d-flex justify-content-center">
                                {name}
                            </h1>
                            <div className="d-flex justify-content-center mt-2">
                                <img src={CDN_URL+cloudinaryImageId} alt="" width={300} />
                            </div>
                            <h6 className=" mt-3 d-flex justify-content-center">
                                Rating {avgRatingString} Total ({totalRatingsString})
                            </h6>
                        </div>
                    </Col>
                </Row>
                <div className="res-category mt-5">
                    <Button className="btn btn-success">
                        veg
                    </Button>
                    <Button className="btn btn-danger">
                        non neg
                    </Button>
                    <Button className="btn btn-warning">
                        Bestseller
                    </Button>
                </div>

                {itemcard.length ? (
                <div className="recommended mt-5">
                    <Row>
                        <h2>
                            Recommended
                        </h2>
                    </Row>
                    {itemcard.map((res)=>(
                        <RestaurantMenuCard key={res?.card?.info?.id} data={res}/>
                    ))}
                </div>) : (<h1 className="mt-5">Loading...</h1>)}
            </Container>
        </section>
    )
}

export default RestaurantMenu