/*
 * @Author: chenjiao25322
 * @Date: 2019-08-08 17:12:55
 * @LastEditors: chenjiao25322
 * @LastEditTime: 2019-08-08 17:24:40
 * @Description: 描述信息
 */

const { override, fixBabelImports } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: 'css',
  })
);