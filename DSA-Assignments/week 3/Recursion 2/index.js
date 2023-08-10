// All indices of target in an array

function findAllIndices(arr, target) {
  function findIndex(arr, target, i, fsf) {
    if (i === arr.length) {
      return new Array(fsf);
    }
    if (arr[i] == target) {
      let iArr = findIndex(arr, target, i + 1, fsf + 1);
      iArr[fsf] = i;
      return iArr;
    } else {
      let iArr = findIndex(arr, target, i + 1, fsf);
      return iArr;
    }
  }
  return findIndex(arr, target, 0, 0);
}
// console.log(findAllIndices([1, 2, 3, 2, 4, 2, 5], 2)); // output [1,3,5]

// subsequence using recursion

function subsequencesOfString(str) {
  let output = [];
  console.log(str);
  function generateSubseq(str, ans) {
    if (str.length == 0) {
      output.push(ans);
      return;
    }
    // pick
    generateSubseq(str.substring(1), ans + str.charAt(0));

    // not pick
    generateSubseq(str.substring(1), ans);
  }
  generateSubseq(str, "");
  return output;
}
// console.log(subsequencesOfString("abc"));
// output :- ['abc', 'ab', 'ac', 'a', 'bc', 'b', 'c', '']

//Flood fill

function floodFill(image, sr, sc, color) {
  // depth first search function
  function dfs(row, col, ans, image, color, deltaRow, deltaCol, initialClr) {
    ans[row][col] = color;
    let n = image.length;
    let m = image[0].length;
    // traversing to four neighbours
    for (let i = 0; i < 4; i++) {
      let nrow = row + deltaRow[i];
      let ncol = col + deltaCol[i];
      if (
        nrow >= 0 &&
        nrow < n &&
        ncol >= 0 &&
        ncol < m &&
        image[nrow][ncol] == initialClr &&
        ans[nrow][ncol] != color
      ) {
        dfs(nrow, ncol, ans, image, color, deltaRow, deltaCol, initialClr);
      }
    }
  }

  let initialClr = image[sr][sc];
  let ans = image;
  let deltaRow = [-1, 0, +1, 0];
  let deltaCol = [0, +1, 0, -1];
  dfs(sr, sc, ans, image, color, deltaRow, deltaCol, initialClr);
  return ans;
}

// output

// Get Maze paths

function mazePaths(rows, cols) {
  function getMazePaths(curRow, curCol, rows, cols) {
    let res = "";
    let ans = [];
    let dpaths = [];
    let rpaths = [];
    if (curRow == rows && curCol == cols) {
      let bres = [];
      bres.push("");
      return bres;
    }
    if (curRow < rows) {
      dpaths = getMazePaths(curRow + 1, curCol, rows, cols);
    }
    if (curCol < cols) {
      rpaths = getMazePaths(curRow, curCol + 1, rows, cols);
    }

    for (let rpath of rpaths) {
      ans.push("R" + rpath);
    }
    for (let dpath of dpaths) {
      ans.push("D" + dpath);
    }
    return ans;
  }
  return getMazePaths(1, 1, rows, cols);
}

console.log(mazePaths(3, 3));

// N Queens not completed

// function nQueens(n) {
//   chess = new Array(n[n]);
//   printNQueens(chess, "", 0);

//   function printNQueens(chess, qsf, row) {
//     if (row == chess.length) {
//       console.log();
//     }
//     for (let col = 0; col < chess.length; col++) {
//       chess[row][col] = 1;
//       printNQueens(chess, qsf + row + "-" + col + ", ", row + 1);
//       chess[row][col] = 0;
//     }
//   }
// }
