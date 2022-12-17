function positiveSum(arr) {
    return arr.reduce((x,y)=> x +(y>0 ? y : 0), 0)
}