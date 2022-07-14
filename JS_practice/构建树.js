function arrToTree(arr){
    let map=new Map();
    for(let i=0;i<arr.length;i++){
        map.set(arr[i].id,arr[i])
    }
    console.log(map)
    let res=[];
    for(let i=0;i<arr.length;i++){
        if(arr[i].parent_id==0)
            res.push(arr[i]);
        else{
            let par=map.get(arr[i].parent_id)
            if(!par.children)
                par.children=[arr[i]];
            else
                par.children.push(arr[i]);
        }
    }
    return res;
}
let arr=[
    {
        id: 1990,
        parent_id: 0,
        label_name: "地域1",
        condition: "",
    },
    {
        id: 1991,
        parent_id: 0,
        label_name: "地域",
        condition: "",
    },
    {
        id: 1992,
        parent_id: 1991,
        label_name: "北京",
        condition: "province='北京'",
    },
    {
        id: 1993,
        parent_id: 1991,
        label_name: "朝阳区",
        condition: "city='朝阳区'",
        
    },{
        id: 1994,
        parent_id: 1992,
        label_name: "朝阳区",
        condition: "city='朝阳区'",
    }
]
console.log(arrToTree(arr));