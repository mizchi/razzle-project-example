/* @flow */
import React from 'react'
import Layout from '../components/Layout'

type Props = {}

class Home extends React.Component<Props> {
  render() {
    return (
      <Layout>
        <div className="Home">
          <h1>Home</h1>
        </div>
      </Layout>
    )
  }
}

export default Home
