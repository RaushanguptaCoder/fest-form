 const current = document.querySelector(".currentp");
      const container = document.querySelector(".container");
      const box1 = document.querySelector(".box-1");
      const box2 = document.querySelector(".box-2");
      const box3 = document.querySelector(".box-3");
      const box4 = document.querySelector(".box-4");
      const box5 = document.querySelector(".box-5");
      const box6 = document.querySelector(".box-6");
      const box7 = document.querySelector(".box-7");
      const box8 = document.querySelector(".box-8");
      const box9 = document.querySelector(".box-9");

      let currentPlayer = "X"; // Start with "X"
      const board = Array(9).fill(null); // Represent the board as an array

      const winarr = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8], // Rows
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8], // Columns
        [0, 4, 8],
        [2, 4, 6], // Diagonals
      ];

      container.addEventListener("click", (event) => {
        const targetElement = event.target;
        const index = Array.from(container.querySelectorAll(".box")).indexOf(
          targetElement
        );

        if (targetElement.classList.contains("box") && !board[index]) {
          // Mark the box
          board[index] = currentPlayer;
          targetElement.classList.add(
            currentPlayer === "X" ? "crossarea" : "oarea"
          );
          current.textContent = `Current Player is ${
            currentPlayer === "X" ? "O" : "X"
          }`;

          // Check for win or draw
          if (checkWin()) {
            alert(`${currentPlayer} wins!`);
            resetGame();
          } else if (board.every((cell) => cell)) {
            alert("It's a draw!");
            resetGame();
          } else {
            // Switch player
            currentPlayer = currentPlayer === "X" ? "O" : "X";
          }
        }
      });

      function checkWin() {
        return winarr.some((pattern) =>
          pattern.every((index) => board[index] === currentPlayer)
        );
      }

      function resetGame() {
        board.fill(null);
        Array.from(container.querySelectorAll(".box")).forEach((box) => {
          box.className = "box"; // Reset all boxes
        });
        currentPlayer = "X"; // Reset to player X
        current.textContent = `Current Player is ${currentPlayer}`;
      }