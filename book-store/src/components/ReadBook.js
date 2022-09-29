import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const ReadBook = () => {
    const id = useParams().id;
    const URL = `http://localhost:5000/books/${id}`;

    const fetchHandler = async () => {
        return await axios.get(URL).then((res) => res.data);
    }
    const [books, setBooks] = useState();
    useEffect(() => {
        fetchHandler().then((data) => setBooks(data.book))
    }, []);
    // console.log(books.image);
    console.log(id);
    console.log(books);
    // console.log(books.length);

    return (
        <div className='readBook'>
            {books ?
                (
                    <div className="read">
                        <div className="container">
                            <div className="img-">
                                <img src={books.image} alt={books.name} />
                            </div>
                            <div className="title">
                                <div className="names">
                                <h3>{books.name}</h3>
                                <p>By {books.author}</p>
                                </div>
                                
                            </div>
                        </div>
                        <div className="container">
                            <p className='content'>
                                {books.content}
                            </p>
                        </div>
                    </div>
                ) : (
                    <div className="loading">...loading...</div>
                )}
        </div>
    )
}

export default ReadBook
