let quizData = [
  {
    question: "What is the capital of France?",
    Options: ["Berlin", "Madrid", "Paris"],
    answer: "Paris",
  },
  {
    question: "What is the chemical symbol for water?",
    Options: ["H2O", "O2", "CO2"],
    answer: "H2O",
  },
  {
    question: "What is the square root of 64?",
    Options: ["6", "8", "10"],
    answer: "8",
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    Options: ["William Shakespeare", "Mark Twain", "Charles Dickens"],
    answer: "William Shakespeare",
  },
  {
    question: "What is the largest planet in our solar system?",
    Options: ["Earth", "Jupiter", "Mars"],
    answer: "Jupiter",
  },
  {
    question: "What is the freezing point of water?",
    Options: ["0°C", "32°C", "100°C"],
    answer: "0°C",
  },
  {
    question: "Which element is known as the 'King of the Chemicals'?",
    Options: ["Oxygen", "Hydrogen", "Sulfuric Acid"],
    answer: "Sulfuric Acid",
  },
  {
    question: "What is the currency of Japan?",
    Options: ["Yen", "Dollar", "Euro"],
    answer: "Yen",
  },
  {
    question: "What is the largest continent by area?",
    Options: ["Africa", "Asia", "Europe"],
    answer: "Asia",
  },
  {
    question: "Who discovered penicillin?",
    Options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur"],
    answer: "Alexander Fleming",
  },
  {
    question: "What is the hardest natural substance on Earth?",
    Options: ["Gold", "Iron", "Diamond"],
    answer: "Diamond",
  },
  {
    question: "What is the smallest prime number?",
    Options: ["1", "2", "3"],
    answer: "2",
  },
  {
    question: "Who is known as the 'Father of Computers'?",
    Options: ["Albert Einstein", "Isaac Newton", "Charles Babbage"],
    answer: "Charles Babbage",
  },
  {
    question: "What is the capital of Australia?",
    Options: ["Sydney", "Melbourne", "Canberra"],
    answer: "Canberra",
  },
  {
    question: "What is the longest river in the world?",
    Options: ["Amazon", "Nile", "Yangtze"],
    answer: "Nile",
  },
  {
    question: "What is the chemical formula for table salt?",
    Options: ["NaCl", "KCl", "CaCl2"],
    answer: "NaCl",
  },
  {
    question: "Which planet is known as the Red Planet?",
    Options: ["Earth", "Mars", "Venus"],
    answer: "Mars",
  },
  {
    question: "Who painted the Mona Lisa?",
    Options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci"],
    answer: "Leonardo da Vinci",
  },
  {
    question: "What is the main gas found in the air we breathe?",
    Options: ["Oxygen", "Nitrogen", "Carbon Dioxide"],
    answer: "Nitrogen",
  },
  {
    question: "What is the boiling point of water?",
    Options: ["100°C", "50°C", "0°C"],
    answer: "100°C",
  },
  {
    question: "What is the chemical symbol for gold?",
    Options: ["Au", "Ag", "Fe"],
    answer: "Au",
  },
  {
    question: "Who was the first President of the United States?",
    Options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"],
    answer: "George Washington",
  },
  {
    question: "What is the powerhouse of the cell?",
    Options: ["Nucleus", "Mitochondria", "Ribosome"],
    answer: "Mitochondria",
  },
  {
    question: "What is the chemical symbol for sodium?",
    Options: ["S", "Na", "N"],
    answer: "Na",
  },
  {
    question: "What is the largest ocean on Earth?",
    Options: ["Atlantic", "Indian", "Pacific"],
    answer: "Pacific",
  },
  {
    question: "What is the capital of Italy?",
    Options: ["Venice", "Rome", "Milan"],
    answer: "Rome",
  },
  {
    question: "What is the smallest country in the world?",
    Options: ["Monaco", "Nauru", "Vatican City"],
    answer: "Vatican City",
  },
  {
    question: "What is the fastest land animal?",
    Options: ["Cheetah", "Lion", "Tiger"],
    answer: "Cheetah",
  },
  {
    question: "What is the largest mammal?",
    Options: ["Elephant", "Blue Whale", "Giraffe"],
    answer: "Blue Whale",
  },
  {
    question: "What is the tallest mountain in the world?",
    Options: ["K2", "Kangchenjunga", "Mount Everest"],
    answer: "Mount Everest",
  },
  {
    question: "What is the main ingredient in traditional Japanese miso soup?",
    Options: ["Soybeans", "Fish", "Chicken"],
    answer: "Soybeans",
  },
  {
    question: "What is the capital of Canada?",
    Options: ["Toronto", "Vancouver", "Ottawa"],
    answer: "Ottawa",
  },
  {
    question: "Who wrote '1984'?",
    Options: ["Aldous Huxley", "George Orwell", "Ray Bradbury"],
    answer: "George Orwell",
  },
  {
    question:
      "What is the process of converting water vapor into liquid water called?",
    Options: ["Evaporation", "Condensation", "Precipitation"],
    answer: "Condensation",
  },
  {
    question: "What is the smallest unit of life?",
    Options: ["Organism", "Cell", "Tissue"],
    answer: "Cell",
  },
  {
    question: "What is the chemical symbol for iron?",
    Options: ["Ir", "Fe", "I"],
    answer: "Fe",
  },
  {
    question: "What is the largest desert in the world?",
    Options: ["Sahara", "Arctic", "Antarctic"],
    answer: "Antarctic",
  },
  {
    question: "What is the capital of Germany?",
    Options: ["Munich", "Frankfurt", "Berlin"],
    answer: "Berlin",
  },
  {
    question: "What is the process by which plants make their food?",
    Options: ["Photosynthesis", "Respiration", "Transpiration"],
    answer: "Photosynthesis",
  },
  {
    question: "What is the main gas found in the Earth's atmosphere?",
    Options: ["Oxygen", "Carbon Dioxide", "Nitrogen"],
    answer: "Nitrogen",
  },
  {
    question: "What is the name of the longest bone in the human body?",
    Options: ["Femur", "Tibia", "Humerus"],
    answer: "Femur",
  },
  {
    question: "What is the main ingredient in guacamole?",
    Options: ["Tomato", "Onion", "Avocado"],
    answer: "Avocado",
  },
  {
    question: "Who was the first man to walk on the moon?",
    Options: ["Buzz Aldrin", "Yuri Gagarin", "Neil Armstrong"],
    answer: "Neil Armstrong",
  },
  {
    question: "What is the chemical formula for carbon dioxide?",
    Options: ["CO", "CO2", "C2O"],
    answer: "CO2",
  },
  {
    question: "What is the largest country by area?",
    Options: ["China", "Canada", "Russia"],
    answer: "Russia",
  },
  {
    question: "What is the main ingredient in bread?",
    Options: ["Rice", "Flour", "Potato"],
    answer: "Flour",
  },
  {
    question: "What is the chemical symbol for silver?",
    Options: ["Si", "Ag", "Au"],
    answer: "Ag",
  },
  {
    question: "What is the capital of China?",
    Options: ["Shanghai", "Beijing", "Guangzhou"],
    answer: "Beijing",
  },
  {
    question: "What is the primary function of red blood cells?",
    Options: ["Transport oxygen", "Fight infection", "Clot blood"],
    answer: "Transport oxygen",
  },
  {
    question: "What is the basic unit of all living organisms?",
    Options: ["Atom", "Molecule", "Cell"],
    answer: "Cell",
  },
];

