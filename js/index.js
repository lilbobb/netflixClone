const tabItems = document.querySelectorAll(".tab-item");
const tabContentItems = document.querySelectorAll(".tab-content-item");

// seltect tab content item

function selectItem(e) {
  removeBorder();
  removeShow();
// add border to current tab
this.classList.add("tab-border");
// Grab content item from DOM
const tabContentItem = document.querySelector(`#${this.id}-content`)
// ad show class
tabContentItem.classList.add("show")
}

function removeBorder() {
  tabItems.forEach(item => item.classList.remove("tab-border"))
}

function removeShow() {
  tabContentItems.forEach(item => item.classList.remove("show"))
}
// Listen for Tab click
tabItems.forEach(item => item.addEventListener("click", selectItem))