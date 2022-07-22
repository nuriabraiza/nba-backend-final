const socket = io.connect();

let pantalla = document.getElementById("pantalla");
let botonChat = document.getElementById("btnChat");

botonChat.addEventListener("click", () => {
  validar();
}); 

function validar() {
  let email = document.getElementById("userEmail").value;
  let message = document.getElementById("messageChat").value;

  if (message === "" || email === "") {
    alert(`CAMPOS REQUERIDOS`);
  } else {
    let mensaje = {
      email: document.getElementById("userEmail").value,
      message: document.getElementById("messageChat").value,
    };
    socket.emit("new-message", mensaje);
    document.getElementById("messageChat").value = "";
  }
}

let date = new Date();
newDate =
  [date.getDate(), date.getMonth() + 1, date.getFullYear()].join("/") +
  " " +
  [date.getHours(), date.getMinutes(), date.getSeconds()].join(":");


function renderMessage(data) {
  let html = data
    .map((elem, i) => {
      return `
        <div>
        <strong style="color:blue">${elem.email}</strong></span>
        (a las <span>${newDate.toString()}</span>)
        dijo: <i style="color:green">${elem.message}</i></div>`;
    })
    .join(" ");
  document.getElementById("pantalla").innerHTML = html;
}

socket.on("new-message-server", (data) => {
  renderMessage(data);
});
