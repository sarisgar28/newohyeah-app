import Link from 'next/link'
import { useState } from 'react';

// export async function getStaticPaths(){
//     // it calls the API endpoint to get the photos
//     const res = await fetch(`https://jsonplaceholder.typicode.com/photos`);
//     const photos = await res.json()
// // get the paths we want to pre-render 
// const paths = photos.map((photo)=>{
//     params: {id: photo.id}
// })
// return {paths, fallback: false}
// // fallback: false means other routes should get an error 404
// }


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

function handleInputChange(){
    const query = useState();
    query: Search.value
    if(query && query.length > 1){
        if(query.length % 2 === 0 ){
            getStaticProps;
        }
    }
}
function Search ({images}){
    
    return (
        <div>
         
         <Link href="/">
          <a>GO BACK</a>
         </Link>

            <h2>PLease insert a Title:</h2>
            <form onSubmit={handleInputChange}>
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
