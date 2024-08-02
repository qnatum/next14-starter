import Link from "next/link"
const NotFound = () => {
    return ( 
        <div>
            <h1>Page not found!</h1>
            <h2>Sorry, the page you are looking for does not exist</h2>
            <Link href="/">Return to homepage</Link>
        </div>
    )
}
export default NotFound;