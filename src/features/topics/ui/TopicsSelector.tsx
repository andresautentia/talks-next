import React from 'react'
import { useGetTopics } from './hooks/useGetTopics'
import classNames from 'classnames/bind'
import styles from '../../talks/ui/styles.module.scss'

let cx = classNames.bind(styles)
interface TopicsSelectorProps {
    setSelectedTopic: Function
}

const TopicsSelector: React.FC<TopicsSelectorProps> = ({ setSelectedTopic }) => {
    const { selectOptions } = useGetTopics()

    return (
        <div className={cx('selector-container')}>
            <label htmlFor="topic-selector">Temática</label>
            <select
                data-testid="topic-selector"
                id="topic-selector"
                onChange={e => setSelectedTopic(parseInt(e.target.value))}
            >
                <option value="-1">Selecciona</option>
                {selectOptions.map(options => {
                    return (
                        <option key={options.id} value={options.id}>
                            {options.title}
                        </option>
                    )
                })}
            </select>
        </div>
    )
}

export default React.memo(TopicsSelector)
