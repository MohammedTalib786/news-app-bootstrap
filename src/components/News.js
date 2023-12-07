import React, { useEffect, useState } from 'react'
import './News.css'
import PropTypes from 'prop-types'
import NewsItem from './NewsItem'
import InfiniteScroll from "react-infinite-scroll-component";
import Loading from './Loading';


const News = (props) => {
    const [articles, setArticles] = useState([])
    const [totalResults, setTotalResults] = useState(0)
    const [page, setPage] = useState(1)
    const [loader, setLoader] = useState(false)

    useEffect(() => {
        props.showProgress(30)
        setLoader(true)
        const used = async () => {
            let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=74a9094e0c8549c7a0b47fd6f8c52b0b&page=${page}&pageSize=${props.pageSize}`)
            props.showProgress(60)
            let res = await api.json()
            props.showProgress(100)
            setArticles(res.articles)
            setLoader(false)
        }
        used()

    }, [])

    const fetchMoreData = async () => {
        const used = async () => {
            let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=74a9094e0c8549c7a0b47fd6f8c52b0b&page=${page + 1}&pageSize=${props.pageSize}`)
            let res = await api.json()
            setArticles(articles.concat(res.articles))
            setPage(page + 1)
            setTotalResults(res.totalResults)
        }
        used()
    }

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    const topBtn = () => {
        window.scrollTo(0, 0)
    }

    document.title = `NewsMonkey - ${capitalizeFirstLetter(props.category)}`

    return (
        <div>
            <h1 className='py-5 text-center ' style={{ color: '#6B21A8' }} >Top Headlines - {capitalizeFirstLetter(props.category)} </h1>
            <button id='onTop' onClick={topBtn} > <i className="fa-solid fa-arrow-up"></i> </button>
            {loader && <Loading />}
            <div className="container ">
                <div className="d-flex justify-content-center gap-5 flex-wrap ">
                    {loader || articles.map(e => {
                        return <div key={e.url} className=''>
                            <NewsItem title={e.title} description={e.description} author={e.author} url={e.url} urlToImage={e.urlToImage} />
                        </div>
                    })}
                </div>
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Loading />}
                >

                </InfiniteScroll>
            </div>

        </div>
    )
}

News.propTypes = {
    category: PropTypes.string,
    pageSize: PropTypes.number
}

News.defaultProps = {
    category: 'general',
    pageSize: 9
}
export default News;