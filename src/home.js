import Bloglist from './bloglist';
import useFetch from './useFetch';
const Home = () => {
   const { data: blogs, isPending, error} = useFetch(`http://localhost:8000/blogs`);
    return ( 
        <div className="home">
            {error && <div><h1>{ error }</h1></div>}
            { isPending && <div><h1>Loding.....</h1></div>}
            {blogs &&  <Bloglist blogs={blogs} title="All Blogs!" /> }
        </div>
     );
}
 
export default Home;