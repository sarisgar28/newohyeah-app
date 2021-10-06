import Head from 'next/head'
import {useRouter} from 'next/router'
import DefaultErrorPage from 'next/error'


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



function Images({images}){
    const router = useRouter()
    // show a loading state when the fallback is rendered.
    if(router.isFallback){
        return <h1>Loading...</h1>
    }
    // this includes setting the noindex header because static files alwaysreturn a status 200.
    if(images.length === 0){
        return 
        <>
        <Head>
            <meta name="robots" content="noindex"/>
        </Head>
        <DefaultErrorPage statusCode={404}/>
     
        </>
    }
    // defaultErrorPage creates a 404 error 
    return (
        <ul>
            <h1>Images</h1>
            {images.map(image =>(
              <div key={image.id}> 
                   <li>{image.title}</li>
                    <img src={image.url}/>
             </div>
           ))}
        </ul>
       
    )
}

export default Images;