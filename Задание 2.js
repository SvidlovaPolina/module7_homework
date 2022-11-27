const obj = {
  name: 'Andrei',
  surname: 'Ivanov',
  age: '18',
  position: 'developer',
};

const str = "Привет";

function info() {
  return 'age' in obj;
}

info(str, obj);