import React from 'react'

export default class SearchTab extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    <form>
                        <input placeholder="search for a new hashtag here" />
                        <button className="SearchOpt-Style">
                            Search hashtag
                        </button>
                    </form>
                    <span></span>
                </h1>
            </div>
        )
    }
}
