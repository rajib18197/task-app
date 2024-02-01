// // // const permute = function (arr, ans, temp, visited) {
// // //   if (arr.length === visited.filter(Boolean).length) {
// // //     ans.push([...temp]);
// // //     return;
// // //   }

// // //   for (let i = 0; i < arr.length; i++) {
// // //     if (!visited[i]) {
// // //       visited[i] = 1;
// // //       temp.push(arr[i]);

// // //       permute(arr, ans, temp, visited);

// // //       visited[i] = undefined;
// // //       temp.pop();
// // //     }
// // //   }
// // // };

// // // const ans = [];
// // // // permute([1, 2, 3], ans, [], []);
// // // // console.log(ans);

// // // // =====
// // // const setArr = [1, 2, 2];

// // // const arr = [];
// // // arr.push([]);

// // // setArr.forEach((num) => {
// // //   const n = arr.length;
// // //   //   console.log(n);
// // //   //   console.log(arr);
// // //   for (let i = 0; i < n; i++) {
// // //     const newArr = [...arr[i]];
// // //     newArr.push(num);
// // //     // console.log(newArr);
// // //     let stop;
// // //     for (let j = 0; j < newArr.length; j++) {
// // //       if (arr[i][j] === newArr[j]) stop = true;
// // //     }

// // //     if (stop) continue;
// // //     arr.push(newArr);
// // //   }
// // // });

// // // console.log(arr);
// // // let newArr = [];
// // // var rotate = function (nums, k) {
// // //   k = k % nums.length;
// // //   console.log(k);
// // //   for (let i = 0; i < Math.floor(nums.length / 2); i++) {
// // //     let temp = nums[nums.length - i - 1];
// // //     nums[nums.length - i - 1] = nums[i];
// // //     nums[i] = temp;
// // //   }

// // //   for (let i = 0; i < Math.floor(k / 2); i++) {
// // //     let temp = nums[k - i - 1];
// // //     console.log(temp);
// // //     nums[k - i - 1] = nums[i];
// // //     nums[i] = temp;
// // //   }

// // //   for (let i = k; i < Math.floor((nums.length + k) / 2); i++) {
// // //     let temp = nums[nums.length - i + k - 1];
// // //     nums[nums.length - i + k - 1] = nums[i];
// // //     nums[i] = temp;
// // //   }
// // // };

// // // const arr = [1, 2, 3, 4, 5, 6, 7];

// // // rotate(arr, 3);
// // // console.log(arr);

// // // const elements = [1, 2, 3, 6, 4, 8];

// // // const insert = function (arr, index, element) {
// // //   let i;
// // //   for (i = index; i < arr.length; i++) {
// // //     arr[i] = arr[i + 1];
// // //   }
// // //   arr.length--;
// // //   console.log(arr);
// // // };

// // // insert(elements, 2);

// // const rotateRight = function (arr, k) {
// //   k = k % arr.length;

// //   for (let i = 0; i < Math.floor(k / 2); i++) {
// //     let temp = arr[k - i - 1];
// //     arr[k - i - 1] = arr[i];
// //     arr[i] = temp;
// //   }

// //   for (let i = k; i < Math.floor((k + arr.length) / 2); i++) {
// //     let temp = arr[arr.length - i + k - 1];
// //     arr[arr.length - i + k - 1] = arr[i];
// //     arr[i] = temp;
// //   }
// //   console.log(arr);
// //   for (let i = 0; i < Math.floor(arr.length / 2); i++) {
// //     let temp = arr[arr.length - i - 1];
// //     arr[arr.length - i - 1] = arr[i];
// //     arr[i] = temp;
// //   }
// // };

// // // 2, 1 - 6, 5, 4, 3
// // const arr = [1, 2, 3, 4, 5, 6];
// // // 3, 4, 5, 6, 1, 2
// // rotateRight(arr, 2);
// // console.log(arr);

// // const absentNumber = function (arr, num) {
// //   let start = 0;
// //   let end = arr.length - 1;
// //   let count = 0;
// //   if (arr[start] - 1 !== 0) {
// //     count = count + 1;
// //   }

// //   if (num === 1 && count === 1) return arr[start] - 1;

// //   while (start <= end) {
// //     const mid = Math.floor(start + (end - start) / 2);

// //     if (arr[mid] - arr[start] === mid - start) {
// //       start = mid;
// //     } else {
// //       const r = arr[mid] - arr[start];
// //       console.log(r);
// //       for (let i = 1; i < r; i++) {
// //         count += 1;
// //         if (count === num) {
// //           console.log(count, num, i);
// //           return arr[start] + i;
// //         }
// //       }
// //       start = mid;
// //     }
// //   }

