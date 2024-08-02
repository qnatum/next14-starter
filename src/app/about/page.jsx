import Image from "next/image";
import styles from "./about.module.css"

export const metadata = {
  title: "About Page",
  description: 'Next.js starter app about page',
}

const AboutPage = () => {
    return ( 
      <div className={styles.container}>
        <div className={styles.textContainer}>
          <h2 className={styles.subHeading}>About Agency</h2>
          <h1 className={styles.mainHeading}>We create digital ideas that are bigger, bolder, braver and better.</h1>
          <p className={styles.description}>
            We create digital ideas that are bigger, bolder, braver and better. We
            believe in good ideas, flexibility and precsion. We're a world class
            team providing the best solutions for consulting and finnance. We 
            provide a wide range of web and software development services.
          </p>
          <div className={styles.boxes}>
            <div className={styles.box}>
              <h1 className={styles.boxHeading}>10 K+</h1>
              <p>Years of experience</p>
            </div>
            <div className={styles.box}>
              <h1 className={styles.boxHeading}>234 K+</h1>
              <p>People reached</p>
            </div>
            <div className={styles.box}>
              <h1 className={styles.boxHeading}>5 K+</h1>
              <p>Services and plugins</p>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/about.png" fill className={styles.image}/>
        </div>
    </div>
  )};
  
  export default AboutPage;

  