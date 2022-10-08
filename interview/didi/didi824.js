class Task {
  constructor() {
    this.tasks = [];
    this.contexts = [];
  }

  add(fn, context, ...args) {
    let promise = () => new Promise((resolve) => {
      fn(resolve, ...args)
    })
    this.tasks.push(promise);
    return this;
  }

  async run() {
    for (let promise of this.tasks) {
      await promise();
    }
  }

  stop() {
  }
}

function task1(next) {
  setTimeout(() => {
    console.log('red')
    next()
  }, 3000)
}

function task2(next, b) {
  setTimeout(() => {
    console.log(b)
    next()
  }, 1000)
}

function task3(next) {
  setTimeout(() => {
    console.log('yellow')
    next()
  }, 2000)
}

let task = new Task()
task.add(task1).add(task2, null, 3).add(task3)
task.run()

//第二题 并发scheduler //
// class Scheduler {
// 	constructor(){
// 	this.maxTasks=2;
// 	this.runList=[];
// 	this.waitList=[];
// 	}
//   add(task) {
// 	  return new Promise((resolve,reject)=>{
//             task.resolve=resolve;
// 		  if(this.runList.length<this.maxTasks){
// 			  this.run(task);
// 		  }
// 		  else{
// 			  this.waitList.push(task);
// 		  }
// 	  })
//   }
// 	run(task) {
// 		this.runList.push(task);
//         task().then(()=>{
//             task.resolve();
//             this.runList.splice(this.runList.indexOf(task),1);
//             if(this.waitList.length)
//                 this.run(this.waitList.shift());
//         })
// 	}
//   // ...
// }

// const timeout = (time) => new Promise(resolve => {
//   setTimeout(resolve, time)
// })

// const scheduler = new Scheduler()
// const addTask = (time, order) => {
//   scheduler.add(() => timeout(time))
//     .then(() => console.log(order))
// }

// addTask(1000, '1')
// addTask(500, '2')
// addTask(300, '3')
// addTask(400, '4')

// //dom操作
// insertBefore;
// appendChild;
