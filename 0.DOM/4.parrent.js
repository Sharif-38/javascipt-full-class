// Traversing DOM Hierarchy
// parentElement +  children


// children wyes we can go up and down.

const ul = document.getElementById('li-container')
// console.log(ul) 
// parentElement  
/**output:
 *  <ul id="li-container" class="=lists">
        <li class="li-items">First</li>
        <li class="li-items">Second</li>
        <li class="li-items">Third</li>
        <li class="li-items">Fourth</li>
    </ul>
 */

    // console.log(ul.children);

    
    // previousElementSibling  ==== ‍এই গুলো শুধু দিবে  this is element formate. 
    // console.log(ul.previousElementSibling) // output: <h2 id="title">Welcome to Play with dom</h2>


    // previousSibling === এই গুলো সব দিবে. Because this is noad formate. 

    console.log(ul.previousSibling); // #text

// - nextElementSibling Vs nextSibling -- same down