import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom';

function Home() {
    const [title, setTitle] = useState('')
    const [value, setValue] = useState('');
    const [useSearchParams, setUseSearchParams] = useSearchParams()
    const pasteId = setUseSearchParams.get("pasteId")


    return (
        <div>
            <input
            className="  border border-amber-700 rounded-2xl  py-2 mt-2 "
            type="text" placeholder='Enter title here' 
            value={title} onClick={(e) => setTitle(e.target.value)} />

            <button className=' bg-amber-700 py-2 px-5 mx-5 rounded-md' >Create My </button>
        </div>
    )
}

export default Home
