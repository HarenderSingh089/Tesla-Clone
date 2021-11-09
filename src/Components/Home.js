import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
    return (
        <>

        <Container >
            <Section 
            title="Model S" 
            description="Order online For Touchless Delivery"
            backgroundImg="/images/model-s.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model Y" 
            description="Order online For Touchless Delivery"
            backgroundImg="/images/model-y.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model 3" 
            description="Order online For Touchless Delivery"
            backgroundImg="/images/model-3.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Model X" 
            description="Order online For Touchless Delivery"
            backgroundImg="/images/model-x.jpg"
            leftBtnText="Custom Order"
            rightBtnText="Existing Inventory"
            />
            <Section 
            title="Lowest Cost Solar Panels in America" 
            description="Money-back guarantee"
            backgroundImg="/images/solar-panel.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
            <Section 
            title="Solar for New Roofs" 
            description="Solar Roof costs Less Than a New Roof plus Solar panels"
            backgroundImg="/images/solar-roof.jpg"
            leftBtnText="Order Now"
            rightBtnText="Learn More"
            />
            <Section 
            title="Accessories" 
            description=""
            backgroundImg="/images/accessories.jpg"
            leftBtnText="shop Now"
            />
        </Container>
        </>
    )
}

export default Home;

const Container = styled.div`

`
