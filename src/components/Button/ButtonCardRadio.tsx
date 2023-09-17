import { ButtonCardRadioProps } from '@/app/interfaces/buttonCardRadioProps';
import styles from './ButtonCardRadio.module.css';

const ButtonCardRadio = (props : ButtonCardRadioProps) => { 

    return (
        <>
            <label className={styles.cardButton} >
                <input type="radio" className={styles.radio}  name={props.name} value={props.value} onChange={props.onChange} checked={props.checked}/>
                <span >{props.text}</span>
            </label>
        </>
    );

};

export default ButtonCardRadio;