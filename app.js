let tg = window.Telegram.WebApp;
tg.expand();
 
let userName = "";
let userPhone = "";

function sendCode() {
    userName = document.getElementById('name-input').value.trim();
    userPhone = document.getElementById('phone-input').value.trim();

    if (userName === "") {
        alert("Лутфан ному насабатонро ворид кунед!");
        return;
    }

    if (userPhone.length < 9) {
        alert("Лутфан рақами телефонатонро дуруст ворид кунед!");
        return;
    }

    // Инҷо дар воқеият дархост ба PythonAnywhere ё API-и SMS фиристода мешавад, то код равон шавад
    // Барои санҷиш шартаan коди "1234"-ро истифода мебарем:
    alert("Коди тасдиқ ба рақами " + userPhone + " фиристода шуд! (Барои тест коди: 1234)");

    // Гузариш ба равзанаи коди тасдиқ
    document.getElementById('step-register').classList.add('hidden');
    document.getElementById('step-code').classList.remove('hidden');
}

function verifyCode() {
    let code = document.getElementById('code-input').value.trim();

    // Барои санҷиш коди шартии 1234-ро мемонем (баъдтар бо база пайваст мекунем)
    if (code === "1234") {
        alert("Хуш омадед, " + userName + "! Шумо бомуваффақият ворид шудед.");
        
        // Маълумотро дар LocalStorage нигоҳ медорем, то дар барнома истифода шавад
        localStorage.setItem("cargo_user_name", userName);
        localStorage.setItem("cargo_user_phone", userPhone);

        // Гузариш ба саҳифаи асосии барнома (масалан main.html ё саҳифаи борҳо)
        window.location.href = "index_main.html"; // Ё номи саҳифаи асосии худатон
    } else {
        alert("Коди воридшуда хато аст! Лутфан аз нав санҷед.");
    }
}

