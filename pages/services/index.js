
import Layout from '../../components/layout'
import Sections from '../../components/Landing/Sections'
import {fetchAPI} from '../../lib/api'

const Services = ({sections}) => {
    return (
        <>
            <Layout>
                <Sections pageData={sections} />
            </Layout>
        </>
    )
}

export async function getStaticProps({ locale }) {
    const [sectionsRes] = await Promise.all([
        fetchAPI("/services", {
            locale: locale,
            populate: "*"
        })
    ])

    return {
        props: {
            sections: sectionsRes.data
        },
        revalidate: 1,
    }
}

export default Services
