import classes from './Skills.module.css';
import { skills } from "../Biodata/Biodata";
export default function Skills() {
    return (
        <div className={classes.Container}>
            <h1>Skills</h1>
            <p>Here are some of my skills on which I have been working on for the past 2 years.</p>
            <div className={classes.Skills}>
                {skills.map((skill) => (
                        <div className={classes.Skill}>
                            <div className={classes.Title}>{skill.title}</div>
                            <div className={classes.List}>
                                {skill.skills.map((items)=> (
                                    <div className={classes.Item}>
                                        <img src={items.image}></img>
                                        {items.name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}