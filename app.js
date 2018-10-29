const TextRazor = require('textrazor');
const express = require('express');
const app = express();
const textRazor = new TextRazor('8e3f98862a3fd4aa7b9b3b391e1e14dc56771b60cd36e1c92465a850');
const content = 'Find me a doctor for malaria disease';
const options = { extractors: 'dependency-trees'};//,categoies,relations,properties' };
app.get('/',(req,res)=>{
    textRazor.exec(content, options)
    //console.log(JSON.stringify(res))
    .then(result =>{
        res.send(result);
    })
  .catch(err => console.error(err));
})
app.listen(3000,()=>{
    console.log('asdas');
})