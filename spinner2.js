process.stdout.write('hello from spinner2.js... \rheyyy\n');

spin = (str, time) => {
  setTimeout(() => {
    process.stdout.write(str);
  }, time)
};

spin('\r|   ', 100);
spin('\r/   ', 300);
spin('\r-   ', 500);
spin('\r\\  ', 700);
spin('\r|   ', 900);
spin('\r/   ', 1100);
spin('\r-   ', 1300);
spin('\r\\  ', 1500);
spin('\r|   ', 1700);


// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 100);

// setTimeout(() => {
//   process.stdout.write('\r/   ');
// }, 300);

// setTimeout(() => {
//   process.stdout.write('\r-   ');
// }, 500);

// setTimeout(() => {
//   process.stdout.write('\r\\  ');
// }, 700);

// setTimeout(() => {
//   process.stdout.write('\r|   ');
// }, 900);