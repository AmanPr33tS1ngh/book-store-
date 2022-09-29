import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import "./Book.css"

const Book = (props) => {
  const history=useNavigate();
    const {_id,name,author,description,price,image}=props.book;

    const deleteHandle=async()=>{
      await axios.delete(`http://localhost:5000/books/${_id}`)
      .then(res=>res.data)
    }

    const deleteHandler=(event)=>{
      event.preventDefault();
      deleteHandle().then(()=>history('/')).then(()=>(history('/books')));
    }
    // const deleteHandler=async()=>{
    //  await axios.delete(`http://localhost:5000/books/${_id}`)
    //  .then(res=>res.data)
    //  .then(()=>history("/"))
    // }
    // const sendRequest=async()=>{
    //   axios.post("http://localhost:5000/books",{
    //     name:String(input.name),
    //     author:String(input.author),
    //     description:String(input.description),
    //     price:Number(input.price),
    //     image:String(input.image),
    //     available:Boolean(checked)
    //   }).then(res=>res.data);
    // }
    // const handleSubmit=(event)=>{
    //   event.preventDefault();
    //   console.log(input);
    //   sendRequest().then(()=>(history('/')))
    // }

  return (
<div class="cardHandle">
    <div className='card_ card '>
        <img src={image} alt={name} />
        <article>By {author}</article>
        <h3>{name}</h3>
        <p>{description}</p>
        <h2>&#8377; {price}</h2>
        <div btnContainer>
        <button type="button" class="btn btn-dark btn_ btn__"><Link className='link colorWhite' to={`/read/book/${_id}`}>Read This Book</Link></button>
        </div>
        <div className="btnContainer">
        <button type="button" class="btn btn-dark btn_ btn__"><Link className='link colorWhite' to={`/books/${_id}`}>Update</Link></button>
        <button type="button" onClick={deleteHandler} class="btn btn-dark btn__">Delete</button></div>
    </div>
    </div>
  )
}

export default Book
