window.onload = function(){
  current = 0;
  lastRef = 0;

  if (window.location.pathname == "/upcomingEvents.html"){
    document.getElementById(upcomingEvents[current]).style.opacity = "1";

    if (window.innerWidth > 800) {
      document.getElementById("modalListener").onclick = function () {
        document.getElementById("discordModal").style.display = "block";
      }

      window.onclick = function (event) {
        console.log(event)
        if (event.target == document.getElementById("discordModal")) {
          document.getElementById("discordModal").style.display = "none";
        }
      };
    }
  }

  if (window.location.pathname == "/aboutus"){
    //Modal activation and deactivation 
    window.onclick = function (event) {
      console.log(event)
      if (event.target == document.getElementById("personModal")) {
        document.getElementById("personModal").style.display = "none";
      }
    };
  }
}

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

upcomingEvents = ["event1", "event2", "event3"];
upcomingLinks = ["https://www.mcmaster.ca/", "https://www.google.com/", "https://msumcmaster.ca/initiative/mcmaster-geeks/"]

function updateEvent(ref) {
  var oldEvent = document.getElementById(upcomingEvents[current]);
  current = (((current + ref) % 3) + 3) % 3;
  var curEvent = document.getElementById(upcomingEvents[current]);
  var link = upcomingLinks[current];

  if(ref == 1){
    removeElements(oldEvent.classList);
    oldEvent.classList.add("animateLEAVELEFT");
    removeElements(curEvent.classList);
    curEvent.classList.add("animateRIGHT");
  }
  else {
    removeElements(oldEvent.classList);
    oldEvent.classList.add("animateLEAVERIGHT");
    removeElements(curEvent.classList);
    curEvent.classList.add("animateLEFT");
  }
  document.getElementById("signUpButton").href = link;
}

function removeElements(list){
  var len = list.length;
  if (len > 1) {
    list.remove(list[len - 1]);
    removeElements(list);
  }
}

function daySelected(ref){
  var weeklies = document.getElementsByClassName(ref);
  for (let i = 0; i < weeklies.length; i++){
    weeklies[i].style.boxShadow = "5px 5px white";
  }
}

function dayUnselected(ref){
  var weeklies = document.getElementsByClassName(ref);
  for (let i = 0; i < weeklies.length; i++){
    weeklies[i].style.boxShadow = "";
  }
}

const positions = ["position1", "position2", "position3", "position4", "position5", "position6", "position7", "position8", "position9", "position10"];
const names = ["name1", "name2", "name3", "name4", "name5", "name6", "name7", "name8", "name9", "name10"];

function personSelected(ref){
  document.getElementById("pos").textContent = positions[ref];
  document.getElementById("name").textContent = names[ref];
  document.getElementById("personModal").style.display = "block";
}