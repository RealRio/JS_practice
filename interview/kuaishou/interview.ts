
//一面
interface Person {
    name: string;
    age: number;
}
type K1 = keyof Person; 
type K2= 'name'|'age';
//千分位
function transThousand(v) {
  v=v.toString();
  let arr=v.split('.')
  let pre=arr[0],post=arr[1];
  let flag;
  if(pre[0]=='-'){
      flag=pre[0];
      pre=pre.substr(1);
  }
  if(pre.length<=3){
        pre=pre;
  }
  else if(pre%3==0){
      pre=pre.match(/\d{3}/g).join(',')
  }
  else{
    let len=pre%3;
    pre=pre.slice(0,len)+','+pre.slice(len).match(/\d{3}/g).join(','); 
  }
  if(flag)
    pre=flag+pre;
  if(post)
    pre=pre+'.'+post;
  return pre;
}
console.log(transThousand('1')); // 1
console.log(transThousand('1000')); // 1,000
console.log(transThousand('-1000')); // -1,000
console.log(transThousand('0.9')); // 0.9
//大数相加

//二面
//flex shrink的策略
// d.ts的作用：d指declare，类型定义文件
//ts传入组件、函数的类型
//React.FC
// interface PropsType{
//     msg?: string;
//   }
//   const app: react.FC<PropsType> = ({msg}) => { //{msg}相当于解构赋值，从props中解构
//     return(
//       <h1>hello,{msg}</h1>
//     )
//   }
  
/** 
4个奖品类型，一等奖概率1%，二等奖概率3%，三等奖概率6%，参与奖90%，设置如下

const model = [

{ name: '一等奖', key: 'level1', radio: 1, },

{ name: '二等奖', key: 'level2', radio: 3, },

{ name: '三等奖', key: 'level3', radio: 6, },

{ name: '参与', key: 'level4', radio: 90 }

];

const draw = new Draw(model);

const result = draw.random();

class Draw {} // 补充 Draw 的实现 
**/
class Draw{
    constructor(){

    }
    random(){

    }
}
