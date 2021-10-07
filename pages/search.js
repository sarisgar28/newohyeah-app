import useSWR from "swr";
import images from './images'
// first arg is a key "images"
const fetcher =  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/photos');
    const data = await res.json();
    return{
      props: {
        images: data
      }
    }
}
// swr returns the data from the catch
// keep the data consistent among all instances 
// avoid multiple requests in every component using the custom hook
// keep state in syn and avoid suvsequent requests overriding each other
function Search (){
  const {data, error, search, setSearch} =  useSWR('images', fetcher)
    if(error){
        return 'An error has occured'
    }if(!data){
        return 'Loading...'
    }
    return (
        <div>
            <h3 className="title"> Images</h3>
            <input type="text" placeholder="Search" value={search} onChange={(e) => setSearch(e.target.value)}/>
        <images images={data}/>
        </div>
    )
      
       
    
}
export default Search;
