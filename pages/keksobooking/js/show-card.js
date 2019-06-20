'use strict';

(function () {

  var ESC_KEYCODE = 27;

  var offerDialog = document.querySelector('#offer-dialog');
  var dialogClose = offerDialog.querySelector('.dialog__close');
  var pinMap = document.querySelector('.tokyo__pin-map');
  var myDialog = offerDialog.children[1].cloneNode(true);

  /**
   * Показывает активное объявление по нажатию на пин
   * @param {Object} event
   * @param {Array} pins
   * @param {Object} object
   */
  window.showCard = function (event, pins, object) {
    var target = (event.target) ? event.target : event;
    var targetImage;

    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove('pin--active');
    }

    // цикл двигается вверх от target к родителям до pinMap
    while (target !== pinMap) {
      if (target.classList.contains('pin')) { // элемент, который нас интересует
        target.classList.add('pin--active');
        targetImage = target.children[0].getAttribute('src');
        openDialog();
      }
      // если клик был не на нашем элементе, то двигаемся вверх по иерархии родителей
      target = target.parentNode;
    }

    renderActiveDialog(pins, targetImage, object);
  };

  /**
   * Создаёт карточку выбранного жилья
   * @param {Array} pins
   * @param {String} targetImage
   * @param {Object} object
   */
  function renderActiveDialog(pins, targetImage, object) {
    var dialogPanel;
    var fragmentPanel;

    for (var x = 0; x < pins.length; x++) {
      if (pins[x].classList.contains('pin--active')) {
        if (pins[x].classList.contains('pin__main')) {
          fragmentPanel = document.createDocumentFragment();
          fragmentPanel.appendChild(myDialog);
          offerDialog.replaceChild(fragmentPanel, offerDialog.children[1]);
          document.querySelector('.dialog__title img').setAttribute('src', 'img/avatars/user01.png');
          myDialog = offerDialog.children[1].cloneNode(true);
        } else {
          dialogPanel = window.card.renderDialogPanel(object[x - 1]);
          fragmentPanel = document.createDocumentFragment();
          fragmentPanel.appendChild(dialogPanel);
          offerDialog.replaceChild(fragmentPanel, offerDialog.children[1]);
          document.querySelector('.dialog__title img').setAttribute('src', targetImage);
        }
      }
    }
  }

  /**
   * Открывает объявление и добавляет обработчики событий на esc и click
   */
  function openDialog() {
    offerDialog.classList.remove('hidden');
    document.addEventListener('keydown', onDialogEscPress);
    dialogClose.addEventListener('click', closeDialog);
  }

  /**
   * Закрывает объявление, удаляет у маркера состояние активности и удаляет обработчики событий на esc и click
   */
  function closeDialog() {
    var pins = pinMap.querySelectorAll('.pin');

    offerDialog.classList.add('hidden');

    for (var i = 0; i < pins.length; i++) {
      pins[i].classList.remove('pin--active');
    }

    document.removeEventListener('keydown', onDialogEscPress);
    dialogClose.removeEventListener('click', closeDialog);
  }

  /**
   * Вызывает функцию закрытия объявления по нажатию esc
   * @param {Object} event
   */
  function onDialogEscPress(event) {
    if (event.keyCode === ESC_KEYCODE) {
      closeDialog();
    }
  }

})();
