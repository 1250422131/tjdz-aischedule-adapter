/**
 * 时间配置函数，此为入口函数，不要改动函数名
 */
async function scheduleTimer({providerRes, parserRes} = {}) {
    return {
        totalWeek: 16, // 总周数：[1, 30]之间的整数
        startSemester: '1676822400000', // 开学时间：时间戳，13位长度字符串，推荐用代码生成
        startWithSunday: false, // 是否是周日为起始日，该选项为true时，会开启显示周末选项
        showWeekend: false, // 是否显示周末
        forenoon: 4, // 上午课程节数：[1, 10]之间的整数
        afternoon: 4, // 下午课程节数：[0, 10]之间的整数
        night: 4, // 晚间课程节数：[0, 10]之间的整数
        sections: [
            {
                section: 1, // 节次：[1, 30]之间的整数
                startTime: '08:20', // 开始时间：参照这个标准格式5位长度字符串
                endTime: '09:00', // 结束时间：同上
            },
            {
                section: 2, // 节次：[1, 30]之间的整数
                startTime: '09:00', // 开始时间：参照这个标准格式5位长度字符串
                endTime: '09:40', // 结束时间：同上
            },
            {
                section: 3, // 节次：[1, 30]之间的整数
                startTime: '10:00', // 开始时间：参照这个标准格式5位长度字符串
                endTime: '10:40', // 结束时间：同上
            },
            {
                section: 4,
                startTime: '10:40',
                endTime: '11:20',
            },
            {
                section: 5,
                startTime: '13:30',
                endTime: '14:10',
            },
            {
                section: 6,
                startTime: '14:10',
                endTime: '14:50',
            },
            {
                section: 7,
                startTime: '15:10',
                endTime: '15:50',
            },
            {
                section: 8,
                startTime: '15:50',
                endTime: '16:30',
            }
            ,
            {
                section: 9,
                startTime: '17:30',
                endTime: '18:10',
            }
            ,
            {
                section: 10,
                startTime: '18:10',
                endTime: '18:50',
            },
            {
                section: 11,
                startTime: '19:10',
                endTime: '19:50',
            },
            {
                section: 12,
                startTime: '19:50',
                endTime: '20:30',
            }],

    }
}