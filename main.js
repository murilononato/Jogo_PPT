const herois = document.querySelectorAll("[data-heroi]")

herois.forEach((elemento) =>{
    elemento.addEventListener('click',(evento) =>{
       Jogar(elemento.id)
    } )
})

function Jogar(heroi){
    const rand = Math.floor(Math.random() * 3) + 1;

    /*
     1 == pedra
     2 == papel
     3 == tesoura
     */

    if(heroi === "tesoura"){
        if(rand == 1){
            console.log('Perdeu')
            console.log(heroi + " vs " + rand)
        }else if (rand == 2){
            console.log('Venceu')
            console.log(heroi + " vs " + rand)
        }else{
            console.log('Empate')
            console.log(heroi + " vs " + rand)
        }
    } else if( heroi === "pedra"){
        if(rand == 1){
            console.log('Empate')
            console.log(heroi + " vs " + rand)
        }else if (rand == 2){
            console.log('Perdeu')
            console.log(heroi + " vs " + rand)
        }else{
            console.log('Venceu')
            console.log(heroi + " vs " + rand)
        }
    } else {
        if(rand == 1){
            console.log('Venceu')
            console.log(heroi + " vs " + rand)
        }else if (rand == 2){
            console.log('Empate')
            console.log(heroi + " vs " + rand)
        }else{
            console.log('Perdeu')
            console.log(heroi + " vs " + rand)
        }
    }
    
}

