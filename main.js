let mainMenu = document.querySelector(".main-menu");
let menuBtn = document.querySelector("ul.menu > button.menu");

let chat = document.querySelector(".messenger.chat");
let chatBtn = document.querySelector("ul.menu .messenger");

let notifications = document.querySelector("header > ul .notifications");
let notificationsBtn = document.querySelector("button.bell");

let account = document.querySelector("header ul .account");
let accountBtn = document.querySelector("button.profile");

menuBtn.onclick = function () {
  chatBtn.classList.remove("active-btn");
  chat.classList.remove("d-block");
  notificationsBtn.classList.remove("active-btn");
  notifications.classList.remove("d-block");
  accountBtn.classList.remove("active-btn");
  account.classList.remove("d-block");
  menuBtn.classList.toggle("active-btn");
  mainMenu.classList.toggle("d-block");
};

chatBtn.onclick = function () {
  menuBtn.classList.remove("active-btn");
  mainMenu.classList.remove("d-block");
  notificationsBtn.classList.remove("active-btn");
  notifications.classList.remove("d-block");
  accountBtn.classList.remove("active-btn");
  account.classList.remove("d-block");
  chatBtn.classList.toggle("active-btn");
  chat.classList.toggle("d-block");
};

notificationsBtn.onclick = function () {
  menuBtn.classList.remove("active-btn");
  mainMenu.classList.remove("d-block");
  chatBtn.classList.remove("active-btn");
  chat.classList.remove("d-block");
  accountBtn.classList.remove("active-btn");
  account.classList.remove("d-block");
  notificationsBtn.classList.toggle("active-btn");
  notifications.classList.toggle("d-block");
};

accountBtn.onclick = function () {
  menuBtn.classList.remove("active-btn");
  mainMenu.classList.remove("d-block");
  chatBtn.classList.remove("active-btn");
  chat.classList.remove("d-block");
  notificationsBtn.classList.remove("active-btn");
  notifications.classList.remove("d-block");
  accountBtn.classList.toggle("active-btn");
  account.classList.toggle("d-block");
};

document.addEventListener("click", function (e) {
  if (!mainMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    menuBtn.classList.remove("active-btn");
    mainMenu.classList.remove("d-block");
  }
  if (!chat.contains(e.target) && !chatBtn.contains(e.target)) {
    chatBtn.classList.remove("active-btn");
    chat.classList.remove("d-block");
  }
  if (
    !notifications.contains(e.target) &&
    !notificationsBtn.contains(e.target)
  ) {
    notificationsBtn.classList.remove("active-btn");
    notifications.classList.remove("d-block");
  }
  if (!account.contains(e.target) && !accountBtn.contains(e.target)) {
    accountBtn.classList.remove("active-btn");
    account.classList.remove("d-block");
  }
});

let inbox = document.querySelector("button.inbox");
let communities = document.querySelector("button.communities");

inbox.onclick = function () {
  inbox.classList.add("active-btn");
  communities.classList.remove("active-btn");
};
communities.onclick = function () {
  communities.classList.add("active-btn");
  inbox.classList.remove("active-btn");
};

let notiAll = document.querySelector("#all");
let notiunread = document.querySelector("#unread");

notiAll.onclick = function () {
  notiAll.classList.add("active-btn");
  notiunread.classList.remove("active-btn");
};
notiunread.onclick = function () {
  notiunread.classList.add("active-btn");
  notiAll.classList.remove("active-btn");
};

let seeMore = document.querySelectorAll("li.see-more");
let hidenLis = document.querySelectorAll("div.d-none");
let icon = document.querySelectorAll("li.see-more i");
let seeP = document.querySelectorAll("li.see-more p");
let more = document.querySelectorAll("li.see-more span:first-of-type");
let less = document.querySelectorAll("li.see-more span:last-of-type");

seeMore[0].addEventListener("click", () => {
  icon[0].classList.toggle("fa-angle-up");
  more[0].classList.remove("z-index1");
  more[0].classList.toggle("z-index-1");
  less[0].classList.toggle("z-index-1");
  less[0].classList.toggle("z-index1");
  hidenLis[0].classList.toggle("d-none");
});
seeMore[1].addEventListener("click", () => {
  icon[1].classList.toggle("fa-angle-up");
  more[1].classList.remove("z-index1");
  more[1].classList.toggle("z-index-1");
  less[1].classList.toggle("z-index-1");
  less[1].classList.toggle("z-index1");
  hidenLis[1].classList.toggle("d-none");
});

const likeDivs = document.querySelectorAll(".post .like");

likeDivs.forEach((likeDiv) => {
  const iTag = likeDiv.querySelector("i");
  const pTag = likeDiv.querySelector("p");

  likeDiv.addEventListener("click", () => {
    iTag.classList.toggle("like-blue");
    pTag.classList.toggle("active-blue");
  });
});

const moreMenu = document.querySelector("header > .more");
const homeMenu = document.querySelector("header .sections a.active-blue");
const asideLeft = document.querySelector("aside.left");
const asideRight = document.querySelector("aside.right");
const section = document.querySelector("section");

moreMenu.addEventListener("click", () => {
  homeMenu.classList.remove("active-blue");
  moreMenu.classList.toggle("active-blue");
  if (!moreMenu.classList.contains("active-blue")) {
    homeMenu.classList.add("active-blue");
  }

  asideLeft.classList.toggle("w-full-block");
  asideRight.classList.toggle("d-none");
  section.classList.toggle("d-none");
  asideRight.classList.remove("d-block");
  section.classList.remove("d-block");
});

homeMenu.addEventListener("click", () => {
  moreMenu.classList.remove("active-blue");
  homeMenu.classList.add("active-blue");

  if (homeMenu.classList.contains("active-blue")) {
    asideLeft.classList.remove("w-full-block");
    asideRight.classList.remove("d-none");
    section.classList.remove("d-none");
    asideRight.classList.toggle("d-block");
    section.classList.toggle("d-block");
  }
});
