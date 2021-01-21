const msg = "Lets meet at midnight under the c1ock";

function terribleHash(msg){
    const tokens = msg.split("")
    let blocks = [];
    let slice = 0;
    const blockSize = 8;

    while (slice < tokens.length) {
        blocks.push(tokens.slice(slice, slice += blockSize));
    }

    while (blocks[blocks.length - 1].length < 8) {
        blocks[blocks.length - 1].push(String.fromCharCode(28))
    }

    blocks = blocks.map(block => block.map(char => char.charCodeAt()))

    console.log(blocks)

    var x = 1
    var pctDone = 0
    for (var i = 0; i < blocks.length; i++){

        blocks[i][0] = blocks[i][0] | blocks[i][1]
        blocks[i][2] = blocks[i][2] | blocks[i][3]
        blocks[i][4] = blocks[i][4] | blocks[i][5]
        blocks[i][6] = blocks[i][6] | blocks[i][7]
        x = x * Math.pow(blocks[i][0], blocks[i][1]) + Math.pow(blocks[i][2] , blocks[i][3]) + Math.pow(blocks[i][4] , blocks[i][5]) + Math.pow(blocks[i][6] , blocks[i][7])
        x = x.toString(16)
        //console.log(x)
        x = x.slice(0,13)
        //console.log(x)
        x =parseInt(x,16)
        x += 2718281828459045
        //console.log(x)

    }
    return x.toString(16).slice(0,13)
}

console.log(terribleHash(msg))
// outputs b392ed75f36b5
console.log(terribleHash("        "))
// outputs da8434ec8e225
console.log(terribleHash("       !"))
// outputs f5db6b5a5c23b
console.log(terribleHash("ab"))
// outputs cdad34ee0b68f
console.log(terribleHash("aa"))
// outputs acc9c8a3dd609
console.log(terribleHash('a'))
// outputs 11e4b3d7aa8cd
console.log(terribleHash('b'))
// outputs 13f3b87f057ce
console.log(terribleHash('c'))
// outputs 1680aa6069d2b
console.log(terribleHash('this is a hash function. hopefully nobody uses it for anything serious'))
// outputs fbec21358d313
