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

export function aufgabe04(args) {
  let input = args.replace(/[^a-zA-Z0-9 ]/g, "");
  //Entfernt alle Sonderzeichen
  let count = 1;
  if (input.lastIndexOf(' ') == input.length - 1) count--
  //falls zwei Leerzeichen vorhanden sind, lasse, statt 2, 1 zurückgeben
  if (input[0] == " ") count--
//falls kein Wort vorhanden ist, lasse, statt 1, 0 zurückgeben
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];

    if (currentElement === " " && input[i-1] !== " ") {
      count++
      //gibt die Anzahl der Leerzeichen zurück
    }
  }
  return count;
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
  //Falls kein Grossbuchtabe vorkommt, wird falsch zurückgegeben
}

export function aufgabe06(args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    if(ascii > 47 && ascii < 58){
      // der ascii code ist zwischen 0 und 9
      // mache nichts
    } else if (ascii > 64 && ascii < 91){
      // der ascii code ist zwischen A und Z
      // mache nichts
    } else if (ascii > 96 && ascii < 123){
      // der ascii code ist zwischen a und z
      // mache nichts
    } else if (ascii === 32){
      // der ascii code ist ein Leerzeichen
      // mache nichts
    } else {
      //Falls ein Sonderzeichen vorkommt, wird wahr zurückgegeben
      return true
    }
  }
  return false
}


export function aufgabe08(args) {
  const input = args        
  const result = []                     
  for (let i = 0; i < input.length; i++) {      
    const currentElement = input[i]        
    if (currentElement === "e") {   
      result.push(3)
      //ersetze e durch 3                                                           
    } else {                                                 
      result.push(currentElement) 
      //mache nichts, falls kein e vorkommt                         
    }
  }
  return result.join("")                                        
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
}//gibt wahr zurück wenn es 6 Buchstaben im Text hat
  return false
//gibt falsch zurück wenn es nicht 6 Buchstaben im Text hat
}

export function aufgabe11 (args) {
  const input = args
  if(input.length !== 1) return null
  //gibt null zurück, wenn es nicht 1 Zeichen im Text hat
  return input[0].charCodeAt(0)
  //gibt den ascii code des Zeichens im Text zurück
}
