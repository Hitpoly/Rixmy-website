import React from 'react'
import ReactMarkdown from "react-markdown"
import Moment from "react-moment"
import rehypeRaw from 'rehype-raw'
import { getStrapiMedia } from "../../../lib/media"
import styles from './styles.module.css';

function ArticleDescription({ article }) {

    const { attributes } = article

    const imageUrl = getStrapiMedia(attributes.image)

    return (
        <>

            <section className={styles.blog_single}>
                <div className={styles.blog_single_banner} style={{
                    background: `url(${imageUrl}) no-repeat center center/cover`
                }}>
                    <div className={styles.overlay}></div>
                    <div className={styles.banner_content}>
                        <h1>{attributes.title}</h1>
                        <p>by: <span className={styles.author}><a href="">Autor Builder</a> / </span><span className="date"><a href="">12 Agosto,
                            2022</a></span></p>
                    </div>
                </div>
                <div className={styles.single_content}>
                    <ReactMarkdown
                        rehypePlugins={[rehypeRaw]}
                        // eslint-disable-next-line react/no-children-prop
                        children={article.attributes.content}
                    />
                </div>

                {/* <Moment format="MMM Do YYYY">
                    {article.attributes.published_at}
                </Moment> */}
            </section>

        </>
    )
}

export default ArticleDescription