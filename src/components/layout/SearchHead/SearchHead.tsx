import React from 'react'
import IconButton from '../../navigation/IconButton/IconButton'
import { ReactComponent as SwitchSvg } from '../../../assets/switch.svg';
import { ReactComponent as FilterSvg } from '../../../assets/filter.svg';
import './SearchHead.scss';

type Props = {}

const SearchHead = (props: Props) => {
    return (
        <div className="searchHeader">
            <div className="searchHeaderLeft">
                <h2>Israel,Haifa</h2>
                <IconButton icon={SwitchSvg} />
            </div>
            <IconButton icon={FilterSvg} />
        </div>
    )
}

export default SearchHead