const students = [
	{
		"name" : "Adi Dzocaj",
		"image": "images/students/adi-dzocaj.jpg",
	},
	{
		"name" : "Alexander Bergquist",
		"image": "images/students/alexander-bergquist.jpg",
	},
	{
		"name" : "Alexander Kocman",
		"image": "images/students/alexander-kocman.jpg",
	},
	{
		"name" : "Benjamin Benson",
		"image": "images/students/benjamin-benson.jpg",
	},
	{
		"name" : "Benjamin Tsubarah",
		"image": "images/students/benjamin-tsubarah.jpg",
	},
	{
		"name" : "Calle Nilsson",
		"image": "images/students/calle-nilsson.jpg",
	},
	{
		"name" : "Chikage Takahashi Molander",
		"image": "images/students/chikage-takahashi-molander.jpg",
	},
	{
		"name" : "Daniel Be",
		"image": "images/students/daniel-be.jpg",
	},
	{
		"name" : "Daniel Carlsson",
		"image": "images/students/daniel-carlsson.jpg",
	},
	{
		"name" : "Elin Ahlgren",
		"image": "images/students/elin-ahlgren.jpg",
	},
	{
		"name" : "Emma Käck",
		"image": "images/students/emma-kack.jpg",
	},
	{
		"name" : "Eric Ståhl",
		"image": "images/students/eric-stahl.jpg",
	},
	{
		"name" : "Frans Gustavson Påsse",
		"image": "images/students/frans-gustavson-passe.jpg",
	},
	{
		"name" : "Glafira Veretennikova",
		"image": "images/students/glafira-veretennikova.jpg",
	},
	{
		"name" : "Gustaf Grönlund",
		"image": "images/students/gustaf-gronlund.jpg",
	},
	{
		"name" : "Hanna Håkanson",
		"image": "images/students/hanna-hakanson.jpg",
	},
	{
		"name" : "Heidi Sjöberg",
		"image": "images/students/heidi-sjoberg.jpg",
	},
	{
		"name" : "Hugo Carzborn",
		"image": "images/students/hugo-carzborn.jpg",
	},
	{
		"name" : "Jesper Kling",
		"image": "images/students/jesper-kling.jpg",
	},
	{
		"name" : "Johan Ranestam",
		"image": "images/students/johan-ranestam.jpg",
	},
	{
		"name" : "Johanna Bäckström",
		"image": "images/students/johanna-backstrom.jpg",
	},
	{
		"name" : "Johanna Jönsson",
		"image": "images/students/johanna-jonsson.jpg",
	},
	{
		"name" : "Jona Torsson",
		"image": "images/students/jona-torsson.jpg",
	},
	{
		"name" : "Josefine Ahlstedt",
		"image": "images/students/josefine-ahlstedt.jpg",
	},
	{
		"name" : "Julia Jespersdotter Högman",
		"image": "images/students/julia-jespersdotter-hogman.jpg",
	},
	{
		"name" : "Julia Nemell",
		"image": "images/students/julia-nemell.jpg",
	},
	{
		"name" : "Linus Lindberg",
		"image": "images/students/linus-lindberg.jpg",
	},
	{
		"name" : "Malin Olsson",
		"image": "images/students/malin-olsson.jpg",
	},
	{
		"name" : "Maria Haara-Lundhammar",
		"image": "images/students/maria-haara-lundhammar.jpg",
	},
	{
		"name" : "Maria Lövgren",
		"image": "images/students/maria-lovgren.jpg",
	},
	{
		"name" : "Nikola Dimitrijoski",
		"image": "images/students/nikola-dimitrijoski.jpg",
	},
	{
		"name" : "Paulina Kiendys",
		"image": "images/students/paulina-kiendys.jpg",
	},
	{
		"name" : "Raymond Lam",
		"image": "images/students/raymond-lam.jpg",
	},
	{
		"name" : "Robin Karlsson",
		"image": "images/students/robin-karlsson.jpg",
	},
	{
		"name" : "Sara Almqvist",
		"image": "images/students/sara-almqvist.jpg",
	},
	{
		"name" : "Tim Nilsson",
		"image": "images/students/tim-nilsson.jpg",
	},
	{
		"name" : "Tirapat Sukjit",
		"image": "images/students/tirapat-sukjit.jpg",
	},
	{
		"name" : "Tobias Silfverberg",
		"image": "images/students/tobias-silfverberg.jpg",
	},
	{
		"name" : "Wiktoria Dobrzewinska",
		"image": "images/students/wiktoria-dobrzewinska.jpg",
	},
];

// Declare objects from DOM and variables
const startGameEl = document.querySelector("#startGame");
const imageHolderEl = document.querySelector("#classmateImg");
const buttonsEl = document.querySelector("#buttons");
const rightOrWrongEl = document.querySelector("#rightOrWrong");
const startOverEl = document.querySelector("#startOver");
let displayWrongAnswers = document.querySelector("#wrong");
let rightAnswerEl = document.querySelector("#rightAnswer");
let shuffledStudents = [...students];
let studentToGuess;
let guessedStudents = [];
let amountOfGuesses = 0;

// Function to remove students from array "students" so you cant guess on the same person twice
const removeItemOnce = (array, value) => {
	var index = array.indexOf(value);
	if (index > -1) {
	  array.splice(index, 1);
	}
	return array;
};

