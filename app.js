// 1:

let n = 7;
let m = 5;

let ordaklar = 0;

function ordaklarSoni() {
    if(m % 2 === 0) {
        ordaklar = n + (m / 2);
        console.log(`O'rdaklar soni: ${ordaklar}`);
    } else {
        console.log(-1);
    }
}
ordaklarSoni();

// 2: 


let randomChipta = 123321;
let randomChiptaString = String(randomChipta);
let birinchiUchlik = Number(randomChiptaString[0]) + Number(randomChiptaString[1]) + Number(randomChiptaString[2]);
let ikkinchiUchlik = Number(randomChiptaString[3]) + Number(randomChiptaString[4]) + Number(randomChiptaString[5]);

function omadliChipta() {
    if(birinchiUchlik == ikkinchiUchlik) {
        console.log("YES");
    }  else {
        console.log("NO");
    }
}
omadliChipta(123321)
console.log(randomChipta);
console.log(birinchiUchlik);
console.log(ikkinchiUchlik);
