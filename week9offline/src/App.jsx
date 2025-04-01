

// structuring your app into components
// defining a state of your application
// post componet is never read
function App() {
  

  return (
    
     <div>Post Component</div>
        
  
  )
}
const style = { width: 200, backgroundColor: "white", borderRadius: 10, borderColor: "gray", borderWidth: 1, display: "flex"}

function PostComponent() {
 return <div >
  <div style={style}>
 
 <img src={""} style={{
  width: 20, 
  height: 20,
  borderRadius: 20
  }}/>
  <div style={{fontSize: 10}}> 
    <b>
      100xdevs
    </b>
    <div>23,888 followers</div>
    <div>12m</div>
   </div>
   </div>
   <div style={{fontSize: 12}}>
  Want to know how to win big
   </div>
</div>

}

export default App







