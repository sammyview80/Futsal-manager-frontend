import axios from 'axios';
import React from 'react';

import './News.css';

let NewsFetch = [];


const FetchNews = () => {
    axios.get('http://127.0.0.1:8000/api/fetch-news/')
      .catch(error => console.log(error.message)); // For reloading the news
    axios.get('http://127.0.0.1:8000/api/getskysportsnews/')
      .then(response => {
        NewsFetch = response.data;
      }).catch(error => console.log(error.message));
  }
  FetchNews();

const News = (props) => {
    let news = [];
    NewsFetch.forEach((element, i) => {
        news.push(<a href={element.link} target="_blank"><li className={`N-${i}`}>{`${i+1}.${element.title.split(':')[1] === undefined? element.title: element.title.split(':')[1]}.`}</li></a>);
    });
    return (
        <div className={props.full? "": 'News'}>
            <h3>News</h3>
            <div className="contain">
                <div className={props.full? "News-li-full": 'News-li'}>
                    {props.full? news : news.slice(0, 5)}
                </div>
            </div>
        </div>
    );
};

export default News;