let get_location = document.querySelector(".current_location");

get_location.addEventListener("click", (e) => {
  navigator.geolocation.getCurrentPosition(
    async (data) => {
      let { latitude, longitude } = data.coords;
      console.log({ latitude, longitude });
      let location = await axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );

      console.log(location);
      // 24.819466, 85.028421
    },
    (err) => console.log(err.message)
  );
});
