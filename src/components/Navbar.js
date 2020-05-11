import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

const ContentContainer = styled.nav`
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 20px;
    padding-bottom: 20px;

    .title {
        color: white;
    }
`


const Navbar = () => {
    return (
        <ContentContainer>
            <div className="container">
                <Link to="/"><h1 className="title">Grid Workshop</h1></Link>
            </div>
        </ContentContainer>
    )
}

export default Navbar