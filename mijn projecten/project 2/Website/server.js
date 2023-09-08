const express = require('express');
const app = express();
app.use(express.static('public'));
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const fs = require('fs');



let carts = []
let names = [
    //name, pid, price
    [],
    ["Pizza Contadina", 1, 7.45],
    ["Pizza Margherita", 2, 7.95],
    ["Pizza Tonno", 3, 9.95],
    ["Pizza Delizioza", 4, 8.95],
    ["Pizza Quattro formaggi", 5, 10.95],
    ["Pizza Salame", 6, 9.45],
    ["Pizza Rustica", 7, 9.95],
    ["Pizza Fiamma", 8, 10.95],
    ["Pizza Di Lusso Margherita", 9, 10.95],
    ["Pizza Quattro Stagioni ", 10, 10.95],
    ["Pizza Prosciutto di Parma", 11, 12.95],
    ["Pizza Pollo con Extra", 12, 12.95],
    ["Pizza Ai funghi", 13, 10.95],
    ["Pizza Hawaii", 14, 11.95],
    ["Pizza Pollo Pesto", 15, 13.95],
    ["Pizza Döner", 16, 14.45],
    ["Pizza Con Cotto", 17, 10.95],
    ["Pizza Carpaccio", 18, 13.95],
    ["Pizza BBQ chicken", 19, 14.95],
    ["Pizza BBQ Meatlovers", 20, 14.95],
    ["Pizza Bufala Bruschetta", 21, 13.95],
    ["Pizza Vegan Margherita", 22, 7.95],
    ["Pizza Vegan Funghi", 23, 10.95],
    ["Pizza Vegan Döner", 24, 14.45],
    ["Pizza Vegan Pollo Pesto", 25, 13.95],
    ["Pizza Vega BBQ chicken", 26, 14.95],
]

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/public/index.html');
});

io.on("connection", socket => {
    carts.push([socket.id, []]);
    console.log("someone connected, and cart has been added: ");
    console.log(carts);

    socket.on("disconnect", () => {
        let deleteIndex = getIndex(socket);
        carts.splice(deleteIndex, 1);
        console.log("someone disconnected, and cart has been removed: ");
        console.log(carts);


    });
    socket.on("add", (productID) => {
        //cart
        if(productID > names.length - 1 || productID <= 0 || typeof(productID) != "number"){return;}
        let userIndex = getIndex(socket);

        findItem(productID, userIndex);

        let htmlString = getHTML(socket, userIndex);
        socket.emit("returnCart", htmlString);

        //price
        priceString  = berekenTotaal(socket, userIndex);
        socket.emit("returnPrice", priceString);
        console.log(carts[userIndex][1])
    });

    socket.on("change", (html, int) => {
        //cart
        if (typeof(int) != "number"){return;}
        let userIndex = getIndex(socket);

        let id = htmlToId(socket, html);

        let index = getProductIndex(socket, userIndex, id);

        if (index == -1){console.log("error occurred"); return;}

        if (int < 0) {
            carts[userIndex][1][index][1]--;
        } else if (int > 0) {
            carts[userIndex][1][index][1]++;
        }
    
        if (carts[userIndex][1][index][1] <= 0) {
            carts[userIndex][1].splice(index, 1).pop();
        }

        let htmlString = getHTML(socket, userIndex);
        socket.emit("returnCart", htmlString);



        //price
        priceString  = berekenTotaal(socket, userIndex);
        socket.emit("returnPrice", priceString);
        console.log(carts[userIndex][1])
    })
});


server.listen(5500, () => {
    console.log('listening on *:5500');
});



//FUNCTIONS -------


function getIndex(socket) {
    let userCartIndex;
    for (let i = 0; i < carts.length; i++) {
        if (carts[i][0] == socket.id) {
            userCartIndex = i;
            break;
        }
    }
    return userCartIndex;
}

function getHTML(socket, userIndex){
    let htmlString = "";    
        for (let j = 0; j < carts[userIndex][1].length; j++) {
            let product = names[carts[userIndex][1][j][0]][0];
        htmlString += "<div id='cartItemDiv'><p id='cartItem" + j + "'>" + product + " - " + carts[userIndex][1][j][1] + "</p><div><button onclick='changeValue(document.getElementById(`cartItem" + j + "`).innerHTML, -1)'>-</button><button onclick='changeValue(document.getElementById(`cartItem" + j + "`).innerHTML, 1)'>+</button></div></div><br>";
    }
    return htmlString;
}

function findItem(PID, userIndex){
        let found = false;
        for (let j = 0; j < carts[userIndex][1].length; j++) {
            if (carts[userIndex][1][j][0] == PID) {
                found = true;
                carts[userIndex][1][j][1]++;
                break;
            }
        }
        if (!found) {
            carts[userIndex][1].push([PID, 1]);
        }
}

function htmlToId(socket, html){
    let product = html;
    product = product.substring(0, product.lastIndexOf(" "));
    product = product.substring(0, product.lastIndexOf(" "));

    let found = false;
    let id;
    for (let i = 0; i < names.length; i++) {
        if (names[i][0] == product) {
            found = true;
            id = names[i][1];
            break;
        }
    }
    return id;
}

function getProductIndex(socket, userIndex, id){
    let index = -1;
    let found2 = false;
    for (let i = 0; i < carts[userIndex][1].length; i++) {
        if (carts[userIndex][1][i][0] == id) {
            found2 = true;
            index = i;
            break;
        }
    }
    return index;
    
}

function berekenTotaal(socket, userIndex){
    let priceString = "Total Price: €";
    let totalPrice = 0;


    ["uuid" [[1,1],[2,1]]]

    for (let i = 0; i < carts[userIndex][1].length; i++){
        let product = carts[userIndex][1][i][0];
        for (let j = 0; j < names.length; j++) {
            if (j == product) {
                let amount = carts[userIndex][1][i][1];
                totalPrice += names[j][2] * amount;
                break;
            }
        }
    }
    priceString += totalPrice.toFixed(2);
    return priceString;
    //sussy
}


module.exports = app;