import React, { Component } from 'react'
import api from '../../services/api';
import './style.css';

export default class Main extends Component {
    state = {
        products: [],
    };

    //Quando o compoente é montado em tela
    componentDidMount() {
        this.loadProducts();
    }

    loadProducts = async () => {
        const { data } = await api.get('/products');
        console.log(data.docs);
        this.setState({ products: data.docs })
    };

    render() {
        const { products } = this.state;
        return (
          <div className="product-list">
              { products.map(product => (
                  <article key={product._id}>
                      <strong>{ product.title }</strong>
                      <p>{ product.description }</p>
                      <a>Acessar</a>
                  </article>
              ))}
          </div>
        );
    }
}