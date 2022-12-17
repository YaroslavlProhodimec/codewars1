function quadratic(x1, x2){
    let result = [1];
    const secondInt = -x1 + (-x2);
    const thirdInt = -x1 * (-x2);
    return [...result, secondInt, thirdInt];
}