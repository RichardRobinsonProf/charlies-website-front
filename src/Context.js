import React from 'react';

export const Context = React.createContext({
    language: 'Spanish',
    setLanguage: (lan) => {this.language = lan},
    email: '',
    setEmail: (email) => {this.email = email},
    wantsGroup: false,
    setWantsGroup: (wantsGroup) => {this.wantsGroup = wantsGroup},
    cleargroup: () => {this.wantsGroup = false},
    pricePack: '',
    setPricePack: (pricePack) => {this.pricePack = pricePack},
    clearPricePack: () => {this.pricePack = ''},
    onPage: false,
    setOnPage: (onpage) => {this.onpage = onpage},
    duration : '',
    setDuration: (duration) => {this.duration = duration},
    price: '',
    setPrice: (price) => {this.price = price},
    clearPrice: () => {this.price = ''}
})

export default Context



