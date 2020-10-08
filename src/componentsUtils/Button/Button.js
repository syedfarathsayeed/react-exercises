import styled from "styled-components"

export const Button = styled.button`
    min-width: 80px;
    margin:10px;
    &:hover {
        cursor: pointer;
        background: red;
    };
    &:focus {
        outline: none
    }
`;