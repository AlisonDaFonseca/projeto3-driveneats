
let nomeComida = '';
let nomeBebida = '';
let nomeSobremesa = '';


function selecionarItem(caixaSelecionada){
    nomeComida = caixaSelecionada.innerHTML
    
    const selecionadoAnterior = document.querySelector('.comida .selecionado'); 

    if(selecionadoAnterior !== null && selecionadoIcone !== null){
        selecionadoAnterior.classList.remove('selecionado');
       
    }
    
    caixaSelecionada.classList.add('selecionado');
    
    verificar();


}

function selecionarBebida(caixaSelecionada){
    nomeBebida = caixaSelecionada.innerHTML;

    const selecionadoAnterior = document.querySelector('.bebida .selecionado');
    
    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('selecionado')
    }

    caixaSelecionada.classList.toggle('selecionado');
    verificar();

}
function selecionarSobremesa(caixaSelecionada){
    nomeSobremesa = caixaSelecionada.innerHTML;

    const selecionadoAnterior = document.querySelector('.sobremesa .selecionado');

    
    if(selecionadoAnterior !== null){
        selecionadoAnterior.classList.remove('selecionado');
    }

    caixaSelecionada.classList.toggle('selecionado');
    verificar();

}
function verificar(){
    

    if(nomeComida !== ''){
        if(nomeBebida !== ''){
            if(nomeSobremesa !== ''){
                const botaoAvancar = document.querySelector('.rodape .selecionar')
                botaoAvancar.classList.add('verde')
                botaoAvancar.innerHTML = 'Fechar pedido'
            }
        }
    }
}