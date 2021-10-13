import Link from 'next/link'
import { useState, useEffect } from 'react';





export const getStaticProps = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    if(!data){
        return{
            notFound: true,
        }
    }
    return{
      props: {
       images: data
      }
    }
}




function Search ({images}){
   
    const handleSubmit = (event) => {
        const items = [];
        event.preventDefault()
        
    }
    return (
        <div>
         
         <Link href="/">
          <a>GO BACK</a>
         </Link>

            <h2>PLease insert a Title:</h2>
            <form onSubmit={handleSubmit}>
                <label for="title">Title: </label>
                <input id="title" type="text"/>
                <button type="submit">Submit</button>
            </form>

            <h1>Results</h1>
            {images.map(image =>(
              <div key={image.id}>  
                   <li>{image.title}</li>
                    <img src={image.url}/>
             </div>
           ))}
           
        </div>
    )
}
// next steps would be find by id and display the result
// fix the link 
// validations 

    export default Search;
