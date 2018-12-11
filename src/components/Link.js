import React, {Component} from 'react';

class Link extends Component {
    render() {
        const { menuTitle, menuUrl } = this.props;

        return (
          <a href={menuUrl} title={menuTitle}>{menuTitle}</a>
        );
    }
}

export default Link;
