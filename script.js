const container = document.querySelector('.container');
const addBook = document.querySelector('.add');
const modal = document.querySelector('.modal-add');

let myLibrary = [];

function Book() {
    // the constructor..
}

function modalAppear() {
    addBook.addEventListener('click', () => {
        modal.style.display = 'block';
    })
}
addBook.onclick = modalAppear();


//close the modal when user clicks outside of it
window.onclick = function(e) {
    if (e.target === modal) {
        modal.style.display = 'none';
    }
}
//const div = document.createElement('div');
//container.appendChild(div).classList.add('card');