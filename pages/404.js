import Link from "next/link"
import { useEffect } from "react";
import { useRouter } from "next/router";
const NotFound = () => {

    const router = useRouter()

    useEffect(() => {
        setTimeout (()=> {
            router.push("/")
        }, 3000)
        return clearTimeout
    }, [])

    return ( 
        <div className="not-found">
            <h1>Sorry...</h1>
            <h2>This page does not exist.</h2>
            <p>Go back to <Link href="/"><a>Home</a></Link> </p>
        </div>
     );
}
 
export default NotFound;