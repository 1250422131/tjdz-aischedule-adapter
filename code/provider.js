async function scheduleHtmlProvider(iframeContent = "", frameContent = "", dom = document) {

  var gridurl = "/admin/xkgl/yxkccx/listYxkc?gridtype=jqgrid";
  let url = '/admin/xkgl/yxkccx/listYxkc?gridtype=jqgrid&queryFields=id%2Ckcid%2Cxnxq%2Cxdxz%2Ckcbh%2Ckcmc%2Cjxbmc%2Ckcxz%2Ctype%2Ckclx%2Ckcgs%2Crkjs%2Cjxms%2Csksjdd%2Cxf%2Cskfs%2Cxkfs%2Cxklx%2C&_search=false&nd=1677766297170&page.size=50&page.pn=1&sort=id&order=asc'
  json = request('get',url,null)

  return json;

}

function request(tag,url,data)
{
  let ss = "";
  var xhr = new XMLHttpRequest();
  xhr.onreadystatechange = function() {
    console.log(xhr.readyState+" "+xhr.status)
    if (xhr.readyState == 4 && xhr.status == 200 || xhr.status == 304) {
      ss = xhr.responseText
    }

  };
  xhr.open(tag, url,false);
  xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded")
  xhr.send(data)
  return ss;
}