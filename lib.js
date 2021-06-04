(function () {
  const MAX_NUMBER = 20;
  const MIN_NUMBER = 0;
  const ATTEMPTS = 5;

  let counter = makeCounter();
  let currentCount = ATTEMPTS;

  function getUserNumber() {
    let num = prompt("Введи число!");
    if (!isNaN(parseFloat(num)) && isFinite(num)) {
      return parseFloat(num);
    } else if (num === null) {
      return null;
    }
  }

  function getRandomNumber(min, max) {
    return Math.round(Math.random() * (max - min) + min);
  }

  function checkGameCondition(num) {
    if (currentCount > 0) {
      counter();

      let userNumber = getUserNumber();

      if (userNumber !== null) {
        if (userNumber < num) {
          alert(
            "Твое число меньше, у тебя осталось " +
              currentCount +
              " " +
              declOfNum(currentCount, ["попытка", "попытки", "попыток"])
          );
          checkGameCondition(num);
        } else if (userNumber > num) {
          alert(
            "Твое число больше, у тебя осталось " +
              currentCount +
              " " +
              declOfNum(currentCount, ["попытка", "попытки", "попыток"])
          );
          checkGameCondition(num);
        } else if (userNumber === num) {
          alert("Ты угадал!");
        } else {
          alert(
            "Необходимо ввести число! У тебя осталось " +
              currentCount +
              " " +
              declOfNum(currentCount, ["попытка", "попытки", "попыток"])
          );
          checkGameCondition(num);
        }
      }
    }
    currentCount = ATTEMPTS;
  }

  function makeCounter() {
    return function () {
      return currentCount--;
    };
  }

  function declOfNum(number, words) {
    return words[
      number % 100 > 4 && number % 100 < 20
        ? 2
        : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? number % 10 : 5]
    ];
  }

  playGame = function () {
    alert(
      "Я загадал случайное целое число от " +
        MIN_NUMBER +
        " до " +
        MAX_NUMBER +
        ", попробуй его угадать за " +
        currentCount +
        " " +
        declOfNum(currentCount, ["попытка", "попытки", "попыток"])
    );
    const randomNumber = getRandomNumber(MAX_NUMBER, MIN_NUMBER);
    console.log(randomNumber);
    checkGameCondition(randomNumber);
    while (confirm("Хочешь сыграть заново?")) {
      playGame();
      break;
    }
  };

  window.game = playGame;
})();
