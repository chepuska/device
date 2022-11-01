const tabsBtn = document.querySelectorAll('.button-tab');
const tabContent = document.querySelectorAll('.servises-tab');
// const servisesItem = document.querySelectorAll('.servises-item');

  tabsBtn.forEach(onTabClick);

function onTabClick(item) {
  item.addEventListener('click', function(){
    const currentBtn = item;
    console.log(currentBtn);
    const tabId = currentBtn.getAttribute('data-tab');
    const currentTab = document.querySelector(tabId);
    console.log(item.parentNode);

    document.querySelectorAll('.servises-item')
      .forEach(i => i.classList.remove('current-tab'));

    if(!currentTab.classList.contains('active')){
      tabContent.forEach(function(item){
        item.classList.remove('active');
      });
      currentTab.classList.add('active');

      item.parentNode.classList.add('current-tab');
    }


   });

}

document.querySelector('.button-tab').click();



