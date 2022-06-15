var obj = {
    name:"menna",
    address:"cairo",
    age:24
};
console.log("name" in obj);

// obj.Name = "aaa";//set

// console.log(obj.ag);

var handler = {
    get:function(target,prop,prox){
        
        if(!(prop in target)){
            throw("this prop desnot found");

        }
        
        return target[prop];
        
    },
    set:function(target,prop,value){
      if(!(prop in target)){
          throw("error");
      }
      if(prop ==="age"){

          if(typeof value !=="number" || value>60 || value<25)
          {
              throw("you cant set age with these values");
          }
      }
      if(prop ==="address"){

          if(typeof value !=="string")
          {
              throw("you cant set address with these values");
          }
      }
      if(prop ==="name"){

          if(typeof value !=="string" || !(value.length == 7))
          {
              throw("you cant set name with these values");
          }
      }
      
      target[prop] = value;
    }


}

 var p = new Proxy(obj,handler);
// console.log(p.name);

// console.log(p.salary);

// p.age = 60;
// console.log(p.age);
// p.salary = 2000;

/////////////////////////////////////