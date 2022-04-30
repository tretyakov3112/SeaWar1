// Function called whenever user tab on any box

// Setting DOM to all boxes or input field
let b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23,
    b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45,
    b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60, b61, b62, b63, b64, b65, b66, b67,
    b68, b69, b70, b71, b72, b73, b74, b75, b76, b77, b78, b79, b80, b81, b82, b83, b84, b85, b86, b87, b88, b89,
    b90, b91, b92, b93, b94, b95, b96, b97, b98, b99,
    a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23,
    a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44, a45,
    a46, a47, a48, a49, a50, a51, a52, a53, a54, a55, a56, a57, a58, a59, a60, a61, a62, a63, a64, a65, a66, a67,
    a68, a69, a70, a71, a72, a73, a74, a75, a76, a77, a78, a79, a80, a81, a82, a83, a84, a85, a86, a87, a88, a89,
    a90, a91, a92, a93, a94, a95, a96, a97, a98, a99;
let arr1;



let myField;
let compField;
let myCount = 10;
let compCount = 10;
let element1;
let element2;

window.onload = function () {
    b0 = document.getElementById("b0");
    b1 = document.getElementById("b1");
    b2 = document.getElementById("b2");
    b3 = document.getElementById("b3");
    b4 = document.getElementById("b4");
    b5 = document.getElementById("b5");
    b6 = document.getElementById("b6");
    b7 = document.getElementById("b7");
    b8 = document.getElementById("b8");
    b9 = document.getElementById("b9");
    b10 = document.getElementById("b10");
    b11 = document.getElementById("b11");
    b12 = document.getElementById("b12");
    b13 = document.getElementById("b13");
    b14 = document.getElementById("b14");
    b15 = document.getElementById("b15");
    b16 = document.getElementById("b16");
    b17 = document.getElementById("b17");
    b18 = document.getElementById("b18");
    b19 = document.getElementById("b19");
    b20 = document.getElementById("b20");
    b21 = document.getElementById("b21");
    b22 = document.getElementById("b22");
    b23 = document.getElementById("b23");
    b24 = document.getElementById("b24");
    b25 = document.getElementById("b25");
    b26 = document.getElementById("b26");
    b27 = document.getElementById("b27");
    b28 = document.getElementById("b28");
    b29 = document.getElementById("b29");
    b30 = document.getElementById("b30");
    b31 = document.getElementById("b31");
    b32 = document.getElementById("b32");
    b33 = document.getElementById("b33");
    b34 = document.getElementById("b34");
    b35 = document.getElementById("b35");
    b36 = document.getElementById("b36");
    b37 = document.getElementById("b37");
    b38 = document.getElementById("b38");
    b39 = document.getElementById("b39");
    b40 = document.getElementById("b40");
    b41 = document.getElementById("b41");
    b42 = document.getElementById("b42");
    b43 = document.getElementById("b43");
    b44 = document.getElementById("b44");
    b45 = document.getElementById("b45");
    b46 = document.getElementById("b46");
    b47 = document.getElementById("b47");
    b48 = document.getElementById("b48");
    b49 = document.getElementById("b49");
    b50 = document.getElementById("b50");
    b51 = document.getElementById("b51");
    b52 = document.getElementById("b52");
    b53 = document.getElementById("b53");
    b54 = document.getElementById("b54");
    b55 = document.getElementById("b55");
    b56 = document.getElementById("b56");
    b57 = document.getElementById("b57");
    b58 = document.getElementById("b58");
    b59 = document.getElementById("b59");
    b60 = document.getElementById("b60");
    b61 = document.getElementById("b61");
    b62 = document.getElementById("b62");
    b63 = document.getElementById("b63");
    b64 = document.getElementById("b64");
    b65 = document.getElementById("b65");
    b66 = document.getElementById("b66");
    b67 = document.getElementById("b67");
    b68 = document.getElementById("b68");
    b69 = document.getElementById("b69");
    b70 = document.getElementById("b70");
    b71 = document.getElementById("b71");
    b72 = document.getElementById("b72");
    b73 = document.getElementById("b73");
    b74 = document.getElementById("b74");
    b75 = document.getElementById("b75");
    b76 = document.getElementById("b76");
    b77 = document.getElementById("b77");
    b78 = document.getElementById("b78");
    b79 = document.getElementById("b79");
    b80 = document.getElementById("b80");
    b81 = document.getElementById("b81");
    b82 = document.getElementById("b82");
    b83 = document.getElementById("b83");
    b84 = document.getElementById("b84");
    b85 = document.getElementById("b85");
    b86 = document.getElementById("b86");
    b87 = document.getElementById("b87");
    b88 = document.getElementById("b88");
    b89 = document.getElementById("b89");
    b90 = document.getElementById("b90");
    b91 = document.getElementById("b91");
    b92 = document.getElementById("b92");
    b93 = document.getElementById("b93");
    b94 = document.getElementById("b94");
    b95 = document.getElementById("b95");
    b96 = document.getElementById("b96");
    b97 = document.getElementById("b97");
    b98 = document.getElementById("b98");
    b99 = document.getElementById("b99");

    a0 = document.getElementById("a0");
    a1 = document.getElementById("a1");
    a2 = document.getElementById("a2");
    a3 = document.getElementById("a3");
    a4 = document.getElementById("a4");
    a5 = document.getElementById("a5");
    a6 = document.getElementById("a6");
    a7 = document.getElementById("a7");
    a8 = document.getElementById("a8");
    a9 = document.getElementById("a9");
    a10 = document.getElementById("a10");
    a11 = document.getElementById("a11");
    a12 = document.getElementById("a12");
    a13 = document.getElementById("a13");
    a14 = document.getElementById("a14");
    a15 = document.getElementById("a15");
    a16 = document.getElementById("a16");
    a17 = document.getElementById("a17");
    a18 = document.getElementById("a18");
    a19 = document.getElementById("a19");
    a20 = document.getElementById("a20");
    a21 = document.getElementById("a21");
    a22 = document.getElementById("a22");
    a23 = document.getElementById("a23");
    a24 = document.getElementById("a24");
    a25 = document.getElementById("a25");
    a26 = document.getElementById("a26");
    a27 = document.getElementById("a27");
    a28 = document.getElementById("a28");
    a29 = document.getElementById("a29");
    a30 = document.getElementById("a30");
    a31 = document.getElementById("a31");
    a32 = document.getElementById("a32");
    a33 = document.getElementById("a33");
    a34 = document.getElementById("a34");
    a35 = document.getElementById("a35");
    a36 = document.getElementById("a36");
    a37 = document.getElementById("a37");
    a38 = document.getElementById("a38");
    a39 = document.getElementById("a39");
    a40 = document.getElementById("a40");
    a41 = document.getElementById("a41");
    a42 = document.getElementById("a42");
    a43 = document.getElementById("a43");
    a44 = document.getElementById("a44");
    a45 = document.getElementById("a45");
    a46 = document.getElementById("a46");
    a47 = document.getElementById("a47");
    a48 = document.getElementById("a48");
    a49 = document.getElementById("a49");
    a50 = document.getElementById("a50");
    a51 = document.getElementById("a51");
    a52 = document.getElementById("a52");
    a53 = document.getElementById("a53");
    a54 = document.getElementById("a54");
    a55 = document.getElementById("a55");
    a56 = document.getElementById("a56");
    a57 = document.getElementById("a57");
    a58 = document.getElementById("a58");
    a59 = document.getElementById("a59");
    a60 = document.getElementById("a60");
    a61 = document.getElementById("a61");
    a62 = document.getElementById("a62");
    a63 = document.getElementById("a63");
    a64 = document.getElementById("a64");
    a65 = document.getElementById("a65");
    a66 = document.getElementById("a66");
    a67 = document.getElementById("a67");
    a68 = document.getElementById("a68");
    a69 = document.getElementById("a69");
    a70 = document.getElementById("a70");
    a71 = document.getElementById("a71");
    a72 = document.getElementById("a72");
    a73 = document.getElementById("a73");
    a74 = document.getElementById("a74");
    a75 = document.getElementById("a75");
    a76 = document.getElementById("a76");
    a77 = document.getElementById("a77");
    a78 = document.getElementById("a78");
    a79 = document.getElementById("a79");
    a80 = document.getElementById("a80");
    a81 = document.getElementById("a81");
    a82 = document.getElementById("a82");
    a83 = document.getElementById("a83");
    a84 = document.getElementById("a84");
    a85 = document.getElementById("a85");
    a86 = document.getElementById("a86");
    a87 = document.getElementById("a87");
    a88 = document.getElementById("a88");
    a89 = document.getElementById("a89");
    a90 = document.getElementById("a90");
    a91 = document.getElementById("a91");
    a92 = document.getElementById("a92");
    a93 = document.getElementById("a93");
    a94 = document.getElementById("a94");
    a95 = document.getElementById("a95");
    a96 = document.getElementById("a96");
    a97 = document.getElementById("a97");
    a98 = document.getElementById("a98");
    a99 = document.getElementById("a99");

    arr1 = [b0, b1, b2, b3, b4, b5, b6, b7, b8, b9, b10, b11, b12, b13, b14, b15, b16, b17, b18, b19, b20, b21, b22, b23, b24, b25, b26, b27, b28, b29, b30, b31, b32, b33, b34, b35, b36, b37, b38, b39, b40, b41, b42, b43, b44, b45, b46, b47, b48, b49, b50, b51, b52, b53, b54, b55, b56, b57, b58, b59, b60, b61, b62, b63, b64, b65, b66, b67, b68, b69, b70, b71, b72, b73, b74, b75, b76, b77, b78, b79, b80, b81, b82, b83, b84, b85, b86, b87, b88, b89, b90, b91, b92, b93, b94, b95, b96, b97, b98, b99,
        a0, a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31, a32, a33, a34, a35, a36, a37, a38, a39, a40, a41, a42, a43, a44, a45, a46, a47, a48, a49, a50, a51, a52, a53, a54, a55, a56, a57, a58, a59, a60, a61, a62, a63, a64, a65, a66, a67, a68, a69, a70, a71, a72, a73, a74, a75, a76, a77, a78, a79, a80, a81, a82, a83, a84, a85, a86, a87, a88, a89, a90, a91, a92, a93, a94, a95, a96, a97, a98, a99];
    myField = randomField(1);
    compField = randomField(2);

    for (let i = 0; i < myField.length; i++) {
        element1 = myField[i];
        element2 = compField[i];
        element1.value = "X";
        element2.value = "X";
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
}

function randomField(c) {
    let arr = ["", "", "", "", "", "", "", "", "", ""];
    let k;
    for (let i = 0; i < 10; i++) {
        k = getRandomInt(0, 10);
        if (c === 1) {
            arr[i] = arr1[10 * i + k];
        } else {
            arr[i] = arr1[100 + 10 * i + k];
        }

    }
    return arr;
}

// Function to reset game

function myfunc_2() {
    location.reload();
    for (let i = 0; i < 200; i++) {
        arr1[i].value = "";
    }
}


// Here onwards, functions check turn of the player
// and put accordingly value X or 0
let flag = 1;

function stepPlayer(elementId) {
    let element = document.getElementById(elementId);
    element.disabled = true;
    for (let i = 0; i < 10; i++) {
        if (flag === 1 && compField[i] === element) {
            element.value = "XX";
            compCount--;
            flag = 0;
            break;
        }
        if (flag === 1 && element.value !== "XX" && i === 9) {
            element.value = "0";
            flag = 0;
        }
    }
    let k = getRandomInt(0, 10);
    let i = getRandomInt(0, 10);
    let el = document.getElementById("b" + (10 * i + k));


    for (let i = 0; i < 10; i++) {
        if (flag === 0 && myField[i] === el) {
            el.value = "XX";
            myCount--;
            flag = 1;
            break;
        }
        if (flag === 0 && el.value !== "XX" && i === 9) {
            el.value = "0";
            flag = 1;
        }
    }

    if (myCount === 0) {
        document.getElementById('print')
            .innerHTML = "You lose";
    }
    if (compCount === 0) {
        document.getElementById('print')
            .innerHTML = "You win!";
    }

}
