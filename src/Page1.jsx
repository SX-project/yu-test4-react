import { Link } from "react-router-dom";

export const Page1 = () => {
    return(
        <div>
            <h1>Page1です。</h1>
            <Link to="/page1/DetailA">Page1DetailA</Link>
            <br/>
            <Link to="/page1/DetailB">Page1DetailB</Link>
        </div>
    )
}