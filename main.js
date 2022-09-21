function revealMyInfo(myInfo, className, color, animationName) {
  let htmlElement = document.querySelector(className);

  htmlElement.innerHTML = myInfo;
  htmlElement.style.color = color;

  htmlElement.style.animationDuration = "1s";

  if (animationName === "bgFadeOut") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "slideIn") {
    htmlElement.style.animationName = animationName;
  } else if (animationName === "heartBeat") {
    htmlElement.style.animationName = animationName;
  }

  //console.log(htmlElement);

  // span[index].innerHTML = MyName;
}
//function revealMyJob(MyJob) {
//  let span = document.getElementsByTagName("span");
//  span[1].innerHTML = MyJob;
//}
