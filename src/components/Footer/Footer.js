import classes from './Footer.module.css'
export default function Footer(){
    return(
        <div className={classes.Container}>
            <h3>SIDDHANT CHOUDHARY</h3>
            <div className = {classes.listContainer}>
                <ul className = {classes.list}>
                    <li>About</li>
                    <li>Skills</li>
                    <li>Experience</li>
                    <li>Project</li>
                    <li>Education</li>
                </ul>
            </div>
        </div>
    )
}