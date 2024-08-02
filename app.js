let quizData = [
  { question: "What is the capital of France?", options: ["Berlin", "Madrid", "Paris"], answer: "Paris" },
  { question: "What is the chemical symbol for water?", options: ["H2O", "O2", "CO2"], answer: "H2O" },
  { question: "What is the square root of 64?", options: ["6", "8", "10"], answer: "8" },
  { question: "Who wrote 'Romeo and Juliet'?", options: ["William Shakespeare", "Mark Twain", "Charles Dickens"], answer: "William Shakespeare" },
  { question: "What is the largest planet in our solar system?", options: ["Earth", "Jupiter", "Mars"], answer: "Jupiter" },
  { question: "What is the freezing point of water?", options: ["0°C", "32°C", "100°C"], answer: "0°C" },
  { question: "Which element is known as the 'King of the Chemicals'?", options: ["Oxygen", "Hydrogen", "Sulfuric Acid"], answer: "Sulfuric Acid" },
  { question: "What is the currency of Japan?", options: ["Yen", "Dollar", "Euro"], answer: "Yen" },
  { question: "What is the largest continent by area?", options: ["Africa", "Asia", "Europe"], answer: "Asia" },
  { question: "Who discovered penicillin?", options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur"], answer: "Alexander Fleming" },
  { question: "What is the hardest natural substance on Earth?", options: ["Gold", "Iron", "Diamond"], answer: "Diamond" },
  { question: "What is the smallest prime number?", options: ["1", "2", "3"], answer: "2" },
  { question: "Who is known as the 'Father of Computers'?", options: ["Albert Einstein", "Isaac Newton", "Charles Babbage"], answer: "Charles Babbage" },
  { question: "What is the capital of Australia?", options: ["Sydney", "Melbourne", "Canberra"], answer: "Canberra" },
  { question: "What is the longest river in the world?", options: ["Amazon", "Nile", "Yangtze"], answer: "Nile" },
  { question: "What is the chemical formula for table salt?", options: ["NaCl", "KCl", "CaCl2"], answer: "NaCl" },
  { question: "Which planet is known as the Red Planet?", options: ["Earth", "Mars", "Venus"], answer: "Mars" },
  { question: "Who painted the Mona Lisa?", options: ["Vincent Van Gogh", "Pablo Picasso", "Leonardo da Vinci"], answer: "Leonardo da Vinci" },
  { question: "What is the main gas found in the air we breathe?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
  { question: "What is the boiling point of water?", options: ["100°C", "50°C", "0°C"], answer: "100°C" },
  { question: "What is the chemical symbol for gold?", options: ["Au", "Ag", "Fe"], answer: "Au" },
  { question: "Who was the first President of the United States?", options: ["George Washington", "Abraham Lincoln", "Thomas Jefferson"], answer: "George Washington" },
  { question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome"], answer: "Mitochondria" },
  { question: "What is the chemical symbol for sodium?", options: ["S", "Na", "N"], answer: "Na" },
  { question: "What is the largest ocean on Earth?", options: ["Atlantic", "Indian", "Pacific"], answer: "Pacific" },
  { question: "What is the capital of Italy?", options: ["Venice", "Rome", "Milan"], answer: "Rome" },
  { question: "What is the smallest country in the world?", options: ["Monaco", "Nauru", "Vatican City"], answer: "Vatican City" },
  { question: "What is the fastest land animal?", options: ["Cheetah", "Lion", "Tiger"], answer: "Cheetah" },
  { question: "What is the largest mammal?", options: ["Elephant", "Blue Whale", "Giraffe"], answer: "Blue Whale" },
  { question: "What is the tallest mountain in the world?", options: ["K2", "Kangchenjunga", "Mount Everest"], answer: "Mount Everest" },
  { question: "What is the main ingredient in traditional Japanese miso soup?", options: ["Soybeans", "Fish", "Chicken"], answer: "Soybeans" },
  { question: "What is the capital of Canada?", options: ["Toronto", "Vancouver", "Ottawa"], answer: "Ottawa" },
  { question: "Who wrote '1984'?", options: ["Aldous Huxley", "George Orwell", "Ray Bradbury"], answer: "George Orwell" },
  { question: "What is the process of converting water vapor into liquid water called?", options: ["Evaporation", "Condensation", "Precipitation"], answer: "Condensation" },
  { question: "What is the smallest unit of life?", options: ["Organism", "Cell", "Tissue"], answer: "Cell" },
  { question: "What is the chemical symbol for iron?", options: ["Ir", "Fe", "I"], answer: "Fe" },
  { question: "What is the largest desert in the world?", options: ["Sahara", "Arctic", "Antarctic"], answer: "Antarctic" },
  { question: "What is the capital of Germany?", options: ["Munich", "Frankfurt", "Berlin"], answer: "Berlin" },
  { question: "What is the process by which plants make their own food?", options: ["Respiration", "Photosynthesis", "Transpiration"], answer: "Photosynthesis" },
  { question: "What is the capital of Spain?", options: ["Barcelona", "Seville", "Madrid"], answer: "Madrid" },
  { question: "What is the most abundant gas in the Earth's atmosphere?", options: ["Oxygen", "Nitrogen", "Carbon Dioxide"], answer: "Nitrogen" },
  { question: "What is the main ingredient in guacamole?", options: ["Tomato", "Avocado", "Onion"], answer: "Avocado" },
  { question: "What is the capital of China?", options: ["Beijing", "Shanghai", "Hong Kong"], answer: "Beijing" },
  { question: "What is the term for animals that are active during the night?", options: ["Diurnal", "Nocturnal", "Crepuscular"], answer: "Nocturnal" },
  { question: "What is the hardest substance in the human body?", options: ["Bone", "Enamel", "Cartilage"], answer: "Enamel" },
  { question: "What is the capital of Brazil?", options: ["Rio de Janeiro", "Sao Paulo", "Brasilia"], answer: "Brasilia" },
  { question: "Who invented the telephone?", options: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla"], answer: "Alexander Graham Bell" },
  { question: "What is the smallest ocean?", options: ["Atlantic", "Indian", "Arctic"], answer: "Arctic" },
  { question: "What is the capital of India?", options: ["Mumbai", "Delhi", "Bangalore"], answer: "Delhi" },
  { question: "What is the primary language spoken in Brazil?", options: ["Spanish", "English", "Portuguese"], answer: "Portuguese" }
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
let userAnswers = []; // Array to store user answers

function renderQuiz(page) {
  let start = page * questionsPerPage;
  let end = start + questionsPerPage;
  let quizArray = quizData.slice(start, end).map((quiz, index) => {
      return `<div class="row bg-light fonts shadow-sm">
                  <div class="col-md-8 p-3">
                      <div class="d-flex align-items-center">
                          <p class="col-1">${start + index + 1}</p>
                          <p class="question mb-0" style="font-size: 15px;">${quiz.question}</p>
                      </div>
                      <select class="form-select w-100 py-2" ${userAnswers[start + index] ? 'disabled' : ''}>
                          <option value="" disabled ${userAnswers[start + index] ? '' : 'selected'}>Select an answer</option>
                          ${quiz.options.map(option => 
                              `<option value="${option}" ${userAnswers[start + index] === option ? 'selected' : ''}>${option}</option>`
                          ).join("")}
                      </select>
                  </div>
                  <div class="col-md-4 p-3">
                      <p class="selected"> ${userAnswers[start + index] || ''}</p>
                      <p class="correct" style="display: none;">Correct answer: ${quiz.answer}</p>
                      <p class="status" style="display: none;">Status: </p>
                  </div>
              </div>`;
  }).join("");

  dataView.innerHTML = quizArray;

  let selectedItem = document.querySelectorAll("select");
  selectedItem.forEach((select, index) => {
      select.addEventListener("change", (event) => {
          let selectValue = event.target.value;
          let selectedAnswer = document.querySelectorAll(".selected")[index];
          selectedAnswer.innerHTML = `Selected answer: ${selectValue}`;
          let correctAnswer = document.querySelectorAll(".correct")[index];
          correctAnswer.innerHTML = `Correct answer: ${quizData[start + index].answer}`;
          correctAnswer.style.display = "block";
          
          let status = document.querySelectorAll(".status")[index];
          status.innerHTML = `Status: ${quizData[start + index].answer === selectValue ? 'Correct' : 'Wrong'}`;
          status.style.display = "block";

          if (quizData[start + index].answer === selectValue) {
              result += 2;
          }
          resultDisplay.innerHTML = `${result}/100`;
          userAnswers[start + index] = selectValue; // Store the selected answer
          select.disabled = true;
      });
  });

  previousButton.style.display = start > 0 ? "inline-block" : "none";
  nextButton.style.display = end < quizData.length ? "inline-block" : "none";
}

function startGame() {
  result = 0;
  userAnswers = []; // Reset user answers
  resultDisplay.innerHTML = `0/100`;
  currentPage = 0;
  renderQuiz(currentPage);
  startButton.style.display = "none";
  submitButton.style.display = "inline-block";
  newButton.classList.remove("hide");
  document.querySelector(".card-footer").classList.remove("hide");
  document.querySelector(".result").classList.remove("hide");
}

function newGame() {
  result = 0;
  userAnswers = []; // Reset user answers
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
