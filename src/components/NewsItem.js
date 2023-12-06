import React from 'react'

const NewsItem = (props) => {
    return (
        <div className="card" style={{ width: "20rem" }}>
            <img src={props.urlToImage} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text fw-semibold  ">{props.author}</p>
                <a href={props.url} className="btn btn-primary">Read More...</a>
            </div>
        </div>
    )
}

export default NewsItem;