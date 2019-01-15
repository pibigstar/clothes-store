
// 事件池
let events = []
// 将事件加入到事件监听器中
export function on(name,event) {
 if(!events.some((item)=>item.name==name)) {
   events.push({"name":name,"event":event})
 }
}

// 执行事件监听器中的函数
export function execution(name) {
  if(events.some((item)=>item.name==name)) {

  }
}
