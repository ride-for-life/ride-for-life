

  const driverEdit = () => {
    authxios(state.loggedToken).put(`https://rideforlife.herokuapp.com/api/drivers/${id}`, changes)
      .then(result => {console.log(result)})
      .catch(error => {console.log(error)})
  };

  const driverDelete = () =>

  const fileSelect = event => {
    setSelfie(event.target.files[0]);
  };

  const imgurKey = process.env.REACT_APP_IMGUR_KEY;

  const fileUpload = () => {
    const imgData = new FormData();
    imgData.append('image', selfie, selfie.name);
    imgxios(imgurKey).post('https://api.imgur.com/3/image', imgData)
      .then(res => {
        console.log(res);
        console.log(res.data.data.link);
        dispatch({ type: "imageUpdate", payload: res.data.data.link });
        setImgurLink(res.data.data.link);
      })
      .catch(err => {
        console.log(err)});
  };

  useEffect(
    () => {
      console.log(imgurLink);
      if (imgurLink) {
      const axiosGet = async () => {
        const changes = {
          vehicle_type: {imgurLink}
        };
        const res = await authxios(state.loggedToken).put(`https://rideforlife.herokuapp.com/api/drivers/${id}`, changes);
      };
      axiosGet();
    }},
    [imgurLink]
  ); // Why am I using useEffect here? Just refactor this to a function, you silly goose.
