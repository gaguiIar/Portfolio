function fetchData() {
  fetch("https://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=gaguilar_&limit=1&api_key=ba36429b5f4e9dd16054bebf04c023b5&format=json")
    .then(response => {
      if (!response.ok) {
        throw Error("error");
      }
      return response.json();
    })
    .then(data => {
      console.log(data.recenttracks.track);
      const dataArray = data.recenttracks.track.map(user => {
          return `${user.name}:${user.artist['#text']}:${user.image['3']['#text']}`
        })
        .join("");
      console.log(dataArray);

      let parsed = dataArray;
      const newArray = parsed.split(":");
      let song = newArray[0];
      let artist = newArray[1];
      let artwork = `<img id = "musPhoto"src="${newArray[3]}" alt="">`;


      console.log(song);
      console.log(artist);
      console.log(artwork);

      const newMsg = `${song} by ${artist}`;









      document.querySelector(".photo").insertAdjacentHTML("afterbegin", artwork);
      document.querySelector("#artistSong").insertAdjacentHTML("afterbegin", newMsg);
    })
    .catch(error => {
      console.log(error);
    });
}

fetchData();