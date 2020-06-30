const item = document.querySelectorAll('.tab-item');
const tab = document.querySelectorAll('.tab-content-item')
function select(e) {
    remove();
    removeShow();
    this.classList.add('tab-border');

    var tabitem = document.querySelector(`#${this.id}-content`);
    tabitem.classList.add('show');
}
function remove() {
    item.forEach(i => i.classList.remove('tab-border'));
}
function removeShow() {
    tab.forEach(i => i.classList.remove('show'));
}
item.forEach(i => i.addEventListener('click', select));
