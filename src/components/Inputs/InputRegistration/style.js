import styled from "styled-components";

export const Form = styled.form`
    width: 100%;
    border: none;
    margin-top: 36px;
`;

export const Fieldset = styled.fieldset`
    margin-bottom: 20px;
    border: 1px solid #EFEFEF;
    padding: 20px 20px 20px 10px;
`;

export const Legend = styled.legend`
    width: 100%;
    border: none;
    color: #5a5a5a;
`;

export const Label = styled.label`
    width: ${props => props.width};
    display: flex;
    flex-direction: ${props => props.row? 'row': 'column'};
    color: ${props => props.optional? 'gray': '#001E64'};
    font-weight: ${props => props.optional? '400': '600'};
    padding-right: 20px;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    height: 32px;
    display: flex;
    background: transparent;
    border: ${props => props.disabled? 'none' : '1px solid #D1D1D1'};
    border-radius: 3px; 
    color: #323232;
    padding: ${props => props.noPadding? '0' : '0 10px'};
    margin-top: 15px;
`;

export const Row = styled.div`
    width: 100%;
    padding: 0 0 20px 10px;
    display: flex;
`;

export const InputCheckbox = styled.input`
    width: 20px;
    height: 20px;
    margin-left: 5px;
`;

export const Select = styled.button`
    width: ${props => props.width };
    height: 32px;
    background: transparent;
    outline: none;
    border: 1px solid #D1D1D1;
    border-radius: 3px;
    margin-top: 15px;
    padding: 0 10px;
    color: #323232;
    text-align: left;
    position: relative;   
`

export const Arrow = styled.img`
    transform: ${props => props.isOpened? 'translateY(-25%)': 'rotate(180deg)'};
    transition: 0.5s;
    position: absolute;
    right: 10px;
    top: 40%;
`

export const Options = styled.div`
    width: 95%;
    height: 160px;
    overflow: auto;
    background: transparent;
  
    margin-top: 15px;
    border: 1px solid #D1D1D1;
    border-bottom: 0;
    border-radius: 3px;
    position: absolute;  
    top: 55px;

    /* width */
    ::-webkit-scrollbar {
        width: 4px;
        border-radius: 3px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
        background: #f1f1f1;
        border-radius: 3px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
        background: #D1D1D1;
        border-radius: 3px;
    }
    /* Handle on hover */
    ::-webkit-scrollbar-thumb:hover {
        background: #555;
    }
`

export const Button = styled.button`
    width: 100%;
    height: 32px;
    background: white;
    outline: none;
    border: none;
    border-bottom: 1px solid #D1D1D1;
    color: #323232;
    text-align: left;
    padding: 0 10px;
`