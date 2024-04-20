text='hai hello all hello world all'
// w.a.p to print the word count of given string

words=text.split(' ')
// console.log(words);

wordcount={}

for( word of words){
    if(word in wordcount){
        wordcount[word]+=1
   }
   else{
        wordcount[word]=1
   }
}
console.log(wordcount);

wc={}
words=text.split(' ').forEach(item => item in wc?wc[item]+=1:wc[item]=1)

console.log(wc);