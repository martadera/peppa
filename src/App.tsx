// --CORE
import React from 'react';
import styled from 'styled-components'
// --COMPONENTS
import AppTable from './components/AppTable'

const App: React.FC = () => {
    return (
        <>
            <Title>Memory Game - Peppa Pig</Title>
            <AppTable/>
        </>
    );
}

const Title = styled.h1`
color: #DB7093;
text-align: center;
`

export default App;
