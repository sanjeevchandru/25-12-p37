document.write("44. to create an object from an array, using the specified key and excluding it from each value."+"<br>");
function test44(arr,k){
    var x={undefined};
    for(let i=0;i<arr.length;i++){
        if(arr[i].id!=k){
            x["undefined"]=(arr[i]);
        }
    }
    return JSON.stringify(x);
}
document.write(test44([ { id: 10, name: 'apple' }, { id: 20, name: 'orange' } ],10)+"<br><br>");