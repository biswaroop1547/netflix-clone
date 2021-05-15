import react from 'react'

import {Container, Inner} from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Inner direction={direction}>
            <p>Hello me from Inner Jumbo</p>
        </Inner>
    )
}

Jumbotron.Container = ({children, ...restProps}) => (<Container {...restProps}> {children} </Container>);
// or -> Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    // return <Container {...restProps}> {children} </Container>;
// }