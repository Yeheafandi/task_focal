console.log("Task 2");
let start = 1;
let end = 1000;
let maxFound = 15;
let checkedCount = 0;
let foundCount = 0;

for (let i = start; i < end; i++) {
    
    let randomNumber = Math.floor(Math.random() * 1000);
    checkedCount++;
    let sumNumber = 0;
    let multiNummber = 1;
    let zeroFound = false;
    // let currentNumber = i; // في حال لم ناخذ ارقام عشوائية
    let currentNumber = randomNumber; // في حال اخذنا ارقام عشوائية

    while (currentNumber > 0) {
        let number = currentNumber % 10;
        currentNumber = Math.floor(currentNumber / 10);

        if (number == 0) {
            zeroFound = true;
        }

        sumNumber += number;
        // او
        // sumNumber =sumNumber + number;
        multiNummber *= number;
        // او
        //multiNummber =multiNummber * number;
    }
    if (zeroFound) {
        continue;
    }
    if (sumNumber % 3 != 0) {
        continue;
    }
    if (multiNummber % 2 != 0) {
       continue;
    }

    //console.log("Special:", i);// في حال لم ناخذ ارقام عشوائية
    console.log("Special:", randomNumber);// في حال اخذنا ارقام عشوائية
    foundCount++;
    if (foundCount >= maxFound) {
       break;
    }
    //continue طريقة اخرى اقصر  بدون 
    // if (sumNumber % 3 == 0 && multiNummber % 2 == 0 && zeroFound == false) {
    //     console.log("Special:", i);
    //     foundCount++;
    //     if (foundCount >= maxFound) {
    //        break;
    //     }
    // }
}
console.log("Checked:", checkedCount);
console.log("Found:", foundCount);


// output // في حال لم ناخذ ارقام عشوائية
/*
دائما نفس الجواب
Task 2
Special: 6
Special: 12
Special: 18
Special: 21
Special: 24
Special: 27
Special: 36
Special: 42
Special: 45
Special: 48
Special: 54
Special: 63
Special: 66
Special: 69
Special: 72

Checked: 72
Found: 15
*/


// output // في حال اخذنا ارقام عشوائية
/*
الجواب مع كل تشغيل يخلف
Task 2
Special: 144
Special: 654
Special: 723
Special: 345
Special: 438
Special: 267
Special: 342
Special: 681
Special: 786
Special: 336
Special: 453
Special: 96
Special: 558
Special: 234
Special: 114
Checked: 60
Found: 15
*/

/*
Task 2
Special: 261
Special: 462
Special: 81
Special: 417
Special: 615
Special: 549
Special: 432
Special: 6
Special: 693
Special: 444
Special: 789
Special: 354
Special: 837
Special: 963
Special: 879
Checked: 68
Found: 15
*/