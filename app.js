const TextRazor = require('textrazor');
const express = require('express');
const app = express();
const textRazor = new TextRazor('8e3f98862a3fd4aa7b9b3b391e1e14dc56771b60cd36e1c92465a850');
const content = 'Get me a physician for cholera';
const options = { extractors: 'words,entailments,entities'};//,categoies,relations,properties' };
app.get('/',(req,res)=>{
    textRazor.exec(content, options)
    .then(result =>{
        let nouns= new Array();
        result.response.sentences[0].words.forEach(element => {
            if(element.partOfSpeech=="NN"){
                nouns.push(element.token);
            }
        });
        let check=0;
        result.response.entailments.forEach(element=>{
            if(element.entailedWords[0]=='doctor')
            {
                check=1;
            }
        });
        if(check==1){
            console.log('chat bot done');
            result.response.entities.forEach(element=>{
                if(element.type=='Disease'){
                    console.log(element.entityId);
                }
            })
            check=0;
        }
        console.log(nouns)
        res.send(result);
        
    })
  .catch(err => console.error(err));
})
app.listen(3000,()=>{
    console.log('running on port 3000');
})
