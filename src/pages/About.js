import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

class About extends React.Component {
  static async getInitialProps({ req, res, match, history, location, ...ctx }) {
    await new Promise(resolve => setTimeout(resolve, 300))
    return { stuff: 'more stuffs' }
  }
  render() {
    return (
      <Layout>
        <Title>About</Title>
        {this.props.stuff ? <div>about</div> : 'loading...'}
      </Layout>
    )
  }
}

export default About

const Title = styled.h1`
  color: red;
`
