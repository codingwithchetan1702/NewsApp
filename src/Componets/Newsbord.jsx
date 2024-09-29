import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

const Newsbord = ({category}) => {
    const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const apiKey = '8cd3229158c04407bfce8e73ca96a6db';
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to fetch');
        }
        return response.json();
      })
      .then((data) => {
        setNews(data.articles);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1 className='text-center'>Loading...</h1>;
  }

  if (error) {
    return <h1 className='text-center'>Error: {error} please check your interNet</h1>;
  }

     
  return (
    <div>
        <h2 className='text-center my-3'>Latest <span className='badge bg-danger'>News {category}</span></h2>
        {news.map((article, index) => (
            <NewsItem key={index} title={article.title} desc={article.description} src={article.urlToImage} url={article.url} /> 
        ))}
    </div>
  )
}

export default Newsbord
