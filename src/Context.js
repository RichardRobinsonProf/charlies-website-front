import React from 'react';


const ContextChosenLanguage = React.createContext({
    language: 'English',
    setLanguage: (lan) => {this.language = lan}
})

export default ContextChosenLanguage

