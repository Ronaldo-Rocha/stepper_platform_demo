const slidePage = document.querySelector(".slide-page");
const nextBtnFirst = document.querySelector(".firstNext");
const prevBtnSec = document.querySelector(".prev-1");
const nextBtnSec = document.querySelector(".next-1");
const prevBtnThird = document.querySelector(".prev-2");
const nextBtnThird = document.querySelector(".next-2");
const prevBtnFourth = document.querySelector(".prev-3");
const submitBtn = document.querySelector(".submit");
const progressText = document.querySelectorAll(".step p");
const progressCheck = document.querySelectorAll(".step .check");
const bullet = document.querySelectorAll(".step .bullet");
let current = 1;

nextBtnFirst.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
nextBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-75%";
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
});
submitBtn.addEventListener("click", function(){
  bullet[current - 1].classList.add("active");
  progressCheck[current - 1].classList.add("active");
  progressText[current - 1].classList.add("active");
  current += 1;
  setTimeout(function(){
    alert("Your Form Successfully Signed up");
    location.reload();
  },800);
});

prevBtnSec.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "0%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnThird.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-25%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});
prevBtnFourth.addEventListener("click", function(event){
  event.preventDefault();
  slidePage.style.marginLeft = "-50%";
  bullet[current - 2].classList.remove("active");
  progressCheck[current - 2].classList.remove("active");
  progressText[current - 2].classList.remove("active");
  current -= 1;
});

// MOSTRAR SENHA
function mostrarSenha() {
  var campoSenha = document.getElementById("senha");
  if (campoSenha.type === "password") {
    campoSenha.type = "text";
  } else {
    campoSenha.type = "password";
  }
}

var mostrarBtn = document.getElementById("mostrarBtn");
mostrarBtn.addEventListener("click", mostrarSenha);

// MOSTRAR nome do arquivo no input file
  const inputFile = document.getElementById('customFile');
  const label = document.querySelector('.alter');

  inputFile.addEventListener('change', (event) => {
      const fileName = event.target.files[0].name;
      label.textContent = fileName;
  });

// alterar valor de saldo na carteira
function adicionarSaldo(){
  const notificationCountElement = document.querySelector('.notification-count');
  if (notificationCountElement.textContent == `R$5,00`) {
      const warningMessage = document.querySelector('.modal-message')
      warningMessage.innerHTML = " ❌ voce ja recebeu os 5 reais 😎"

  }else{
    notificationCountElement.style.background = "green"
    const notificationCount = `R$5,00`; // Número de notificações (pode ser qualquer valor)
    notificationCountElement.textContent = notificationCount;
  }

 
}

//desabilitar botao de convite e link de compartilhamento
function continueSignIn(){
  // const invite_Button = document.querySelector('.inviteButton')
  // const button_social1 = document.querySelector('.buttonSocial1')
  // const button_social2 = document.querySelector('.buttonSocial2')
  // const button_social3 = document.querySelector('.buttonSocial3')

  // const iconSocial1 = document.querySelector('.sociIcons1')
  // const iconSocial2 = document.querySelector('.sociIcons2')
  // const iconSocial3 = document.querySelector('.sociIcons3')

  // iconSocial1.classList.add("text-secondary")
  // iconSocial2.classList.remove("text-success")
  // iconSocial2.classList.add("text-secondary")
  // iconSocial3.classList.add("text-secondary")
  

  // invite_Button.classList.remove("invite-animation")
  // invite_Button.classList.add("bg-transparent")
  // button_social1.disabled = true;
  // button_social2.disabled = true;
  // button_social3.disabled = true;

  // const anchorRemove = document.querySelector('.link_remove')
  // anchorRemove.removeAttribute("href");
}

// gerar valor entre 400 e 500
function Range_Valor(){
  var min = 400;
  var max = 500;
  var valorAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;

  var resultado = document.getElementById("valor_Range");
  resultado.innerHTML = "R$" + valorAleatorio + ",00";

}

// SHARE SOCIAL MEDIA BUTTONS
function shareFacebook() {
  // Substitua "URL_PARA_COMPARTILHAR" pela URL que deseja compartilhar
  var url = "URL_PARA_COMPARTILHAR";
  var encodedUrl = encodeURIComponent(url);
  window.open("https://www.facebook.com/sharer/sharer.php?u=" + encodedUrl, "_blank");
  adicionarSaldo();
}

function shareWhatsApp() {
  // Substitua "TEXTO_PARA_COMPARTILHAR" pela mensagem que deseja compartilhar
  var text = "TEXTO_PARA_COMPARTILHAR";
  var encodedText = encodeURIComponent(text);
  window.open("https://api.whatsapp.com/send?text=" + encodedText, "_blank");
  adicionarSaldo();
}

function shareTwitter() {
  // Substitua "TEXTO_PARA_COMPARTILHAR" pela mensagem que deseja compartilhar
  var text = "TEXTO_PARA_COMPARTILHAR";
  var encodedText = encodeURIComponent(text);
  window.open("https://twitter.com/intent/tweet?text=" + encodedText, "_blank");
  adicionarSaldo();
}

