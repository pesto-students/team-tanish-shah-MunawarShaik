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

function isSafe(board, row, col, N) {
  // check if no queen present in the same column
  for (let i = 0; i < row; i++) {
    if (board[i][col] === 1) {
      return false;
    }
  }

  // check if no queen is present in the same diagonal
  for (var i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
    if (board[i][j] == 1) return false;
  }

  // check if no queen is present in the same anti-diagonal
  for (var i = row - 1, j = col + 1; i >= 0 && j < N; i--, j++) {
    if (board[i][j] == 1) return false;
  }

  return true;
}

function solveNQueens(N, row, board, result) {
  // Base case
  if (row === N) {
    result.push(board.map((row) => [...row]));
    return;
  }

  for (let col = 0; col < N; col++) {
    if (isSafe(board, row, col, N)) {
      board[row][col] = 1;
      solveNQueens(N, row + 1, board, result);
      board[row][col] = 0;
    }
  }
}
