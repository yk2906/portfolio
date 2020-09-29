import React from 'react';
import VerticalTabs from './VerticalTabs';
import MediaQuery from 'react-responsive';
import ScrollableTabsButtonAuto from './ScrollableTabsButtonAuto';
 
const Container = () => {
    return(
        <div className='container'>
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
            <MediaQuery query='(max-width: 767px)'>
            <div><ScrollableTabsButtonAuto /></div>
            </MediaQuery>
            <MediaQuery query='(min-width: 768px)'>
                <div><VerticalTabs /></div>
            </MediaQuery>
            
        </div>
    )
}

export default Container;