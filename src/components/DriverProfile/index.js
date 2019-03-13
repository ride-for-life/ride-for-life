import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageContainer, PageContainer2 } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats"
import DriverBio from "./DriverBio"
import { renderComponent } from "recompose";

class DriverProfile extends React.Component {
    
        state = {
            drivers: []
        }
    

    componentDidMount() {
        axios.get('https://rideforlife.herokuapp.com/api/drivers/#{driver_id}')
            .then(res => {this.setState({ drivers: res.data })
            })
            .catch(err => {console.log(err)
            })
        }
        
    render() {
        const drivers = this.state.drivers
        const driver = drivers.filter(driver => driver.driver_id === 1)
        console.log(driver)
        
        return (
            <div>
                {console.log(drivers)}
                <PageContainer2>
                <DriverName driver={driver}/>
                <PageContainer>
                <DriverStats />
                <DriverBio />
                </PageContainer>
                </PageContainer2>
                {JSON.stringify(drivers)}
            </div>
        )
    }
};

export default DriverProfile;


// import { WideCap } from "./styles";

// const Login = props => {
// const [click, setClick] = useState(0);
// const [result, setResult] = useState("Awaiting results?");

// useEffect(
// () => {
// const axiosGet = async () => {
// const data = await axios.get("https://rideforlife.herokuapp.com/");
// setResult(JSON.stringify(data));
// };
// axiosGet();
// },
// [click] //turn this into an empty array so it doesn’t keep running
// );

// return (
// <div>
// <WideCap onClick={() => setClick(click + 1)}>Increase? {click}</WideCap>
// <p>{result}</p>
// </div>
// );
// };
