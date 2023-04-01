// script for the tabel/main page 
const tableBody = document.getElementById('table-body');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const { id } = user;
            console.loh(id);
            document.addEventListener('DOMContentLoaded', () => {
                // const postsButton = document.getElementById('posts-button');
                postsButton.addEventListener('click', () => {
                  displayPosts(id);

                })
                function displayPosts(userId){
                    const url = `details.html?userId=${userId}`;
                    console.log(userId);
                    window.open(url, '_blank')
                  }
            });
        });
    });