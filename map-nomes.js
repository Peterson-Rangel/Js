const nomes = ["ana Julia", "Caio vinicius", "BIA silva"];

const nomesPadronizados = nomes.map((nome) => {
              //Deixa todos as letras maiúsculas da string  
    return nome.toUpperCase();

})

console.log(nomesPadronizados);