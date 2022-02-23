import { helloworld } from './helloworld';
import '../../common';
document.write(helloworld());

if (module.hot) {
  module.hot.accept('./helloworld.js', function () {
    console.log('Accepting the updated printMe module!');
    document.write(helloworld());
  });
}
