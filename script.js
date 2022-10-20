const tabsBtn = document.querySelectorAll('.button-tab');
const tabContent = document.querySelectorAll('.servises-tab');

  tabsBtn.forEach(onTabClick);

function onTabClick(item){
  item.addEventListener('click', function(){
    const currentBtn = item;
    const tabId = currentBtn.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);

    if(!currentTab.classList.contains('active')){
      tabContent.forEach(function(item){
        item.classList.remove('active');
      });
      currentTab.classList.add('active');
    }
   });
}
document.querySelector('.button-tab').click();



