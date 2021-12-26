function createXmasTree(height) {
    const SPACE_SYMBOL = '_';
    const TREE_SYMBOL = '*';
    const LOG_SYMBOL = '#';

    const maxWidth = (height * 2) - 1;

    const logSpaces = String(SPACE_SYMBOL).repeat(Math.floor(maxWidth / 2));
     

    let tree = `${logSpaces}${LOG_SYMBOL}${logSpaces}`;
    tree += `\n${tree}`


    for (let i = height; i > 0; i--) {
        const spaces = height - i;

        const corner = String(SPACE_SYMBOL).repeat(spaces)
        const center = String(TREE_SYMBOL).repeat(maxWidth - (spaces * 2));

        tree = `${corner}${center}${corner}\n${tree}`;
    }

    return tree;
}

console.log(createXmasTree(7))