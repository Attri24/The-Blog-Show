
import { Link } from "react-router-dom";
const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1>welcome to the blog-show</h1>
            <div className="links">
               
                <Link to="/">home</Link>
                <Link to="/create">new blog</Link>
            </div>
        </nav>
     );
}
 
export default Navbar;