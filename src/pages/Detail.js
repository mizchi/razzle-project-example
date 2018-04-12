/* @flow */
import React from 'react'
import Layout from '../components/Layout'
import { Route, Link } from 'react-router-dom'

type Props = { id: string }

class Detail extends React.Component<Props> {
  static async getInitialProps({ req, res, match }: *) {
    return { id: match.params.id }
  }

  render() {
    const { id } = this.props
    return (
      <Layout>
        <h1>Detail: {id}</h1>
        <Route
          path="/detail/:id"
          exact
          render={() => (
            <div>
              <Link to={`/detail/${id}/more`}>more</Link>
              |
              <Link to={`/detail/${id}/other`}>other</Link>
            </div>
          )}
        />
        <Route path="/detail/:id/more" exact render={() => <span>more</span>} />
        <Route path="/detail/:id/other" exact render={() => <div>other</div>} />
      </Layout>
    )
  }
}

export default Detail
