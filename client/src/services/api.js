// export const REST = {
//   getBoard: function () {
//     return fetch(`http://localhost:4000/puzzle`);
//   },
//   solveBoard: function (grid) {
//     const data = {
//       board: grid,
//     };
//     return fetch(`http://localhost:4000/solve`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   },
//   validateBoard: function (grid) {
//     const data = {
//       board: grid,
//     };
//     return fetch(`http://localhost:4000/validate`, {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(data),
//     });
//   },
// };

export const REST = {
  getBoard: function () {
    return fetch(`https://rjd-capstone-backend.herokuapp.com/puzzle`);
  },
  solveBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`https://rjd-capstone-backend.herokuapp.com/solve`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
  validateBoard: function (grid) {
    const data = {
      board: grid,
    };
    return fetch(`https://rjd-capstone-backend.herokuapp.com/validate`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  },
};
