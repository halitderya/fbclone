import React, { useState, createContext, useContext } from 'react';

const OzellestirilmisContext = createContext();

function CustomProvider({ children }) {
    const [mesaj, setMesaj] = useState('Selam!');

    return (
        <OzellestirilmisContext.Provider value={mesaj}>
            {children}
        </OzellestirilmisContext.Provider>
    );
}
function Child() {
    const mesaj = useContext(OzellestirilmisContext);
    return <p>{mesaj}</p>;
}

function App() {
    return (
        <CustomProvider>
            <Child />
        </CustomProvider>
    );
}



export default App;
