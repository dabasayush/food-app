import React from "react"
import AboutComp from "../components/AboutComp"
class About extends React.Component {
  render(){
    return (
      <div>
        <AboutComp page={"About"} name={"Ayush"} location={"Mac"} />
      </div>
    )
  }
}
export default About

