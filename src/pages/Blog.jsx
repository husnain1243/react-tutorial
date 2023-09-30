import { BlogCards } from "../component/Cards/BlogCards"

export const Blog = () => {
    return(
        <div className="blog-wrapper">

            <div className="blog-banner d-flex flex-column justify-content-center text-center" style={{height:"200px"}}>
                <div className="container">
                    <div className="banner-container">
                        <h1>Our Blogs</h1>
                    </div>
                </div>
            </div>

            <div className="Blog-container py-4 py-lg-5">
                <div className="container">
                    <BlogCards/>
                </div>
            </div>

        </div>
    )
}