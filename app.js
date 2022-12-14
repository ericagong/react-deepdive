/**
 * createDOM :: 태그 혹은 텍스트를 받아서 DOM node를 생성해 반환하는 함수
 * @param {object} node text니 node 형식의 객체
 */
function createDOM(node) {
  // 태그가 아닌 텍스트가 들어온 경우 텍스트 노드 만들어 처리
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // 실제 element 생성
  const element = document.createElement(node.tag);

  // 자식 node 재귀적으로 element 생성하고 부모 element에 추가
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

const node = {
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
          props: {},
          children: ["첫번째 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["두번째 아이템"],
        },
        {
          tag: "li",
          props: {},
          children: ["세번째 아이템"],
        },
      ],
    },
  ],
};

// DOM root node에 생성한 DOM node를 붙여줌
document.querySelector("#root").appendChild(createDOM(node));
