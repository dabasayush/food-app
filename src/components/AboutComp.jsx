import React from "react";


class AboutComp extends React.Component {
    constructor(props){                         
        super(props);

        this.state = {
            userInfo: {
                name: "dummy",
                location: "india",
                avatar_url: "user image"
            }
        }
    }
    async componentDidMount(){
        const data = await fetch(`https://api.github.com/users/dabasayush`)
        const user = await data.json();
        console.log(user)
        this.setState({
            userInfo: user
        })
    }
    render(){
        const {name, location, avatar_url} = this.state.userInfo;
        
        return(
            <div>
                <h2>Made by {name}</h2>
                <h3>In his {location}</h3>
                <img src={avatar_url} alt={"user img"} />
            </div>
        )
    }
}
export default AboutComp;