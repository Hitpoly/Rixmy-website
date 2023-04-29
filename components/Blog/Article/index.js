import styles from './styles.module.css'
import Link from 'next/link'
import ArrowRight from '../../Landing/Icons/ArrowRight'
import { getStrapiMedia } from "../../../lib/media"

function Article({ article }) {

    const imageUrl = getStrapiMedia(article.attributes.image)
    const link_article = `/blog/article/${article.attributes.slug}`

    return (
        <>
            <div className={styles.single_blog} >
                <div>
                    <Link href={link_article}>
                        <a className={styles.featured_img}>
                            <img src={imageUrl} alt="featured img">
                            </img>
                        </a>
                    </Link>

                    <div className={styles.post_title}>
                        <h3>
                            <Link href={link_article}>
                                <a>{article.attributes.title}</a>
                            </Link>
                        </h3>
                        <p>
                            {article.attributes.description}
                        </p>
                        <Link href={link_article}>
                            <a>
                                <ArrowRight />
                                SEE MORE
                            </a>
                        </Link>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Article