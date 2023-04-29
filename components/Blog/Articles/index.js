import Article from '../Article'
import styles from './style.module.css'



function Articles({ articles }) {

  return (
    <>
      <section className={styles.section_blog}>
        {articles.map(article => {
          return (<Article key={article.id} article={article} />)
        })}
      </section>


    </>
  )
}

export default Articles