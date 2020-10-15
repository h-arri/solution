import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import List from "../list/List";
import {fetchHistoryApi} from "../../store/history/actions";
import {RootState} from "../../store";
import {HistoricEvent} from "../../store/historic-event/types";
import Search from "../search/Search";

const History: React.FC = () => {
    const dispatch = useDispatch();
    const historicEvents: HistoricEvent[] = useSelector((state: RootState) => state.history.historicEvents);

    const [filteredHistoricEvents, setFilteredHistoricEvents] = useState<HistoricEvent[]>(historicEvents);

    async function getHistory() {
        await dispatch(fetchHistoryApi());
    }

    useEffect(() => {
        getHistory();
    }, []);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputText = e.currentTarget.value.trim().toLowerCase();
        if (inputText !== '') {
            setFilteredHistoricEvents([...historicEvents?.filter((item: HistoricEvent) => item.title.toLowerCase().includes(inputText))]);
        }
    };

    return (
        <>
            <Search handleSearch={handleSearch} className={filteredHistoricEvents.length === 0 ? 'error' : ''}/>
            <List historicEvents={filteredHistoricEvents.length > 0 ? filteredHistoricEvents : historicEvents}/>
        </>
    )
};

History.displayName = 'History';

export default History;
