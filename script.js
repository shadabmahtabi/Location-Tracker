let get_location = document.querySelector(".current_location");
let inputs = document.querySelectorAll('form > input')

get_location.addEventListener("click", (e) => {
  navigator.geolocation.getCurrentPosition(
    async (data) => {
      let { latitude, longitude } = data.coords;
    //   console.log({ latitude, longitude });
      let location = await axios.get(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
      );

      let { locality, city, principalSubdivision, countryName } = location.data;
      inputs[0].value = locality;
      inputs[1].value = city;
      inputs[2].value = principalSubdivision;
      inputs[3].value = countryName;
      console.log(location.data);
      // 24.819466, 85.028421
    },
    (err) => console.log(err.message)
  );
});
