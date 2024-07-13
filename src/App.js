import './App.css'; 
// root component, tree structure, others(.js) made linked here ---  use sfc tab
// a component is always a function--some jsx template retunred (can write any js before returning) and do : export import then nest

//import Navbar from './navbar';
import Toggle from './Toggle';
import NotesApp from './NotesApp';    //notesApp doesnt work??, why one small other big?
//Modals and Forms werent working so did : npm install react-bootstrap bootstrap

function App() {
  // const title = "note taking app";
  // can output all except bools and objects


  return (
    // <div className="App">
    //   <div className="content">
    //     <h1>note taking</h1>
    //     <h2>
    //       {/* curly braces to output dynamic values -- can also write some no/string/array */}
    //       {/* any attribute can also be dynamic value, no quotes then */}
    //       {title}
    //     </h2>
    //     <Navbar />
    //   </div>
    // </div>
    <div className="App">        
    {/* gives error if this div not kept */}
    <NotesApp />
    <Toggle></Toggle>
      
    </div>
  );
}
// grey or squiggled if some component declared but not used yet, dw.

export default App;
