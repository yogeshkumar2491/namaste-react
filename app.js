/**
 * 
 * <div id="parent">
 *    <div id="child">
 *      <h1></h1>
 *    </div>
 * </div>
 * 
 */

const heading = React.createElement("h1", { id: "heading", name: "heading", style: { background: "black" } }, "Hello world from React!"),

  child = React.createElement("div", { id: "child" }, [heading, heading]),

  parent = React.createElement("div", { id: "parent" }, [child, child]),

  root = ReactDOM.createRoot(document.getElementById('root'));

console.log(heading) // heading is on object

root.render(parent) //this will convert object to h1 element and render on DOM