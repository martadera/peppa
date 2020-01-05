// --CORE
import React from 'react'
import styled from 'styled-components'

const Tab: React.FC<{ className: string, val: string, onClick: Function }> = ({val, onClick}) => {
    return (
        <Container className="hidden cart" data-class={val} onClick={onClick} val={val}/>
    )
}

const Container = styled.div`
min-height: 70px;
max-height: 100px;
min-width: 75px;
background-color: #000;
text-align: center;
line-height: 100px;
border: 1px solid #C71585;
flex: 1 0 24%;
background-image: url(${props => props.val});
background-size: cover, 100%;
background-repeat: no-repeat;
background-position: center center
@media only screen and (min-width: 420px) {
min-height: 90px;
}
@media only screen and (min-width: 580px) {
min-height: 120px;
}
@media only screen and (min-width: 820px) {
min-height: 140px;
}
`

export default Tab
