const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let nome = document.getElementById("nome").value;
  let telefone = document.getElementById("tel").value;
  let endereço = document.getElementById("end").value;
  let bairro = document.getElementById("bairro").value;
  let cidade = document.getElementById("cidade").value;
  let estado = document.getElementById("estado").value;
  let cep = document.getElementById("cep").value;
  if (document.getElementById("nome").value == "") {
    alert("Por favor, preencha o campo nome");
    document.getElementById("nome").focus();
    return false;
  }
  if (document.getElementById("tel").value == "") {
    alert("Por favor, preencha o campo telefone");
    document.getElementById("tel").focus();
    return false;
  }
  if (document.getElementById("end").value == "") {
    alert("Por favor, preencha o campo endereço");
    document.getElementById("end").focus();
    return false;
  }
  if (document.getElementById("bairro").value == "") {
    alert("Por favor, preencha o campo bairro");
    document.getElementById("bairro").focus();
    return false;
  }
  if (document.getElementById("estado").value == "") {
    alert("Por favor, preencha o campo estado");
    document.getElementById("estado").focus();
    return false;
  }
  if (document.getElementById("cep").value == "") {
    alert("Por favor, preencha o campo cep");
    document.getElementById("cep").focus();
    return false;
  }

  let email = document.getElementById("email").value;
  if (
    document.getElementById("email").value == "" ||
    document.forms[0].email.value.indexOf("@") == -1 ||
    document.forms[0].email.value.indexOf(".") == -1
  ) {
    alert("Por favor, informe um E-MAIL válido!");
    document.getElementById("email").focus();
    return false;
  }
  let data = {
    nome,
    email,
    telefone,
    endereço,
    bairro,
    cidade,
    estado,
    cep,
  };
  let convertData = JSON.stringify(data);

  localStorage.setItem("lead", convertData);

  alert("Obrigada por se cadastrar");
});
