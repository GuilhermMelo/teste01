var loginCadastrado = 'otavio'
var senhaCadastrado = '123'
function validaLogin() {

    const txtLogin = document.querySelector("#txt_login")
    const txtSenha = document.querySelector("#txt_senha")

    if (txtLogin.value == loginCadastrado && txtSenha.value == senhaCadastrado) {
        alert('Usuario logado com sucesso')

        txtLogin.value = ''
        txtSenha.value = ''

    } else {
        alert('Acesso negado')
        txtLogin.value = ''
        txtSenha.value = ''
    }
}
