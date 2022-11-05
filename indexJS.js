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

const ids = ["pImg1", "pImg2", "pImg3", "pImg4", "pImg5", "pImg6", "pImg7", "pImg8"]

function animatePastImgs(index) {
  document.getElementById(ids[index]).style.opacity = 1;
  setTimeout(() => {
    document.getElementById(ids[index]).style.opacity = 0;
    animatePastImgs((index + 1) % 8);
  }, 5000)
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

        if (entry.target.classList[0] == "statisticsWrapper") {
          animateValue(document.getElementById("stat1"), 0, 1000, 2000);
          animateValue(document.getElementById("stat2"), 0, 100, 2000);
          animateValue(document.getElementById("stat3"), 0, 8, 2000);
        }
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
    load(imageURL).then(() => { document.getElementById("eventImg").style.backgroundImage = `url(${imageURL})` })
    document.getElementById("modalContent").src = eventImages[imgid];
  }
  else {
    load(imageURL).then(() => { document.getElementById("eventImgPast").style.backgroundImage = `url(${imageURL})` })
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

//statistc loading
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (obj.innerHTML == end && end > 10) {
      obj.innerHTML = `${end}+`;
    }
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}