import React from 'react'
import styled from '@emotion/styled'

import painting from '../../../images/mondrian-painting.png'

const ContentContainer = styled.div`
    .painting {
        width: 600px;
        height: 600px;
        margin: auto;
        /* background-image: url(${painting}); */
        background-color: black;
        background-position: center;
        background-repeat: no-repeat;
        background-size: contain;

        display: grid;
        grid-gap: 20px 20px;
        grid-template-rows: 199px 219px 61px 61px;
        grid-template-columns: 126px 390px 44px;
    }
    [class*='col-'] {
        min-height: 1px;
        background-color: rgba(0, 0, 0, 0.2);
        font-size: 2rem;
        font-weight: 500;
        text-transform: uppercase;
    }

    .col-1 {
        grid-column: 1 / 2;
        grid-row: 1 / 2;
        background-color: white;
        color: black;
    }
    .col-2 {
        grid-column: 1 / 2;
        grid-row: 2 / 3;
        background-color: white;
        color: black;
    }
    .col-3 {
        grid-column: 2 / 4;
        grid-row: 1 / 3;
        background-color: red;
    }
    .col-4 {
        grid-column: 1 / 2;
        grid-row: 3 / 5;
        background-color: blue;
    }
    .col-5 {
        grid-column: 2 / 3;
        grid-row: 3 / 5;
        background-color: white;
        color: black;
    }
    .col-6 {
        grid-column: 3 / 4;
        grid-row: 3 / 4;
        background-color: white;
        color: black;
    }
    .col-7 {
        grid-column: 3 / 4;
        grid-row: 4 / 5;
        background-color: yellow;
        color: black;
    }
    `
const MondrianPainting = () => {
    return (
        <ContentContainer className="container">
            <div className="m-b-lg p-t-md p-b-md">
                <h1>Grid Examples</h1>
            </div>
            <div className="centered m-b-lg">
                <h2>Mondrian Painting using CSS Grid</h2>
            </div>
            <div className="painting">
                <div className="col-1 centered">a</div>
                <div className="col-2 centered">b</div>
                <div className="col-3 centered">c</div>
                <div className="col-4 centered">d</div>
                <div className="col-5 centered">e</div>
                <div className="col-6 centered">f</div>
                <div className="col-7 centered">g</div>
            </div>
        </ContentContainer>
    )
}

export default MondrianPainting