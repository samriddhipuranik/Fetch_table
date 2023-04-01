// script for the tabel/main page 
const tableBody = document.getElementById('table-body');

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            const { id, name, username, email, address, phone, website, company } = user;
            const row = document.createElement('tr');
            const idCell = document.createElement('td');
            const companyCell = document.createElement('td');
            const nameCell = document.createElement('td');
            const detailsCell = document.createElement('td');
            idCell.textContent = id;
            companyCell.textContent = company.name;
            nameCell.textContent = name;
            detailsCell.innerHTML = `Name: ${name}<br>
            Username: ${username}<br>
            Email: ${email} <br>
            Street: ${address.street} <br> 
            Suit:  ${address.suite}<br>
            City: ${address.city}<br>
            Zip Code:  ${address.zipcode}<br>
            Latitude: ${address.geo.lat}<br>
            Longitude: ${address.geo.lng}<br>
            Phone: ${phone} <br> 
            Website: <a href="${website}">${website}</a><br>
            Catch Phrase: ${company.catchPhrase}<br>
            bs: ${company.bs}`;
            const actionColumn = document.createElement('td');
            const actionButton = document.createElement('button');

            actionButton.textContent = 'More Detail';

            actionButton.addEventListener('click', () => {
                actionData(id);
            });
  

            
            row.appendChild(idCell);
            row.appendChild(companyCell);
            row.appendChild(nameCell);
            row.appendChild(detailsCell);
            row.appendChild(actionColumn);
            actionColumn.appendChild(actionButton);

            tableBody.appendChild(row);
        });
    });
