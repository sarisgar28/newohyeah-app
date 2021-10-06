
export const getStaticProps = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return{
      props: {images: data}
    }
}

const Images = ({images}) =>{
    return (
        <div>
            <h1>Images</h1>
            {images.map(image =>(
              <div key={image.id}> 
                   <li>{image.title}</li>
                <img src={image.url}/>

              </div>
           ))}
        </div>
    )
}

export default Images;