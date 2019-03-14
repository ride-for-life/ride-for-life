import React, { useState } from 'react';
import axios from 'axios';

const SubmitRating = props => {
  const [ text, setText ] = useState("");
  const [ stars, setStars ] = useState("");

  const leaveReview = () => {
    const testReview = { "user_id": 1, "driver_id": 1, "review_content": "Id est prima erant nobis. Ut odio alia mediocritatem mel.", "rating": 3 };
    const id = 1;
    axios.post(`https://rideforlife.herokuapp.com/api/drivers/${id}/review`, testReview)
  };

//   {
// 	"user_id": 1,
// 	"driver_id": 2,
// 	"review_content": "Id est prima erant nobis. Ut odio alia mediocritatem mel.",
// 	"rating": 3
// }

  return (
    <form onSubmit={leaveReview}>
      <input type="text" name="text" onChange={(event) => setText(event.target.value)} />
      <input type="text" name="stars" onChange={(event) => setStars(event.target.value)} />
      <button>Submit</button>
    </form>
  );

};

export default SubmitRating;
