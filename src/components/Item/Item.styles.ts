import styled from 'styled-components'

export const ItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    width: 100%;
    height: 100%;
    border: 1px solid black;
    border-radius: 20px;
    button {
        height: 6rem;
        border-radius: 0 0 20px 20px;
    }
    img {
        max-height: 250px;
        object-fit: contain;
        border-radius: 20px 20px 0 0;
    }
    div {
        font-family: Arial, sans-serif;
        padding: 1rem;
        height: 100%; 
    }
`