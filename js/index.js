
let nomeComida, nomeBebida, nomeSobremesa;
let precoComida, precoBebida, precoSobremesa;


function verificar(){
    

    if(nomeComida !== undefined){
        if(nomeBebida !== undefined){
            if(nomeSobremesa !== undefined){
                const botaoAvancar = document.querySelector('.rodape .selecionar');
                botaoAvancar.classList.add('verde');
                botaoAvancar.innerHTML = 'Fechar pedido';
                botaoAvancar.removeAttribute('disabled');
            }
        }
    }
}
function selecionarItem(caixaSelecionada){
    nomeComida = caixaSelecionada.innerHTML
    
    const selecionadoAnterior = document.querySelector('.comida .selecionado'); 

    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('selecionado');
    }
    
    caixaSelecionada.classList.add('selecionado');

    nomeComida = caixaSelecionada.querySelector('.nome').innerHTML;
    precoComida = caixaSelecionada.querySelector('.preco').innerHTML;
    
    verificar();


}

function selecionarBebida(caixaSelecionada){
    nomeBebida = caixaSelecionada.innerHTML;

    const selecionadoAnterior = document.querySelector('.bebidas .selecionado');
    
    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('selecionado')
    }

    caixaSelecionada.classList.toggle('selecionado');

    nomeBebida = caixaSelecionada.querySelector('.nome').innerHTML;
    precoBebida = caixaSelecionada.querySelector('.preco').innerHTML;

    verificar();

}
function selecionarSobremesa(caixaSelecionada){
    nomeSobremesa = caixaSelecionada.innerHTML;

    const selecionadoAnterior = document.querySelector('.sobremesas .selecionado');

    
    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('selecionado');
    }

    caixaSelecionada.classList.toggle('selecionado');

    nomeSobremesa = caixaSelecionada.querySelector('.nome').innerHTML;
    precoSobremesa = caixaSelecionada.querySelector('.preco').innerHTML;

    verificar();

}

function confirmarPedido(){
    const confirmarPedido = document.querySelector('.confirmar-pedido');
    confirmarPedido.classList.remove('esconder')

    const nPrato = confirmarPedido.querySelector('.prato .nome');
    nPrato.innerHTML = nomeComida;

    const pPrato = confirmarPedido.querySelector('.prato .preco');
    pPrato.innerHTML = precoComida;

    const nBebida = confirmarPedido.querySelector('.bebida .nome');
    nBebida.innerHTML = nomeBebida;

    const pBebida = confirmarPedido.querySelector('.bebida .preco');
    pBebida.innerHTML = precoBebida;

    const nSobremesa = confirmarPedido.querySelector('.sobremesa .nome');
    nSobremesa.innerHTML = nomeSobremesa;

    const pSobremesa = confirmarPedido.querySelector('.sobremesa .preco');
    pSobremesa.innerHTML = precoSobremesa;

    const valTotal = calcValorTotal();

    const calcTotal = confirmarPedido.querySelector('.preco-total');
    calcTotal.innerHTML = valTotal;
}
function cancelarPedido(){
    const cancelarPedido = document.querySelector('.confirmar-pedido');
    cancelarPedido.classList.add('esconder')
}

function calcValorTotal(){
    let pratoP = precoComida.replace('R$', '')
    pratoP = pratoP.replace(',', '.')
    pratoP = Number(pratoP);

    let bebidaP = precoBebida.replace('R$', '')
    bebidaP = bebidaP.replace(',', '.')
    bebidaP = Number(bebidaP);

    let sobremesaP = precoSobremesa.replace('R$', '')
    sobremesaP = sobremesaP.replace(',', '.')
    sobremesaP = Number(sobremesaP);

    const total = pratoP + bebidaP + sobremesaP;

    return total.toFixed(2);
}

function fazerPedidoWhatsapp(){
    const nomeCliente = prompt('Digite seu nome: ');
    const enderecoCliente = prompt('Digite  endereço para entrega: ');

    const valTotal = calcValorTotal();

    const mensagem = `Olá, gostaria de fazer o pedido: 

    - Prato: ${nomeComida}
    - Bebida: ${nomeBebida}
    - Sobremesa: ${nomeSobremesa}
    
    -Tota: ${valTotal}

    -Nome: ${nomeCliente}
    -Endereço: ${enderecoCliente}`;

    const mensWP = encodeURIComponent(mensagem);

    window.open(`https://wa.me/5599999999999?text=${mensWP}`);
}
