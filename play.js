let data_1 = [
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
  }
];

let data_2 = [
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
    name: "Game5",
  }
];

$(document).ready(function () {
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

  setVerticalGameList("list_left", data_1);
  setVerticalGameList("list_right", data_1);
  setSimilarGameList('similar-list', data_2)
});

function addGameToList(gameData, listEl) {
  let gameItem = listEl.find(".game-item-wrapper").first().clone();

  gameItem.removeClass("d-none");
  gameItem.find(".game-item__img").attr("src", gameData.imageUrl);
  gameItem.find(".game-item__link").attr("href", gameData.url);
  gameItem.find(".game-item__name").html(gameData.name);

  gameItem.appendTo(listEl);
}

function setVerticalGameList(id, list) {
  const gameListEl = $("#" + id);
  list.map((item) => {
    addGameToList(item, gameListEl);
  });
}

function setSimilarGameList(id, list) {
  const gameListEl = $("#" + id);
  list.map((item) => {
    addGameToList(item, gameListEl);
  });
}
