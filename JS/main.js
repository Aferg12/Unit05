const trees = ['Oak', 'Pine', 'Aspen', 'Bald Cypress']
const errorElement = document.querySelector('#error')
const displayResults = document.querySelector('#displayResults')

const listTrees = () => {
    let treeList = ''
    trees.forEach(tree => {
        treeList += `${tree} <br>`

    })

    displayResults.innerHTML = `${treeList} <span>${trees.length} Elements long</span>`
}

listTrees()

document.querySelector('#add_redwood').onclick = () => {
    trees.push('redwood')
    listTrees();
}

document.querySelector('#add_pear').onclick = () => {
    trees.unshift('Pear')
    listTrees();
}
document.querySelector('#remove_tree1').onclick = () => {
    if (trees.length > 0){
        trees.shift ()
        listTrees()

    } else {
        errorElement.textContent = 'No Trees. Cannot Remove'
    }
}


document.querySelector('#remove_tree2').onclick = () => {
    if (trees.length > 1) {
        trees.splice(1, 1)
        listTrees()
    } else {
        errorElement.textContent = 'No Trees. Cannot Remove'
    }
}

document.querySelector('#remove_tree3').onclick = () => {
    if (trees.length > 0) {
        trees.pop()
        listTrees()
    } else {
        errorElement.textContent = 'No Trees. Cannot Remove'
    }
}

document.querySelector('#sortTrees').onclick = () => {
    if (trees.length > 1) {
        trees.sort()
        listTrees()
    } else {
        errorElement.textContent = 'Not Enough Trees. Cannot Sort'
    }
}

document.querySelector('#lowerTrees').onclick = () => {
    if (trees.length > 0) {
        let toLower =[]
        toLower = trees.map(tree => tree.toLowerCase())
        trees.splice(0, toLower.length, ...toLower)
        listTrees()
    } else {
        errorElement.textContent = 'Not Enough Trees. Cannot Sort'
    }
}

document.querySelector('#showName3').onclick = () => {
    if (trees.length > 2) {
        errorElement.innerHTML = `Tree number 3 is ${trees[2]}`
    } else {
        errorElement.textContent = 'Not enough trees in list. Cannot display'
    }
}

document.querySelector('#showName4').onclick = () => {
    if (trees.length > 3) {
        errorElement.innerHTML = `Tree number 4 is ${trees[3]}`
    } else {
        errorElement.textContent = 'Not enough trees in list. Cannot display'
    }
}