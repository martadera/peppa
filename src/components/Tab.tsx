// --CORE
import React from 'react'
import styled from 'styled-components'

const Tab: React.FC<{ className: string, val: string, onClick: Function }> = ({val, onClick}) => {
    return (
        <Container className="hidden cart" data-class={val} onClick={onClick} val={val}/>
    )
}

const Container = styled.div`
height: 100px;
width: 100px;
background-color: #000;
text-align: center;
line-height: 100px;
border: 1px solid #C71585;
flex: 1 0 21%;
background-image: url(${props => props.val});
background-size: cover, 123px;
background-repeat: no-repeat;
background-position: center center
`

export default Tab
