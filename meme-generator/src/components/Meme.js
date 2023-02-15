import React from 'react'

export default function Meme() {

    const [meme, setMeme] = React.useState({
        topText: "", 
        bottomText: "", 
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemes(data.data.memes))
    }, [])

    function getMeme() {
        let num = Math.floor(Math.random() * allMemes.length);
        const url = allMemes[num].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const {name, value} = event.target
        console.log(event.target)
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Top Text"
                    name="topText"
                    value={meme.topText}
                    onChange={(handleChange)}
                />
                <input 
                    type="text" 
                    className="form--input" 
                    placeholder="Bottom Text"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={(handleChange)}
                />
                <button onClick={getMeme}className="form--button">Get a new meme image 🖼️</button>
            </div>
            <div className="meme">
                <img className="meme--image"src={meme.randomImage} alt="meme"></img>
                <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}
