str='Luminar'

// startsWith
console.log(str.startsWith('Lum'));
console.log(str.startsWith('lum'));

// endsWith
console.log(str.endsWith('Nar'));
console.log(str.endsWith('nar'));

console.log('----------------------------------------------------');

s1='luminar'
s2='TECHNOLAB'

// toUpperCae
console.log(s1.toUpperCase());

// toLowerCase
console.log(s2.toLowerCase());

console.log('----------------------------------------------------');

s3='   abcdasdfgh'

// trim
s4=s3.trim()
console.log(s4);

console.log('----------------------------------------------------');

// substring
str1=str.substring(2,5)
console.log(str1);
str2=str.substring(2)
console.log(str2);

console.log('----------------------------------------------------');

// slice
a=str.slice(1,4)
console.log(a);

b=str.slice(-5)
console.log(b);

console.log('----------------------------------------------------');

inst='Luminar Technolab'
// split
inst1=inst.split(' ')
console.log(inst1);

console.log('----------------------------------------------------');

// replace
sent1='I Joined Microsoft'
console.log(sent1.replace('Microsoft', 'Google'));

sent2='Block chain Technology'
console.log(sent2.replace(' ',''));

// replaceAll
alph='A B C D E F G H I J K L M N O P Q R S T U V W X Y Z'
console.log(alph.replaceAll(' ',','));

// Array.from
alph1=alph.replaceAll(' ','')
console.log(Array.from(alph1));

// index position
hi='hello'
// to print e and o
console.log(hi[1],hi[4]);