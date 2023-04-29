import Layout from '../../components/layout'
import Form from '../../components/Landing/Form'
import {fetchAPI} from '../../lib/api';

const ContactUs = ({sections}) => {

    return (
        <Layout>
            <Form data={sections}></Form>
        </Layout>
    )
}

export async function getStaticProps({ locale }) {
    const [sectionsRes] = await Promise.all([
        fetchAPI("/contacts", {
            locale: locale,
            populate: "*"
        })
    ])

    return {
        props: {
            sections: sectionsRes.data[0]
        },
        revalidate: 1,
    }
}

export default ContactUs
