import context from "./index";

// ?这种方式使用你觉得有问题么？
// !我觉得不是我理想的使用方式


const Consumer = () => {
  return (
    <context.Consumer>
      {(value) => {
        console.log(value);
        
        return <div>消费者组件</div>;
      }}
    </context.Consumer>
  );
};


export default Consumer