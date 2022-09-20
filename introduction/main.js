function revealMyInfo(ClassName, Color) {
  let htmlElement = document.querySelector(ClassName);

  htmlElement.innerHTML = MyInfo;
  htmlElement.style.color = Color;
}
