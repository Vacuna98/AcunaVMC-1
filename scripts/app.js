const button = document.querySelector('.container button');
const jokeText = document.querySelector('.container p');

button.addEventListener('click', getJoke);

async function getJoke(){
    const jokeData = await fetch('https://icanhazdadjoke.com/',{
        headers: {
            'Accept': 'application/json'
        }
    });
    const generateJoke = await jokeData.json();
    jokeText.innerHTML = generateJoke.joke;

    console.log(generateJoke.joke)
}

