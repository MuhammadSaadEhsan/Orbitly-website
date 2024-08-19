// Locomotive Scroll

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".container"),
    smooth: true,
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy(".container", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
    },
    pinType: document.querySelector(".container").style.transform ? "transform" : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}

loco();

// For Satellite Image Frames on scroll
function scrollableImageFrames() {
  const canvas = document.querySelector("canvas");
  const context = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  window.addEventListener("resize", function () {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    render();
  });

  function files(index) {
    var data = `
      /assets/1.jpeg
      /assets/2.jpeg
      /assets/3.jpg
      /assets/4.jpg
      /assets/5.jpg
      /assets/6.jpg
      /assets/7.jpg
      /assets/8.jpeg
      /assets/9.jpg
      /assets/10.jpg
      /assets/11.jpg
      /assets/12.jpg
      /assets/13.jpg
      /assets/14.jpg
      /assets/15.jpg
      /assets/16.jpg
      /assets/17.jpg
      /assets/18.jpg
      /assets/19.jpg
      /assets/20.jpg
      /assets/21.jpg
      /assets/22.jpg
      /assets/23.jpg
      /assets/24.jpg
      /assets/25.jpg
      /assets/26.jpg
      /assets/27.jpg
      /assets/28.jpg
      /assets/29.jpg
      /assets/30.jpg
      /assets/31.jpg
      /assets/32.jpg
      /assets/33.jpg
      /assets/34.jpg
      /assets/35.jpg
      /assets/36.jpg
      /assets/37.jpg
      /assets/38.jpg
      /assets/39.jpg
      /assets/40.jpg
      /assets/41.jpg
      /assets/42.jpg
      /assets/43.jpg
      /assets/44.jpg
      /assets/45.jpg
      /assets/46.jpg
      /assets/47.jpg
      /assets/48.jpg
      /assets/49.jpg
      /assets/50.jpg
      /assets/51.jpg
      /assets/52.jpg
      /assets/53.jpg
      /assets/54.jpg
      /assets/55.jpg
      /assets/56.jpg
      /assets/57.jpg
      /assets/58.jpg
      /assets/59.jpg
      /assets/60.jpg
      /assets/61.jpg
      /assets/62.jpg
      /assets/63.jpg
      /assets/64.jpg
      /assets/65.jpg
      /assets/66.jpg
      /assets/67.jpg
      /assets/68.jpg
      /assets/69.jpg
      /assets/70.jpg
      /assets/71.jpg
      /assets/72.jpg
      /assets/73.jpg
      /assets/74.jpg
      /assets/75.jpg
      /assets/76.jpg
      /assets/77.jpg
      /assets/78.jpg
      /assets/79.jpg
      /assets/80.jpg
      /assets/81.jpg
      /assets/82.jpg
      /assets/83.jpg
      /assets/84.jpg
      /assets/85.jpg
      /assets/86.jpg
      /assets/87.jpg
      /assets/88.jpg
      /assets/89.jpg
      /assets/90.jpg
      /assets/91.jpg
      /assets/92.jpg
      /assets/93.jpg
      /assets/94.jpg
      /assets/95.jpg
      /assets/96.jpg
      /assets/97.jpg
      /assets/98.jpg
      /assets/99.jpg
      /assets/100.jpg
      /assets/101.jpg
      /assets/102.jpg
      /assets/103.jpg
      /assets/104.jpg
      /assets/105.jpg
      /assets/106.jpg
      /assets/107.jpg
      /assets/108.jpg
      /assets/109.jpg
      /assets/110.jpg
      /assets/111.jpg
      /assets/112.jpg
      /assets/113.jpg
      /assets/114.jpg
      /assets/115.jpg
      /assets/116.jpg
      /assets/117.jpg
      /assets/118.jpg
      /assets/119.jpg
      /assets/120.jpg
      /assets/121.jpg
      /assets/122.jpg
      /assets/123.jpg
      /assets/124.jpg
      /assets/125.jpg
      /assets/126.jpg
      /assets/127.jpg
      /assets/128.jpg
      /assets/129.jpg
      /assets/130.jpg
      /assets/131.jpg
      /assets/132.jpg
      /assets/133.jpg
      /assets/134.jpg
      /assets/135.jpg
      /assets/136.jpg
      /assets/137.jpg
      /assets/138.jpg
      /assets/139.jpg
      /assets/140.jpg
      /assets/141.jpg
      /assets/142.jpg
      /assets/143.jpg
      /assets/144.jpg
      /assets/145.jpg
      /assets/146.jpg
      /assets/147.jpg
      /assets/148.jpg
      /assets/149.jpg
      /assets/150.jpg
      /assets/151.jpg
      /assets/152.jpg
      /assets/153.jpg
      /assets/154.jpg
      /assets/155.jpg
      /assets/156.jpg
      /assets/157.jpg
      /assets/158.jpg
      /assets/159.jpg
      /assets/160.jpg
      /assets/161.jpg
      /assets/162.jpg
      /assets/163.jpg
      /assets/164.jpg
      /assets/165.jpg
      /assets/166.jpg
      /assets/167.jpg
      /assets/168.jpg
      /assets/169.jpg
      /assets/170.jpg
      /assets/171.jpg
      /assets/172.jpg
      /assets/173.jpg
      /assets/174.jpg
      /assets/176.jpg
      /assets/177.jpg
      /assets/178.jpg
      /assets/179.jpg
      /assets/180.jpg
      /assets/181.jpg
      /assets/182.jpg
      /assets/183.jpg
      /assets/184.jpg
      /assets/185.jpg
      /assets/186.jpg
      /assets/187.jpg
      /assets/188.jpg
      /assets/189.jpg
      /assets/190.jpg
      /assets/191.jpg
      /assets/192.jpg
      /assets/193.jpg
      /assets/194.jpg
      /assets/195.jpg
      /assets/196.jpg
      /assets/197.jpg
      /assets/198.jpg
      /assets/199.jpg
      /assets/200.jpeg
     `;
    return data.split("\n")[index];
  }

  const frameCount = 200;
  const images = [];
  const imageSeq = { frame: 1 };

  for (let i = 0; i < frameCount; i++) {
    const img = new Image();
    img.src = files(i);
    images.push(img);
  }

  gsap.to(imageSeq, {
    frame: frameCount - 1,
    snap: "frame",
    ease: `none`,
    scrollTrigger: {
      scrub: 0.15,
      trigger: `#welcome>canvas`,
      start: `top top`,
      end: `370% top`,
      scroller: `.container`,
    },
    onUpdate: render,
  });

  images[1].onload = render;

  function render() {
    scaleImage(images[imageSeq.frame], context);
  }

  function scaleImage(img, ctx) {
    var canvas = ctx.canvas;
    var hRatio = canvas.width / img.width;
    var vRatio = canvas.height / img.height;
    var ratio = Math.max(hRatio, vRatio);
    var centerShift_x = (canvas.width - img.width * ratio) / 2;
    var centerShift_y = (canvas.height - img.height * ratio) / 2;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(img, 0, 0, img.width, img.height, centerShift_x, centerShift_y, img.width * ratio, img.height * ratio);
  }

  ScrollTrigger.create({
    trigger: "#welcome>canvas",
    pin: true,
    scroller: `.container`,
    start: `top top`,
    end: `400% top`,
  });
}

