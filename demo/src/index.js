// import _ from 'lodash';
import { file,helpers } from './globals.js'
function component() {
  const element = document.createElement("div");

  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash，现在通过一个 script 引入
  //  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.innerHTML = join(["Hello", "webpack"], " ");
  // 假设我们处于 `window` 上下文
  alert("Hmmm, this probably isn't a great idea...");
  console.log(file);
  helpers.parse()
  return element;
}

document.body.appendChild(component());
