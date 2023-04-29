
import Sections from '../components/Landing/Sections'
import Video from '../components/Landing/Video'
import Layout from '../components/layout';
import { fetchAPI } from '../lib/api'

const Home = ({ sections }) => {

  return (
    <>
      <Layout>
        {/*<Video />*/}
        <Sections pageData={sections} />
      </Layout>
    </>
  )
}

export async function getStaticProps({ locale }) {

  const [sectionsRes] = await Promise.all([
    fetchAPI("/homes", {
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

export default Home