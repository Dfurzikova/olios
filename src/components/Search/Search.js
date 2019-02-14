
import React, { Component } from 'react';
import { cn } from '@bem-react/classname';
import './Search.scss';
import SearchInput from '../SearchInput/SearchInput';

const search = cn('Search');

class Search extends Component {
    render() {
        return (
            <div className={search()}>
                <div className={search('Content', ['Content'])}>
                    <div className={search('Input')}>
                        <SearchInput  />
                        <div className={search('Legend')}> Type product that you are looking for </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Search;
