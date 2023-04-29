import Seo from "../../../components/seo"
import { fetchAPI } from '../../../lib/api';
import Layout from '../../../components/layout';
import ArticleDescription from '../../../components/Blog/ArticleDescription';

function Article({ article }) {

  const seo = {
    metaTitle: article.attributes.title,
    metaDescription: article.attributes.description,
    shareImage: article.attributes.image,
    article: true,
  }

  return (
    <Layout>
      <Seo seo={seo} />
      <ArticleDescription article={article} />
    </Layout>
  )
}

export async function getStaticPaths({ locales, defaultLocale }) {

  const languages = await fetchAPI('/i18n/locales')
  const languageCodes = languages.map((language) => language.code)

  const promesas = languageCodes.map((code) => fetchAPI("/articles", { locale: code }))
  const titles = await Promise.all(promesas)

  let titulos = []

  titles.map((titleObj) => {
    return titleObj.data.map(titleObj2 => titulos.push(
      [titleObj2.attributes.slug, titleObj2.attributes.locale]))
  })

  let parametros = titulos.map((valor, index) => ({ params: { slug: valor[0] }, locale: valor[1] }))

  return {
    paths: parametros,
    fallback: false,
  }

}

export async function getStaticProps({ params, locale }) {

  // const languages = await fetchAPI('/i18n/locales')
  // const languageCodes = languages.map((language) => language.code)

  // const promesas = languageCodes.map((code)=> fetchAPI("/articles", { 
  //   locale: code, 
  //   filters: {
  //     slug: params.slug
  //   },
  //   populate: "*"
  // }))

  // const articles = await Promise.all(promesas)
  // const article = articles.filter(article => article.data.length)

  const article = await fetchAPI("/articles", {
    locale: locale,
    filters: {
      slug: params.slug
    },
    populate: "*"
  })

  return {
    props: {
      article: article.data[0]
    },
    revalidate: 1,
  }
}

export default Article