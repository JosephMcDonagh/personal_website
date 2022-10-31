const annoyingBar = document.getElementById("border");
const joePic = document.getElementById("joe_pic");
const allContent = document.getElementById("all");
const body = document.querySelector("body");
const resetBut = document.getElementById("reset-button");

const removeAnnoyance = () => {
  annoyingBar.remove();
};

const changePic = () => {
  joePic.src = "joe_pic_changed.jpeg";
};

const changePicBack = () => {
  joePic.src = "joe_pic.jpg";
};

const gone = (event) => {
  const key = event.key;
  if (key === "j") {
    allContent.remove();
    const button = document.createElement("button");
    button.textContent = "click here to reset";
    button.id = "reset-button";
    body.appendChild(button);
  }
  if (key === "J") {
    alert("Looks like we have a smart ass");
  }
};

const reloadPage = () => {
  window.location.reload();
};

annoyingBar.addEventListener("click", removeAnnoyance);

joePic.addEventListener("mouseover", changePic);
joePic.addEventListener("mouseout", changePicBack);

document.addEventListener("keydown", gone);

resetBut.addEventListener("click", reloadPage);
