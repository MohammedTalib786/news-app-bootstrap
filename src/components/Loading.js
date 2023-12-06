import React from 'react'
import load from './loading.gif'

const Loading = () => {
    return (
        <div className='text-center py-5'>
            <img src={load} width={'8%'} alt="" />
        </div>
    )
}

export default Loading