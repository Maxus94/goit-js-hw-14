const categoriesArr = [...document.querySelectorAll(".item")];
console.log("Number of categories:", categoriesArr.length);
console.log("");
categoriesArr.forEach((element) => {
  console.log("Category:", element.firstElementChild.textContent);
  //console.log("Category:", element.querySelector('h2').textContent);
  console.log("Elements:", element.lastElementChild.children.length);
  // console.log("Elements:", [...element.querySelectorAll("li")].length);
  console.log("");
});
