import Head from 'next/head'

export const getStaticPaths = async () => {
    const resp = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json()

    const paths = data.map ( user => {
        return {
            params: { id : user.id.toString() }
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async (context) => {
     const id = context.params.id;
     const resp = await fetch("https://jsonplaceholder.typicode.com/users/" + id)
     const data = await resp.json()

     return {
         props : { user : data}
     }
}

const Details = ({user}) => {
    return ( 
        <>
            <Head>
                <title>User List | {user.name}</title>
                <meta name="keywords" content="users" />
            </Head>
            <div>
                <h1>{ user.name }</h1>
                <p>{ user.email }</p>
                <p>{ user.website }</p>
                <p>{ user.address.city }</p>
            </div>
        </>
     );
}
 
export default Details;