weatherData=[
    {district:'Thrissur',weather:32},
    {district:'Kottayam',weather:29},
    {district:'Palakkad',weather:34},
    {district:'Ernakulam',weather:33},
    {district:'Thrissur',weather:29},
    {district:'Kottayam',weather:30},
    {district:'Palakkad',weather:32},
    {district:'Ernakulam',weather:31}
]
//print district with its highest temparature
//output: {Thrissur:32, Kottayam:30,Palakkad:34,Ernakulam:33}
output={}
for (i=0;i<weatherData.length;i++){
    for(j=i+1;j<weatherData.length;j++){
        if (weatherData[i].district==weatherData[j].district){
            weatherData[i].weather>weatherData[j].weather?output[weatherData[i].district]=weatherData[i].weather:output[weatherData[j].district]=weatherData[j].weather
        }
    }
    
}
console.log(output);

//                         or

// 1. create object
wd={}

// 2. access each item from wetherData array
for (data of weatherData){
    dist=data.district
    currTemp=data.weather
    // 3. check district is there in the output object
    if(dist in wd){
        oddTemp=wd[dist]
        // 4. check highest temprature among same district and replacing highest into output object
        oddTemp>currTemp?wd[dist]=oddTemp:wd[dist]=currTemp
    }
    else{
        // 5. add dist:currTemp key:value pairs 
        wd[dist]=currTemp
    }
}
console.log(wd);