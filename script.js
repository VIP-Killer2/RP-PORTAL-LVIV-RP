let user = localStorage.getItem("currentUser");

function openRegister(){
  let nick = prompt("Нік");
  let pass = prompt("Пароль (мін 6 символів)");

  if(pass.length < 6){
    alert("Пароль має бути 6+ символів");
    return;
  }

  localStorage.setItem("nick", nick);
  localStorage.setItem("pass", pass);

  alert("Реєстрація успішна");
}

function openLogin(){
  let nick = prompt("Нік");
  let pass = prompt("Пароль");

  if(nick === localStorage.getItem("nick") &&
     pass === localStorage.getItem("pass")){

    localStorage.setItem("currentUser", nick);
    user = nick;

    alert("Вхід успішний");
  } else {
    alert("Невірні дані");
  }
}

function openProfile(){
  let u = localStorage.getItem("currentUser");

  if(!u){
    alert("Спочатку увійди");
    return;
  }

  window.location.href = "profile.html";
}

function openRules(){
  window.open("ТУТ ССИЛКА", "_blank");
}

function openFactions(){
  window.location.href = "factions.html";
}

// ФРАКЦІЯ
function openFactionPage(name){
  localStorage.setItem("faction", name);
  window.location.href = "faction.html";
}
let isAdmin = localStorage.getItem("admin") === "true";

// ВВІД КОДУ АДМІНА
function enterAdminCode(){
  let code = prompt("Введи адмін код:");

  if(code === "EH.RP"){
    localStorage.setItem("admin", "true");
    isAdmin = true;
    alert("Ти став АДМІНОМ!");
  } else {
    alert("Невірний код");
  }
}
