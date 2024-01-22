const permute = function (arr, ans, temp, visited) {
  if (arr.length === visited.filter(Boolean).length) {
    ans.push([...temp]);
    return;
  }

  for (let i = 0; i < arr.length; i++) {
    if (!visited[i]) {
      visited[i] = 1;
      temp.push(arr[i]);

      permute(arr, ans, temp, visited);

      visited[i] = undefined;
      temp.pop();
    }
  }
};

const ans = [];
// permute([1, 2, 3], ans, [], []);
// console.log(ans);

// =====
const setArr = [1, 2, 2];

const arr = [];
arr.push([]);

setArr.forEach((num) => {
  const n = arr.length;
  //   console.log(n);
  //   console.log(arr);
  for (let i = 0; i < n; i++) {
    const newArr = [...arr[i]];
    newArr.push(num);
    // console.log(newArr);
    let stop;
    for (let j = 0; j < newArr.length; j++) {
      if (arr[i][j] === newArr[j]) stop = true;
    }

    if (stop) continue;
    arr.push(newArr);
  }
});

console.log(arr);
