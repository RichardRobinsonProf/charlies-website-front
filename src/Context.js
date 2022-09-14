import React from 'react';


const ContextChosenLanguage = React.createContext({
    language: 'Spanish',
    setLanguage: (lan) => {this.language = lan}
})

export default ContextChosenLanguage

