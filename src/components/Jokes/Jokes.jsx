import { useState } from "react";
import Joke from "../Joke";
import { useGlobalContext } from "../../context/TasksContext";

const Jokes = () => {
    const [jokeSearch, setJokeSearch] = useState(null);

    const { jokes, addJokes } = useGlobalContext()

    const handleJokeQuery = (e) => {
        e.preventDefault()

        fetch("https://api.chucknorris.io/jokes/search?query=" + jokeSearch)
        .then((response) => response.json())
        .then((data) => {
            console.log(data.result)
            addJokes(data.result);
        })
        .catch((error) => console.log(error));
    }

    return (
        <div>
            <h2 className="m-5 text-center">Chuck Norris Jokes</h2>

            <form onSubmit={handleJokeQuery}>
                <input 
                onChange={(e) => setJokeSearch(e.target.value)} 
                className="form-control mb-3" 
                type="text"
                placeholder="Type keyword..." />
                <button className="btn btn-primary">Search Joke</button>
            </form>

            <h3 className="my-3">Jokes found: {jokes.length}</h3>

            <div className="row">
                {jokes && jokes.map(joke => <Joke className="col-3" key={joke.id} text={joke.value} />)}
            </div>
        </div>
    )
}


export default Jokes