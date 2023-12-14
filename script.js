export function aufgabe01(args) {
  const input = args
  const result = []

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "e" || currentElement === "E") {
//zählt wie viele E's oder e's es im Text hat
    }
    else
    {result.push(currentElement)}//mache nichts, falls kein E oder e vorkommt
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
      //der ascii code ist zwischen 0 und 9
      //mache nichts
    } else if (ascii > 64 && ascii < 91){
      // der ascii code ist zwischen A und Z
      // mache nichts
    } else if (ascii > 96 && ascii < 123){
      //der ascii code ist zwischen a und z
      //mache nichts
    } else if (ascii === 32){
      //der ascii code ist ein Leerzeichen
      //mache nichts
    } else {
      //Falls ein Sonderzeichen vorkommt, wird wahr zurückgegeben
      return true
    }
  }
  return false
}

export function aufgabe07 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement === "u" || input[0] === "U") {
      if(input[i +1] === "n") {
        if(input[i + 2] === "d") {
          return true
        }//falls die Buchstaben u,n,d nacheinander vorkommen, wird wahr zurückgegeben
      }
    }
  }
  return false
}//trifft dies nicht zu, wird falsch zurückgegeben

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
  let Letters = 0
  for (let i = 0; i < input.length; i++) {
    Letters++
  //zählt die Buchstaben
}
  if(Letters === 6) {
  return true
}//gibt wahr zurück wenn es 6 Buchstaben im Text hat
  return false
//gibt falsch zurück wenn dies nicht zutrifft
}

export function aufgabe10 (args) {
  const input = args 
  
  if(input.length !== 7) return false //weil Hexcodes 7 Zeichen lang sein müssen, können wir hier abbrechen
  if(input[0] !== "#") return false //weil Hexcodes mit # beginnen, können wir hier abbrechen
  for (let i = 1; i < input.length; i++) {
    const currentElement = input[i]
    const ascii = currentElement.charCodeAt(0)
    //liest die Zeichen als ascii code
    if(48 <= ascii && ascii <=57) { 
       //der ascii code ist zwischen 0 und 9
    } else if (65 <= ascii && ascii <= 70) {
       //der ascii code ist zwischen A und F
    } else {
      return false
       //gibt falsch zurück, falls nicht nur 0-9 oder A-F vorkommen
    }
  }

  return true //falls alles stimmt, wird wahr zurückgegeben
}

export function aufgabe11 (args) {
  const input = args
  if(input.length !== 1) return null
  //gibt null zurück, wenn es nicht 1 Zeichen im Text hat
  return input[0].charCodeAt(0)
  //gibt den ascii code des Zeichens im Text zurück
}

export function aufgabe12 (args) {
  const input = args
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if (currentElement == "e") {
      return i}//erkennt die Position des ersten e im Text um das dann herauszugeben
  }
  return -1 
}//falls kein e vorhanden ist, wird -1 zurückgegeben

export function aufgabe13 (args) {
  const input = args
  const result = []
  for (let i = input.length-1; i >= 0; i--) {
    const currentElement = input[i]
    if (currentElement === "e")
    //lokalisiert die Position des ersten es
    return i
  }
  return -1 
  //falls kein e vorhanden ist, wird -1 zurückgegeben
}

export function aufgabe14 (args) {
  const input = args;
  let count = 0
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i];
    if (currentElement === "e") { //erkennt die Position der oder des es im Text
      count++}
    if (count === 3) { 
      return i}}//soll die Position des 3. e's im Text zurückgeben
  if (count > 2) { 
    if (count === input.length) {
      return 2}} //wenn die Anzahl an E's der Eingabe entspricht, soll 2 zurückgegeben werden
      else {
  return -1} //falls dies nicht zutrifft soll -1 zurückgegeben werden
}

export function aufgabe15 (args) {
  const input = args
  const result = []
  if (input.lastIndexOf(' ') == input.length - 1) 
  {for (let i = 0; i < input.length - 1; i++) {
        const currentElement = input[i]
        result.push(currentElement)}} 
        else { 
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
      if (currentElement !== " ") {
        result.push(currentElement) 
      } else {
        return result.join("")}}}
  return result.join("")
  }

  export function aufgabe16 (args) {
    const input = args
    const result = []
    let count = 0
    for (let i = 0; i < input.length; i++) {
      const currentElement = input[i]
    if (count === 0 && currentElement === "$" && i+2 > input.length) {
    result.push("")
    count++}
    else if (currentElement === "$" && count === 0) {
    result.push(",")
    count++}
    else {
      result.push(currentElement)}}
  return result.join("")
}

export function aufgabe18 (args) {
  const input = args
  const Name = []
  const age = []
  let sortedtext = true

  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    
    if (currentElement == " " && sortedtext == true) {
      sortedtext = false
    } 

else {
      if (sortedtext == true) {
        Name.push(currentElement)
      }
      else if (sortedtext == false) {
        age.push(currentElement)
      }
    }
  }
  if (Name.join("") !== "" && age.join("") !== "") return "Sie heissen " + Name.join("") + " und sind " + age.join("") + " Jahre alt"
  if (Name.join("") == "" && age.join("") !== "") return "Sie heissen" + Name.join("") + " und sind " + age.join("") + " Jahre alt"
  if (Name.join("") !== "" && age.join("") == "") return "Sie heissen " + Name.join("") + " und sind " + age.join("") + "Jahre alt"
  if (Name.join("") == "" && age.join("") == "") return "Sie heissen" + Name.join("") + " und sind " + age.join("") + "Jahre alt"
}

export function aufgabe20 (args) {
  const input = args
  const result = []
  for (let i = 0; i < input.length; i++) {
    const currentElement = input[i]
    if(currentElement == "." && input[i+1] !== " ") return false
    else if(currentElement == "." && input[i+1] == " ") return true
  }
  return result.join("")
}

