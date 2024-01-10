import classes from './Contact.module.css'
export default function Contact(){
    return(
        <div className={classes.Container}>
            <div className={classes.Title}>Contact</div>
            <p>Feel free to reach out to me for any questions or opportunities!</p>
            <div className={classes.formContainer}>
                <h2>Email Me</h2>
                <form>
                    <input type="email" placeholder='Your Email'></input>
                    <input placeholder='Your Name'></input>
                    <input placeholder='Subject'></input>
                    <input type="text" placeholder='Message'></input>
                    <button>CHECK RESUME</button>
                </form>
            </div>
        </div>
    )   
}