const PokemonType = (props) => {
    const pokemonType = props.pokemonType;

    let pokemonTypeStyle = {}

    if(pokemonType === 'grass') {
        pokemonTypeStyle = {
          backgroundColor:'#9bcc50'
        }
      } 

    if(pokemonType === 'normal') {
        pokemonTypeStyle = {
          backgroundColor:'#a4acaf'
        }
      } 

    if(pokemonType === 'electric') {
        pokemonTypeStyle = {
          backgroundColor:'#eed535'
        }
      } 

    if(pokemonType === 'fairy') {
        pokemonTypeStyle = {
          backgroundColor:'#fdb9e9'
        }
      } 

    if(pokemonType === 'ice') {
        pokemonTypeStyle = {
          backgroundColor:'#51c4e7'
        }
      } 

    if(pokemonType === 'poison') {
        pokemonTypeStyle = {
          backgroundColor:'#b97fc9',
          color:'white'
        }
      } 

      if(pokemonType === 'fire') {
        pokemonTypeStyle = {
          backgroundColor:'#fd7d24',
          color:'white'
        }
      } 

      if(pokemonType === 'water') {
        pokemonTypeStyle = {
          backgroundColor:'#4592c4',
          color:'white'
        }
      } 

      if(pokemonType === 'bug') {
        pokemonTypeStyle = {
          backgroundColor:'#729f3f',
          color:'white'
        }
      } 

      if(pokemonType === 'fighting') {
        pokemonTypeStyle = {
          backgroundColor:'#d56723',
          color:'white'
        }
      } 

      if(pokemonType === 'psychic') {
        pokemonTypeStyle = {
          backgroundColor:'#f366b9',
          color:'white'
        }
      } 

      if(pokemonType === 'rock') {
        pokemonTypeStyle = {
          backgroundColor:'#a38c21',
          color:'white'
        }
      } 

      if(pokemonType === 'ghost') {
        pokemonTypeStyle = {
          backgroundColor:'#7b62a3',
          color:'white'
        }
      } 

      if(pokemonType === 'dragon') {
        pokemonTypeStyle = {
          backgroundColor:'linear-gradient(#e66465, #9198e5)',
          color:'white'
        }
      } 

    return (
        <div className="pokemon-type" style={pokemonTypeStyle}>
            {pokemonType.charAt(0).toUpperCase() + pokemonType.slice(1)}
        </div>
    );
};

export default PokemonType;