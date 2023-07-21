import {useEffect, useState} from "react";
import {Stack} from "@mui/material";
import NewsCard from "../components/NewsCard";

function News() {
    const [news, setNews] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/comments?postId=1')
            .then(result => result.json()).then(json => {
            setNews(json);
        }).catch(error => console.error('Fetch failed', error));
    }, []);

    return (
        <Stack sx={{mx: '25px'}}>
            {news.map(newsItem => <NewsCard key={newsItem.id} newsItem={newsItem}/>)}
        </Stack>
    );
}

export default News;