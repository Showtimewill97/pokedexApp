
       var qtd = document.getElementById('qtd');
      qtd.addEventListener('keyup',()=>{
        pegaPokemons(qtd.value);
      })
      pegaPokemons(1);

function pegaPokemons(quantidade){
    fetch('https://pokeapi.co/api/v2/pokemon?limit='+quantidade)
    .then(response => response.json())
    .then(allpokemon => {

        var pokemons = [];

        allpokemon.results.map((val)=>{

            fetch(val.url)
            .then(response => response.json())
            .then(pokemonSingle =>{
                pokemons.push({nome:val.name, imagem:pokemonSingle.sprites.front_default});

                if (pokemons.length ==quantidade){
                    //terminamos nossas requisições

                    var pokemonBoxes = document.querySelector('.pokemon-boxes');
                        pokemonBoxes.innerHTML = "";
                    pokemons.map((val) =>{
                        pokemonBoxes.innerHTML+=`

                        <div class="pokemon-box">
                            <img src="`+val.imagem+`">
                                <p>`+val.nome+`</p>
                        </div>
                        
                        `;
                    })

                }
                
            })


        })

        })
}



