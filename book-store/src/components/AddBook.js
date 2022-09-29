import axios from 'axios';
import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'

export default function AddBook() {
  const history=useNavigate();
  const [input,setInputs]=useState({
    name:"",
    description:"",
    price:'',
    author:'',
    available:false,
    image:'',
    content:''
  });

  const handleChange=(event)=>{
    setInputs((prevState)=>({
      ...prevState,[event.target.name]:event.target.value
    }))
  }
  const [checked ,setChecked]=useState(false);

  const sendRequest=async()=>{
    axios.post("http://localhost:5000/books",{
      name:String(input.name),
      author:String(input.author),
      content:String(input.content),
      description:String(input.description),
      price:Number(input.price),
      image:String(input.image),
      available:Boolean(checked)
    }).then(res=>res.data);
  }
  const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(input);
    sendRequest().then(()=>(history('/books')))
  }
  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label marginx">Name</label>
        <input type="text" value={input.name} onChange={handleChange} className="form-control" id="exampleInputEmail1" name='name' aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Author</label>
        <input type="text" className="form-control" id="exampleInputEmail1" name='author' value={input.author} onChange={handleChange}  aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Content</label>
        <input type="text" className="content- form-control" id="exampleInputEmail1" name='content' value={input.content} onChange={handleChange}  aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">description</label>
        <input type="text" className="form-control" value={input.description} onChange={handleChange}  id="exampleInputEmail1" name='description' aria-describedby="emailHelp" />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">price</label>
        <input type="text" className="form-control" value={input.price} onChange={handleChange}  id="exampleInputEmail1" name='price' aria-describedby="emailHelp" />
      </div>
      
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">Image</label>
        <input type="text" className="form-control" id="exampleInputEmail1" name='image' value={input.image} onChange={handleChange}    aria-describedby="emailHelp" />
      </div>

      
      <div className="form-check">
  <input className="form-check-input" type="checkbox" value="" checked={checked} onChange={()=>setChecked(!checked)}/>
  <label className="form-check-label" htmlFor="flexCheckDefault">
    Available
  </label>
</div>
      <button type="submit" className="btn btn-primary">Add Item</button>
    </form>
  )
}
