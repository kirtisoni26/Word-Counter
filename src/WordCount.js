import React, { useState } from "react";
import './Wordcount.css';
const WordCount = () => {
const [pre, next] = useState(0)
const [value, setValue] = useState(0)

const changeInput = (e) => {
var characterr = e.target.value.length;
var countt = (e.target.value)
countt = countt.trim();
var finalCountt = countt.split(" ")
var Cleancountt = finalCountt.filter(function(elm){
    return elm != "";
})
var words = Cleancountt.length

next(words)
setValue(characterr)
}
return <>
<div>  
<h1>Word Counter</h1>
<textarea onChange={changeInput}></textarea>
<h2>  
<span id="inner"> Word {pre} </span> 
<span>Character{value}</span> </h2>
</div>

</>
}

export default WordCount;