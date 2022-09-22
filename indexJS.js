window.onload = function () {
  animateText();
  animatePastImgs(0);

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

const positions = ["translate(-10%, -100%)", "translate(-10%, 0%)", "translate(-10%, 100%)", "translate(-10%, (100%)"]
const ids = ["pImg1", "pImg2", "pImg3", "pImg4"]

function animatePastImgs(offset) {
  for (let i = 0; i < 4; i++){
    document.getElementById(ids[i]).style.transform = positions[(offset + i) % 4]
    if ((offset + i) % 4 === 3){
      document.getElementById(ids[i]).style.display = "none"
    }
    if ((offset + i) % 4 === 0){
      document.getElementById(ids[i]).style.display = "block"
    }
  }
  setTimeout(() => animatePastImgs(offset + 1), 5000)
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
eventImages = ["Images/UpcomingEvents/MeetnGeek.png", "Images/UpcomingEvents/Anifest.jpeg", "Images/UpcomingEvents/SquidGeeks.png"];
function updateImage(imgid) {
  let imageURL = eventImages[imgid]
  if (imgid < 3) {
    load(imageURL).then(() => {document.getElementById("eventImg").style.backgroundImage = `url(${imageURL})`})
    document.getElementById("modalContent").src = eventImages[imgid];
  }
  else {
    load(imageURL).then(() => {document.getElementById("eventImgPast").style.backgroundImage = `url(${imageURL})`})
  }
}

function load(src) {
  return new Promise((resolve, reject) => {
      let image = new Image();
      image.addEventListener('load', resolve);
      image.addEventListener('error', reject);
      image.src = src;
  });
}

/*experimental loading
load(image).then(() => {
  body.style.backgroundImage = `url(${image})`;
});*/