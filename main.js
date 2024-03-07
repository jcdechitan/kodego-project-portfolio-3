const url = "https://free-to-play-games-database.p.rapidapi.com/api/games";
const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "079f6c8694mshf8f7075a903dcd7p10b4b2jsnce604652a163",
    "X-RapidAPI-Host": "free-to-play-games-database.p.rapidapi.com",
  },
};

async function getGames() {
  const response = await fetch(url, options);
  const result = await response.text();
  console.log(result);
}

data.forEach((games) => {
  if (games.thumbnail) {
    gameImg.src = game.thumbnail;
  } else {
    gameImg.src =
      "https://hips.hearstapps.com/hmg-prod/images/2019-honda-civic-sedan-1558453497.jpg";
  }
});
