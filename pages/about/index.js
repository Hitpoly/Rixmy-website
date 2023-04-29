
import Layout from '../../components/layout'
import Sections from '../../components/Landing/Sections'
import {fetchAPI} from '../../lib/api'

const Nosotros = ({sections}) => {

    return (
        <>
            <Layout>
                <Sections pageData={sections}/>
            </Layout>
        </>

    )
}

export async function getStaticProps({ locale }) {
  const [sectionsRes] = await Promise.all([
    fetchAPI("/abouts", {
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

export default Nosotros
