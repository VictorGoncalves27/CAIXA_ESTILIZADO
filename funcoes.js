var  saldoGlobal = 100
function saldo() { 
    alert(`Seu saldo atual é:` +saldoGlobal);
    inicio();
}

function saque() {
    
    var Saque = parseFloat(prompt('Qual o valor para saque?'));
    Saque = parseFloat(Saque);

    if (isNaN(Saque) || Saque <= 0) {
        alert("Valor inválido. Por favor, insira um valor válido.");
        return;
    } else if (Saque > saldoGlobal) {
        alert("Saldo insuficiente.");
        return;
    } else {

        saldoGlobal -= Saque
        alert(`Você sacou R$${Saque}. Seu novo saldo é R$${saldoGlobal}`);
        inicio();
    }
}
function atualizarSaldo(valor) {
    saldoGlobal += valor;
}
function deposito() {
    var depositoValor = parseFloat(prompt('Qual o valor para depósito?'));
    if (isNaN(depositoValor) || depositoValor <= 0) {
        alert('Por favor, informe um número válido maior que zero.');
    } else {
        atualizarSaldo(depositoValor); // Atualiza o saldo ao fazer um depósito
        alert(`Você depositou ${depositoValor}, seu saldo é de ${saldoGlobal}`);
        inicio();
    }
}
function extrato() {
    alert('Extrato Bancário.\nLoja da Lara: Bandeja de ovos de codorna: R$ 24,00.\nMercadinho Simbão: Cebola Roxa - 5,40kg: R$ 10.,56\nMercadinho da Paula: Margarina Delícia - 3Un: R$ 20,99')
        inicio();
}

function erro() {
    alert('Por favor, informe um número entre 1 e 6.');
    inicio();
}

function transferencia() {
    
    var Conta = prompt("informe qual conta deseja transferir:")
    var transferir = parseFloat(prompt('Qual o valor da transferência?'));

    if(transferir <= 0){
        alert('Operação não autorizada. O valor da tranferência deve ser maior que zero')
        transferencia()
    }else if (isNaN(Conta) || Conta === '') {
        alert('Por favor, informe um número.');
    transferencia();
    }else if (transferir > saldoGlobal){
        alert('Operação não autorizada. O valor da tranferência não pode ser maior que o saldo')
        transferencia()
    } else if ((isNaN(transferir)) || transferir === '') {
            alert('Por favor, informe um número:');
            transferencia();
    } else {
        saldoGlobal -= transferir
        alert(`Você transferiu ${transferir} para a conta ${Conta}, seu saldo é de ${saldoGlobal}`)
        inicio()
    }

}

function sair() {
    var confirma = confirm('Você deseja sair?');
    if (confirma) {
        window.close();
    } else {
        inicio();
    }
}


