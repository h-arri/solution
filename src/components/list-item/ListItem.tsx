import React from 'react';
import "./ListItem.css";
import Icon from "../icon/Icon";
import Reddit from "../../icons/reddit.png";
import Article from "../../icons/article.png";
import Wikipedia from "../../icons/wikipedia.png";
import YouTube from "../../icons/youtube.png";
import {HistoricEvent} from "../../store/historic-event/types";

type ListItemProps = {
    historicEvent: HistoricEvent,
    className: string;
};

const ListItem: React.FC<ListItemProps>
    = (props) => {

    const {historicEvent, className} = props;


    return (<div className={`content ${className}`}>
        <h2>
            {historicEvent.title}</h2>
        <p className='details'>{historicEvent.details}</p>
        <aside className='links'>
            {historicEvent.links.reddit && <a href={historicEvent.links.reddit}>
                <Icon icon={Reddit} alt="Reddit"/>
            </a>}

            {historicEvent.links.article && <a href={historicEvent.links.article}>
                <Icon icon={Article} alt="Article"/>
            </a>}
            {historicEvent.links.wikipedia && <a href={historicEvent.links.wikipedia}>
                <Icon icon={Wikipedia} alt="Wikipedia"/>
            </a>}
            {historicEvent.links.video_link && <a href={historicEvent.links.video_link}>
                <Icon icon={YouTube} alt="YouTube"/>
            </a>}
        </aside>
    </div>);
};

ListItem.displayName = 'ListItem';

export default ListItem;
