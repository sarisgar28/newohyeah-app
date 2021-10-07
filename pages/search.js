import Link from 'next/link'


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
    const form =  async event => {
        event.preventDefault();
    }
    return (
        <div>
         <li>
         <Link href="/">
          <a>HOME</a>
         </Link>
         </li>
            <h2>PLease insert a Title:</h2>
            <form onSubmit={form}>
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
      
// next steps would be find by id and display the result
// fix the link 

    
}
export default Search;
