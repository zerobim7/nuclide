'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DevicePanel = undefined;

var _rxjsBundlesRxMinJs = require('rxjs/bundles/Rx.min.js');

var _Icon;

function _load_Icon() {
  return _Icon = require('../../../nuclide-ui/Icon');
}

var _react = _interopRequireDefault(require('react'));

var _InfoTable;

function _load_InfoTable() {
  return _InfoTable = require('./InfoTable');
}

var _ProcessTable;

function _load_ProcessTable() {
  return _ProcessTable = require('./ProcessTable');
}

var _TaskButton;

function _load_TaskButton() {
  return _TaskButton = require('./TaskButton');
}

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the license found in the LICENSE file in
 * the root directory of this source tree.
 *
 * 
 * @format
 */

class DevicePanel extends _react.default.Component {

  _createInfoTables() {
    return Array.from(this.props.infoTables.entries()).map(([title, infoTable]) => _react.default.createElement(
      'div',
      { className: 'block', key: title },
      _react.default.createElement((_InfoTable || _load_InfoTable()).InfoTable, { title: title, table: infoTable })
    ));
  }

  _createProcessTable() {
    return _react.default.createElement(
      'div',
      { className: 'block', key: 'process-table' },
      _react.default.createElement((_ProcessTable || _load_ProcessTable()).ProcessTable, {
        processes: this.props.processes,
        killProcess: this.props.killProcess,
        startFetchingProcesses: this.props.startFetchingProcesses
      })
    );
  }

  _getTasks() {
    const tasks = this.props.deviceTasks.map(task => _react.default.createElement((_TaskButton || _load_TaskButton()).TaskButton, { task: task, key: task.name }));
    return _react.default.createElement(
      'div',
      { className: 'block nuclide-device-panel-tasks-container' },
      tasks
    );
  }

  _getBackButton() {
    return _react.default.createElement(
      'div',
      { className: 'block' },
      _react.default.createElement(
        'span',
        {
          className: 'nuclide-device-panel-link-with-icon',
          onClick: () => this.props.goToRootPanel() },
        _react.default.createElement(
          (_Icon || _load_Icon()).Icon,
          { icon: 'chevron-left' },
          'Choose another device'
        )
      )
    );
  }

  render() {
    return _react.default.createElement(
      'div',
      null,
      this._getBackButton(),
      this._getTasks(),
      this._createInfoTables(),
      this._createProcessTable()
    );
  }
}
exports.DevicePanel = DevicePanel;