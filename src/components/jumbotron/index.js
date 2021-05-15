import react from 'react'

import {Container, Item, Inner, Title, SubTitle, Pane, Image} from './styles/jumbotron'

export default function Jumbotron({ children, direction = 'row', ...restProps }) {
    return (
        <Item {...restProps}>
            <Inner direction={direction}>
                {children}
            </Inner>
        </Item>
    )
}

Jumbotron.Container = ({children, ...restProps}) => (<Container {...restProps}> {children} </Container>);
// or -> Jumbotron.Container = function JumbotronContainer({children, ...restProps}) {
    // return <Container {...restProps}> {children} </Container>;
// }

Jumbotron.Pane = ({children, ...restProps}) => (<Pane {...restProps}> {children} </Pane>);
Jumbotron.Title = ({children, ...restProps}) => (<Title {...restProps}> {children} </Title>);
Jumbotron.SubTitle = ({children, ...restProps}) => (<SubTitle {...restProps}> {children} </SubTitle>);
Jumbotron.Image = ({ ...restProps }) => (<Image {...restProps}/>);
