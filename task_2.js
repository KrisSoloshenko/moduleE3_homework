let arg = 4;

function findSimpleNum(num) {

    if (typeof num === "number" && !isNaN(num) && num <= 1000) {
            let isSimple = true;

            for (i = 2; i < num; i++) {
                if (num % i === 0) {
                    isSimple = false;
                    break;
                }
            }
          
            if (isSimple === true && num >= 2) {
                console.log(`число ${num} простое`);
            } else {
                console.log(`число ${num} не является простым`);
            }
    } else {
      console.log("неверное значение");
    }
}

findSimpleNum(arg);