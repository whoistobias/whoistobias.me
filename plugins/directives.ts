import Vue from 'vue'

Vue.directive('block-text', {
  // directive definition
  inserted(el) {
    function blockify(node: ChildNode) {
      if (node.nodeType === 3) {
        const style = window.getComputedStyle(node.parentElement!)
        const newText = node.textContent
          ? node.textContent.replace(/\S/g, '–').trim().split(' ')
          : []
        const newNode = document.createElement('span')
        for (const word of newText) {
          const span = document.createElement('span')
          span.style.display = 'inline-block'
          span.style.lineHeight = '.7em'
          span.style.color = 'transparent'
          span.style.backgroundColor = style.color
          span.style.borderRadius = '.1em'
          span.style.userSelect = 'none'
          span.innerText = word
          const text = document.createTextNode(' ')
          newNode.append(span, text)
        }
        node.replaceWith(newNode)
      } else if (node.nodeType === 1) {
        node.childNodes.forEach(blockify)
      }
    }
    el.childNodes.forEach(blockify)
  },
})
