import React from 'react'

const NewsItem = (props) => {

    let { title, description, author, url, urlToImage } = props

    return (
        <div className="card" style={{ width: "20rem", backgroundColor: props.cardBg }}  >
            <img src={urlToImage == null ? 'https://www.salonlfc.com/wp-content/uploads/2018/01/image-not-found-scaled.png' : urlToImage} style={{ height: '13rem', objectFit: 'cover' }} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 style={{ color: props.cardTextTitle }} className="card-title">{title == null ? 'Sorry! Title is not Available at the Moment' : title.slice(0, 60) + `...`}</h5>
                <p style={{ color: props.cardText }} className="card-text">{description == null ? 'Sorry! Description is not Available at the Moment' : description.slice(0, 110) + `...`}</p>
                <p style={{ color: props.cardText }} className="card-text fw-bold   ">{author == null ? 'Unknown Author' : author}</p>
                <a href={url} style={{ backgroundColor: '#6B21A8', border: 0 }} className="btn btn-primary">Read More...</a>
            </div>
        </div>
    )
}

export default NewsItem;