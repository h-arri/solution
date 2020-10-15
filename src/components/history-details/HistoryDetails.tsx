import React, {useEffect} from "react";
import {RouteComponentProps, StaticContext} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {fetchHistoricEventApi} from "../../store/historic-event/actions";
import {RootState} from "../../store";
import './HistoryDetails.css';
import Icon from "../icon/Icon";
import Reddit from "../../icons/reddit.png";
import Article from "../../icons/article.png";
import Wikipedia from "../../icons/wikipedia.png";
import YouTube from "../../icons/youtube.png";
import moment from "moment";

const HistoryDetails: React.FC<RouteComponentProps<{}, StaticContext, { id: number }>> = (props) => {

    console.log('propss ', props)
    const {id} = props.location.state;

    const dispatch = useDispatch();
    const historicEvent = useSelector((state: RootState) => state.historicEvent.historicEvent);

    async function getHistoricEvent() {
        dispatch(fetchHistoricEventApi(id));
    }

    useEffect(() => {
        getHistoricEvent();
    }, []);

    return <article className='history-details'>
        <h1>{historicEvent?.title}</h1>
        <p>Flight number - {historicEvent?.flight_number}</p>
        <p>{historicEvent?.event_date_unix && `at ${moment(historicEvent.event_date_utc)
            .format("dddd, MMMM Do YYYY, h:mm:ss a")}`}</p>
        <p className='detail'>{historicEvent?.details}</p>
        <aside className='links'>
            {historicEvent?.links.reddit && <a href={historicEvent.links.reddit}>
                <Icon icon={Reddit} alt="Reddit"/>
            </a>}

            {historicEvent?.links.article && <a href={historicEvent.links.article}>
                <Icon icon={Article} alt="Article"/>
            </a>}
            {historicEvent?.links.wikipedia && <a href={historicEvent.links.wikipedia}>
                <Icon icon={Wikipedia} alt="Wikipedia"/>
            </a>}
            {historicEvent?.links.video_link && <a href={historicEvent.links.video_link}>
                <Icon icon={YouTube} alt="YouTube"/>
            </a>}
        </aside>
    </article>;
};

HistoryDetails.displayName = 'HistoryDetails';

export default HistoryDetails;
