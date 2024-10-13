let age = 30;
        let population = 7000000000n;
        let name = "Anna";
        let isStudent = true;
        let car = null;
        let job;
        let person = {name: "John", age: 25};
        let id = Symbol("passportID");

        document.getElementById("data-types").innerHTML = `
            <p><b>Number</b>: ${age} (вік людини)</p>
            <p><b>BigInt</b>: ${population} (населення світу)</p>
            <p><b>String</b>: ${name} (ім'я людини)</p>
            <p><b>Boolean</b>: ${isStudent} (чи є людина студентом)</p>
            <p><b>Null</b>: ${car} (людина не має машини)</p>
            <p><b>Undefined</b>: ${job} (робота не визначена)</p>
            <p><b>Object</b>: ${JSON.stringify(person)} (людина з іменем та віком)</p>
            <p><b>Symbol</b>: ${id.toString()} (унікальний ідентифікатор)</p>
        `;

       
        let totalApples = 5 + 3;
        let booksLeft = 10 - 4;
        let distance = 2 * 5;
        let time = 30 / 2;
        let fullName = "Anna" + " " + "Ivanova";
        let teamMembers = 10 % 3;
        let yearsAfterGraduation = 2024 - 2018;
        let doubleExperience = 2 * 3;
        let halfPrice = 100 / 2;
        let addedWeight = 70 + 5;

        document.getElementById("arith-operations").innerHTML = `
            <p>Людина купила 5 яблук і ще 3, всього: ${totalApples}</p>
            <p>Людина віддала 4 книги з 10, залишилось: ${booksLeft}</p>
            <p>Людина пробігла 5 км 2 рази, всього: ${distance} км</p>
            <p>Людина виконала завдання за 30 хвилин, поділила на двох, кожен по: ${time} хв</p>
            <p>Людина об'єднала ім'я та прізвище: ${fullName}</p>
            <p>Людина поділила команду з 10 людей на групи по 3, залишилось: ${teamMembers}</p>
            <p>Роки після випуску: ${yearsAfterGraduation}</p>
            <p>Подвоїти досвід 3 роки, буде: ${doubleExperience} років</p>
            <p>Знижка на 50%, нова ціна: ${halfPrice}</p>
            <p>Людина набрала вагу на 5 кг, нова вага: ${addedWeight} кг</p>
        `;

        
        let ageAsString = String(30);
        let hasJob = Boolean("true");
        let stringToNumber = Number("100");
        let emptyString = Boolean("");
        let zeroAsBoolean = Boolean(0);
        let booleanToString = String(true);

        document.getElementById("type-casting").innerHTML = `
            <p>Вік перетворено на рядок: ${ageAsString}</p>
            <p>Перетворити рядок у булеве значення: ${hasJob}</p>
            <p>Рядок "100" перетворено на число: ${stringToNumber}</p>
            <p>Порожній рядок стає: ${emptyString}</p>
            <p>Число 0 стає: ${zeroAsBoolean}</p>
            <p>Булеве значення true стає рядком: ${booleanToString}</p>
        `;

        
        let isAdult = 18 > 16;
        let isEqual = "apple" == "apple";
        let notEqual = 10 != 5;
        let canEnter = age >= 18;
        let hasDiscount = 50 < 100;
        let isStudentAndAdult = isStudent && isAdult;

        document.getElementById("logical-operations").innerHTML = 
        `
            <p>Чи людина повнолітня? ${isAdult}</p>
            <p>Чи рівні два рядки? ${isEqual}</p>
            <p>Чи 10 не дорівнює 5? ${notEqual}</p>
            <p>Чи людина може увійти (вік >= 18)? ${canEnter}</p>
            <p>Чи ціна менша за 100? ${hasDiscount}</p>
            <p>Чи людина студент і дорослий? ${isStudentAndAdult}</p> 
        `;