const http = new EasyHTTP;

// Get Users
// const users = http.get('http://jsonplaceholder.typicode.com/users')
//     .then(data => console.log(data))
//     .catch(err => console.log(err));


// User data
const data = {
    name: 'Jogn Doe',
    username: 'johndoe',
    email: 'jond@mail.com'
}

// Create User
http.post('http://jsonplaceholder.typicode.com/users', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));

// // Update User
http.put('http://jsonplaceholder.typicode.com/users/2', data)
    .then(data => console.log(data))
    .catch(err => console.log(err));


// Delete User
http.delete('http://jsonplaceholder.typicode.com/users/2')
    .then(data => console.log(data))
    .catch(err => console.log(err));