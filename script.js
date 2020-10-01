const ids =
  "1027,1285,536,287,32,1317,557,310,311,1086,1346,1347,324,1349,71,1353,1354,846,1358,847,592,337,1361,594,1362,851,1367,1371,1372,1374,1379,1381,1386,1389,1390,1392,885,1400,377,378,379,1404,1405,1151,1408,133,658,406,1174,155,160,421,684,685,686,1210,1211,1220,1234,3072,256,512,768,1024,1280";
const PageType = "games";
const LoadedGamesNum = 0;
const skip = 30;
let url =
  "https://freegamemini.com/ajax_loadmoregames.php?LoadedGamesNum=" +
  LoadedGamesNum +
  "&num=" +
  skip +
  "&ids=" +
  ids +
  "&pagetype=" +
  PageType;

function addGameToList(game) {
  let gameItem = $(".game-item-wrapper").first().clone();
  gameItem.removeClass("d-none");
  gameItem.find(".game-item__img").attr("src", game.imageUrl);
  gameItem.find(".game-item__link").attr("href", game.url);
  gameItem.find(".game-item__name").html(game.name);
  gameItem.appendTo(".game-list");
}

function getGameList() {
  return {
    data: [
      {
        url: "https://google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game1",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game2",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game3",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game4",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game5",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game6",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game6",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game6",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game6",
      },
      {
        url: "google.com",
        imageUrl: "./assets_original/512x384(184).jpg",
        name: "Game6",
      },
    ],
  };
}

$(document).ready(function () {
  const gameList = getGameList();
  gameList.data.map((game) => {
    console.log("add game");
    addGameToList(game);
  });

  // Back top function
  var backTopBtn = $("#BackTop");
  $(window).scroll(function () {
    if ($(window).scrollTop() > 300) {
      backTopBtn.addClass("show");
    } else {
      backTopBtn.removeClass("show");
    }
  });

  backTopBtn.on("click", function (e) {
    e.preventDefault();
    $("html, body").animate({ scrollTop: 0 }, "300");
  });
});

$(window).scroll(function () {
  if ($(window).scrollTop() == $(document).height() - $(window).height()) {
    const gameList = getGameList();
    gameList.data.map((game) => {
      addGameToList(game);
    });
  }
});
