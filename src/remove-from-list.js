const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}
  // removeKFromList( l, k ) {
  //   return l.filter((element) => {
  //     if (element != k) {
  //       return element
  //     }
  //   })



 
function removeKFromList( l, k ) {
  throw new NotImplementedError('Not implemented');
  return l.filter((element) => {
    if (element != k) {
      return element
    }
  })
}

// function removeKFromLis (value) {
//   // Если нет head значит список пуст.
//   if (!this.head) {
//     return null;
//   }

//   let deletedNode = null;

//   // Если head должен быть удален, то делаем следующий узел новым head.
//   while (this.head && this.head.value === value) {
//     deletedNode = this.head;

//     // Переназначаем следующий за head узел на новый head.
//     this.head = this.head.next;
//   }

//   let currentNode = this.head;

//   // Если следующий узел должен быть удален,
//   // делаем узел через один, следующим для проверки.
//   // Перебираем все узлы и удаляем их, если их значение равно указанному.
//   if (currentNode !== null) {
//     while (currentNode.next) {
//       if (currentNode.next.value === value) {
//         deletedNode = currentNode.next;
//         // Перезаписываем, чтобы узел через один стал следующим узлом.
//         currentNode.next = currentNode.next.next;
//       } else {
//         currentNode = currentNode.next;
//       }
//     }
//   }

//   // Проверяем, должен ли tail быть удален.
//   // Так как, если в цикле мы удаляем последний узел,
//   // то с предпоследнего узла убираем только ссылку на него.
//   // Поэтому делаем проверку на его удаление с "tail".
//   if (this.tail && this.tail.value === value) {
//     // в данном случае currentNode это или предпоследний узел или head.
//     this.tail = currentNode;
//   }

//   return deletedNode;
// }


module.exports = {
  removeKFromList
};
