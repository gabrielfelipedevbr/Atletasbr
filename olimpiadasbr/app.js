function pesquisar (){
    let section = document.getElementById("resultados-pesquisa")
    

    let campo = document.getElementById("campo").value
    console.log(campo)

    if(campo == ""){
        section.innerHTML = " <p>Nada foi encontrado, Você precisa digitar o nome do atleta ou esporte</p>"
        return
    }

    campo = campo.toLowerCase()

    let resultado = "";
    let titulo = "";
    let descrição = "";
    let tags = "";
    for (let dado of dados1){
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
        if(titulo.includes(campo)||descrição.includes(campo)||tags.includes(campo)){
            resultado +=
            `<div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta"> ${dado.descrição}
                </p>
                <a href="${dado.link}" target="_blank">Mais informações</a>
            </div>`
        }
    }
    if(!resultado){
        resultado = "<p>Nada foi encontrado</p>"
    }
    section.innerHTML = resultado
}





