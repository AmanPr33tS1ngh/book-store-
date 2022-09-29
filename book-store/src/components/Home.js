import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import Footer from './Footer';

export default function Home() {
  const [loading,setLoading]=useState(false)
  const URL = "http://localhost:5000/books";

  const fetchHandler = async () => {
    return await axios.get(URL).then((res) => res.data);
  }
  const [books, setBooks] = useState();
  useEffect(() => {
    setLoading(true)
    fetchHandler().then((data) => setBooks(data.books))
    setLoading(false)
  }, []);



  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <>
      <div className="home-container">
        <Link to={'/books'}>
          <div className="home my-4 d-flex justify-content-center fontChange">
            <h3>
              CheckOut Amazing Books
            </h3>
          </div>
        </Link>
          <div className="my-5">
        <div className="slider-container my-5">
          <Slider {...settings}>
            {
            loading?(<p>loading...</p>):books && books.length>0?
              books.map((book) => (
                <Link to={`/read/book/${book._id}`}>
                <div className="card-carousel">
                  <div className="card-top">
                    <div className="card-bottom">
                      <img src={book.image} alt={book.name} />
                    </div>
                  </div>
                  <div className="btnContainer">
                    <button className='btn btn-dark btn__'>Read Now</button>
                  </div>
                </div>
               </Link>
              )
              ):(<div>there aren't any books available right now. add books to read</div>)
            }
          </Slider>

        </div>
        <hr /></div>
        <div className="footer--"><Footer/></div>
      </div>
    </>
  )
}
