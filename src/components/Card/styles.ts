import styled from 'styled-components';

export const CardContainer = styled.div`
.container {
    display: flex;
    background-color: #d7e1e7;
    border-radius: 1rem;
    gap: 4rem;
    height: 30rem;
    width: 50rem;
    margin: 2rem auto;
    padding: 4rem;
}

img {
    border: 8px solid #000;
    box-shadow: 0 24px 32px -16px rgba(0, 0, 0, 4);

}

.container h2 {
    font-size: 1.75rem;
}

.container p {
    font-size: 1rem;
    line-height: 1.5;
    margin-top: 2rem
}


.container button {
    background-color: #121212;
    border: 0;
    border-radius: .5rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
    color: #fff;
    font-size: 1rem;
    margin-top: 2rem;
    padding: .75em 1.25em;
    transition: .3s;
}

.container button:hover {
    cursor: pointer;
    margin-left: .5rem;
}

}
`;
