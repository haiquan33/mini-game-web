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

function addGameToList(game) {
  let gameItem = $(".game-item-wrapper").first().clone();
  gameItem.removeClass("d-none");
  gameItem.find(".game-item__img").attr("src", game.imageUrl);
  gameItem.find(".game-item__link").attr("href", game.url);
  gameItem.find(".game-item__name").html(game.name);
  gameItem.appendTo(".game-list");
}