// //   return -1;
// // };

// const absentNumber = function (arr, num) {
//   let start = 0;
//   let end = arr.length - 1;
//   let count = 0;

//   while (start <= end) {
//     const mid = Math.floor(start + (end - start) / 2);

//     if (arr[mid] - arr[start] === mid - start) {
//       start = mid;
//     } else {
//       const r = arr[mid] - arr[start];
//       console.log(r);
//       for (let i = 1; i < r; i++) {
//         count += 1;
//         if (count === num) {
//           console.log(count, num, i);
//           return arr[start] + i;
//         }
//       }
//       start = mid;
//     }
//   }

//   return -1;
// };

// const arr = [2, 3, 4, 7, 11, 12];
// const absent = absentNumber(arr, 6);

// console.log(absent);

/* Doubly Linked List */

class Node {
  data;
  prev;
  next;

  constructor(data) {
    this.data = data;
    this.prev = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  head = null;
  _size = 0;

  insertAtFirst(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
      this._size++;
      return;
    }

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this._size++;
  }

  insertAtLast(data) {
    const newNode = new Node(data);

    if (this.head === null) {
      this.insertAtFirst(data);
      return;
    }

    let temp = this.head;

    while (temp.next) {
      temp = temp.next;
    }

    temp.next = newNode;
    newNode.prev = temp;
  }

  display() {
    let temp = this.head;
    let result = "";

    while (temp) {
      result = result + temp.data + " -> ";
      temp = temp.next;
    }

    result += "end";
    console.log(result);
  }

  transformArrToDll(arr) {
    let head = null;
    let temp = null;

    for (let el of arr) {
      const newNode = new Node(el);

      if (head === null) {
        head = newNode;
        temp = head;
        continue;
      }

      temp.next = newNode;
      newNode.prev = temp;
      temp = temp.next;
    }

    temp = head;
    let result = "";

    while (temp) {
      result = result + temp.data + " -> ";
      temp = temp.next;
    }

    result = result + "end";

    console.log(result);
  }

  transformArrToDllRec(arr) {
    const newNode = new Node(arr[0]);

    if (arr.length === 1) {
      return newNode;
    }

    const node = this.transformArrToDllRec(arr.slice(1));
    node.prev = newNode;
    newNode.next = node;
    return newNode;
  }

  transformArrToDllRec2(arr, back) {
    if (arr.length === 0) {
      return null;
    }

    const newNode = new Node(arr[0]);
    newNode.prev = back;
    newNode.next = this.transformArrToDllRec2(arr.slice(1), newNode);
    return newNode;
  }

  transformArrToDllReverse(arr, up) {
    if (arr.length === 0) {
      return null;
    }

    const newNode = new Node(arr[0]);
    newNode.next = up;
    newNode.prev = this.transformArrToDllReverse(arr.slice(1), newNode);
    return newNode;
  }
}

const dll = new DoublyLinkedList();
// dll.insertAtFirst(4);
// dll.insertAtFirst(8);
// dll.insertAtLast(12);
// dll.insertAtLast(16);
// console.log(dll.transformArrToDllRec([1, 2, 3, 4]));
// console.log(dll.transformArrToDllRec2([1, 2, 3, 4], null));
console.log(dll.transformArrToDllReverse([1, 2], null));
// dll.display();

var MyQueue = function () {
  this.stack1 = [];
  this.stack2 = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function (x) {
  this.stack1[this.stack1.length] = x;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function () {
  for (let i = this.stack1.length - 1; i >= 1; i--) {
    this.stack2[this.stack2.length] = this.stack1[i];
  }
  const poppedElement = this.stack1[0];

  for (let i = 0; i < this.stack2.length; i++) {
    this.stack1[i] = this.stack2[this.stack2.length - i - 1];
  }
  this.stack1.length--;
  this.stack2 = [];
  console.log(poppedElement, this.stack2, this.stack1.length);
  return poppedElement;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function () {
  return this.stack1[0];
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function () {
  return this.stack1.length === 0;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */

const arr = [3, 5, 2, 1, 4];

const cyclick = function (arr) {
  let i = 0;
  while (i < arr.length) {
    if (arr[i] - 1 !== i) {
      let temp = arr[i];
      arr[i] = arr[arr[i] - 1];
      arr[temp - 1] = temp;
    } else {
      i++;
    }
    // console.log(arr, 11);
  }
};

cyclick(arr);
console.log(arr);
