import { Biodata } from '../Biodata/Biodata'
import sidd from '../../assets/sidd.jpeg'
import classes from './Siddhant.module.css'
import Typewriter from 'typewriter-effect';
import Avb from '../BackgroundAnimation/Avb';

export default function Siddhant() {
    return (
        <div>
            <div className={classes.container}>
                <div className={classes.background}>
                    <Avb></Avb>
                </div>
                <div className={classes.detailsContainer}>
                    <div className={classes.leftContainer}>
                        <div className={classes.Title}>
                            Hi, I am <br /> {Biodata.name}
                        </div>
                        <div className={classes.textLoop}>
                            I am a
                            <span>
                                <Typewriter options={{
                                    strings: Biodata.roles,
                                    autoStart: true,
                                    loop: true,
                                }} />
                            </span>
                        </div>
                        <div className={classes.subtitle}>{Biodata.description}</div>
                        <button>CHECK RESUME</button>
                    </div>
                    <div className={classes.rightContainer}>
                        <img src={sidd} alt='hero-img'></img>
                    </div>
                </div>
            </div>
        </div>
    )
}