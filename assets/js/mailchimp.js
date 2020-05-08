var mailchimpConfig = {
  baseUrl: 'cardinfo.us20.list-manage.com',
  uuid: 'ff4082dcfa8fb2e1fd3cd3901',
  lid: '9eec8b2c19',
  uniqueMethods: true,
};

var chimpPopupLoader = document.createElement('script');
chimpPopupLoader.src =
  '//downloads.mailchimp.com/js/signup-forms/popup/unique-methods/embed.js';
chimpPopupLoader.setAttribute(
  'data-dojo-config',
  'usePlainJson: true, isDebug: false'
);

var chimpPopup = document.createElement('script');
chimpPopup.appendChild(
  document.createTextNode(
    'window.dojoRequire(["mojo/signup-forms/Loader"], function (L) { L.start({"baseUrl": "' +
      mailchimpConfig.baseUrl +
      '", "uuid": "' +
      mailchimpConfig.uuid +
      '", "lid": "' +
      mailchimpConfig.lid +
      '", "uniqueMethods": "' +
      mailchimpConfig.uniqueMethods +
      '"})});'
  )
);
document.addEventListener('DOMContentLoaded', function () {
  document.body.appendChild(chimpPopupLoader);
  window.onload = function () {
    document.body.appendChild(chimpPopup);
  };
});
