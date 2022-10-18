import React from "react";
import ReactDOM from "react-dom";


export default function Main() {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: ""
    })

    const [allMemeImages, setAllMemeImages] = React.useState([])

    React.useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImages(data.data.memes))
        console.log(allMemeImages);
    }, [])

    function getMemeImage() {
        const randomNumber = Math.floor(Math.random() * allMemeImages.length)
        const url = allMemeImages[randomNumber].url
        setMeme(prevMeme => ({
            ...prevMeme,
            randomImage: url
        }))
    }

    function handleChange(event) {
        const { name, value } = event.target
        setMeme(prevMeme => ({
            ...prevMeme,
            [name]: value
        }))
    }

    return (
        <main className="main">
            <div className="form">
                <input type="text" className="form-input" placeholder="Top text" name="topText" value={meme.topText} onChange={handleChange} />
                <input type="text" className="form-input" placeholder="Bottom text" name="bottomText" value={meme.bottomText} onChange={handleChange} />
                <button className="form-button" onClick={getMemeImage}>Get a new meme image</button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme-image" />
                <h2 className="meme-text top">{meme.topText}</h2>
                <h2 className="meme-text bottom">{meme.bottomText}</h2>
            </div>
        </main>
    )
}