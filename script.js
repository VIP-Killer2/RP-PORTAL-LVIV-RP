let user = null;

function openRegister(){
  let nick = prompt("Введи нік");
  let pass = prompt("Пароль (мін 6 символів)");

  if(pass.length < 6){
    alert("Пароль занадто короткий!");
    return;
  }

  localStorage.setItem("nick", nick);
  localStorage.setItem("pass", pass);

  alert("Реєстрація успішна!");
}

function openLogin(){
  let nick = prompt("Нік");
  let pass = prompt("Пароль");

  if(nick === localStorage.getItem("nick") &&
     pass === localStorage.getItem("pass")){

    user = nick;
    alert("Вхід успішний!");
  } else {
    alert("Невірні дані!");
  }
}

function openProfile(){
  if(!user){
    alert("Спочатку увійди!");
    return;
  }
  alert("Твій нік: " + user);
}

function openRules(){
  window.open("ТУТ ССИЛКА", "_blank");
}

function openFactions(){
  alert("Фракції будуть у наступній частині!");
}
