import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import List from "../list/List";
import {fetchHistoryApi} from "../../store/history/actions";
import {RootState} from "../../store";
import {HistoricEvent} from "../../store/historic-event/types";

const History: React.FC = () => {
    const dispatch = useDispatch();
    const historicEvents: HistoricEvent[] = useSelector((state: RootState) => state.history.historicEvents);


    async function getHistory() {
        dispatch(fetchHistoryApi());
    }

    useEffect(() => {
        getHistory();
    }, []);

    return <List historicEvents={historicEvents}/>
};

History.displayName = 'History';

export default History;
