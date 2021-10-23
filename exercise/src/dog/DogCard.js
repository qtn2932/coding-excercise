import { React } from 'react'

const DogCard = (props) => {
    return (
        <div className="col-md-3 col-sm-6 mb-5">
            <div className="card">
                <img src={props.url} className="card-img-top" alt="..." style={{backgroundColor:"#868E96"}}/>
                <div className="card-body">
                    <p className ="card-text">{props.quote}</p>
                </div>
            </div>
        </div>
    )
}
export default DogCard