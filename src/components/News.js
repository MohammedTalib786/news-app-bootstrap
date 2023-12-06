import React, { useEffect, useState } from 'react'
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
        const used = (async () => {
            let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=74a9094e0c8549c7a0b47fd6f8c52b0b&page=${page}&pageSize=${props.pageSize}`)
            props.showProgress(60)
            let res = await api.json()
            props.showProgress(100)
            console.log(res)
            setArticles(res.articles)
            setLoader(false)
        })()

    }, [])

    const fetchMoreData = async () => {
        const used = (async () => {
            let api = await fetch(`https://newsapi.org/v2/top-headlines?country=in&category=${props.category}&apiKey=74a9094e0c8549c7a0b47fd6f8c52b0b&page=${page + 1}&pageSize=${props.pageSize}`)
            let res = await api.json()
            console.log(res)
            setArticles(articles.concat(res.articles))
            setPage(page + 1)
            setTotalResults(res.totalResults)
        })()
    }


    return (
        <div>
            <h1 className='py-4 text-center '>Top Headlines</h1>
            {loader && <Loading />}
            <div className="container my-3">
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
    pageSize: 12
}
export default News;
