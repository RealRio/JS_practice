// function task(time, light) {
//     return new Promise(resolve => {
//       setTimeout(() => {
//         if (light === "red") {
//           red();
//         } else if (light === "yellow") {
//           yellow();
//         } else {
//           green();
//         }
//         resolve();
//       }, time);
//     });
//   }

//   function step() {
//     task(3000, "red")
//       .then(() => task(2000, "yellow"))
//       .then(() => task(1000, "green"))
//       .then(step);
//   }

//   step();
function red() {
  console.log('red')
}
function green() {
  console.log('green')
}
function yellow() {
  console.log('yellow')
}
function asyncFn(fn, delay) {
  return new Promise(resolve => {
    setTimeout(() => {
      fn();
      resolve();
    }, delay);
  })
}
async function trafficLight() {
  await asyncFn(red, 3000);
  await asyncFn(green, 2000)
  await asyncFn(yellow, 1000)
  await trafficLight();
}
trafficLight();