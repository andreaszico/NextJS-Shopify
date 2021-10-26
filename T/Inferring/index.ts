interface Person {
    name: string;
  }
  
  interface Student extends Person {
    age: number;
  }
  
  interface PostGraduadeStudent extends Person {
    age: number;
    projects: string[];
  }
  
  type StudentInfo<T extends any = Student> = T extends Student
    ? {
        data: T;
        grades: number[];
      }
    : string;
  
  type Car = {
    engine: string;
  };
  
  export default function play() {
    function logStudentInfo(info: StudentInfo<Student>) {
      console.log(info);
      console.log(info);
    }
  
    const info = {
      data: {
        name: "Zico",
        age: 12,
      },
      grades: [1, 2, 3],
    };
  
    logStudentInfo(info);
  }
  