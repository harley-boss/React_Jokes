import React from "react"

function Joke(props) {
    console.log("Props recieved in Joke(): " + props)
    const question = props.joke.question
    const punchLine = props.joke.punchLine
    if (question != null && question.length > 0) {
        if (punchLine != null &&  punchLine.length > 0) {
            return (
                <div className="joke-item">
                    <h3>Question: <br/><hr/>{props.joke.question}</h3>  
                    <h3>Answer:   <br/><hr/>{props.joke.punchLine}</h3>
                </div>
            )  
        } else {
            return (
                <div className="joke-item">
                    <h3>Question:<br/><hr/>{props.joke.question}</h3>  
                </div>
            )  
        }
    } else if (punchLine != null && punchLine.length > 0) {
        return (
            <div className="joke-item">
                <h3>Answer:<br/><hr/>{props.joke.punchLine}</h3>  
            </div>
        ) 
    } else {
        console.log("[ERROR] Null or empty question and punchline")
    }
}

export default Joke