import styles from './Filters.module.scss'
import Select from './Select'
import Label from './Label';

const Filters = ({
    activeCategory, 
    setActiveCategory, 
    categories}
) => {
    const filteredOptions = categories.map((category) => {
        return category.node.name; 
    }); 
    return <div className={styles.filterBar}> 
        <Label>Filters:</Label>
        <Select 
            options={filteredOptions}
            changeHandler={setActiveCategory}
        /> 
    </div>
}
export default Filters 
