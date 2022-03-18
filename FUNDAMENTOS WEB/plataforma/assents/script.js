
//por Tag: getElementByTagName()
//por Id: getElementById()
//por Nome: getElementByName()
//por Classe: getElementsByClassName()
//por Seletor: querySelector()
//Case Sensitive


let name = window.document.getElementById('name')
let email = document.querySelector('#email') //('.email' puxa classe)('input#email')
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false

//nome.style.width = '100%'
//email.style.width = '100%'

function validaNome(){

    let txtNome = document.querySelector('#txtNome')
    if(name.value.length < 3){ 
            txtNome.innerHTML = 'Nome inválido,  Insira o nome Completo!'
            txtNome.style.color = 'red'
        } else { 
            txtNome.innerHTML = 'Nome válido!'
            txtNome.style.color = 'green'
            nomeOk = true
        }
}

function validaEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green'
        emailOk = true
    }

}

function validaAssunto(){
    let txtAssunto = document.querySelector('#txtAssunto')
    if(assunto.value.length >= 50)  {
        txtAssunto.innerHTML = 'Caracteres exedidos!'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar(){ 
    if (nomeOk == true && emailOk == true && assuntoOk == true){
        alert ('Formulario enviado com sucesso!')
    } else {
        alert ('Preencha o formulário corretamente.')
    }
}

