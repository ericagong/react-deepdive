/**
 * 소스 코드 내 주석에 @jsx 구문 포함시, babel은 build 결과를 주석에 매칭시킴
 * 따라서 빌드 파일에서 사용하기 위해 createElement import 필요
 */
/* @jsx createElement */
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

/**
 * @jsx React.createElement()의 syntatic sugar로 HTML 형식으로 작성 시, 내부적으로 createElement로 동작
 */
const vDOM3 = (
  <p>
    <h1>텍스트</h1>
    <ul>
      <li style='color: red'>첫번째 아이템</li>
      <li id='item2' style='color: blue'>
        두번째 아이템
      </li>
      <li style='color: green'>세번째 아이템</li>
    </ul>
  </p>
);

/**
 * @function Title React 함수형 컴포넌트 예제
 * @returns
 */
function Title(props) {
  return <h1>{props.children}</h1>;
}

function Item(props) {
  return <li style={`color:${props.color}`}>{props.children}</li>;
}

/**
 * @jsx React.createElement()의 syntatic sugar로 HTML 형식으로 작성 시, 내부적으로 createElement로 동작
 */
const vDOM4 = (
  <p>
    <Title>텍스트</Title>
    <ul>
      <Item color='red'>첫번째 아이템</Item>
      <Item color='blue'>두번째 아이템</Item>
      <Item color='green'>세번째 아이템</Item>
    </ul>
  </p>
);

// DOM root node에 생성한 DOM node를 붙여줌
// document.querySelector("#root").appendChild(createDOM(vDOM));
render(document.querySelector("#root"), vDOM);
render(document.querySelector("#root"), vDOM2);
render(document.querySelector("#root"), vDOM3);
render(document.querySelector("#root"), vDOM4);
