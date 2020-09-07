import React from "react"
import Joke from "../components/Joke"

function MainContent() {
    return (
        <div className="joke-list">
            <Joke joke={{question: "Why did the chicken cross the road?", punchLine: "To get to the other side!"}}/>
        </div>
    )
}

export default MainContent