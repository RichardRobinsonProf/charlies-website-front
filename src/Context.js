import React from 'react';

export const Context = React.createContext({
    language: 'Spanish',
    setLanguage: (lan) => {this.language = lan},
    email: '',
    setEmail: (email) => {this.email = email},
    wantsGroup: false,
    setWantsGroup: (wantsGroup) => {this.wantsGroup = wantsGroup},
    pricePack: '',
    setPricePack: (pricePack) => {this.pricePack = pricePack}
})

export default Context



