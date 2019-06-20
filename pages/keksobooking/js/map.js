'use strict';

(function () {

  var ENTER_KEYCODE = 13;
  var DEBOUNCE_INTERVAL = 500; // ms

  var offers = [];
  var map = document.querySelector('.tokyo');
  var pinMap = document.querySelector('.tokyo__pin-map');
  var pinMain = pinMap.querySelector('.pin__main');
  var addressInput = document.querySelector('#address');
  var widthPinMain = 76;
  var heightPinMain = 94;
  var widthMap = 1200;
  var heightMap = 700;
  var topPointMap = 180;
  var regex = /x: (\d{1,4}), y: (\d{1,3})/;
  var pins;
  var form = document.querySelector('.notice__form');
  var formFilter = document.querySelector('.tokyo__filters');
  var elem = formFilter.elements;
  var sameOffers;

  // элемент отображающий статус ответа с сервера
  var node = document.createElement('div');
  node.classList.add('notice__message');

  /**
   * Обрабатывает полученные данные с сервера
   * @param {Object} data
   */
  var successHandler = function (data) {
    offers = data.slice();
    sameOffers = offers;
    renderPins(offers.slice(0, 3));
  };

  /**
   * Отображает маркеры на карте
   * @param {Object} data
   */
  function renderPins(data) {
    var fragment = document.createDocumentFragment();
    window.pin.makeFragmentPinMap(data, fragment);

    while (pinMap.children.length > 1) {
      pinMap.removeChild(pinMap.lastChild);
    }

    pinMap.appendChild(fragment);

    pins = pinMap.querySelectorAll('.pin');
  }

  /**
   * Выводит сообщение об ошибке при неудачных попытках отправить или получить данные с сервера
   * @param {string} errorMessage
   */
  var errorHandler = function (errorMessage) {
    node.classList.add('notice__message--error');
    node.textContent = errorMessage;
    document.querySelector('.notice').insertAdjacentElement('afterbegin', node);
  };

  window.backend.load(successHandler, errorHandler);

  var housingType = elem['housing_type'];
  var housingPrice = elem['housing_price'];
  var housingRoomNumber = elem['housing_room-number'];
  var housingGuestsNumber = elem['housing_guests-number'];
  var housingFeatures = document.querySelector('.tokyo__filter-set').elements;

  var checkedHousingType = housingType.value;
  var checkedHousingPrice = housingPrice.value;
  var checkedRoomNumber = housingRoomNumber.value;
  var checkedGuestsNumber = housingGuestsNumber.value;
  var checkedFeatures = Array.prototype.filter.call(housingFeatures, function (it) {
    return it.checked;
  });

  var lastTimeout;
  /**
   * Функция устранения "дребезга"
   * @param {function} fun
   */
  var debounce = function (fun) {
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(fun, DEBOUNCE_INTERVAL);
  };

  // Отслеживаем изменения фильтра по типу жилья
  housingType.addEventListener('change', function () {
    checkedHousingType = housingType.value;
    debounce(updateOffers);
  });

  // Отслеживаем изменение фильтра по цене
  housingPrice.addEventListener('change', function () {
    checkedHousingPrice = housingPrice.value;
    debounce(updateOffers);
  });

  // Отслеживаем изменения фильтра по количеству комнат
  housingRoomNumber.addEventListener('change', function () {
    checkedRoomNumber = housingRoomNumber.value;
    debounce(updateOffers);
  });

  // Отслеживаем изменение фильтра по количеству гостей
  housingGuestsNumber.addEventListener('change', function () {
    checkedGuestsNumber = housingGuestsNumber.value;
    debounce(updateOffers);
  });

  // Отслеживаем изменение фильтра по features
  Array.prototype.forEach.call(housingFeatures, function (it) {
    it.addEventListener('change', function () {
      checkedFeatures = Array.prototype.filter.call(housingFeatures, function (iterator) {
        return iterator.checked;
      });
      debounce(updateOffers);
    });
  });

  /**
   * Обновление массива offers при изменении фильтров
   */
  function updateOffers() {
    sameOffers = offers.filter(updateCheckedHousingType)
        .filter(updateCheckedHousingPrice)
        .filter(updateCheckedRoomNumber)
        .filter(updateCheckedGuestsNumber)
        .filter(updateCheckedFeatures);

    renderPins(sameOffers);
  }

  /**
   * Фильтр объявлений по типу жилья
   * @param {Object} it
   * @return {boolean}
   */
  function updateCheckedHousingType(it) {
    if (checkedHousingType === 'any') {
      return true;
    } else {
      return it.offer.type === checkedHousingType;
    }
  }

  /**
   * Фильтр объявлений по цене
   * @param {Object} it
   * @return {boolean}
   */
  function updateCheckedHousingPrice(it) {
    if (checkedHousingPrice === 'middle') {
      return it.offer.price >= 10000 && it.offer.price <= 50000;
    } else if (checkedHousingPrice === 'low') {
      return it.offer.price >= 0 && it.offer.price < 10000;
    } else if (checkedHousingPrice === 'high') {
      return it.offer.price > 50000;
    } else {
      return it.offer.price > 0;
    }
  }

  /**
   * Фильтр объявлений по количеству комнат
   * @param {Object} it
   * @return {boolean}
   */
  function updateCheckedRoomNumber(it) {
    if (parseInt(checkedRoomNumber, 10) === 1) {
      return it.offer.rooms === 1;
    } else if (parseInt(checkedRoomNumber, 10) === 2) {
      return it.offer.rooms === 2;
    } else if (parseInt(checkedRoomNumber, 10) === 3) {
      return it.offer.rooms === 3;
    } else {
      return it.offer.rooms > 0;
    }
  }

  /**
   * Фильтр объявлений по количеству гостей
   * @param {Object} it
   * @return {boolean}
   */
  function updateCheckedGuestsNumber(it) {
    if (parseInt(checkedGuestsNumber, 10) === 1) {
      return it.offer.guests === 1;
    } else if (parseInt(checkedGuestsNumber, 10) === 2) {
      return it.offer.guests === 2;
    } else {
      return it.offer.guests > 0;
    }
  }

  /**
   * Фильтр объявлений по features
   * @param {Object} it
   * @return {boolean}
   */
  function updateCheckedFeatures(it) {
    if (checkedFeatures.length === 0) {
      return true;
    } else {
      return checkedFeatures.some(function (item) {
        return it.offer.features.indexOf(item.value) !== -1;
      });
    }
  }

  // Отправляем данные формы на сервер, выводим сообщение об успешной отправке и сбрасываем значения формы по умолчанию
  form.addEventListener('submit', function (event) {
    window.backend.save(new FormData(form), function () {
      node.classList.add('notice__message--success');
      node.textContent = 'Форма успешно отправлена';
      document.querySelector('.notice').insertAdjacentElement('afterbegin', node);

      form.reset();
    }, errorHandler);

    event.preventDefault();
  });

  // отслеживаем click на карте и по event.target определяем на каком элементе произошло событие
  pinMap.addEventListener('click', function (event) {
    window.showCard(event, pins, sameOffers);
  });
  pinMap.addEventListener('keydown', onDialogEnterPress);

  // Добавляем события на перемещение пина заполняемого объявления и изменения координат пина в поле адреса
  pinMain.addEventListener('mousedown', movePin);
  addressInput.addEventListener('change', changeAddressInput);

  /**
   * Изменение положения пина при вводе координат в поле адрес
   */
  function changeAddressInput() {
    var valueAddressInput = addressInput.value;

    if (formatIsValid(valueAddressInput, regex)) {
      var match = regex.exec(valueAddressInput);
      var top = match[2];
      var left = match[1];

      if (left > widthMap - widthPinMain) {
        left = widthMap;
      }

      if (left < -widthPinMain / 2) {
        left = 0;
      }

      if (top < topPointMap - heightPinMain) {
        top = topPointMap;
      }

      if (top > heightMap) {
        top = heightMap;
      }

      pinMain.style.top = top - heightPinMain + 'px';
      pinMain.style.left = left - widthPinMain / 2 + 'px';

      addressInput.value = 'x: ' + left + ', y: ' + top;
    } else {
      addressInput.value = '';
    }
  }

  /**
   * Проверяет строку на валидность
   * @param {string}str
   * @param {string} reg
   * @return {boolean}
   */
  function formatIsValid(str, reg) {
    return reg.test(str);
  }

  /**
   * Перемещение пина заполняемого объявдения
   * @param {Object}event
   */
  function movePin(event) {
    event.preventDefault();

    var startCoords = {
      x: event.clientX,
      y: event.clientY
    };

    pinMain.style.left = pinMain.offsetLeft + 'px';
    pinMain.style.top = pinMain.offsetTop + 'px';

    var onMouseMove = function (moveEvent) {
      moveEvent.preventDefault();

      var shift = {
        x: startCoords.x - moveEvent.clientX,
        y: startCoords.y - moveEvent.clientY
      };

      startCoords = {
        x: moveEvent.clientX,
        y: moveEvent.clientY
      };

      pinMain.style.left = pinMain.offsetLeft - shift.x + 'px';
      pinMain.style.top = pinMain.offsetTop - shift.y + 'px';

      addressInput.value = 'x: ' + (parseInt(pinMain.style.left, 10) + widthPinMain / 2) + ', y: ' + (parseInt(pinMain.style.top, 10) + heightPinMain);
    };

    var onMouseUp = function (upEvent) {
      upEvent.preventDefault();

      if (parseInt(pinMain.style.left, 10) > widthMap - widthPinMain / 2) {
        pinMain.style.left = (widthMap - widthPinMain / 2) + 'px';
      }

      if (parseInt(pinMain.style.left, 10) < -widthPinMain / 2) {
        pinMain.style.left = -widthPinMain / 2 + 'px';
      }

      if (parseInt(pinMain.style.top, 10) < topPointMap - heightPinMain) {
        pinMain.style.top = (topPointMap - heightPinMain) + 'px';
      }

      if (parseInt(pinMain.style.top, 10) > heightMap - heightPinMain) {
        pinMain.style.top = (heightMap - heightPinMain) + 'px';
      }

      addressInput.value = 'x: ' + (parseInt(pinMain.style.left, 10) + widthPinMain / 2) + ', y: ' + (parseInt(pinMain.style.top, 10) + heightPinMain);

      map.removeEventListener('mousemove', onMouseMove);
      map.removeEventListener('mouseup', onMouseUp);
    };

    map.addEventListener('mousemove', onMouseMove);
    map.addEventListener('mouseup', onMouseUp);
  }

  /**
   * Вызывает функцию показа объявления по нажатию enter
   * @param {Object} event
   */
  function onDialogEnterPress(event) {
    if (event.keyCode === ENTER_KEYCODE) {
      window.showCard(event.target, pins, offers);
    }
  }

})();
