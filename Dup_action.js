// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(users => {
//     const tableBody = document.getElementById('table-body');
//     users.forEach(user => {
//       const row = document.createElement('tr');
//       const userIdCell = document.createElement('td');
//       const companyNameCell = document.createElement('td');
//       const personNameCell = document.createElement('td');
//       const detailsCell = document.createElement('td');
//       const actionsCell = document.createElement('td');

    //   userIdCell.textContent = user.id;
    //   companyNameCell.textContent = user.company.name;
    //   personNameCell.textContent = user.name;
    //   detailsCell.innerHTML = `
    //     <p>Email: ${user.email}</p>
    //     <p>Phone: ${user.phone}</p>
    //   `;
      
      // Fetch posts, todos, and comments for the user
      Promise.all([
        fetch(`https://jsonplaceholder.typicode.com/posts${user.id}`),
        fetch(`https://jsonplaceholder.typicode.com/comments${user.id}`),
        fetch(`https://jsonplaceholder.typicode.com/todos${user.id}`),
        fetch(`https://jsonplaceholder.typicode.com/albums${user.id}`)

      ])
      .then(([postsResponse, commentsResponse, todosResponse, albumsResponse]) => {
        return Promise.all([
          postsResponse.json(),
          commentsResponse.json(),
          todosResponse.json(),
          albumsResponse.json(),

        ]);
      })
      .then(([posts, comments, todos, albums ]) => {
        const postCount = posts.length;
        const commentCount = comments.length;
        const todoCount = todos.length;
        const albumCount = albums.length;
        
        const postsButton = document.createElement('button');
        postsButton.textContent = `Posts (${postCount})`;
        postsButton.addEventListener('click', () => {
          window.location.href = `https://jsonplaceholder.typicode.com/posts?userId=${user.id}`;
        });
        
        const commentsButton = document.createElement('button');
        commentsButton.textContent = `Comments (${commentCount})`;
        commentsButton.addEventListener('click', () => {
          window.location.href = `https://jsonplaceholder.typicode.com/comments?userId=${user.id}`;
        });

        const todosButton = document.createElement('button');
        todosButton.textContent = `Todos (${todoCount})`;
        todosButton.addEventListener('click', () => {
          window.location.href = `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`;
        });
        
        const albumsButton = document.createElement('button');
        todosButton.textContent = `Albums (${albumCount})`;
        todosButton.addEventListener('click', () => {
          window.location.href = `https://jsonplaceholder.typicode.com/todos?userId=${user.id}`;
        });
        
        
        // actionsCell.appendChild(postsButton);
        // actionsCell.appendChild(commentsButton);
        // actionsCell.appendChild(todosButton);
        // actionsCell.appendChild(albumsButton);

      });
      
    //   row.appendChild(userIdCell);
    //   row.appendChild(companyNameCell);
    //   row.appendChild(personNameCell);
    //   row.appendChild(detailsCell);
    //   row.appendChild(actionsCell);

    //   tableBody.appendChild(row);
//     });
//   });
