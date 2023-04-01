// const buttons = document.querySelectorAll('button');
//       buttons.forEach(button => {
//         button.addEventListener('click', event => {
//           const userId = event.target.dataset.userId;
//           window.location.href = `info.html?userId=${userId}`;

//         });
//       });

const buttonContainer = document.querySelector('#button-container');
buttonContainer.addEventListener('click', event => {
  const button = event.target.closest('button');
  if (!button) return;
  const url = button.dataset.url;
  if (!url) {
    console.error('No data-url attribute found on button:', button);
    return;
  }
  window.location.href = url;
});