// console.log(' @@@@@@@@@@ '); 
/* console.log(document.head); //
console.log(document.documentElement); // */

/* console.log(document.body.childNodes); // все дети боди псевдомассив
console.log(document.body.firstChild); // первое и посл дете
console.log(document.body.lastChild); // первое и посл дете
// любой элемент, соседи, дети и тд */
//console.log(document.querySelector('#current').prependElementSibling); // ищем current по id, потом берем его родителей вверх
 
//избавиться от текстовых нод, оставить только элементы - childNodes нет аналога
for (let node of document.body.childNodes){
    if (node.nodeName == '#text') continue;
    console.log(node); 

};
