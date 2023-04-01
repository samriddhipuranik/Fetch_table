const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const userId = urlParams.get('userId');

const postsButton = document.getElementById('posts-button');
const commentsButton = document.getElementById('comments-button');
const todosButton = document.getElementById('todos-button');
const albumsButton = document.getElementById('albums-button');

postsButton.addEventListener('click', () => {
  window.location.href = `https://jsonplaceholder.typicode.com/posts`;
});

commentsButton.addEventListener('click', () => {
  window.location.href = `https://jsonplaceholder.typicode.com/comments${userId}`;
});

todosButton.addEventListener('click', () => {
  window.location.href = `https://jsonplaceholder.typicode.com/todos${userId}`;
});

albumsButton.addEventListener('click', () => {
  window.location.href = `https://jsonplaceholder.typicode.com/albums${userId}`;
});
