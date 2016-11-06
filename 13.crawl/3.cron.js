var CronJob = require('cron').CronJob;
/**
 * 六个占位，分别表示
 * 秒(0-59) 分钟(0-59) 小时(0-23) 日期(1-31) 月份(1-12) 星期(0-6)
 * @type {*|CronJob}
 */
var job = new CronJob('0 0 23 * * *',function(){
    console.log('关机');
    console.log(new Date().toLocaleString());
});
job.start();