let mode = checkDimension();
const shareBtn = document.getElementById("share");
const cardSharingDesktop = document.getElementsByClassName("card__sharing-desktop")[0];
const mobileShare = document.getElementById("mobile-share");
const cardSharingMobile = document.getElementsByClassName("card__sharing-mobile")[0];
const cardPosterInfo = document.getElementsByClassName("card__poster-info")[0];

document.addEventListener("DOMContentLoaded", function () {
  mobileShare.addEventListener("click", function() {
    cardSharingMobile.classList.add("hidden");
    cardPosterInfo.classList.remove("hidden")
  });

  shareBtn.addEventListener("click", function () {
    if(mode === "Mobile") {
      cardPosterInfo.classList.add("hidden");
      cardSharingMobile.classList.remove("hidden");
    }

    if(mode === "Desktop") {
      if (cardSharingDesktop.classList.contains("hidden")) {
        cardSharingDesktop.classList.remove("hidden");
  
        shareBtn.classList.remove("light-share");
        shareBtn.classList.add("dark-share");
      } else {
        cardSharingDesktop.classList.add("hidden");
  
        shareBtn.classList.remove("dark-share");
        shareBtn.classList.add("light-share");
      }
    }
  });

  window.addEventListener("resize", function () {
    mode = checkDimension();
    if(mode === "Mobile") {
      cardSharingDesktop.classList.add("hidden");
    } else {
      cardSharingMobile.classList.add("hidden");
    }
  })
})

function checkDimension() {
  if(window.innerWidth < 600) return "Mobile"
  else return "Desktop";
}