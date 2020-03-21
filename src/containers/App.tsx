import * as React from 'react'
import { render } from 'react-dom'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Counter from './Counter'
import {PATHS} from '../utils/constants'
import Styled from '../components/Styled'
import styled from 'styled-components'

const Home = () => <h2>Home</h2>

const StyledUl = styled('ul')`
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: #333;
`

const StyledLi = styled('li')`
    float: left;

    a {
        display: block;
        color: white;
        text-align: center;
        padding: 14px 16px;
        text-decoration: none;
    }

    &:hover {
        text-decoration: underline;
    }
`

const AppRouter = () =>
    <Router>
        <div>
            <StyledUl>
                <StyledLi>
                    <Link to={PATHS.HOME}>Home</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={PATHS.COUNTER}>Counter Example</Link>
                </StyledLi>
                <StyledLi>
                    <Link to={PATHS.STYLED}>Styled Example</Link>
                </StyledLi>
            </StyledUl>

            <Route path={PATHS.HOME} exact component={Home} />
            <Route path={PATHS.COUNTER} component={Counter} />
            <Route path={PATHS.STYLED} component={Styled} />
        </div>
    </Router>

render(<AppRouter />, document.getElementById('main'))