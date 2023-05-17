/*

             1  
            /  \
           2    3
          / \   / \
         4   5  6  7 
         
         
              1` 
            /  \
           2    3`
          / \   / \
         4   5  6  7 
         
   // Imagine that node 3 is changed. We would want to rerender node 3 and it's parents/ancestors.
   // Given a changed node, return the list of nodes that we need to rerender.   
     
   // Examples:  
   findDirtyNodes(root, 4) -> [1,2,4]
   findDirtyNodes(root, 3) -> [1,3]
   
   
   Given a binary tree, write a function that takes in a node value returns true if the value is found in the tree. else return false.
   
   findNode(root, 4) -> true
   findNode(root, 8) -> false
   
             1  
            /  \
           2    3
          / \   / \
         4   5  6  7 
   {
     node: 1
     left: {
         node: 2 {
             left: {
                 node: 4
                 
             }
             right: {
                 node: 5
             }
         }
     }

*/

const input = {
  node: 1,
  left: {
    node: 2,
    left: {
      node: 4,
      left: {
        node: 1,
      },
    },
    right: {
      node: 898895,
    },
  },
};

const fun = (input, findNumber) => {
  let hasResult = false;
  let y = [];

  const saver = [];

  const _fnc = (input, findNumber, side, saver) => {
    let _saver = [...saver, input.node];
    if (Number(input["node"]) === findNumber) {
      y = saver;
      return (hasResult = true);
    }

    if (input[side]) {
      _fnc(input[side], findNumber, "left", _saver);
      _fnc(input[side], findNumber, "right", _saver);
    }
    if (input[side]?.node) {
      saver.push(input[side].node);
    }
  };

  _fnc(input, findNumber, "right", saver);

  if (!hasResult) {
    console.log("run here");
    _fnc(input, findNumber, "left", saver);
  }

  console.log(y);
};

fun(input, 4);
