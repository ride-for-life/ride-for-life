import React, { useState, useContext } from 'react';
import { UserContext } from '../UserContext';
import axios from 'axios';
import { ReactComponent as StarSVG} from "./star.svg";
import { colors, WideCap, fontFamily } from "../styles";
import styled from 'styled-components';
import { authxios } from '../auth';

const Star = styled(StarSVG)`
  width: 40px;
  margin: 0 5px;
  &.gold {
    polygon {
      fill: #FFB900;
    }
  }
  &.grey {
    polygon {
      fill: #464E63;
    }
  }
`;

const Container = styled.div`
  background: ${colors.dusk}
  max-width: 100%;
  width: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;
  font-family: ${fontFamily};
  .review-driver {
    min-width: 70%;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    padding-bottom: 20px;
    border-bottom: 1px solid ${colors.storm};
    img {
      width: 150px;
      height: 150px;
      background: ${colors.storm};
      background-image: linear-gradient(${colors.storm}, ${colors.evening});
      border-radius: 20px;
    }
    h2 {
      color: ${colors.white};
      margin: 10px;
    }
    h3 {
      color: ${colors.white + '8F'};
      margin: 0;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  h1 {
    color: ${colors.white};
    margin-bottom: 0;
  }
  h3 {
    color: ${colors.white + '8F'}
    font-size: 1.2rem;
  }
  textarea {
    background: ${colors.evening};
    border: none;
    width: 100%;
    border-radius: 20px;
    height: 100px;
    padding: 20px;
    color: ${colors.white};
    font-size: 1.2rem;
  }
`;

const SubmitRating = props => {
  const [ text, setText ] = useState("");
  const [ stars, setStars ] = useState(5);
  const { state, dispatch } = useContext(UserContext);

  const maxStars = 5;

  const leaveReview = event => {
    event.preventDefault();
    const testReview = { "user_id": 1, "driver_id": 1, "review_content": "Id est prima erant nobis. Ut odio alia mediocritatem mel.", "rating": 3 };
    const id = 1;
    authxios(state.reactiveToken).post(`https://rideforlife.herokuapp.com/api/drivers/${id}/review`, testReview)
      .then(res => setText(res))
      .catch(err => setText(err));
  };

//   {
// 	"user_id": 1,
// 	"driver_id": 2,
// 	"review_content": "Id est prima erant nobis. Ut odio alia mediocritatem mel.",
// 	"rating": 3
// }

// so I can get around the ugly no-image display thing here by setting an && logic on top of the img, right? All I have to do is make sure that if the prop I get is an empty string, I return mu.
  return (
      <Container>
      <div className="review-driver">
        <img src='' alt={props.name} />
        <h2>{props.name || "Name"}</h2>
        <h3>{props.loc || "Location"}</h3>
      </div>
    <Form onSubmit={leaveReview}>
      <h1>Details</h1>
      <h3>Describe your trip</h3>
      <textarea name="text" value={text} onChange={(event) => setText(event.target.value)} />
      <h3>Rate your trip</h3>
      <div className="stars">
      {[...Array(maxStars).keys()].map((val, index) => <Star className={stars > val ? 'gold': 'grey'}
      key={index}
                                       onClick={(event) => setStars(val + 1)} />)}
      </div>
    {/*<input type="text" name="stars" onChange={(event) => setStars(event.target.value)} />*/}
      <WideCap background={colors.antimatter}>SUBMIT RATING</WideCap>
    </Form>
      </Container>
  );

};

export default SubmitRating;

      // {Array((parseInt(stars) || 0)).fill(<StarGold />)}
      // {Array(5 - (parseInt(stars) || 0)).fill(<StarGrey />)}
