import React from 'react'
import Layout from '../components/Layout'

class About extends React.Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { stuff: 'more stuffs' }
  }
  render() {
    return (
      <Layout>
        <h1>About</h1>
        {this.props.stuff ? <div>about</div> : 'loading...'}
      </Layout>
    )
  }
}

export default About
