window.onload = function () {
  current = 0;
  lastRef = 0;
  pastImageRef = 0;
  //Modal activations and deactivations
  if (["/upcomingevents", "/upcomingEvents.html"].includes(window.location.pathname)) {
    document.getElementById(upcomingEvents[current]).style.opacity = "1";

    if (window.innerWidth > 800) {
      document.getElementById("modalListener").onclick = function () {
        document.getElementById("discordModal").style.display = "block";
      }

      document.getElementById("discordModal").addEventListener("click", function () {
        document.getElementById("discordModal").style.display = "none";
      })
    }
  }

  if (['/pastevents', "/pastEvents.html"].includes(window.location.pathname)) {
    document.getElementById("imgModal").addEventListener("click", function () {
      document.getElementById("imgModal").style.display = "none"
    })
  }

  if (["/aboutus", "/aboutUs.html"].includes(window.location.pathname)) {
    document.getElementById("personModal").addEventListener("click", function () {
      document.getElementById("personModal").style.display = "none";
    })

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

  if (ref == 1) {
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

function removeElements(list) {
  var len = list.length;
  if (len > 1) {
    list.remove(list[len - 1]);
    removeElements(list);
  }
}

function daySelected(ref) {
  var weeklies = document.getElementsByClassName(ref);
  for (let i = 0; i < weeklies.length; i++) {
    weeklies[i].style.boxShadow = "5px 5px white";
  }
}

function dayUnselected(ref) {
  var weeklies = document.getElementsByClassName(ref);
  for (let i = 0; i < weeklies.length; i++) {
    weeklies[i].style.boxShadow = "";
  }
}

const positions = ["Co-President",
  "Co-President & DND",
  "Resource V.P",
  "Sponsor & Internal V.P",
  "External V.P & Anime",
  "Creative Team",
  "Smash Exec",
  "Creative Team",
  "Movies Exec",
  "Instagram Manager",
  "Discord Manager",
  "Instagram Manager",
  "Gaming Exec",
  "Board Games Exec",
  "TCG Exec"];

const names = ["Jennifer",
  "Obada",
  "Adnan",
  "Tony",
  "Vijay",
  "Carina",
  "Gaurav",
  "Selina",
  "Sufyan",
  "Gurjaap",
  "James",
  "Jasnoor",
  "Mohid",
  "Tim",
  "Gabriel"];

const descriptions = [
  "Hi!! I'm Jennifer! Currently in my 3rd year of Software Eng and I'll be your president for this year! Super excited to be apart of Geeks, just a super chill vibe. Where else would you find a community based geeky club? We have a lot of great things planned this year, can't wait to experience them all with new and returning Geekers!",
  "My name is Obada Al-Sayed, I am the co-president of McMaster Geeks, and I believe that games are made to be shared. I am excited this year to share some of my favorites with all of you.",
  "Adnan Al-Obaidi a 4th year student in Honours of Biochemistry. I am currently responsible for the club finance. I joined McMaster Geeks to enjoy playing with other colleagues and I just enjoyed the notion of the club being comforting instead of always trying to get into competitions. I enjoy relaxing environment of the club and how it bring different communities together.",
  "Hey guys! My name is Tony, I'm heading into my 3rd year of Kinesiology and I'm currently serving as VP Admin & Sponsors. I'm excited to meet more PC / Gaming nerds in and around Mac! You'll be seeing me around at events so feel free to HMU!",
  "Hello everyone, my name is Vijay Harakh I am a 4th year Honors Medical and Biological physics. My role in McMaster Geeks is currently VP external/anime exec. I joined cause from transitioning from high school and coming into University campus, McMaster Geeks was a great warm welcoming place where I made quite a bit of friends. I'm excited to bring the same attention I received, to many first years.",
  "Hello my name is Carina and I am going into my third year in the Biology program. I am a part of the graphic design team and initially I joined this club because I wanted to be able to create connections with others that have the same hobbies as me. I am really excited to promote this club to McMaster students through the creative works we do and having lots of fun with upcoming events!",
  "Hi, my name is Gaurav, a second-year computer science student and GEEK's Smash community leader. I joined GEEKs last year to get more involved in McMaster's community and meet more people during covid. Thankfully, these dark times are almost over. I can't wait to meet and play games with everyone this year!!",
  "Hi there! My name is Selina and I am a third year civil engineering student at Mac. I'm one of the graphic designers at GEEKS. I joined GEEKS because of my love for video games, movies and pop-culture, and by using my skills in graphic design, we are the ones helping McMaster GEEKS to present their best version possible!",
  "Greetings Mac Students, my name is Sufyan, I'm a level IV Honours Life Sciences student and I'm a general Executive Member. I'm looking forward to hosting movie nights and helping run our board game events.",
  "Hello, my name is Gurjaap and I'm going into my 2nd year of Mechanical Engineering. I am one of the new Social Media Managers for McMaster Geeks. I hope to meet new people and learn more about the people at McMaster. I'm especially excited about the anime nights we will be holding during the upcoming year!",
  "Hi my name is James and I'm going into 3rd Year Mathematics and Statistics and I am the Discord Developer. I joined GEEKs because I've always enjoyed watching anime and playing video games and GEEKs has both of that so I'm very excited to join and meet new people!",
  "Hi guys! I'm Jasnoor, a first year engineering student and I'm one of the Instagram Managers for McMaster Geeks. I joined to be apart of a community at school while participating in activities I enjoy, and I hope I can encourage anyone interested in McMaster Geeks to feel the same!",
  "Hey everyone, my names Mohid! I'm going into second year and am in PNB. I will be the gaming community leader this year and can't wait to bring loads of fun events and ideas throughout the year. GEEKs provides such a great environment that I can't wait to help foster for others. I'm excited to bring a focus on gaming community events centred around new releases, such as Pokémon in the upcoming months!",
  "Hey everyone, my name is Tim and I'm getting into my second year of Comp Eng. I am an interim exec here in GEEKs where I run our weekly board game nights. I'm really excited to meet new fellow geeks and just have a fun time.",
  "Konnichiwagwan, my name is Gabriel and I'll be GEEKS TCG exec this year. I'm completing my final year in the biotech program and will likely return for my masters. Gaming, Anime and TCGs have been my bread and butter for a long time so I'm looking forward to facilitate people being sent to the shadow realm!"
];

const images = [
  "Images/Execs/Jenn.webp",
  "Images/Execs/Obada.webp",
  "Images/Execs/adnan.webp",
  "Images/Execs/Tony.webp",
  "Images/Execs/Vijay.webp",
  "Images/Execs/Carina.webp",
  "Images/Execs/Gaurav.webp",
  "Images/Execs/Sel.webp",
  "Images/Execs/Sufyan.webp",
  "Images/Execs/Jaap.webp",
  "Images/Execs/James.webp",
  "Images/Execs/Jasnoor.webp",
  "Images/Execs/Mohid.webp",
  "Images/Execs/Tim.webp",
  "Images/Execs/gabriel.webp"
]

function personSelected(ref) {
  document.getElementById("pos").textContent = positions[ref];
  document.getElementById("name").textContent = names[ref];
  document.getElementById("desc").textContent = descriptions[ref];
  document.getElementById("personModal").style.display = "block";
  document.getElementById("execImage").src = images[ref];
}

const pastImages = [
  "Images/PastEvents/halloween1.webp",
  "Images/PastEvents/halloween2.webp",
  "Images/PastEvents/halloween3.webp",
  "Images/PastEvents/halloween4.webp",
  "Images/PastEvents/halloween5.webp",
  "Images/PastEvents/halloween6.webp",
]

function imageClicked(ref) {
  document.getElementById("modalContent").src = pastImages[ref]
  document.getElementById("imgModal").style.display = "block"
  pastImageRef = ref
}

function pEventsModalClicked() {
  window.open(pastImages[pastImageRef], "_blank")
}
