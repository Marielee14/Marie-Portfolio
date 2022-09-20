function revealMyInfo(MyInfo, ClassName, Color) {
  let htmlElement = document.querySelector(ClassName);

  htmlElement.innerHTML = MyInfo;
  htmlElement.style.color = color;
  //console.log(htmlElement);

  // span[index].innerHTML = MyName;
}
//function revealMyJob(MyJob) {
//  let span = document.getElementsByTagName("span");
//  span[1].innerHTML = MyJob;
//}
