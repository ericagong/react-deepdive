import { createDOM, render, createElement } from "./react";

const vDOM = {
  tag: "p",
  props: {},
  children: [
    {
      tag: "h1",
      props: {},
      children: ["텍스트"],
    },
    {
      tag: "ul",
      props: {},
      children: [
        {
          tag: "li",
          props: { style: "color: red" },
          children: ["첫번째 아이템"],
        },
        {
          tag: "li",
          props: { id: "item2", style: "color: blue" },
          children: ["두번째 아이템"],
        },
        {
          tag: "li",
          props: { style: "color: green" },
          children: ["세번째 아이템"],
        },
      ],
    },
  ],
};

const vDOM2 = createElement(
  "p",
  {},
  createElement("h1", {}, "텍스트"),
  createElement(
    "ul",
    {},
    createElement("li", { style: "color: red" }, "첫번째 아이템"),
    createElement("li", { id: "item2", style: "color: blue" }, "두번째 아이템"),
    createElement("li", { style: "color: green" }, "세번째 아이템")
  )
);

// DOM root node에 생성한 DOM node를 붙여줌
// document.querySelector("#root").appendChild(createDOM(vDOM));
// render(document.querySelector("#root"), vDOM);
render(document.querySelector("#root"), vDOM2);
