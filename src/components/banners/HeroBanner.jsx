import { useState } from "react";
import { Button, Container } from "react-bootstrap";

const HeroBanner = () => {
    const [resSearch, setResSerch] = useState("")
    return (
        <div className="banner-box">
            <Container>
                {/* <div className="search-box">
                    <input type="text" value={resSearch}
                    onChange={(e) => {
                        setResSerch(e.target.value);
                    }}
                    />
                    <Button className="btn btn-danger">
                        Search
                    </Button>
                </div> */}
            </Container>
        </div>
    )
}
export default HeroBanner;