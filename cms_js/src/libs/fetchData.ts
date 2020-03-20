export const fetchData = (url: string, data: any, cb: (result: any) => void) => {
  let formData = new FormData();

  for(let key in data) {
    let value = data[key];

    formData.append(key, JSON.stringify(value));
  }

  let xhr = new XMLHttpRequest();

  xhr.open('POST', url, true);
  xhr.onreadystatechange = function(e) {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200) {
        cb(xhr.responseText);
      }
    }
  }
  xhr.send(formData);
}

export const getHtml = (pageName: string, cb: (result: any) => void) => {
  let xhr = new XMLHttpRequest();
  let url = "https://s3-ap-northeast-1.amazonaws.com/ac.ezimport.co.jp/event/bibibar/cms_html/" + pageName + ".html";

  xhr.open('GET', url, false);
  xhr.onreadystatechange = function(e) {
    if(xhr.readyState === XMLHttpRequest.DONE) {
      if(xhr.status === 200) {
        cb(xhr.responseText);
      }
    }
  }
  xhr.send();
}