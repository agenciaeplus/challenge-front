import React, { useState, useEffect } from 'react';
import { MdSearch, MdPerson, MdShoppingCart} from 'react-icons/md'
import Products from '../../api/products.json';
import MenuData from '../../api/menuData.json';
import './index.scss';

import Logo from '../../assets/logo.png'

const Header = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [dropdowShow, setDropdowShow] = useState(false)

  const total = products.reduce((acummulator, price) => acummulator + price.bestPrice, 0)
    .toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

  useEffect(() => {
    setMenuItems(MenuData.data)
    setProducts(Products.cart.item)
  }, [])

  const showDropdown = (event) => {
    setDropdowShow(event)
  }

  const renderDropdown = () => {
    return (
      <>
        <div className="dropdown">
          <div className="dropdown__scroll">
            {products.map(idx => (
              <div key={idx.productId} className="dropdown__item">
                <img
                  src={idx.image}
                  alt="Products"
                />
                <div>
                  <p>{idx.name.substr(0, 29)}...</p>
                  <div>
                    <span>Qtd: {idx.quantity}</span> <strong>{idx.bestPriceFormated}</strong>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="checkout">
            <div className="checkout__total-area">
              <p>Total do pedido:<strong>{total}</strong></p>
            </div>
            <div>
              <button>Finalizar compra</button>
            </div>
          </div>
        </div>
        <div className="mask" onMouseOver={() => showDropdown(false)}></div>
      </>
    )
  }

  return (
    <>
      <header>
        <div>
          <img
            src={Logo}
            alt="logo"
          />
        </div>
        <div>
          <ul>
            {menuItems.map(item => (
              <li key={item.title}>
                <a href="/item">{item.title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <ul>
            <li><MdSearch fontSize={30} /></li>
            <li><MdPerson fontSize={30} /></li>
            <li
              onMouseOver={() => showDropdown(true)}
            >
              <MdShoppingCart fontSize={30} />
            </li>
          </ul>
        </div>
      </header>
      {dropdowShow && renderDropdown()}
    </>
  )
}

export default Header;