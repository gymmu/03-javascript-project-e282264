export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e" || currentElement === "E") {
//zählt wie viele E's oder e's es im Text hat
    }
    else
    {result.push(currentElement)}
  }
  return result.join("")
}

export function aufgabe02(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    result.push(currentElement.toUpperCase())
    //lässt dren gesamten Text gross werden
  }
  return result.join("")
}

export function aufgabe03(args) {
  const input = args
  const result = []
  let count = 0
  //setzt den Zähler auf 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
     if(currentElement === "e" || currentElement === "E") {
      count++
    }
  //zählt alle E und e's
  }
  return count
  //gibt die gezählte Zahl heraus
}



export function aufgabe05(args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if( 91 > currentElement.charCodeAt(0) && currentElement.charCodeAt(0) > 64){
    return true
    //Falls ein Grossbuchtabe vorkommt, wird wahr zurückgegeben
  }
    else{

    }
}
  return false
  //falls dies nicht zutrifft, wird falsch zurückgegeben
}

export function aufgabe09 (args) {
  const input = args
  let countLetter = 0
  for (let i = 0; i < input.length; i++) {
    countLetter++
  //zählt die Buchstaben
}
  if(countLetter === 6) {
  return true
}//gibt wahr an wenn es 6 Buchstaben im Text hat
  return false
}
//gibt falsch an wenn es nicht 6 Buchstaben im Text hat