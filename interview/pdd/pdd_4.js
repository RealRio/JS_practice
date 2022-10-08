function getExpect(n,c,r,grades){
    grades.sort((a,b)=>{
        if(a[1]!==b[1])
            return b[1]-a[1];
        else
            return a[0]-b[0];
    })
    // console.log(grades);
    const m=Math.ceil(n/c);
    const duoduo=grades[r-1];
    const lastPart=n%c;
    const groupExpect=[];
    let res;
    if(lastPart===0){
        for(let i=0;i<m;i++){
            let roomExpect=0;
            for(let j=0;j<c;j++){
                roomExpect+=grades[i*2+j][1];
            }
            groupExpect.push(roomExpect/c);
        }
    }
    else{
        for(let i=0;i<m-1;i++){
            let roomExpect=0;
            for(let j=0;j<c;j++){
                roomExpect+=grades[i*2+j][1];
            }
            groupExpect.push(roomExpect/c);
        }
        let lastRoomExp=0;
        for(let i=(m-1)*c;i<n;i++){
            lastRoomExp+=grades[i][1];
        }
            groupExpect.push(lastRoomExp/lastPart);
        }
    // console.log(groupExpect);
        let duoduoIdx=Math.floor((r-1)/c);     //多多在第几组
        let sumE=0;
        if(duoduoIdx===groupExpect.length-1){
            for(let i=0;i<groupExpect.length-1;i++){
                sumE+=getExpect[i];
            }
            sumE+=duoduo[1];
            res=sumE/groupExpect.length;
        }
        else{
            for(let i=0;i<groupExpect.length-1;i++){
                if(duoduoIdx===i){
                    sumE+=duoduo[1];
                }
                else{
                    sumE+=groupExpect[i];
                }
            }
            console.log(sumE)
            console.log(lastPart)
            if(lastPart===0){
                res=(sumE+groupExpect[groupExpect.length-1])/groupExpect.length;
            }
            else
                res=((sumE/(groupExpect.length-1)*(lastPart/c))+((sumE+groupExpect[groupExpect.length-1])/groupExpect.length)*(1-(lastPart/c)))
        }
        console.log(res);
        return res;
}
let n=5,c=2,r=1;
let grades=[[1,650],[2,640],[3,630],[4,620],[5,610]];
getExpect(n,c,r,grades);