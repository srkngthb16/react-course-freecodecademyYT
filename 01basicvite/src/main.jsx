import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

const reactElement = {
    // react doesn't know your type props etc. elements so we make sure react can get it
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    childen: 'Click me to visit google'
}

function MyApp(){
    return (
        <div>
            <h1>Custom React App</h1>
        </div>
    )
}

const AnotherElement = (
    <a href="https://google.com" target='_blank'>Visit Google</a>
)

// thats how react understand your element
const areactElement = React.createElement(
    'a',
    {href: 'https://google.com' , target:"_blank"},
    'click to visit google',
    username    
    
)

createRoot(document.getElementById('root')).render(
  
    // loaded it as a component should be better way
    <App/>
)
