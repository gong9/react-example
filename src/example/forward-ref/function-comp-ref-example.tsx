import { useImperativeHandle, useRef,forwardRef, Ref } from 'react';


const FuncCompRefExam = (props: any,ref: Ref<unknown> | undefined) => {
    const inputRef= useRef(null)
    useImperativeHandle(ref,()=>{
        return {
            inputRef
        }
    })
    return ( 
        <div>
            函数式子组件
            <input type="text" ref={inputRef}/>
        </div>
     );
}
 
export default forwardRef(FuncCompRefExam);