import { React, useState, useEffect } from 'react'
import DogCard from './DogCard'
import Axios from 'axios'

const DogList = () => {
    const dogUrl = "https://dog.ceo/api/breed/husky/images"
    const quoteUrl = "https://type.fit/api/quotes"

    const [dogImages, setDogImages] = useState([])
    const [quotes, setQuotes] = useState([])

    useEffect(() => {
        Axios.get(dogUrl).then(response => {
            setDogImages([...response.data.message])
        })
        Axios.get(quoteUrl).then(response => {
            const values = response.data.slice(0, 1001)
            setQuotes(values)
        })
    }, [])

    return (
        <div className="row">
            {dogImages.map((url, idx) => {
                if (quotes[idx]) {
                    return (
                        <DogCard url={url} quote={quotes[idx].text} key={idx} />
                    )
                }
                else{
                    return(<DogCard url={url} quote={""} key={idx}/>)
                }

            })}
        </div>
    )
}
export default DogList