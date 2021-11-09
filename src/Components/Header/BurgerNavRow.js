import React from 'react'
import styled from 'styled-components'

function BurgerNavRow({text}) {
    return (
        <Container>
            <a href="#">{text}</a>
            <hr />
        </Container>
    )
}

export default BurgerNavRow;

const Container = styled.div`
    font-size: 14px;
    font-weight: 600;
    hr{
        height: 1px;
        margin: 12px 0;
        background-color: lightgray ;
        border: 0;
    }
`