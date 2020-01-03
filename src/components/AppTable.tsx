// --CORE
import React, {FunctionComponent} from 'react'
import styled from 'styled-components'
// --COMPONENTS
import Tab from './Tab'

const AppTable: FunctionComponent = () => {

    let table: string[] = []
    let activeCard: HTMLElement
    let gameResult: number = 0
    const cardPairs: HTMLElement[] = []

    const checkNumbers = (tab: string[]) => {
        const getRandomInt: number = Math.floor(Math.random() * 10)
        if (tab.filter((el: string) => el === `../images/peppa${getRandomInt}.jpg`).length < 2) {
            table.push(`../images/peppa${getRandomInt}.jpg`)
            checkNumbers(table)
        } else if (tab.length < 20) {
            checkNumbers(table)
        }
    }

    checkNumbers(table)

    const clickCart = (e: Event): void => {
        activeCard = e.currentTarget as HTMLElement
        activeCard.classList.remove('hidden')
        if (cardPairs.length === 0) {
            cardPairs[0] = activeCard
            return
        }

        else {
            let divs = document.querySelectorAll<HTMLElement>('div.cart')
            let array: HTMLElement[] = Array.from(divs)

            array.forEach(el=> {
                el.style.pointerEvents = 'none'
            })

            cardPairs[1] = activeCard

            setTimeout(()=> {
                if (cardPairs[0].getAttribute('data-class') === cardPairs[1].getAttribute('data-class')) {
                    gameResult++
                    if (gameResult === 10) {
                        window.location.reload()
                    }
                }
                else {
                    cardPairs.forEach(el => {
                        el.classList.add('hidden')
                    })
                }
                cardPairs.length = 0
                array.forEach(el=> {
                    el.style.pointerEvents = 'auto'
                })
            }, 1000)

        }
    }


    const mapping = table.map((el, i) => (
        <Tab className="hidden cart" key={i} onClick={(e: Event) => clickCart(e)} val={el}/>

    ))

    return (
        <Container>{mapping}</Container>
    )

}

const Container = styled.div`
display: flex;
margin: auto;
flex-wrap: wrap;
width: 500px;

`

export default AppTable
