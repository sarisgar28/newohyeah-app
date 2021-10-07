

function Search (){
    const form =  async event => {
        event.preventDefault();

        const res = await fetch('https://jsonplaceholder.typicode.com/photos',{
            body: JSON.stringify({
                title: event.target.title.value
            }),
            headers:{
                'Content-Type' : 'application/json'
            },
            method: 'POST'
        } );
        const result = await res.json()
        
    }
    return (
        <div>
            <form onSubmit={form}>
                <label for="title">Title</label>
                <input id="title" type="text"/>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
      
       
    
}
export default Search;
