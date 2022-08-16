/*
关键字：
extends实现类型复用:T extends U{}  
in 遍历语法 [P in K]:number
keyof
typeof
*/
type myPartial<T>={
    [P in keyof T]?:T[P];
}
type myRequired<T>={
    [P in keyof T]-?:T[P];
}
//创建一个K是key名，T是value的新type
type myRecord<K extends keyof any,T>={
    [P in K]:T;
}
type K= 'per1'|'per2'
type T=number;
type R=myRecord<K,T>;
const ab:R={per1:0,per2:0};
//T中去除可以赋值给类型U的类型
type myExclude<T,U>=T extends U?never:T;
type myExtract<T, U> = T extends U ? T : never;
//
type myPick<T,K extends keyof T>={
    [P in K]:T[P];
}
type myOmit<T,K extends keyof T>=Pick<T,Exclude<keyof T,K>>