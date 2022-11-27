const user = {
    name: 'Andrei',
    surname: 'Ivanov',
    age: '18',
    position: 'developer',
};
  
function info() {
    console.log(Object.entries(user));
}
  
info(user);