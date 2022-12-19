import Link from 'next/link';
import styles from './Button.module.scss'; 

const Button = ({
    label = "Unidentified Label",
    clickHandler ,
    path 
}) => {
    //console.log({props}); 
    return path ? 
    <Link href={path} className={styles.btn}>  
        {label}
    </Link>
    :
    <button className={styles.btn} onClick={clickHandler}>{label} </button>
}
export default Button 