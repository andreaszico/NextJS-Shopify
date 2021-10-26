export default async function play() {
    type Greeting = {
      message: string;
    };
  
    type InferHelloProps<T> = T extends () => Promise<{props: infer Props}> ? Props : never
  
    const getHelloProps = async () => {
      const greeting: Greeting = {
        message: "Hello Bro",
      };
      return {
        props: {
          greeting,
          data: {
            cars: ["car", "motor"],
          },
        },
      };
    };
  
    function sayHello(props: InferHelloProps<typeof getHelloProps>){
      console.log(props.greeting);
    }
  
    const data = await getHelloProps();
  
  }
  