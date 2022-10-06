import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Take a break</title>
        <meta name="description" content="You kit kat on your way" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
      <div className={styles.innerContainer}>
        <h1>Hello<span>. </span></h1>
        <p>Let&apos;s make your break better, just fill out the form and have a <b>Kit Kat</b> delivered right<b> at your desk</b>!</p>
        <form name = "contact" method = "POST" data-netlify="true" className= {styles.form} action="/send-data-here" >
          <input type="hidden" name = "form-name" value="contact" />
          <label htmlFor="name">Name</label>
          <br/><br/>
          <input className={styles.input} type="text" id="name" name="name" />
          <br/><br/> <br/>
          <label htmlFor="email">Groww Email</label>
          <br/><br/>
          <input  className={styles.input}type="text" id="email" name="email" />
          <br/><br/><br/>
          <label htmlFor="location">Where can I find you?</label>
          <br/><br/>
          <input  className={styles.input}type="text" id="location" name="location" />
          <br/><br/><br/>
          <button className={styles.button} type="submit">Submit</button>
      </form>
      <div className={styles.me}>
        <img src= {"/me.gif"}  style={{ height: '25vh', marginTop: '20px', marginLeft: '-90px' }} />
      </div>
      </div>
      </main>

    </div>
  )
}
