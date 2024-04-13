function scheduleHtmlParser(html) {
  //除函数名外都可编辑
  //传入的参数为上一步函数获取到的html
  //可使用正则匹配
  //可使用解析dom匹配，工具内置了$，跟jquery使用方法一样，直接用就可以了，参考：https://cnodejs.org/topic/5203a71844e76d216a727d2e

  var kcJson = JSON.parse(html);
  const courseInfos = []
  const dayArray = {
    "一": 1,
    "二": 2,
    "三": 3,
    "四": 4,
    "五": 5,
    "六": 6,
    "日": 0,
  }
  for (let i = 1; i < kcJson.results.length; i++) {

    console.log(i);


    //任课教师截取

    const result = kcJson.results[i];


    const name = result.kcmc;
    const rkjs = result.rkjs;


    const rkjsPattern = /\[\d+\](.*)/;
    const rkjsMatch = rkjs.match(rkjsPattern);

    console.log(i + "ccc");
    const teacher = rkjsMatch[1];
    if (result.sksjdd == null || result.sksjdd === "") {

      continue;
    }
    //课程数据
    const sksjdd = result.sksjdd;


    //数据处理
    const pattern = /[\d+-\d+,\d+-\d+]+周，星期.?，第[0-9]-[0-9]小节，.{1,3}[A-Z|0-9]*/g;
    const matchResults = sksjdd.match(pattern);

    console.log(i + "aaaaa");


    //这里如果匹配到多次，就是单双周区分的
    for (let j = 0; j < matchResults.length; j++) {


      //接下来可能是
      //1-1,3-3,5-5,7-7,9-9,11-11,13-13,15-15周，星期五，第5-6小节，软件楼C318
      //1-16周，星期二，第7-8小节，软件楼C410
      //这块我们先拉到是多少小节
      let classData = matchResults[j];

      var dayPattern = /星期(.{1})，/;
      //这里来获取分别哪几周上
      var dayMatch = classData.match(dayPattern);
      var day = dayArray[dayMatch[1]];

      var sectionPattern = /第(\d+)-(\d+)小节，/;
      //节数
      var sectionArray = classData.match(sectionPattern)
      //获得哪一节课，并且完成构建
      var sections = [
        Number(sectionArray[1]), Number(sectionArray[2])
      ]

      //地点截取position
      var positionPattern = /小节，(.*)/;
      //这里来获取分别哪几周上
      var positionMatch = classData.match(positionPattern);

      //地点
      var position = positionMatch[1]

      //替换节数为空,确保下面不会误判
      classData = classData.replace(sectionArray[0], '');

      //return classData;

      const weeks = []
      const weeksPattern = /(\d+)-(\d+)/g;
      //这里来获取分别哪几周上
      const weeksArray = classData.match(weeksPattern);


      //这里把周期分割
      for (let weekIndex = 0; weekIndex < weeksArray.length; weekIndex++) {

        //这里获取到的基本上是1-1这样的
        const weeksData = weeksArray[weekIndex];
        //子级别的判断
        const mWeekPattern = /(\d+)-(\d+)/;
        //这里来获取分别哪几周上
        const mWeekArray = weeksData.match(mWeekPattern);


        //判断是否相等
        if (mWeekArray[1] === mWeekArray[2]) {
          //这里确切的说，就是1-1这样的
          weeks.push(Number(mWeekArray[1]))
        } else {
          //这种情况下，为1-16这样的
          //这样就要遍历后传入
          for (let week = Number(mWeekArray[1]); week <= Number(mWeekArray[2]); week++) {
            weeks.push(week)
          }

        }

      }

      //接下来

      const courseTemp = {
        name: name,
        teacher: teacher,
        position: position,
        weeks: weeks,
        day: day,
        sections: sections
      }

      courseInfos.push(courseTemp)
    }

  }

  return courseInfos
}