

function depthFirstSearch(rootNode, vertices, edges) {

    let stack = [];

    stack.push(rootNode)

    let found = [rootNode];

    while (stack.length !== 0) {
        let location = stack.pop()
        if (!location.discovered) {
            location.discovered = true;
            let adjacentLocations = findAdjacent(location.name, vertices, edges)
            adjacentLocations.forEach(node => { stack.push(node); found.push(node)})
        }
    }
    return found
}

function findAdjacent(nodeName, vertices, edges) {
    let foundEdges = edges.filter(edge => edge.includes(nodeName))
    let foundVerticesNames = foundEdges.map(edge => edge.filter(node => node !== nodeName)[0])
    let foundVerticesObjects = foundVerticesNames.map(name => findNode(name, vertices))
    return foundVerticesObjects.filter(vertices => vertices.discovered === null )
}

function findNode(nodeName, vertices){
  return vertices.find(vertex => vertex.name == nodeName)
}