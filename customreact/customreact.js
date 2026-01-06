
function customreader(contian,reactelement){
    const domelement = document.createElement(reactelement.type)
    domelement.innerHTML= reactelement.Children
    domelement.setAttribute('href',reactelement.props.href)
    domelement.setAttribute('target',reactelement.props.target)
    contian.appendChild(domelement)
}


const reactelement = { 
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    Children : 'click to visit here'
}


const maincontianer = document.querySelector('.root')

customreader(maincontianer,reactelement)