scrollableImageFrames();

// For the hacker effect on Orbitly
function wordHackerEffect() {
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval = null;
  const element = document.getElementById("orbitly");

  function startAnimation() {
    let iteration = 0;
    clearInterval(interval);
    interval = setInterval(() => {
      element.innerText = element.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration) {
            return element.dataset.value[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration >= element.dataset.value.length) {
        clearInterval(interval);
      }
      iteration += 1 / 3;
    }, 30);
  }

  setInterval(startAnimation, 2000);
  startAnimation();

  const letters2 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let interval2 = null;

  document.getElementById("orbitly").onmouseover = event => {
    let iteration2 = 0;
    clearInterval(interval);

    interval2 = setInterval(() => {
      event.target.innerText = event.target.innerText
        .split("")
        .map((letter, index) => {
          if (index < iteration2) {
            return event.target.dataset.value[index];
          }
          return letters2[Math.floor(Math.random() * 26)];
        })
        .join("");

      if (iteration2 >= event.target.dataset.value.length) {
        clearInterval(interval2);
      }
      iteration2 += 1 / 3;
    }, 30);
  };
}

wordHackerEffect();


let index = 0,
  intervals = 1000;

const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const animate = star => {
  star.style.setProperty("--star-left", `${rand(-10, 100)}%`);
  star.style.setProperty("--star-top", `${rand(-40, 80)}%`);
  star.style.animation = "none";
  star.offsetHeight;
  star.style.animation = "";
};

for (const star of document.getElementsByClassName("magic-star")) {
  setTimeout(() => {
    animate(star);
    setInterval(() => animate(star), 1000);
  }, index++ * (intervals / 3));
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  });
});

function redirectUser() {
  // Simulating a function that checks if the user is logged in
  const isLoggedIn = checkUserLoggedIn();

  if (isLoggedIn) {
    window.location.href = 'dashboard.html'; // User dashboard page
  } else {
    window.location.href = 'login.html'; // Login page
  }
}

function checkUserLoggedIn() {
  // This is a placeholder for actual login check logic.
  // This could be a call to a server-side API to verify the session.
  // For demonstration purposes, we'll just use a hardcoded value.
  // In a real scenario, you might check a cookie, local storage, or make an AJAX call.

  // Example:
  // return fetch('/api/check-login-status')
  //     .then(response => response.json())
  //     .then(data => data.isLoggedIn);

  return false; // Change to `true` to simulate a logged-in user
}


function loadTextEffect() {
  document.addEventListener("DOMContentLoaded", function () {
    const scrollRevealElements = document.querySelectorAll('.scroll-reveal');

    function reveal() {
      for (let i = 0; i < scrollRevealElements.length; i++) {
        const element = scrollRevealElements[i];
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        const elementVisible = 100;

        if (elementTop < windowHeight - elementVisible) {
          element.classList.add("revealed");
        } else {
          element.classList.remove("revealed");
        }
      }
    }

    window.addEventListener("scroll", reveal);
    reveal(); // To reveal elements that are already in view on page load
  });
}

loadTextEffect();

document.addEventListener('DOMContentLoaded', () => {
  const elements = document.querySelectorAll('.slide-up');

  elements.forEach((element, index) => {
    setTimeout(() => {
      element.classList.add('slide-visible');
    }, index * 200); // stagger the animation with a 200ms delay for each element
  });
});
