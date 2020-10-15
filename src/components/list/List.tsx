import React from 'react';
import {HistoricEvent} from "../../store/historic-event/types";
import ListItem from "../list-item/ListItem";
import './List.css';

type ListProps = {
    historicEvents: Array<HistoricEvent>;
};

const List: React.FC<ListProps> = (props) => {
    const {historicEvents} = props;
    let classes = historicEvents.length === 0 ? 'list no-data' : 'list';

    return (<ul className={classes}>
        {historicEvents.length > 0 ?
            historicEvents.map((item, index) => {
                classes = index < historicEvents.length - 1 ? 'list-item' : 'list-item hide-divider';
                return <ListItem className='list-item' historicEvent={item}/>;
            })
        : <li className='list-item hide-divider'>No data!</li>}
    </ul>);
};

List.displayName = 'List';

export default List;
