sentance='good morning all'

// w.a.p to print all vowels in given sentance

// a=sentance.split('')
// a.filter(str=>str=='a'||str=='e'||str=='i'||str=='o'||str=='u'||str=='A'||str=='E'||str=='I'||str=='O'||str=='U').forEach(item=> {console.log(item);})
vowels=['a','e','i','o','u','A','E','I','O','U']
Array.from(sentance).filter(char=>vowels.includes(char)).forEach(element=> {console.log(element);})