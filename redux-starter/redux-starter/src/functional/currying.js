function add(a){
  return function add(b){
    return (a+b);
  }
}

const add2 = a => b => a+b;
add(1)(5);