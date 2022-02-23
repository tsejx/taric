const assert = require('assert');

describe('webpack.base.js test case', () => {
  const baseConfig = require('../../lib/webpack.base.js');

  it('entry', () => {
    console.log(baseConfig.entry);
    assert.equal(
      baseConfig.entry.index,
      '/Users/mrsingsing/mrsingsing/taric/test/smoke/template/src/index/index.js'
    );
    assert.equal(
      baseConfig.entry.search,
      '/Users/mrsingsing/mrsingsing/taric/test/smoke/template/src/search/index.js'
    );
  });
});
