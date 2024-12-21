document.getElementById('addUserBtn').addEventListener('click', function() {
    const userFormContainer = document.getElementById('userFormContainer');
    userFormContainer.style.display = userFormContainer.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    
    addUser(username, email, password, role);
    
    document.getElementById('userForm').reset();
});

document.getElementById('searchBar').addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    const userList = document.getElementById('userList');
    const users = userList.getElementsByTagName('tr');
    
    Array.from(users).forEach(function(user) {
        const username = user.getElementsByTagName('td')[0].textContent.toLowerCase();
        const email = user.getElementsByTagName('td')[1].textContent.toLowerCase();
        if (username.includes(searchTerm) || email.includes(searchTerm)) {
            user.style.display = '';
        } else {
            user.style.display = 'none';
        }
    });
});

function addUser(username, email, password, role) {
    const userList = document.getElementById('userList');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${username}</td>
        <td>${email}</td>
        <td>${role}</td>
        <td>
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
        </td>
    `;
    userList.appendChild(tr);
}
