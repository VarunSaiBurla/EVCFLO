import NewsItem from './NewsItem';
import React from 'react';

function NewsGrid({ items, formatTime }) {

  const sortedItems = items.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
  
  return (
        <div className="news-grid">
          {sortedItems.map((item, i) => (
          <NewsItem key={i} item={item} formatTime={formatTime} />
          ))}
        </div>
        );
}


export default NewsGrid;
