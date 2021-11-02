const content = document.querySelector(".content");
const students = [
  {
    name: "Tobbe",
    age: 20,
  },
  {
    name: "DanDev",
    age: 19,
  },
];

students.forEach((student) => {
  content.innerHTML += `<p>${student.name}</p> <p>${student.age}</p>`;
});
