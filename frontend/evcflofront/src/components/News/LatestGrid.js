import LatestNew from './LatestNew';
import React from 'react';

function LatestGrid({ items, formatTime }) {

    const sortedItems = items.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
    
    return (
        <div className="Latest-grid">
            {sortedItems.length > 0 && (
                <div className="latest-news">
                    <LatestNew item = {sortedItems[0]} formatTime = {formatTime} />
                </div>
            )}
        </div>
    );
}
  


export default LatestGrid;