// 编译方法
function Compile(el, vm){

  // 判断是否是元素节点
  function isElementNode(node){
    return node.nodeType === 1;
  }

  // 将页面元素全部放到文档碎片中
  function nodeToFragment(el){
    var fragment = document.createDocumentFragment();
    var firstChild;
    while (firstChild = el.firstChild){
      fragment.appendChild(firstChild);
    }
    return fragment;
  }
  // 编译方法
  function compile(fragment){
    var childNodes = fragment.childNodes;
    // 将文档碎片内的元素遍历
    Array.prototype.slice.call(childNodes).forEach(function(item){
      // 如果是元素节点
      if(isElementNode(item)){
        compileElement(item);
      }else{
        // 文本节点
      }
    });
  }

  // 编译元素节点
  function compileElement(node){
    // 获取当前节点的属性
    var attrs = node.attributes;
    console.log(attrs);
  }

  this.el = isElementNode(el) ? el : document.querySelector(el);
  this.vm = vm;
  if(this.el){
    var fragment = nodeToFragment(this.el);
    compile(fragment);
  }

  

}
