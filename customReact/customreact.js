// how does the main container work ( function )
function customRender(reactElement , container){
    /*
    const domElement = document.createElement(reactElement.type)
    //domElement is a varable and;
    domElement.innerHTML = reactElement.children
    // it's now ok but no attribute inside of it so;
    domElement.setAttribute = ('href' , reactElement.props.href)
    domElement.setAttribute = ('target' , reactElement.props.target)
    //how to append the text
    container.appendChild(domElement)
    */ 

    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.childen
    for (const prop in reactElement.props) {
        if(prop === 'children') continue  
        domElement.setAttribute(prop, reactElement.props[prop])   
        }
        container.appendChild(domElement)
    }

// everythings object
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    childen: 'Click me to visit google'
}

const mainContainer = document.querySelector('#root')

// parameter, where do u eject and what do u eject
customRender(reactElement , mainContainer)