'use strict';

(function () {

  /**
   * Создаёт элемент отображающий маркер на карте
   * @param {Object} object
   * @param {Object} element
   */
  function makeFragmentPinMap(object, element) {
    for (var i = 0; i < object.length; i++) {
      var newElement = document.createElement('div');
      var imgElement = document.createElement('img');
      var imageWidth = 40;
      var imageHeight = 40;

      newElement.classList.add('pin');
      newElement.setAttribute('tabindex', '0');
      newElement.style.left = object[i].location.x + imageWidth / 2 + 'px';
      newElement.style.top = object[i].location.y + imageHeight + 'px';

      imgElement.classList.add('rounded');
      imgElement.style.width = '40px';
      imgElement.style.height = '40px';
      imgElement.setAttribute('src', object[i].author.avatar);

      newElement.appendChild(imgElement);
      element.appendChild(newElement);
    }
  }

  window.pin = {
    makeFragmentPinMap: makeFragmentPinMap
  };

})();
