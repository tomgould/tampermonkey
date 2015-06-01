// ==UserScript==
// @name       Monkeys
// @namespace  http://Monkeys/
// @version    0.1
// @description  Monkeys
// @match      *://*/*
// @copyright  2012+, Monkeys
// @grant GM_addStyle
// ==/UserScript==
javascript: function htmlreplace(a, b, element) {
    if (!element) element = document.body;
    var nodes = element.childNodes;
    for (var n = 0; n < nodes.length; n++) {
        if (nodes[n].nodeType == Node.TEXT_NODE) {
            nodes[n].textContent = nodes[n].textContent.replace(new RegExp(a, 'gi'), b);
        } else {
            htmlreplace(a, b, nodes[n]);
        }
    }
}
htmlreplace('Monkey', 'Minkey');
