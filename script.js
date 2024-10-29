let res_na_tela = document.getElementById('res_na_tela');
let input_cpf = document.getElementById('input_cpf');
let btn = document.getElementById('btn');
let div_input = document.querySelector('.div-input')



// MASCARA PARA CPF E CNPJ
input_cpf.addEventListener('input', () => {

    // BLOQUEANDO A ENTRADA DE CARACTERES NÃO NUMERICOS
    let valor_input = input_cpf.value.replace(/\D/g, '');
    let formatacao_vazia = '';

    // MASCARA CPF DIGITO A DIGITO
    if (valor_input.length > 0) {
        formatacao_vazia = valor_input.substring(0, 3);
    }
    if (valor_input.length > 3) {
        formatacao_vazia += '.' + valor_input.substring(3, 6);
    }
    if (valor_input.length > 6) {
        formatacao_vazia += '.' + valor_input.substring(6, 9);
    }
    if (valor_input.length > 9) {
        formatacao_vazia += '-' + valor_input.substring(9, 11);
    }
    if (valor_input.length > 11) {

        // MASCARA CNPJ DIGITO A DIGITO
        if (valor_input.length > 0) {
            formatacao_vazia = valor_input.substring(0, 2);
        }
        if (valor_input.length > 2) {
            formatacao_vazia += '.' + valor_input.substring(2, 5);
        }
        if (valor_input.length > 5) {
            formatacao_vazia += '.' + valor_input.substring(5, 8);
        }
        if (valor_input.length > 8) {
            formatacao_vazia += '/' + valor_input.substring(8, 12);
        }
        if (valor_input.length > 12) {
            formatacao_vazia += '-' + valor_input.substring(12, 14);
        }
    }
    input_cpf.value = formatacao_vazia;
})

// LIMPANDO CAMPO INPUT PÓS ERRO
input_cpf.addEventListener('click', () => {
    input_cpf.style.color = "rgb(48, 48, 48)";
    div_input.style.border = "1px solid rgb(128, 128, 128)";
    input_cpf.value = '';
    res_na_tela.innerHTML = 'Resultado da Verificação INATIVO:'
})

// RESPOSTA PARA DIFERENTES TIPOS: CPF, CNPJ OU ERRO
btn.addEventListener('click', () => {

    let numero_cpf = input_cpf.value.replace(/\D/g, '');
    let tamanho_cpf = numero_cpf.length;

    if (tamanho_cpf <= 10) {
        input_cpf.value = "ERRO CAMPO VAZIO"
        res_na_tela.innerHTML = `Ops... Ocorreu um Erro`;
        input_cpf.style.color = "rgb(167, 3, 3)"
        input_cpf.style.fontWeight = "600"
        div_input.style.border = "1px solid rgb(167, 3, 3)"
        return
    }
    if (tamanho_cpf == 11) {
        div_input.style.border = "2px solid green"
        res_na_tela.innerHTML = `O REGISTRO: <span>${input_cpf.value}</span> Resultado da Verificação INATIVO`;
        return
    }
    if (tamanho_cpf == 14) {
        div_input.style.border = "2px solid green"
        res_na_tela.innerHTML = `O REGISTRO: <span>${input_cpf.value}</span> Resultado da Verificação INATIVO`;
        return
    }
})
