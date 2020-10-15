import React, {useState} from 'react';
import './Search.css';

type SearchProps = {
    handleSearch: React.ChangeEventHandler<HTMLInputElement>,
    className: string
};

const Search: React.FC<SearchProps> = React.memo((props) => {
    const {handleSearch, className} = props;

    const [searchText, setSearchText] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setSearchText(e.currentTarget.value);
        handleSearch(e);
    };

    const classes = searchText !== '' ? `search-input ${className}` : 'search-input';

    return (<>
        <input className={classes} placeholder='Search'
               value={searchText} onChange={handleChange}/>
        {searchText !== '' && className === 'error' && <span className='error-message'>Please use a better search term!</span>}
    </>)
});

Search.displayName = 'Search';

export default Search;
