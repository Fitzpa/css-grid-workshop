import React from 'react'
import { Link } from '@reach/router'
import styled from '@emotion/styled'

const ContentContainer = styled.nav`

`


const Navbar = () => {
    return (
        <ContentContainer className="container">
            <Link to="/"><h1>Grid Workshop</h1></Link>
        </ContentContainer>
    )
}

export default Navbar