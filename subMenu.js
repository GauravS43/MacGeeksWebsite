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
    changeGallery(3)
  }

  if (["/aboutus", "/aboutUs.html"].includes(window.location.pathname)) {
    document.getElementById("personModal").addEventListener("click", function () {
      document.getElementById("personModal").style.display = "none";
    })

  }
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
  "Gabriel",
  "Alex",
  "Alex",
  "Anna",
  "Antonio",
  "Dora",
  "Farhan",
  "Jack",
  "Jason",
  "Josh",
  "Kevin",
  "Nana",
  "Sepehr"
];

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
  "Konnichiwagwan, my name is Gabriel and I'll be GEEKS TCG exec this year. I'm completing my final year in the biotech program and will likely return for my masters. Gaming, Anime and TCGs have been my bread and butter for a long time so I'm looking forward to facilitate people being sent to the shadow realm!",
  "Hi my name is Alex! I'm a 3rd year Chemistry student :( and the DnD Geeks Exec for this year. DnD is a passion of mine and i'm excited to meet others who also like DnD!",
  "Hi, I'm Alex Rufenach! I'm in 4th year Electrical Engineering and I'm the FGC Community Lead. I've been watching anime and playing games for as long as I can remember and Geeks has both, so how could I not join? In-person events are the lifeblood of so many communities, and I'm excited to be a part of bringing that back to the community! Run the set!",
  "Hi! I'm Anna, currently in 2nd year Honours Biology and I'm a General Exec at GEEKs! I joined to meet more people who also love gaming, as I'm a casual gamer myself. I'm excited to help out in all the events we have planned this year so come join if you can!",
  "Hi! My name is Antonio, a first year in Social Science. I am the VP events for the club! I joined GEEKs to share my hobbies and interests and meet new people!",
  "Hey everyone, I am Dora and I am in second year Commerce and I am part of the creative team! I joined McMaster Geeks so I could facilitate connections and I am excited for Squid Geeks!",
  "Farhan.txt",
  "Hi, I'm Jack, with the role of General Executive! I am an Exchange Student from the UK who studies Law, who joined Geeks due to wanting to help out the club which helps spread so many of my favourite hobbies and allows others to meet up and have fun. Can't wait to play with everyone!",
  "Jason.txt",
  "Josh.txt",
  "Hello hello I am Kevin Debartolo, a second year student in the commerce program. I am a general exec and I joined because I was very interested and aligned with the ideas, activities and people behind GEEKS. I was very interested as soon as I read about the club and the different activities. I’m excited to involve myself in the various activities I enjoy or also trying new things, making friends, or being a contributing factor in the club.",
  "Hello! I'm Nana, a second year in Applied Psych of Hum Behv! I joined GEEKS because I'm a massive animanga and gacha nerd, and love to do art for the things I like (I'm a part of the creatives team @ GEEKS). I can't wait to put my abilities into designing some cool things for the club!",
  "Sepehr.txt"
];

const images = [
  "Images/Execs/Jenn.webp",
  "Images/Execs/Obada.webp",
  "Images/Execs/adnan.webp",
  "Images/Execs/Tony.webp",
  "Images/Execs/noimage.jpeg", //vijay
  "Images/Execs/Carina.webp",
  "Images/Execs/Gaurav.webp",
  "Images/Execs/Sel.webp",
  "Images/Execs/Sufyan.webp",
  "Images/Execs/Jaap.webp",
  "Images/Execs/James.webp",
  "Images/Execs/Jasnoor.webp",
  "Images/Execs/Mohid.webp",
  "Images/Execs/Tim.webp",
  "Images/Execs/noimage.jpeg", //gabe
  "Images/Execs/Alex_DND.webp",
  "Images/Execs/Alex_FGC.webp",
  "Images/Execs/Anna.webp",
  "Images/Execs/Antonio.webp",
  "Images/Execs/Dora.webp",
  "Images/Execs/Farhan.webp",
  "Images/Execs/Jack.webp",
  "Images/Execs/Jason.webp",
  "Images/Execs/Josh.webp",
  "Images/Execs/Kevin.webp",
  "Images/Execs/Nana.webp",
  "Images/Execs/Sepehr.webp",
]

function personSelected(ref) {
  document.getElementById("pos").textContent = positions[ref];
  document.getElementById("name").textContent = names[ref];
  document.getElementById("desc").textContent = descriptions[ref];
  document.getElementById("personModal").style.display = "block";
  document.getElementById("execImage").src = images[ref];
}

const pastImages = [
  "Images/PastEvents/clubsfest1.webp",
  "Images/PastEvents/clubsfest2.webp",
  "Images/PastEvents/clubsfest3.webp",
  "Images/PastEvents/clubsfest4.webp",
  "Images/PastEvents/DndNight1.webp",
  "Images/PastEvents/DndNight2.webp",
  "Images/PastEvents/DndNight3.webp",
  "Images/PastEvents/halloween1.webp",
  "Images/PastEvents/halloween2.webp",
  "Images/PastEvents/halloween3.webp",
  "Images/PastEvents/halloween4.webp",
  "Images/PastEvents/halloween5.webp",
  "Images/PastEvents/halloween6.webp",
  "Images/PastEvents/halloween7.webp",
  "Images/PastEvents/halloween8.webp",
  "Images/PastEvents/halloween9.webp",
  "Images/PastEvents/halloween10.webp",
  "Images/PastEvents/halloween11.webp",
  "Images/PastEvents/anifest1.webp",
  "Images/PastEvents/anifest3.webp",
  "Images/PastEvents/anifest4.webp",
  "Images/PastEvents/anifest5.webp",
  "Images/PastEvents/anifest6.webp",
  "Images/PastEvents/anifest7.webp",
  "Images/PastEvents/anifest8.webp",
  "Images/PastEvents/anifest9.webp",
  "Images/PastEvents/anifest12.webp",
  "Images/PastEvents/anifest13.webp",
]

function imageClicked(ref) {
  if (screen.width > 1000) {
    document.getElementById("modalContent").src = pastImages[ref]
    document.getElementById("imgModal").style.display = "block"
    pastImageRef = ref
  }
}

function pEventsModalClicked() {
  window.open(pastImages[pastImageRef], "_blank")
}

function showOtherEvents(obj) {
  obj.style.left = "-100%"
  document.getElementById("dc").style.left = "1%"
}

function hideEvents() {
  document.getElementById("dc").style.left = "-100%"
  document.getElementById("dd").style.left = "1%"
}

let galleryInd = [[0, 1, 2, 3], [4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], [18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30]]

function changeGallery(display) {
  hideEvents()
  let images = document.getElementsByClassName("galleryItem")

  let indices = galleryInd[display];

  for (let i = 0; i < 31; i++) {
    if (!indices.includes(i)) {
      images[i].style.display = "none"
    }
    else {
      images[i].style.display = "block"
    }
  }
}