const content = document.querySelector('.content');
const husdjur = ['Kanin', 'Hund', 'Katt', 'Fisk', 'Fågel'];

husdjur.forEach(djur => {
    content.innerHTML += `<p>${djur}</p>`;
});