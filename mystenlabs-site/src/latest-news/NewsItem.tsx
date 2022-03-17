import cl from 'classnames';
import { memo } from 'react';

import Link from '../link/Link';

import st from './NewsItem.module.scss';

export type NewsItemProps = {
    primary: boolean;
    img?: string;
    title: string;
    sourceTitle: string;
    dateTXT: string; // TODO: this should change to date
    hRef: string;
};

function NewsItem({
    primary,
    img,
    title,
    sourceTitle,
    dateTXT,
    hRef,
}: NewsItemProps) {
    if (primary && !img) {
        throw Error('img is required for primary NewsItem');
    }
    return (
        <div className={cl(st.container, { [st.primary]: primary })}>
            {img ? (
                /* TODO: can we use @next/img for static site? check} */
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                    src={img}
                    alt="Article Image"
                    className={st.img}
                    loading="lazy"
                />
            ) : null}
            <Link className={st.title} to={hRef} variant="link" external={true}>
                {title}
            </Link>
            <h5 className={st.info}>
                {sourceTitle} • {dateTXT}
            </h5>
        </div>
    );
}

export default memo(NewsItem);
