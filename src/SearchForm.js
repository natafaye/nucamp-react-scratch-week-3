import { useState } from "react";

const emailRegEx = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/

export default function SearchForm({ usaChunks }) {
    const [searchTerm, setSearchTerm] = useState("")
    const [searchTerritories, setSearchTerritories] = useState(false)

    const searchResults = usaChunks.filter(
        state => 
            state.name.toLowerCase().includes(searchTerm) 
            && (searchTerritories || !state.territory)
    )

    return (
        <div>
            <form>
                <input type="text"
                    /* Best Friends and Twins Forever */
                    value={searchTerm}
                    onChange={(event) => setSearchTerm(event.target.value)}
                />
                <input type="checkbox"
                    checked={searchTerritories}
                    onChange={(event) => setSearchTerritories(event.target.checked)}
                />Search territories
                <button type="button" onClick={() => setSearchTerm("")} >Clear Search</button>
            </form>
            {searchResults.map(state => (
                <div>{state.name}</div>
            ))}
        </div>
    )
}

// event.target = what dom node was this event performed on