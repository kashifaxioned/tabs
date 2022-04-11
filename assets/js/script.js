/* Author: 

*/

let navItems = $(".nav-item")
let tabsItem = $(".tabs-item")

navItems.map((index, item) => {
  $(item).click(function () { showItem(index) })
});

function showItem(idx) {
  tabsItem.map((index, item) => {
    if(idx === index) $(item).addClass("showTab")
    else $(item).removeClass("showTab")
  })
}




















