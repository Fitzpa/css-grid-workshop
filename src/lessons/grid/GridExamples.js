import React from 'react'
import styled from '@emotion/styled'

const ContentContainer = styled.div`
    .wrapper {
        display: grid;
        grid-gap: 10px;
        background-color: rgba(255, 255, 255, 0.5);
        border-radius: 10px;
        padding: 30px;
    }
    [class*='col-'] {
        border-radius: 10px;
        min-height: 100px;
        background-color: rgba(0, 0, 0, 0.5);
    }

    .col-1 {
        grid-column: 1 / 2;
    }
    .col-2 {
        grid-column: 2 / 3;
    }
    .col-3 {
        grid-column: 3 / 4;
    }
    .col-4 {
        grid-column: 4 / 5;
    }
    
    .col-5 {
        grid-column: 1 / 2;
        grid-row: 1 / 3;
    }
    .col-6 {
        grid-column: 2 / 3;
        grid-row: 1 / 2;
    }
    .col-7 {
        grid-column: 2 / 3;
        grid-row: 2 / 3;
    }
    `
const GridExamples = () => {
    return (
        <ContentContainer className="container">
            <div className="m-b-lg p-t-md p-b-md">
                <h1>Grid Examples</h1>
            </div>
            <div className="centered m-b-lg">
                <h2>Example 1</h2>
            </div>
            <div className="wrapper m-b-lg p-b-lg">
                <div className="col-1 centered">col-1</div>
                <div className="col-2 centered">col-2</div>
                <div className="col-3 centered">col-3</div>
                <div className="col-4 centered">col-4</div>
            </div>
            <div className="centered m-b-lg">
                <p>Example 2</p>
            </div>
            <div className="wrapper m-b-lg p-b-lg">
                <div className="col-5 centered">col-1</div>
                <div className="col-6 centered">col-2</div>
                <div className="col-7 centered">col-3</div>
            </div>
        </ContentContainer>
    )
}

export default GridExamples