// Function to display incorrect answers
const showWrongAnswers = () => {
	let wrongGuesses = guessedStudents.filter(student => student.answer === "wrong");
	wrongGuesses.forEach(wrongGuess => {
		wrong.innerHTML += `<li>${wrongGuess.name}</li>`;
	})
};

// Function to find out amount of correct answers
const showCorrectAnswers = () => {
	let correctGuesses = guessedStudents.filter(student => student.answer === "correct");
	return correctGuesses;
};

// Fisher-Yates shuffle function
const shuffleArray = array => {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		const temp = array[i];
		array[i] = array[j];
		array[j] = temp;
	}
};

// Function to generate the student you should guess
const generateStudentToGuess = () => {
	// Shuffle the array
	shuffleArray(shuffledStudents);

	// Create small array of four students 
	let studentAlternatives = shuffledStudents.slice(0, 4).map(students => students);

	// Take out one single person to display and guess their name and add image to html
	studentToGuess = studentAlternatives[0];
	imageHolderEl.style.display = "block";
	imageHolderEl.setAttribute("src", studentToGuess.image);
	imageHolderEl.setAttribute("alt", "classmate to guess");

	// Call function remove to remove studentToGuess from original array students
	removeItemOnce(shuffledStudents, studentToGuess);

	// Shuffle students to guess from so correct answer is different position every time
	shuffleArray(studentAlternatives);

	// Clear buttonsEl before rendering new names
	buttonsEl.innerHTML = "";

	// Render buttons to HTML page with names of students
	studentAlternatives.forEach(student => {
	buttonsEl.innerHTML += `<button class="button answer">${student.name}</button>`;
})
};

// Click event to start the game
startGameEl.addEventListener('click', () => {
	generateStudentToGuess();
	startGameEl.style.display = "none";
});

// Click event for the buttons which you use for guessing on the students displayed
buttonsEl.addEventListener('click', e => {
	// Control so you clicked on a button
	if (e.target.tagName === "BUTTON") {
		// Check if you guess is right
		if (e.target.innerText === studentToGuess.name) {
			// Add value "correct" to student object
			studentToGuess.answer = "correct";
			// Push the student you guessed on with its new value to array of the students displayed
			guessedStudents.push(studentToGuess);
		} else {
			// If guess is wrong, add value "wrong" and push to array of students 
			studentToGuess.answer = "wrong";
			guessedStudents.push(studentToGuess);
		}
		// Increase amount of guesses
		amountOfGuesses++;
		// If you have not guessed 10 times already, generate new student to guess
		if (amountOfGuesses < 10) {
			generateStudentToGuess();
		} else {
			// If you guessed 10 times, clear image and buttonsEl and show button start over
			imageHolderEl.setAttribute("src", "");
			imageHolderEl.setAttribute("alt", "");
			buttonsEl.innerHTML = "";
			startOverEl.style.display = "block";
			// also show scores
			if (showCorrectAnswers().length === 10) {
				// If the amount of correct answers === 10, add firework image, and show amount of correct answers
				imageHolderEl.setAttribute("src", "images/fireworks.jpg");
				rightAnswerEl.innerHTML += `<h2> Grattis, du fick alla rätt! ${showCorrectAnswers().length}/${guessedStudents.length}! </h2>`;
			} else if (showCorrectAnswers().length < 10 && showCorrectAnswers().length >= 6) {
				// If correct answers is < 10 and > 6 show image, amount of correct answers and the wrong names
				imageHolderEl.setAttribute("src", "images/decent.jpg");
				rightAnswerEl.innerHTML += `<h2> Helt okej, du fick ${showCorrectAnswers().length}/${guessedStudents.length}! </h2>`;
				rightOrWrongEl.innerHTML += `<h3>Du gissade fel på</h3>`;
				showWrongAnswers();
			} else if (showCorrectAnswers().length < 6 && showCorrectAnswers().length > 2) {
				// If correct answers is < 6 and > 2 show image, amount of correct answers and the wrong names
				imageHolderEl.setAttribute("src", "images/littlesad.jpg");
				rightAnswerEl.innerHTML += `<h2> Nja, inte riktigt godkänt, du fick ${showCorrectAnswers().length}/${guessedStudents.length}! </h2>`;
				rightOrWrongEl.innerHTML += `<h3>Du gissade fel på</h3>`;
				showWrongAnswers();
			} else {
				// Else, show image, text and wrong answers
				imageHolderEl.setAttribute("src", "images/sadface.jpg");
				rightAnswerEl.innerHTML += `<h2> Du är tyvärr ganska dålig. Du fick ${showCorrectAnswers().length}/${guessedStudents.length}. Du borde spela någon gång till. </h2>`;
				rightOrWrongEl.innerHTML += `<h3>Du gissade fel på</h3>`;
				showWrongAnswers();
			}
		}
	}
});

// Event listener for start over button
startOverEl.addEventListener('click', () => {
	// Set shuffle array to full array again
	shuffledStudents = [...students];
	// Generate new student to guess on
	generateStudentToGuess();
	// Hide start over button, clear output fields, and reset variables
	startOverEl.style.display = "none";
	displayWrongAnswers.innerHTML = "";
	rightOrWrongEl.innerHTML = "";
	rightAnswerEl.innerHTML = "";
	amountOfGuesses = 0;
	guessedStudents = [];
});