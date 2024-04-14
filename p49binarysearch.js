// w.a.p to find search item in an array using binary search

arr=[10,11,12,3,2,4]
SearchItem=11
arr.sort((n1,n2)=>n1-n2)
low=0
up=arr.length-1
isfound=false
while(low<=up){
    mid=Math.floor((low+up)/2)
    if(arr[mid]==SearchItem){
        isfound=true
        break;
    }
    else if(arr[mid]>SearchItem){
        up=mid-1
    }
    else{
        low=mid+1
    }
}
console.log(isfound?'Search item present':'search item not present');