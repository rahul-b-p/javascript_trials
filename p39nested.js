//Nested function

const global=`global`

const parent =()=>{
    let parentVariable= `PARENT`
    console.log(`parent variable is ${parentVariable}`);
    /* can not be accessed inside parent */
    /* console.log(`child variable is ${childVariable}`); */
    console.log(`global property is ${global}`);

    const child =()=>{
        let childVariable=`CHILD`
        /* can be accessed inside child */
        console.log(`parent variable is ${parentVariable}`);
        console.log(`child variable is ${childVariable}`);
        console.log(`global property is ${global}`);
    }
    child()
}

parent()