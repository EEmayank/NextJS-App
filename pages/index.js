import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <Head>
        <title>User List | Home</title>
        <meta name="keywords" content="users" />
      </Head>
      <div>
        <h1 className={styles.title}>Homepage</h1>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, ipsa culpa ipsum aperiam fugiat delectus architecto repellat laboriosam magnam eius ut magni consequuntur eos debitis quas illo accusantium, odit deserunt?</p>
        <p className={styles.text}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sint, ipsa culpa ipsum aperiam fugiat delectus architecto repellat laboriosam magnam eius ut magni consequuntur eos debitis quas illo accusantium, odit deserunt?</p>
        <Link href="/users">
          <a className={styles.btn}>See User Listing</a>
        </Link>
      </div>
    </>
  )
}
