import React, {Component} from 'react'
import { isDeclareVariable } from '@babel/types'

class Header extends Component {
    render() {
        return (
        <div>
            <p>{this.props.title}</p>
        </div>
        );
    }
}

export default Header;