let dataView = document.querySelector(".data-view");
let resultDisplay = document.querySelector(".result");
let resultMessage = document.querySelector(".result-message");
let startButton = document.getElementById("startGame");
let newButton = document.getElementById("newGame");
let submitButton = document.getElementById("submitQuiz");
let nextButton = document.getElementById("next");
let previousButton = document.getElementById("previous");

let currentPage = 0;
const questionsPerPage = 1;
let result = 0;

function renderQuiz(page) {
  let start = page * questionsPerPage;
  let end = start + questionsPerPage;
  let quizArray = quizData.slice(start, end).map((quiz, index) => {
    return `<div class="row bg-light fonts shadow-sm">
                    <div class="col-md-8 p-3">
                        <div class="d-flex align-items-center">
                            <p class="col-1">${start + index + 1}</p>
                            <p class="question mb-0" style="font-size: 15px;">${
                              quiz.question
                            }</p>
                        </div>
                        <select class="form-select w-100 py-2 ">
                            <option value="" select-disabled>select an answer</option>
                            ${quiz.Options.map(
                              (option) =>
                                `<option value="${option}">${option}</option>`
                            ).join("")}
                        </select>
                    </div>
                    <div class="col-md-4 p-3">
                        <p class="selected">selected answer</p>
                        <p class="correct">correct answer</p>
                        <p class="status">status</p>
                    </div>
                </div>`;
  });

  dataView.innerHTML = quizArray.join("");

  let selectedItem = document.querySelectorAll("select");
  selectedItem.forEach((select, index) => {
    select.addEventListener("change", (event) => {
      let selectValue = event.target.value;
      let picked = document.querySelectorAll(".selected")[index];
      picked.innerHTML = `selected answer: ${selectValue}`;
      let correct = document.querySelectorAll(".correct")[index];
      correct.innerHTML = `correct answer: ${quizData[start + index].answer}`;

      if (quizData[start + index].answer === selectValue) {
        let status = document.querySelectorAll(".status")[index];
        status.innerHTML = "status: correct";
        result += 2;
        resultDisplay.innerHTML = `${result}/100`;
      } else {
        let status = document.querySelectorAll(".status")[index];
        status.innerHTML = "status: wrong";
        resultDisplay.innerHTML = `${result}/100`;
      }
      select.disabled = true;
    });
  });
  newButton.classList.add("hide");
  previousButton.style.display = start > 0 ? "inline-block" : "none";
  nextButton.style.display = end < quizData.length ? "inline-block" : "none";
}

