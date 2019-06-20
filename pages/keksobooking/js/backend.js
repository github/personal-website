'use strict';

(function () {

  //var SERVER_URL = 'https://1510.dump.academy/keksobooking';
  var SERVER_URL = 'https://js.dump.academy/keksobooking';

  /**
   * Вешает обработчики событий load, error, timeout на объект XMLHttpRequest
   * @param {function} onLoad
   * @param {function} onError
   * @return {XMLHttpRequest}
   */
  var setup = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      switch (xhr.status) {
        case 200:
          onLoad(xhr.response);
          break;
        default:
          onError('Неизвестный статус: ' + xhr.status + ' ' + xhr.statusText);
      }
    });

    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    xhr.timeout = 10000;

    return xhr;
  };

  /**
   * Загрузка и отправка данных на сервер
   * @type {{load: Window.backend.load, save: Window.backend.save}}
   */
  window.backend = {
    load: function (onLoad, onError) {
      var xhr = setup(onLoad, onError);

      xhr.open('GET', SERVER_URL + '/data');
      xhr.send();
    },
    save: function (data, onLoad, onError) {
      var xhr = setup(onLoad, onError);

      xhr.open('POST', SERVER_URL);
      xhr.send(data);
    }
  };

})();
