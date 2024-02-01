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
