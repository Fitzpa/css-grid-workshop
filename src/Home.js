import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

const ContentContainer = styled.div`
    .wrapper {
        display: grid;
        grid-gap: 10px;
    }
`

const Home = () => {
    return (
        <ContentContainer className="container">
            <h1>HomePage</h1>
            <ul className="wrapper">
                <li><Link to="/grid-examples/example-1">Grid Example 1</Link></li>
                <li className="list-item"><Link to="/grid-examples/code-demo">Grid Code Demo</Link></li>
            </ul>
        </ContentContainer >
    )
}

export default Home