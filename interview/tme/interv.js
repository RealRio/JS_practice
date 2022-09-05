//二面
性能监控指标
FCP,LCP,TTI可交互时间,FID首次输入延迟
//错误信息上报:
try {

} catch (error) {

}
处理运行时错误,不能处理语法错误和异步错误
window.onerror事件冒泡的处理方式,对网络请求异常无法处理
window.addEventListener('error',() => { }, true)
可以通过e.message是否存在区别网络错误和其他错误,捕获的方式


//性能数据上报：
var navigasitonInfo = null; if (typeof performance != 'undefined' && typeof performance.getEntriesByType != 'undefined') { navigasitonInfo = performance.getEntriesByType('navigation')[0]; };
let timing = window.performance.timing;
//页面完全加载耗时let complete_load_duration = timing.loadEventEnd - timing.navigationStart 
// 页面白屏时间
let white_screen_duration = time.domLoading - timing.navigationStart
// 首屏时间
let first_screen_duration = calcFirstScreen()
// 可交互

let interactive_duration = timing.domContentLoadedEventEnd - timing.navigationStart
// 准备耗时
let stalled_duration = timing.domainLookupStart - timing.navigationStart
// 重定向耗时
let redirect_duration = timing.redirectEnd - timing.redirectStart
// DNS解析耗时
let dns_duration = timing.domainLookupEnd - timing.domainLookupStart
// ip连接耗时
let ip_connect_duration = timing.connectEnd - timing.connectStart
// 首包耗时
let first_data_duration = timing.responseStart - timing.requestStart
// 完整包加载耗时
let final_data_duration = timing.responseEnd - (timing.requestStart ? timing.requestStart : timing.fetchStart)
    // dom处理
    let dom_operate_duration = timing.domComplete - timing.domLoading
// 资源加载耗时
let res_load_duration = info.duration
// 当前页面文件大小
let res_size = navigasitonInfo ? navigasitonInfo.transferSize : 0
