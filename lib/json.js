const extractedObject = (pathTo, name) => {
    return JSON.parse(require('fs').readFileSync(`${pathTo}/${name}.json`).toString())
}


module.exports = extractedObject;