import classNames from 'classnames/bind'
import styles from './Heading.module.scss';

let cx = classNames.bind(styles);

const Heading = ({children, level, marginBottom}) => {
    const Tag = level > 6 ? 'h6' : `h${level}`

	let headingClasses = cx({
		heading: true,
		[`${Tag}`]: level,
		[`margin-bottom-${marginBottom}`]: marginBottom
	});

	return <Tag className={`${headingClasses}`}>{children}</Tag>
}
export default Heading 