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
  let x = false;
  let left = [];
  let right = [];

  const _fnc = (input, findNumber) => {
    if (input["left"]) {
      _fnc(input["left"], findNumber);
    }
    if (input["right"]) {
      _fnc(input["right"], findNumber);
    }

    if (Number(input["node"]) === findNumber) {
      x = true;
    }
  };

  _fnc(input, findNumber);

  console.log(x);
};

fun(input, 898895);