function startGame() {
  result = 0;
  resultDisplay.innerHTML = `0/100`;
  currentPage = 0;
  renderQuiz(currentPage);
  startButton.style.display = "none";
  submitButton.style.display = "inline-block";
  resultMessage.style.display = "none";
  document.querySelector(".result").classList.remove("hide");
  document.querySelector(".card-footer").classList.remove("hide");
}

function newGame() {
  result = 0;
  resultDisplay.innerHTML = `0/100`;
  dataView.innerHTML = "";
  previousButton.style.display = "none";
  nextButton.style.display = "none";
  startButton.style.display = "inline-block";
  submitButton.style.display = "none";
  resultMessage.style.display = "none";
  document.querySelector(".result").classList.add("hide");
  document.querySelector(".card-footer").classList.add("hide");
  document.querySelector(".quit").classList.add("hide");
}

function nextPage() {
  currentPage++;
  renderQuiz(currentPage);
}

function previousPage() {
  currentPage--;
  renderQuiz(currentPage);
}

function submitQuiz() {
  dataView.innerHTML = "";
  resultMessage.style.display = "block";
  submitButton.style.display = "none";
  nextButton.style.display = "none";
  startButton.style.display = "inline-block";
  document.querySelector(".result").classList.remove("hide");
  document.querySelector(".card-footer").classList.remove("hide");
  document.querySelector(".result-message").classList.remove("hide");
  document.getElementById("next").classList.add("hide");
}

startButton.addEventListener("click", startGame);
newButton.addEventListener("click", newGame);
nextButton.addEventListener("click", nextPage);
previousButton.addEventListener("click", previousPage);
submitButton.addEventListener("click", submitQuiz);
