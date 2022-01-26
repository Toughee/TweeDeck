import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import HomePageTab from './components/HomePageTab'
import TrendingTab from './components/TrendingTab'
import NewsTab from './components/NewsTab'
import SportsTab from './components/SportsTab'
import EntertainmentTab from './components/EntertainmentTab'
import SearchTab from './components/SearchTab'

import './App.css'
// import 'bootstrap/dist/css/bootstrap.css'

function App() {
    return (
        <div className="App">
            <header>
                <BrowserRouter>
                    <ul>
                        <Link to="/TrendingTab">
                            <li>TrendingTab</li>
                        </Link>
                        <Link to="/NewsTab">
                            <li>NewsTab</li>
                        </Link>

                        <Link to="/HomePageTab">
                            <li className="title TwHeader">
                                <strong>TweeDeck</strong>
                            </li>
                        </Link>

                        <Link to="/SportsTab">
                            <li>SportsTab</li>
                        </Link>

                        <Link to="/EntertainmentTab">
                            <li>EntertainmentTab</li>
                        </Link>
                        <Link to="/SearchTab">
                            <li>SearchTab</li>
                        </Link>
                    </ul>

                    <Routes>
                        <Route path="/TrendingTab" element={<TrendingTab />} />
                        <Route path="/NewsTab" element={<NewsTab />} />

                        <Route path="/SportsTab" element={<SportsTab />} />
                        <Route
                            path="/EntertainmentTab"
                            element={<EntertainmentTab />}
                        />

                        <Route path="/SearchTab" element={<SearchTab />} />
                        <Route path="/HomePageTab" element={<HomePageTab />} />
                    </Routes>
                </BrowserRouter>
            </header>
        </div>
    )
}

export default App
