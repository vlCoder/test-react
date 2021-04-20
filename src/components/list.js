import React, { Component, Fragment } from 'react';

import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

class ListAgents extends Component {
    renderListAgents = () => (
        <ul>
            {this.props.list.getInvestmentAgents.map(list => (
                <li key={list.name}>{list.text}</li>
            ))}
        </ul>
    );

    render() {
        const { list } = this.props;


        return (
            <Fragment>
                {list.loading ? <p>Carregando...</p> : this.renderListAgents()}
            </Fragment>
        );
    }
}

const ListQuery = gql`
query {
    getInvestmentAgents{
        id
        name
        email
        cellphone
        doc
        fliperCode
  }
}`;

export default graphql(ListQuery, { name: 'list' })(ListAgents);