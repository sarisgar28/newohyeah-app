import useSWR from "swr";
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
  const {data, error} =  useSWR('images', fetcher)
    if(error){
        return 'An error has occured'
    }if(!data){
        return 'Loading...'
    }
    return (
        <div>
            <form action={fetcher} methos="POST">
                <label for="title">Title</label>
                <input id="title" type="text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
      
       
    
}
export default Search;
