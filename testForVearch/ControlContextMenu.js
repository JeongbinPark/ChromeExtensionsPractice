chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    'title': "Search Keywords vias Vearch",
    'type':  'normal',
    'id': "video_test",
    'contexts':['all']
  })
});

let page_info;

chrome.contextMenus.onClicked.addListener((info, tab)=>{
  if(tab){
    page_info = {
      "id": tab.id,
      "title": tab.title
    }
  }
  console.log(page_info);
})
