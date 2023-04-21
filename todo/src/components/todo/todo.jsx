import Todoitem from "./todoitem/todoitem"
import {useState} from "react"

const todo = (props)=>{
    const{list,deleteItem,triggerEdit}=props  
    if(list.length<=0)
    {
        return(
            <center><b>
                No Items to be displayed !!</b>
            </center>
           
        )
    }
    return(
        <>
            {list.map((item,index)=>(
                 <Todoitem 
                    key={index}
                    item={item}
                    index={index}
                    onDelete={deleteItem}
                    onEdit={triggerEdit}
                    />
                    )) }
                     
                          </>
       
    )
}
export default todo