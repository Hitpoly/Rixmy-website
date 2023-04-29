import React from 'react'
import Layout from '../../components/layout';
import styles from './styles.module.css';

function ErrorPage() {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.max_title}>
          <h1>Oops!</h1>
        </div>
        <h2>404 - PAGE NOT FOUND</h2>
        <p>The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
      </div>
    </Layout>
  )
}

export default ErrorPage