function checkIsSameTree(treeA, treeB) {
  let firstTree = [];
  let secondTree = [];

  function getDecorationValues(tree, values) {
    if (tree == null) return 0;

    const { value, left, right } = tree;

    values = [
      ...values,
      ...[value],
      ...[getDecorationValues(left, values)],
      ...[getDecorationValues(right, values)]
    ];

    return values;
  }

  const decorationTreeA = getDecorationValues(treeA, firstTree);
  const decorationTreeB = getDecorationValues(treeB, secondTree);

  return JSON.stringify(decorationTreeA) === JSON.stringify(decorationTreeB);
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}
console.log(checkIsSameTree(tree, tree)); // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}
console.log(checkIsSameTree(tree, tree2));// false
console.log(checkIsSameTree(tree2, tree2)); // true