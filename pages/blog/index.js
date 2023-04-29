import Layout from '../../components/layout'
import Articles from '../../components/Blog/Articles'
import { fetchAPI } from "../../lib/api"
import Sections from '../../components/Landing/Sections'
import Form from '../../components/Landing/Form'


const Blog = ({ articles, section, contact}) => {

    return (
        <Layout>
            {/* <Seo seo={homepage.attributes.seo} /> */}
            <Sections pageData={[section[3]]} />
            <Articles articles={articles} />
            <Form data={contact}/>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {

    // fetchAPI("/homepage", {
    //     populate: {
    //         hero: "*",
    //         seo: { populate: "*" },
    //     },
    // }),

    // Run API calls in parallel

    const [articlesRes, sectionRes, contactRes] = await Promise.all([
        fetchAPI("/articles", {
            locale: locale,
            populate: "*"
        }),
        fetchAPI("/homes", {
            locale: locale,
            populate: "*"
        }),
        fetchAPI("/contacts", {
            locale: locale,
            populate: "*"
        })
    ])

    return {
        props: {
            articles: articlesRes.data,
            section: sectionRes.data,
            contact: contactRes.data[0]
        },
        revalidate: 1,
    }
}

export default Blog