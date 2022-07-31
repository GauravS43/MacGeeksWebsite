window.onload = function () {
  animateText();

  //Modal activation and deactivation
  if (window.innerWidth > 1400) {
    console.log(window.innerWidth);
    document.getElementById("eventImg").onclick = function () {
      document.getElementById("imgModal").style.display = "block";
    }

    window.onclick = function (event) {
      if (event.target == document.getElementById("imgModal")) {
        document.getElementById("imgModal").style.display = "none";
      }
    };
  }
}

window.onscroll = function () {
  document.getElementById("scrollInform").style.opacity = "0";
}

//TitleCard Animation
const clubGroups = document.querySelector(".titleAnimate").children;
cgLen = clubGroups.length;
index = 0;

function animateText() {
  for (let i = 0; i < cgLen; i++) {
    clubGroups[i].classList.remove("visible");
  }
  clubGroups[index].classList.add("visible");

  if (index < cgLen - 1) {
    index++;
  } else {
    index = 0;
  }

  setTimeout(animateText, 3000);
}

//Animation based on scroll
window.addEventListener('load', (event) => {
  let interObs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        var len = entry.target.classList.length;
        if (entry.target.classList[len - 1] == "left")
          entry.target.classList.add("animateLEFT");
        else if (entry.target.classList[len - 1] == "right")
          entry.target.classList.add("animateRIGHT");
        else
          entry.target.classList.add("animateUP");
        interObs.unobserve(entry.target);
      }
    });
  });
  document.querySelectorAll('.animation').forEach(obj => {
    interObs.observe(obj);
  })
});

//Updates eventImages based on event hovered
eventImages = ["Images/video-games.jpeg", "Images/theatre.jpg", "Images/sGeeks.jpeg", "Images/question.jpeg", "Images/sGeeks.jpeg", "Images/theatre.jpg"];
function updateImage(imgid) {
  if (imgid < 3) {
    document.getElementById("eventImg").style.backgroundImage = String.prototype.concat("url(", eventImages[imgid], ")");
    document.getElementById("modalContent").src = eventImages[imgid];
  }
  else {
    document.getElementById("eventImgPast").style.backgroundImage = String.prototype.concat("url(", eventImages[imgid], ")");
  }
}