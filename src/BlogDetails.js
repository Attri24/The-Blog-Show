import { useHistory, useParams } from "react-router-dom";
import useFetch from './useFetch';

const BlogDetails = () => {
    const {id} = useParams()
    const { data: blog, isPending, error} = useFetch('http://localhost:8000/blogs/' + id );
    const history = useHistory();
    const Delclick =() => {
        fetch('http://localhost:8000/blogs/' + blog.id , {
            method: "DELETE"
        }).then(()=>{
            history.push("/")
        }
        )
    }
    return ( 
        <div className="blog-details">
            {isPending && <div><h1>Loading...</h1></div>}
            { error && <div>{ error }</div>}
            { blog && (
                <article>
                    <h1>{ blog.title }</h1>
                    <h4>Written by { blog.author}</h4>
                    <p>{ blog.body }</p>
                    <button onClick={Delclick}>DELETE</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;