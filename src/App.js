import './App.css'
import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="App">
            <header>
                <h1 className="title">TweeDeck</h1>
                <form>
                    <input placeholder="search for a new hashtag here" />
                    <button>Search hashtag</button>
                </form>
                <span></span>
            </header>
            <div>
                <ul className="row">
                    <li className="col">
                        <span>
                            <p>lipsum lipsum lipsum lipsum</p>
                        </span>

                        <span>{0} Likes</span>
                        <span>{0} Retweets</span>
                    </li>

                    <li className="col">
                        <span>
                            <p>lipsum lipsum lipsum lipsum</p>
                        </span>

                        <span>{0} Likes</span>
                        <span>{0} Retweets</span>
                    </li>

                    <li className="col">
                        <span>
                            <p>lipsum lipsum lipsum lipsum</p>
                        </span>

                        <span>{0} Likes</span>
                        <span>{0} Retweets</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default App
