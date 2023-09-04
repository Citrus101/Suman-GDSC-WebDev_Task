import instagram from "./Images/Insta_logo.png";
import linkedin from "./Images/Linkedin_logo.png";
import styles from "./Footer.module.css"

export const Footer = () => {
  return (
    <>
    <footer className = {styles.footer}>
        <h1>Reach Out</h1>
        <div>
            <a href="#"><img src={instagram} alt="Instagram logo" /></a>
            <a href="#"><img src={linkedin} alt="Linkedin logo" /></a>
        </div>
    </footer>
    </>
  )
}
