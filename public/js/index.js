import Masonry from "masonry-layout";

console.log("Did it work??");

window.onload = () => {
  const grid = document.querySelector(".grid");
  console.log("it working");
  const masonry = new Masonry(grid, {
    itemSelector: ".grid-item",
    columnWidth: ".grid-sizer",
    gutter: 10,
    // percentPosition: true,
    fitWidth: true,
  });

  masonry.on("layoutComplete", () => console.log("Layout Complete"));
};
