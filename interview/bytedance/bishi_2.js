let num=readline().split(' ');
let row=+(num[0]),col=+(num[1]);
let grid=[];
while(line=readline()){
    grid.push(line.split(''));
}
let reach=new Array(row).fill(0);
reach.forEach((_,idx)=>{reach[idx]=new Array(col)});
outer:for(let i=0;i<row;i++){
    for(let j=0;j<col;j++){
        if(grid[i][j]=='O'){
            reach[i][j]==true;
            dfs(i,j,safe,grid);
            break outer;
        }
    }
}
let res =0;
for(let i=0;i<row;i++)
    for(let j=0;j<col;j++){
        if(!reach[i][j])
            res++;
    }
console.log(res);
function dfs(i,j,reach,grid){
    let n=reach.length,m=reach[0].length;
    let dx=[-1,1,0,0];
    let dy=[0,0,-1,1];
//     if(!reach[i][j])
//         return ;
    outer:for(let i=0;i<4;i++){
        let nx=x+dx[i],ny=y+dy[i];
        if(nx<n&&nx>=0&&ny>=0&&ny<m){
            if(reach[nx][ny]){
                continue;
            }
            switch(grid[nx][ny]){
                case 'U':
                    if(i!=1)
                        continue outer;
                    reach[nx][ny]=true;
                    dfs(nx,ny,reach,grid);
                    break;
                case 'D':
                    if(i!=0)
                        continue outer;
                    reach[nx][ny]=true;
                    dfs(nx,ny,reach,grid);
                    break;
                case 'L':
                    if(i!=3)
                        continue outer;
                    reach[nx][ny]=true;
                    dfs(nx,ny,reach,grid);
                    break;
                case 'R':
                    if(i!=2)
                        continue outer;
                    reach[nx][ny]=true;
                    dfs(nx,ny,reach,grid);
                    break;
                default:
                    reach[nx][ny]=true;
                    dfs(nx,ny,reach,grid);
                    break;
            }
        }
    }
}