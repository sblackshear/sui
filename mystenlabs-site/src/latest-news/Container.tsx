import { memo } from 'react';

import NewsItem from './NewsItem';
import { latestNews } from './latest-news-data';
import SubscribeTrigger from './subscribe/SubscribeTrigger';

import st from './Container.module.scss';

export type ContainerProps = {};

const PRIMARY_ARTICLE = latestNews[0];
const REST_ARTICLES = latestNews.slice(1);

function Container({}: ContainerProps) {
    return (
        <div className={st.container}>
            <div className={st.primary}>
                <NewsItem {...PRIMARY_ARTICLE} primary={true} />
            </div>
            <div className={st.subscribe}>
                <SubscribeTrigger />
            </div>
            <div className={st.articles}>
                {REST_ARTICLES.map((anArticle) => (
                    <NewsItem
                        key={anArticle.hRef}
                        {...anArticle}
                        primary={false}
                    />
                ))}
            </div>
        </div>
    );
}

export default memo(Container);
