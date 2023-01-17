fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then((respuesta) => {
    return respuesta.json();
    });
    .then((respuestaJSON) => {
    console.log(respuestaJSON);
    });
