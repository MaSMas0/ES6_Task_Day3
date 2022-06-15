const obj={
  name:"Mas",
  age:30,
  address:"Cairo",
  [Symbol.iterator](){
      let start=0;
      let props=Object.keys(this);
      return{
          next(){
              return{
                  value: obj[props[start]],
                  done: start++ === props.length
              }
          }
      }

  }
}
for(let prop of obj){
  console.log(prop);
}
