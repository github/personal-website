'use strict';

(function () {
  // Валидация формы
  var form = document.querySelector('.notice__form');
  var elem = form.elements;
  var addressInput = elem.address;
  var priceInput = elem.price;
  var titleInput = elem.title;
  var timeinSelect = elem.timein;
  var timeoutSelect = elem.timeout;
  var typeSelect = elem.type;
  var roomsSelect = elem.rooms;
  var capacitySelect = elem.capacity;

  var timeinSelectOptions = timeinSelect.options;
  var timeoutSelectOptions = timeoutSelect.options;

  var typeSelectOptions = typeSelect.options;
  var minPrice = [1000, 0, 5000, 10000];

  var roomsSelectOptions = roomsSelect.options;
  var capacitySelectOptions = capacitySelect.options;

  var syncValueTime = function (element) {
    element.selected = true;
  };

  var syncValueType = function (element, value) {
    element.value = value;
    element.setAttribute('min', value);
  };

  var syncValueRooms = function (element, value) {
    // если поле содержит подстроку "комнат"
    if (!(~element.text.indexOf('комнат'))) {
      capacitySelect.options[3 - value].selected = true;
    } else {
      if (value === '2' && +roomsSelect.value < 2) {
        roomsSelect.options[1].selected = true;
      } else if (value === '3' && +roomsSelect.value < 3) {
        roomsSelect.options[2].selected = true;
      } else if (value === '0') {
        roomsSelect.options[3].selected = true;
      }
    }
  };

  // Изменяет время выезда в зависимости от времени заезда и наоборот
  window.synchronizeFields(timeinSelect, timeoutSelect, timeinSelectOptions, timeoutSelectOptions, syncValueTime);

  // Устанавливает минимальное значение цены в зависимости от типа жилья
  window.synchronizeFields(typeSelect, priceInput, typeSelectOptions, minPrice, syncValueType);

  // Ставит значение количества мест по умолчанию при выборе количества комнат и наоборот
  window.synchronizeFields(roomsSelect, capacitySelect, roomsSelectOptions, capacitySelectOptions, syncValueRooms);

  // Проверка поля адреса на валидность
  addressInput.addEventListener('invalid', function () {
    if (!addressInput.validity.valid) {
      addressInput.setCustomValidity('Введите в формате x: число, y: число');
    } else {
      addressInput.setCustomValidity('');
    }
  });

  // Проверка заголовка объявления на валидность
  titleInput.addEventListener('invalid', function () {
    if (!titleInput.validity.valid) {
      if (titleInput.validity.tooShort) {
        titleInput.setCustomValidity('Заголовок должен состоять минимум из 30 символов, сейчас длина ' + titleInput.value.length);
      } else if (titleInput.validity.tooLong) {
        titleInput.setCustomValidity('Заголовок не должен превышать 100 символов, сейчас длина ' + titleInput.value.length);
      } else if (titleInput.validity.valueMissing) {
        titleInput.setCustomValidity('Обязательное поле');
      }
    } else {
      titleInput.setCustomValidity('');
    }
  });

  // Если заголовок объявления не валиден - обводится красной рамкой
  titleInput.addEventListener('blur', function () {
    if (!titleInput.validity.valid) {
      titleInput.classList.add('error');
    } else {
      titleInput.classList.remove('error');
    }
  });

  // Если адрес не валиден - обводится красной рамкой
  addressInput.addEventListener('blur', function () {
    if (!addressInput.validity.valid) {
      addressInput.classList.add('error');
    } else {
      addressInput.classList.remove('error');
    }
  });

  // Валидация заголовка объявления для браузера Edge
  titleInput.addEventListener('input', function (event) {
    var target = event.target;
    if (target.value.length < 30) {
      target.setCustomValidity('Заголовок должен состоять минимум из 30 символов, сейчас длина ' + target.value.length);
    } else if (target.value.length > 100) {
      target.setCustomValidity('Заголовок не должен превышать 100 символов, сейчас длина ' + target.value.length);
    } else {
      target.setCustomValidity('');
    }
  });

})();
