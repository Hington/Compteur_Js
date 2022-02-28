let bg = document.querySelector('h4')
let bg3 = document.querySelector('h3')
let bg2 = document.querySelector('h2')
let tableauCouleur =['pink', 'bleu', 'black']

let index =0
function arrierePlan() {
   if (index >tableauCouleur.length -1) {
       index =0
       bg.setAttribute("class", "")
       bg2.setAttribute("class", "")
       bg3.setAttribute("class", "")
   }
   bg.classList.add(tableauCouleur[index])
   bg2.classList.add(tableauCouleur[index])
   bg3.classList.add(tableauCouleur[index])
//    console.log(index);
   index++
}
setInterval(arrierePlan, 1000);

// **************************************Compteur**************
let plus =document.querySelector(".plus")
let moins =document.querySelector(".moins")
let ecran =document.querySelector(".ecran")
let alert_Error = document.querySelector(".Alert_Error")
let resultat = 0
plus.addEventListener("click", () =>{
     resultat++
     ecran.innerHTML=resultat
})
moins.addEventListener("click", () =>{
    if (resultat > 0) {
        resultat--
    ecran.innerHTML=resultat
    } else {
        alert('impossible')
    }
    
})

// ***************************COmpteur a rebourd************************
let tens = 0;
let seconds = 0;
let afficheSencond = document.querySelector('.seconde')
let afficheTen = document.querySelector('.ten')
let debut = document.querySelector('.buttonD')
let stopt = document.querySelector('.buttonS')
let effacer = document.querySelector('.buttonE')
let variable

function startTime() {
    tens++
    if (tens < 9) {
        afficheTen.innerHTML = `0  ${tens}`
    }
    if (tens > 9) {
        afficheTen.innerHTML =` ${tens}`
    }
    if (tens > 99) {
        seconds++;
        afficheSencond.innerHTML = `0  ${seconds}`;
        tens = 0;
        afficheTen.innerHTML = "0" + 0;
    }
    if (seconds > 9) {
        afficheSencond.innerHTML = `${seconds}`
    }
}

debut.onclick = function(){
    variable =setInterval(startTime, 50);
}
stopt.onclick = function(){
    clearInterval(variable);
}
effacer.onclick = function(){
    clearInterval(variable);
    tens ="00"
    seconds = "00"
    afficheSencond.innerHTML = seconds
    afficheTen.innerHTML = tens

}

// ***************************Timer************************
      


  
  
let afficherHeures = document.querySelector('.Heures')
let afficherMinutes = document.querySelector('.Minutes')
let afficherSeconds = document.querySelector('.Seconds')

let recupererHeure =document.querySelector('.inputHrs')
let recupererMinute =document.querySelector('.inputMin')
let recupererSecond =document.querySelector('.inputSec')

let btnD = document.querySelector('.btnD')
let btnS = document.querySelector('.btnS')
let btnE = document.querySelector('.btnE')

let  interval
let  btnreset = document.querySelector('.btnreset')
let  boiteAlert = document.querySelector('.alert')
let  boiteAlertError = document.querySelector('.alertError')

recupererHeure.value = 0
recupererMinute.value = 0

let tempsHeure     
let tempsMinute      
let tempsSeconde = 60

function effacerTout() {
    clearInterval(interval)
    tempsMinute  = "00"
    tempsHeure  = "00"
    afficherSeconds.innerHTML = 00
    afficherMinutes.innerHTML = `${tempsMinute}`
    afficherHeures.innerHTML = `${tempsHeure}`
    boiteAlert.classList.remove("ActiveAlert")
    boiteAlertError.classList.remove("ActiveAlertError")
}

  function Time() {
    
    tempsSeconde--;
    if (tempsSeconde > 9) {
        afficherSeconds.innerHTML = tempsSeconde
    }
    if (tempsSeconde < 9) {
        afficherSeconds.innerHTML = `0${tempsSeconde}`
    }
    if (tempsSeconde === 0 && tempsMinute > 0 && tempsMinute > 9 ) {
        tempsMinute--
        afficherMinutes.innerHTML = tempsMinute
        tempsSeconde = 60
        afficherSeconds.innerHTML = `${tempsSeconde}`
    }
    if (tempsSeconde === 0 && tempsMinute > 0 && tempsMinute <= 9 ) {
        tempsMinute--
        afficherMinutes.innerHTML = `0${tempsMinute}`
        tempsSeconde = 60
        afficherSeconds.innerHTML = `${tempsSeconde}`
    }
    if (tempsMinute == 0 &&  tempsHeure > 0 && tempsHeure  > 9 ) {
        tempsHeure--
        afficherHeures.innerHTML = `${tempsHeure}`
        tempsMinute  = 60
        afficherMinutes.innerHTML = `${tempsMinute}`
    }
    if (tempsMinute == 0 &&  tempsHeure > 0 && tempsHeure  <= 9 ) {
        tempsHeure--
        afficherHeures.innerHTML = `0${tempsHeure}`
        tempsMinute  = 60
        afficherMinutes.innerHTML = `${tempsMinute}`
    }
    if (tempsSeconde == 0 && tempsMinute == 0 && tempsHeure == 0 ) {
        clearInterval(interval)
       boiteAlert.classList.add("ActiveAlert")

    } 
    
    if (tempsMinute < 0 || tempsHeure < 0 ) {
        clearInterval(interval)
        boiteAlertError.classList.add("ActiveAlertError")

    } 

    if (tempsSeconde <= 0) {
        clearInterval(interval)
        tempsSeconde = 60
    } 

  }


btnD.addEventListener("click", ()=>{
    tempsHeure = recupererHeure.value  ; 
   tempsMinute = recupererMinute.value  ; 
    afficherHeures.innerHTML = tempsHeure
    interval =setInterval(Time);

})
btnS.addEventListener("click", ()=>{
    clearInterval(interval)
})
boiteAlertError.addEventListener("click", effacerTout)
boiteAlert.addEventListener("click", effacerTout)
btnE.addEventListener("click", effacerTout)
btnreset.addEventListener("click", effacerTout)

