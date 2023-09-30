import { AdCards } from "../Cards/AdCards"
import { Link } from "react-router-dom";

export const Advisory = () => {
    return(
        <div className="Advisory-section py-4 py-lg-5" style={{backgroundColor:"#013569"}}>
            <div className="container">
                <div className="mb-5 text-center text-white">
                    <h2>Advisory & Consulting Services</h2>
                    <p>Phasellus scelerisque sed leo quis gravida. Fusce lobortis libero ut arcu blandit pharetra.</p>
                </div>
                <AdCards/>
                <li className="text-center text-decoration-none bg-dark w-25 m-auto mt-4 py-2">
                  <Link to="/blog" className="link text-decoration-none text-white">View More</Link>
                </li>
            </div>
        </div>
    )
}