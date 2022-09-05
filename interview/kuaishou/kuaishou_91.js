function arrToTree(arr) {
    let map = new Map();
    let res = [];
    for (let i=0; i < arr.length;i++){
        map.set(arr[i].id, arr[i]);
    }
    console.log(map)
    for (let i = 0; i < arr.length;i++){
        if (arr[i].id===1)
            res.push(arr[i]);
        else {
            let parent = map.get(arr[i].parentId)
            console.log(parent)
            if (parent.children) {
                parent.children.push(arr[i]);
            }
            else {
                parent.children = [arr[i]];
            }
        }
    }
    return res;
}
let arr=[

    {id:1, name: 'i1'},

    {id:2, name:'i2', parentId: 1},

    {id:4, name:'i4', parentId: 3},

    {id:3, name:'i3', parentId: 2},

    {id:8, name:'i8', parentId: 7}

];
console.log(arrToTree(arr));