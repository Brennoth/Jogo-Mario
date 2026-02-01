(function(){






const mario = {
    start(){
        const mario = document.querySelector(".mario")
        // this.jump(mario)

        const pipe = document.querySelector(".pipe")
        const clouds = document.querySelector(".clouds")
        this.loopContadoPipe(pipe, mario, clouds)

        this.mediaQuery(mario)
    },

    //ira adicionar a class jump, e remover a class
    jump(mario){

        //quando clicar em qualquer tecla execute a função
        window.addEventListener("keydown", function(e){
            if (e.code == "Space"){
                //quando clicar a tecla, ira add a class jump
                mario.classList.add("jump")

                //dps de 1 segundo a class e removida
                setTimeout(()=>{
                    mario.classList.remove("jump")
                },1000)
            }
        })
    },

    //ira executar um loop para vereficar as posições em px
    loopContadoPipe(pipe, mario, clouds){
        
       const loop = setInterval(()=>{
            
            //ira pegar a posição em px do pipe
            const pipePostion = pipe.offsetLeft

            //ira pegar a posição em px do mario
            const marioHeight = +window.getComputedStyle(mario).bottom.replace("px", "")

            //ira pegar a  posição em px da nuvem
            const cloudsPx = +window.getComputedStyle(clouds).right.replace("px", "")


            //se a distancia do pipe for menor que 120px execute isso
            if(pipePostion <= 120 && pipePostion > 0 && marioHeight <= 80){

                //ira parar a animation
                pipe.style.animation = "none"

                //ira fazer o boneco para na posição que parou
                pipe.style.left = `${pipePostion}px`

                //ira parar a animation
                mario.style.animation = "none"

                //ira fazer o boneco para na posição que parou
                mario.style.bottom = `${marioHeight}px`

                //ira mudar a imagem
                mario.src = "assets/img/game-over.png"
                mario.style.width = "100px"

                //ira parar a anition, e ira para na mesma posição
                clouds.style.animation = "none"
                clouds.style.right = `${cloudsPx}px`

                this.gameOver()

                clearInterval(loop)
            }



        },16)
    },

    //ira vereficar o tamanho da tela, e dps ira executar uma função dependo do valor da mediaQuery
    mediaQuery(mario){
        const tela = window.matchMedia("(max-width: 884px)");
        tela.matches == true? this.jumpTouch(mario): this.jump(mario)
    },

    jumpTouch(mario){

        window.addEventListener("touchstart", ()=>{
            mario.classList.add("jump")
            setTimeout(() => {
                mario.classList.remove("jump")
            }, 800)
        })
    },

    gameOver(){
        const btn = document.querySelector(".btnReset")
        btn.style.display = "block"
        btn.addEventListener("click", ()=>{
            location.reload()
        })
    }

}
mario.start()




//32
})()
