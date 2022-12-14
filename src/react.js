/**
 * @function createDOM 태그 혹은 텍스트를 받아서 DOM node를 생성해 반환하는 함수
 * @param {object} node text니 node 형식의 객체
 */
export function createDOM(node) {
  // 태그가 아닌 텍스트가 들어온 경우 텍스트 노드 만들어 처리
  if (typeof node === "string") {
    return document.createTextNode(node);
  }

  // 실제 element 생성
  const element = document.createElement(node.tag);

  // element에 속성 추가
  Object.entries(node.props).forEach(([key, value]) =>
    element.setAttribute(key, value)
  );

  // 자식 node 재귀적으로 element 생성하고 부모 element에 추가
  node.children.map(createDOM).forEach(element.appendChild.bind(element));

  return element;
}

/**
 * @function render 내부 appendChild 동작 캡슐화
 * @param {object} container 변환한 요소들을 붙일 실제 DOM
 * @param {object} vDOM 변환할 가상 DOM
 */
export function render(container, vDOM) {
  container.appendChild(createDOM(vDOM));
}

/**
 * @function createElement React.createElement(component, props, ...children) 유사 함수 (https://ko.reactjs.org/docs/react-without-jsx.html)
 * @param {string} tag 태그명
 * @param {object} props 태그 속성들을 key: value 형태로 저장한 객체
 * @param {array} children 태그의 자식 요소들(다른 태그이거나 텍스트)
 * @returns {object} 간단한 객체를 생성해 반환
 */
export function createElement(tag, props, ...children) {
  // props === null 인 경우 방어코드
  props = props || {};

  return {
    tag,
    props,
    children,
  };
}
