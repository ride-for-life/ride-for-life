import React, { useState, useEffect } from "react";
import axios from "axios";
import { PageContainerGrey, StatsDiv, BioDiv } from "../styles";
import DriverName from "./DriverName";
import DriverStats from "./DriverStats"
import DriverBio from "./DriverBio"
import { renderComponent } from "recompose";

<<<<<<< Updated upstream
const DriverProfile = () => {

   const [driver, setDriver] = useState({});
   const drivername = `${driver.firstname} ${driver.lastname}`;
   const location = driver.location
    
useEffect(
        () => {
        const axiosGet = async () => {
        const id = 1;
        const res = await axios.get(`https://rideforlife.herokuapp.com/api/drivers/${id}`)
        setDriver(res.data);
        };
        axiosGet();
        },
        []
    );
        
return (
    <div>
        {JSON.stringify(driver)}
        <PageContainerGrey>
        <DriverName name={drivername} location={location}/>
        <StatsDiv>
        <DriverStats driver={driver} />
        </StatsDiv>
        <BioDiv>
        <DriverBio name={drivername} />
        </BioDiv>
        </PageContainerGrey>
        {console.log(driver)}
    </div>
    )
=======
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
>>>>>>> Stashed changes
};

export default DriverProfile;
