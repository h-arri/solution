import React from 'react';
import "./ListItem.css";
import Icon from "../icon/Icon";
import Reddit from "../../icons/reddit.png";
import Article from "../../icons/article.png";
import Wikipedia from "../../icons/wikipedia.png";
import YouTube from "../../icons/youtube.png";
import {HistoricEvent} from "../../store/historic-event/types";
import {Link, withRouter} from "react-router-dom";
import {RouteComponentProps} from "react-router";

interface ListItemProps extends RouteComponentProps {
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
            {historicEvent.links.reddit && <a href={historicEvent.links.reddit} target='_blank'>
                <Icon icon={Reddit} alt="Reddit"/>
            </a>}
            {historicEvent.links.article && <a href={historicEvent.links.article} target='_blank'>
                <Icon icon={Article} alt="Article"/>
            </a>}
            {historicEvent.links.wikipedia && <a href={historicEvent.links.wikipedia} target='_blank'>
                <Icon icon={Wikipedia} alt="Wikipedia"/>
            </a>}
            {historicEvent.links.video_link && <a href={historicEvent.links.video_link} target='_blank'>
                <Icon icon={YouTube} alt="YouTube"/>
            </a>}
            <aside className='read-more'>
                <Link
                    to={{
                        pathname: `history/${historicEvent.id}`,
                        state: {id: historicEvent.id}
                    }}>
                    Read more
                </Link>
            </aside>
        </aside>
    </div>);
};

ListItem.displayName = 'ListItem';

export default withRouter(ListItem);
