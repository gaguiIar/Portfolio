function fetchData() {
  fetch("http://ws.audioscrobbler.com/2.0/?method=user.getrecenttracks&user=gaguilar_&limit=1&api_key=ba36429b5f4e9dd16054bebf04c023b5&format=json")
    .then(response => {
      if (!response.ok) {
        throw Error("error");
      }
      return response.json();
    })
    .then(data => {
      console.log(data.recenttracks);
      const html = data.products.track.map(user => {
        return `<p>Song: ${user.name}</p>`
      });
      console.log(html);
      document
        .querySelector("#artist")
        .insertAdjacentHTML("afterbegin", "helloooo");
    })
    .catch(error => {
      console.log(error);
    });
}

fetchData();