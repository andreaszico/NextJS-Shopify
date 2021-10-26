interface Person {
    name: string;
    age: number;
    city: string;
  }
  
  class Student implements Person {
    name = "";
    age = 0;
    city = "";
  }
  
  class BussinessPerson implements Person {
    name = "";
    age = 0;
    city = "";
    salary = "";
  }
  
  type Car = {
    brand: string;
    age: number;
    name: string;
    city: string;
  };
  
  class Logger<T extends Person = Car> {
    log(items: Array<T>, callback: (i: T) => void) {
      items.forEach((item) => {
        callback(item);
      });
    }
  }
  
  export default function play() {
    const logger3 = new Logger();
  
    const person = [
      {
        name: "Zico",
        age: 2,
        city: "A",
        brand: '',
      },
      {
        name: "Andreas",
        age: 2,
        city: "A",
        brand: '',
      },
    ];
  
    logger3.log(person, (num) => {
      console.log(num);
    });
  }
  