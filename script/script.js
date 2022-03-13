function* colorsGenerator () {
  const clr = () => Math.max(Math.round (Math.random() * 255), 100)
  while (true) {
    yield `rgb(${clr()}, ${clr()}, ${clr()})`
  }
}

let colorIterator = colorsGenerator()

function showColorSquare (startValue, itarations) {
  let point = document.createElement('div')
            
  point.style = `
    float: left;
    width: 20px;
    height: 20px;
    background-color: ${colorIterator.next().value};
  `
  document.body.appendChild(point)

  let itaration =+ startValue + 1

  itaration < itarations && setTimeout(() => showColorSquare(itaration, itarations), 250)
}

showColorSquare(0, 400)

//instead of a recursive function, you can use a loop

// for (let x=0; x < 400; x++) {
//   let point = document.createElement('div')
            
//     point.style = `
//         float: left;
//         width: 20px;
//         height: 20px;
//         background-color: ${ colorIterator.next().value};
//     `
//    setTimeout(() => document.body.appendChild(point), 250 * x)
// }
