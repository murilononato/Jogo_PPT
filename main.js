const herois = document.querySelectorAll("[data-heroi]")
const pontuacaoHeroi = document.getElementById("pontuacaoHeroi")
const pontuacaoVilao = document.getElementById("pontuacaoVilao")
const ArenaHeroi = document.getElementById("ArenaHeroi")
const ArenaVilao = document.getElementById("ArenaVilao")
var SomaHeroi = 0
var SomaVilao = 0

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
            ArenaHeroi.src = 'img/tesoura_heroi.jpg'
            ArenaVilao.src = 'img/tesoura_heroi.jpg'
            SomaVilao++
        }else if (rand == 2){
            console.log('Venceu')
            ArenaHeroi.src = 'img/tesoura_heroi.jpg'
            ArenaVilao.src = 'img/tesoura_heroi.jpg'
            SomaHeroi++
        }else{
            console.log('Empate')
            ArenaHeroi.src = 'img/tesoura_heroi.jpg'
            ArenaVilao.src = 'img/tesoura_heroi.jpg'
  
        }
    } else if( heroi === "pedra"){
        if(rand == 1){
            console.log('Empate')
      
        }else if (rand == 2){
            console.log('Perdeu')
            SomaVilao++
        }else{
            console.log('Venceu')
            SomaHeroi++
        }
    } else {
        if(rand == 1){
            console.log('Venceu')
            SomaHeroi++
        }else if (rand == 2){
            console.log('Empate')
          
        }else{
            console.log('Perdeu')
            SomaVilao++
        }
    }
    
    pontuacaoHeroi.innerHTML = `Herois: ${SomaHeroi}`
    pontuacaoVilao.innerHTML = `Vilões: ${SomaVilao}`
}

