const addForm = document.forms['myForm'];

const titleName = document.getElementsByClassName('title-name');
const authorName = document.getElementsByClassName('author-name');
const pagesNumber = document.createElement('page-number');

let collection = document.getElementById('book-list');

let titleBook = '';
let authorBook = '';
let pagesBook = '';
let showBook;
let myLibrary = [];


addForm.addEventListener('submit', (e) => {
  e.preventDefault()
  formValues()
  //addBookToLibrary()
});

function formValues() {
  titleBook = document.getElementById('title').value;
  authorBook = document.getElementById('author').value;
  pagesBook = document.getElementById('pages').value;

  showBook = new Book(titleBook, authorBook, pagesBook);
  showBook.sayBook()
  myLibrary.push(showBook.sayBook());
  addBookToLibrary()
}

function addBookToLibrary() {
  // do stuff here
  
  for(i=0;i<myLibrary.length;i++) {
    const newBook = document.createElement('div');
    const readButton = document.createElement('button');
    const deleteButton = document.createElement('button');

    newBook.textContent = `${myLibrary[i]}`;
    newBook.classList.add('book-style');
  
    if (newBook.textContent != '') {
      readButton.textContent = 'Read';
      readButton.classList.add('read-button');
      newBook.appendChild(readButton);

      deleteButton.textContent = 'Delete';
      deleteButton.classList.add('delete-button');
      newBook.appendChild(deleteButton);
    }
      readButton.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target != null) {
          readButton.style.background= 'green';
        }
      });
      deleteButton.addEventListener('click', (e) => {
        console.log(e.target);
        if(e.target != null) {
          newBook.textContent = '';
        }
      });

    collection.appendChild(newBook);
    myLibrary[i] = '';
    
  }  
  //const newRow = document.createElement('tr');
  //newTable.appendChild(newRow);
}

function Book(title, author, pages) {
  // the constructor...
    this.title = title,
    this.author = author,
    this.pages = pages
    this.sayBook = function() {
        return `${title} ${author} ${pages}`
    }
}
