let goed = 0;
let fout = 0;
let question = 1;
let awnser = 1;
let in1 = false;
let in2 = false;
let in3 = false;
let in4 = false;
let in5 = false;
let in6 = false;
let in7 = false;
let in8 = false;
let in9 = false;
let in10 = false;
let in11 = false;
let in12 = false;
let in13 = false;
let in14 = false;
let in15 = false;

function check(){
let ele = document.getElementsByName(question);

for(i=0;i<ele.length; i++){
    if(ele[i].checked){
        if(i == awnser){
            goed++;
            if(question == 1){
                in1 = true
            }
            else if(question == 2){
                in2 = true
            }
            else if(question == 3){
                in3 = true
            }
            else if(question == 4){
                in4 = true
            }
            else if(question == 5){
                in5 = true
            }
            else if(question == 6){
                in6 = true
            }
            else if(question == 7){
                in7 = true
            }
            else if(question == 8){
                in8 = true
            }
            else if(question == 9){
                in9 = true
            }
            else if(question == 10){
                in10 = true
            }
        }
        else if(i == awnser + 1 || i == awnser + 2 || i == awnser -1 || i == awnser - 2){
            fout++;            
        }
        document.getElementById("q" + question).hidden = true;
        question++;
        document.getElementById("q" + question).hidden = false;

        if(question == 2){
            awnser = 1
        }
        else if(question == 3){
            awnser = 2
        }
        else if(question == 4){
            awnser = 0
        }
        else if(question == 5){
            awnser = 0
        }
        else if(question == 6){
            awnser = 1
        }
        else if(question == 7){
            awnser = 1
        }
        else if(question == 8){
            awnser = 2
        }
        else if(question == 9){
            awnser = 0
        }
        else if(question == 10){
            awnser = 2
        }
        else if(question == 11){
            awnser = 5
        }
    }
}
console.log("goed" + goed)
console.log("fout" + fout)
console.log(question)
}

function check_open(){
let input = document.getElementById("in " + question).value;

if(input == awnser){
    goed++ 
    if(question == 11){
        in11 = true
    }
    else if(question == 12){
        in12 = true
    }
    else if(question == 13){
        in13 = true
    }
    else if(question == 14){
        in14 = true
    }
    else if(question == 15){
        in15 = true
    } 
}
else{
    fout++
}
document.getElementById("q" + question).hidden = true;
question++;
document.getElementById("q" + question).hidden = false;
if(question == 12){
    awnser = "Een schoolmeisje"
}
if(question == 13){
    awnser = "Oh baby, don't hurt me."
}
if(question == 14){
    awnser = "Thunderstruck"
}
if(question == 15){
    awnser = "Of hij zin heeft in een sigaret"
}
console.log("goed " + goed)
console.log("fout " + fout)
console.log("question " + question)
console.log("awnser " + input)

if(question == 16){
    document.getElementById("aantal goed").innerHTML = ("aantal goed: " + goed)
    document.getElementById("aantal fout").innerHTML = ("aantal fout " + fout)

    if(in1 == false){
        document.getElementById("antwoord 1").innerHTML = ("1. Antwoord van 'Wat staat er op de Album cover van Nirvina's 'Something in the way' is: 'B. Een baby in het water'");
        document.getElementById("antwoord 1").hidden = false;
    }
    if(in2 == false){
        document.getElementById("antwoord 2").innerHTML = ("2. Antwoord van 'Hoe heet het nummer in dit audiofragment?' is: 'B. Everybody'");
        document.getElementById("antwoord 2").hidden = false;
    }
    if(in3 == false){
        document.getElementById("antwoord 3").innerHTML = ("3. Antwoord van 'Hoe heet het nummer in dit audiofragment?' is: 'C. Bed Of Roses'");
        document.getElementById("antwoord 3").hidden = false;
    }
    if(in4 == false){
        document.getElementById("antwoord 4").innerHTML = ("4. Antwoord van 'Welke zanger uit de jaren 90 heeft het nummer 'Kleine Jongen' uitgebracht?' is: 'A. Adre Hazes'");
        document.getElementById("antwoord 4").hidden = false;
    }
    if(in5 == false){
        document.getElementById("antwoord 5").innerHTML = ("5. Antwoord van 'Hoe heet de 2de single van de band Total Touch op hun debutalbum?' is: 'A. Somebody else's lover'");
        document.getElementById("antwoord 5").hidden = false;
    }
    if(in6 == false){
        document.getElementById("antwoord 6").innerHTML = ("6. Antwoord van 'Maak de songtekst af. 'Het regent harder dan ik hebben kan...'' is: 'B. Harder dan ik drinken kan'");
        document.getElementById("antwoord 6").hidden = false;
    }
    if(in7 == false){
        document.getElementById("antwoord 7").innerHTML = ("7. Antwoord van 'Hoe heet het nummer in dit audiofragment van Radiohead?' is: 'B. Creep'");
        document.getElementById("antwoord 7").hidden = false;
    }
    if(in8 == false){
        document.getElementById("antwoord 8").innerHTML = ("8. Antwoord van 'Welke band heeft het nummer 'Californication' uitgebracht?' is: 'C. Red Hot Chili Pepers'");
        document.getElementById("antwoord 8").hidden = false;
    }
    if(in9 == false){
        document.getElementById("antwoord 9").innerHTML = ("9. Antwoord van 'Op welk album van Green Day komt het nummer 'Basket Case' voor?' is: 'A. Dookie'");
        document.getElementById("antwoord 9").hidden = false;
    }
    if(in10 == false){
        document.getElementById("antwoord 10").innerHTML = ("10. Antwoord van 'Hoeveel versies van het nummer 'The Unforgiven' heeft Metallica uitgebracht?' is: 'C. 3'");
        document.getElementById("antwoord 10").hidden = false;
    }
    if(in11 == false){
        document.getElementById("antwoord 11").innerHTML = ("11. Antwoord van 'Uit hoeveel leden bestond de Backstreet Boys?' is: '5'");
        document.getElementById("antwoord 11").hidden = false;
    }
    if(in12 == false){
        document.getElementById("antwoord 12").innerHTML = ("12. Antwoord van 'Als wat is Britney Spears verkleed in de muziekvideo van haar hit-nummer '...Baby One More Time?'' is: 'Een schoolmeisje'");
        document.getElementById("antwoord 12").hidden = false;
    }
    if(in13 == false){
        document.getElementById("antwoord 13").innerHTML = ("13. Antwoord van 'Maak de songtekst af. 'What is love?...' is: 'Oh baby, don't hurt me.'");
        document.getElementById("antwoord 13").hidden = false;
    }
    if(in14 == false){
        document.getElementById("antwoord 14").innerHTML = ("14. Antwoord van 'Welk nummer van AC/DC heeft een 'Juno Award for Recording Engineer of the Year' gekregen?' is: 'Thunderstruck'");
        document.getElementById("antwoord 14").hidden = false;
    }
    if(in15 == false){
        document.getElementById("antwoord 15").innerHTML = ("15. Antwoord van 'Wat vraagt de vrouwelijke tegenhanger in 'Het is een nacht' aan Guus Meeuwis in de eerste zin van het nummer?' is: 'Of hij zin heeft in een sigaret'");
        document.getElementById("antwoord 15").hidden = false;
    }
}
}