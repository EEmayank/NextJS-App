import styles from '../../styles/User.module.css'
import Link from 'next/link'
import Head from 'next/head'

//this runs at build time
export const getStaticProps = async () => {
    const resp = await fetch ("https://jsonplaceholder.typicode.com/users")
    const data = await resp.json()
    
    return {
        props : { users : data }
    }
}

const Users = ({users}) => {
    return ( 
        <>
            <Head>
                <title>User List | Users</title>
                <meta name="keywords" content="users" />
            </Head>
            <div>
                <h1>Users</h1>
                {
                    users.map ( user=> (
                            <Link href={`/users/${user.id}`} key={user.id}>
                                <a className={styles.single}>
                                    <h3>{ user.name }</h3>
                                </a>
                            </Link>
                    ))
                }
            </div>
        </>
     );
}
 
export default Users;