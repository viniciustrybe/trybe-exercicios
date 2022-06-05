function createDaysOfTheWeek() {
  const weekDays = [
    "Domingo",
    "Segunda",
    "Terça",
    "Quarta",
    "Quinta",
    "Sexta",
    "Sábado",
  ];
  const weekDaysList = document.querySelector(".week-days");

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement("li");
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  }
}

createDaysOfTheWeek();

// Escreva seu código abaixo.

function createDaysOfTheMonth() {
  const dezDaysList = [
    29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ];
  let daysList = document.getElementById("days");

  for (let i = 0; i < dezDaysList.length; i += 1) {
    let days = document.createElement("li");
    days.innerText = dezDaysList[i];
    daysList.appendChild(days);
    days.className = "day";
    if (
      dezDaysList[i] === 24 ||
      dezDaysList[i] === 25 ||
      dezDaysList[i] === 31
    ) {
      days.className = "day holiday";
    }
    if (
      dezDaysList[i] === 4 ||
      dezDaysList[i] === 11 ||
      dezDaysList[i] === 18 ||
      dezDaysList[i] === 25
    ) {
      days.className = "day friday";
    }
  }
}

createDaysOfTheMonth();

let buttonContainer = document.querySelector(".buttons-container");

function createHolidayButton(Feriados) {
  let button = document.createElement("button");
  button.innerText = "Feriados";
  button.className = "btn-holiday";
  buttonContainer.appendChild(button);
}

createHolidayButton();