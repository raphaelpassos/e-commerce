function fazGet(url) {
    let request = new XMLHttpRequest()
    request.open('GET', url, false)
    request.send()
    return request.responseText
}

function criaLinha(produto) {
}

function main() {
    let data = fazGet("http://cantao.vtexcommercestable.com.br/api/catalog_system/pub/products/search?fC:65&_from=1&_to=50")
    let produtos = JSON.parse(data)
    console.log(produtos)
}   

main ()