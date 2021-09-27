import React from 'react';

import './News.css';

const News = (props) => {
    let news = [];
    props.NewsFetch.forEach((element, i) => {
        news.push(<li className={`N-${i}`}>{`${element.title.split(':')[1] === undefined? element.title: element.title.split(':')[1]}.`}</li>);
    });
    return (
        <div className={props.full? "": 'News'}>
            <h3>News</h3>
            <div className={props.full? "News-li-full": 'News-li'}>
                {props.full? news : news.slice(0, 5)}
            </div>
        </div>
    );
};

export default News;