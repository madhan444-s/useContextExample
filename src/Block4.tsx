import { useContext } from "react"
import { contentContext } from "./App"


export default function Block4() {

    const content = useContext(contentContext)

    return <div>
        <h1>Block 4</h1>
        <h2>{content}</h2>
    </div>
}