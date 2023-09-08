let goed = 0;
let fout = 0;
let question = 1;
let awnser = 2;
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
            awnser = 0
        }
        else if(question == 3){
            awnser = 1
        }
        else if(question == 4){
            awnser = 1
        }
        else if(question == 5){
            awnser = 1
        }
        else if(question == 6){
            awnser = 0
        }
        else if(question == 7){
            awnser = 2
        }
        else if(question == 8){
            awnser = 0
        }
        else if(question == 9){
            awnser = 2
        }
        else if(question == 10){
            awnser = 0
        }
        else if(question == 11){
            awnser = "Nothing ever lasts forever"
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
    awnser = "Meat loaf"
}
if(question == 13){
    awnser = "4"
}
if(question == 14){
    awnser = "too drunk to fuck"
}
if(question == 15){
    awnser = "Joan Jett en De Blackhearts"
}
console.log("goed " + goed)
console.log("fout " + fout)
console.log("question " + question)
console.log("awnser " + input)

if(question == 16){
    document.getElementById("aantal goed").innerHTML = ("aantal goed: " + goed)
    document.getElementById("aantal fout").innerHTML = ("aantal fout " + fout)

    if(in1 == false){
        document.getElementById("antwoord 1").innerHTML = ("1. Antwoord van 'Queen is een Britse rockband, hoe heet de zanger van Queen?' is: 'B'");
        document.getElementById("antwoord 1").hidden = false;
    }
    if(in2 == false){
        document.getElementById("antwoord 2").innerHTML = ("2. Antwoord van 'In de intro van de TV-show “Charmed” hoor je een cover van een nummer genaamd ’How Soon Is Now’. Van welke band is het originele nummer? ' is: 'A'");
        document.getElementById("antwoord 2").hidden = false;
    }
    if(in3 == false){
        document.getElementById("antwoord 3").innerHTML = ("3. Antwoord van 'De band Musical Youth bracht in 1982 het nummer 'Pass the Dutchie’ uit. Waar gaat dit nummer over? ' is: 'B'");
        document.getElementById("antwoord 3").hidden = false;
    }
    if(in4 == false){
        document.getElementById("antwoord 4").innerHTML = ("4. Antwoord van 'Hoeveel leden had de popgroep ABBA?' is: 'B'");
        document.getElementById("antwoord 4").hidden = false;
    }
    if(in5 == false){
        document.getElementById("antwoord 5").innerHTML = ("5. Antwoord van 'Maak deze songtekst van Belinda Carlisle af: ''Ooh, baby, do you know what that's worth?''' is: 'B'");
        document.getElementById("antwoord 5").hidden = false;
    }
    if(in6 == false){
        document.getElementById("antwoord 6").innerHTML = ("6. Antwoord van 'Door welke muziek duo is het nummer 'I'm gonna be (500 miles)' geschreven?' is: 'A'");
        document.getElementById("antwoord 6").hidden = false;
    }
    if(in7 == false){
        document.getElementById("antwoord 7").innerHTML = ("7. Antwoord van 'Wie heeft het nummer 'Love Shack' uitgebracht? ' is: 'C'");
        document.getElementById("antwoord 7").hidden = false;
    }
    if(in8 == false){
        document.getElementById("antwoord 8").innerHTML = ("8. Antwoord van 'Maak deze songtekst van Culture Club af: “Loving would be easy if your colors were like my dreams”' is: 'A'");
        document.getElementById("antwoord 8").hidden = false;
    }
    if(in9 == false){
        document.getElementById("antwoord 9").innerHTML = ("9. Antwoord van 'Welke gothic rock band heeft het nummer 'Just Like Heaven' uitgebracht?' is: 'C'");
        document.getElementById("antwoord 9").hidden = false;
    }
    if(in10 == false){
        document.getElementById("antwoord 10").innerHTML = ("10. Antwoord van 'Hoe heet het meet succesvolle nummer van Rick Astley?' is: 'A'");
        document.getElementById("antwoord 10").hidden = false;
    }
    if(in11 == false){
        document.getElementById("antwoord 11").innerHTML = ("11. Antwoord van 'Maak de songtekst af 'Most of freedom and of pleasure...'' is: 'Nothing ever lasts forever'");
        document.getElementById("antwoord 11").hidden = false;
    }
    if(in12 == false){
        document.getElementById("antwoord 12").innerHTML = ("12. Antwoord van ''Total Eclipse of the Heart' is een hitnummer van Bonnie Tyler, er is ook een mannelijke stem te horen in dit nummer. Wat is de artiestennaam van deze man?' is: 'Meat loaf'");
        document.getElementById("antwoord 12").hidden = false;
    }
    if(in13 == false){
        document.getElementById("antwoord 13").innerHTML = ("13. Antwoord van 'Hoeveel leden heeft de Nederlandse popgroep 'Doe maar'? ' is: '4 leden'");
        document.getElementById("antwoord 13").hidden = false;
    }
    if(in14 == false){
        document.getElementById("antwoord 14").innerHTML = ("14. Antwoord van 'Maak deze songtekst van de Dead Kennedys af. 'I'm rolling down the stairs,'' is: 'too drunk to fuck.'");
        document.getElementById("antwoord 14").hidden = false;
    }
    if(in15 == false){
        document.getElementById("antwoord 15").innerHTML = ("15. Antwoord van 'In 1975 bracht de Engels/Amerikaanse band The Arrows het nummer I love rock 'n' roll als eerste uit, in 1981 nam een band hun eigen versie op. Hoe heet deze band?' is: 'Joan Jett en De Blackhearts'");
        document.getElementById("antwoord 15").hidden = false;
    }
}
}