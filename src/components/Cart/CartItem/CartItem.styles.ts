import styled from 'styled-components'

export const CartItemWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    font-family: Arial, sans-serif;
    border-bottom: 1px solid black;
    padding-bottom: 20px;
    div {
        flex: 1;
    }
    .info, .btns {  
        display: flex;
        justify-content: space-between;
    }
    img {
        max-width: 80px;
        object-fit: contain;
        margin-left: 30px;
    }
`