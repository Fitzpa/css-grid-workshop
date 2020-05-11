import React from 'react'
import styled from '@emotion/styled'

const ContentContainer = styled.footer`
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 20px;
    padding-bottom: 20px;
    position: absolute;
    bottom: 0;
    width: 100%;
    .container {

        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    a {
        font-size: 14px;
    }
    p {
        font-size: 14px;
        color: #999999;
    }
`


const Footer = () => {
    return (
        <ContentContainer>
            <div className="container centered">
                <p>Created by <a href="https://Louiefitzpatrick.org">Louie Fitzpatrick</a> {new Date().getFullYear()}</p>
                <p className="m-b-0">Content inspired by <a href="https://frontendmasters.com">Front End Masters</a></p>
            </div>
        </ContentContainer>
    )
}

export default Footer