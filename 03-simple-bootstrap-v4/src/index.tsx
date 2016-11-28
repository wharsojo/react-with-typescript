/// <reference path="../typings/tsd.d.ts"/>
require('bootstrap/scss/bootstrap.scss');
require('../scss/narrow.scss');

import {
    React,
    ReactDOM,
    Container,
    Nav,
    ItemNav,
    Jumbotron,
    Header,
    Hello,
    Lead,
    SuccessButton
} from './components'

export interface PageProps {}

class Page extends React.Component<PageProps, {}> {
    constructor(props: any) {
        super(props);
    }
    render() {
        /**
         * automatically bind "this" to instance of this class 
         */
        const onClick = (e: any)=> {
            console.log('clicked', this)
        }

        return (
        <Container>
            <Header>
                <Nav>
                    <ItemNav>Home <span className="sr-only">(current)</span></ItemNav>
                    <ItemNav>About</ItemNav>
                    <ItemNav>Contact</ItemNav>
                </Nav>
                <h3 className="text-muted">Bootstrap: v4-alpha</h3>
            </Header>
            <Jumbotron>
                <Hello compiler="TypeScript" framework="React"/>
                <Lead>Cras justo odio, dapibus ac facilisis in, egestas eget quam. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</Lead>
                <p>
                    <SuccessButton onClick={onClick}>
                        Sign up today
                    </SuccessButton>
                </p>
            </Jumbotron>
        </Container>);
    }
}

ReactDOM.render(<Page/>, document.getElementById("example"));
