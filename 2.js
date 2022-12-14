
findMultiples=(i,l)=>{
    let res = [];
    let t = i;
    while(i<=l){
        res.push(i);
        i=i+t;
    }
    return res;
}
