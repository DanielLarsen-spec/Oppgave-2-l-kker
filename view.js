updateView()
function updateView(){
document.getElementById('app').innerHTML = /*HTML*/`

<input id="vow" type="text" placeholder="Enter a word" onchange="change(this)">

<button onclick="input()">Submit</button>

<ul>

<li>a: ${aCount}</li>
<li>e: ${eCount}</li>
<li>i: ${iCount}</li>
<li>o: ${oCount}</li>
<li>u: ${uCount}</li>
<li>y: ${yCount}</li>
<li>æ: ${aeCount}</li>
<li>ø: ${oeCount}</li>
<li>å: ${aaCount}</li>

</ul>




`;


}