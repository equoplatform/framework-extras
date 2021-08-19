/****************************************************************************
**
** Copyright (C) 2021 Equo
**
** This file is part of Equo Framework.
**
** Commercial License Usage
** Licensees holding valid commercial Equo licenses may use this file in
** accordance with the commercial license agreement provided with the
** Software or, alternatively, in accordance with the terms contained in
** a written agreement between you and Equo. For licensing terms
** and conditions see https://www.equoplatform.com/terms.
**
** GNU General Public License Usage
** Alternatively, this file may be used under the terms of the GNU
** General Public License version 3 as published by the Free Software
** Foundation. Please review the following
** information to ensure the GNU General Public License requirements will
** be met: https://www.gnu.org/licenses/gpl-3.0.html.
**
****************************************************************************/

import Vue from 'vue'

import wrap from '@vue/web-component-wrapper';
import EquoToolitem from './components/Toolitem';
import EquoToolbar from './components/Toolbar';
import EquoToolicon from './components/Toolicon';
import BootstrapVue from 'bootstrap-vue';
Vue.use(BootstrapVue);

const WrappedElement = wrap(Vue, EquoToolitem);
const WrappedElement2 = wrap(Vue,EquoToolbar);
const WrappedElement3 = wrap(Vue,EquoToolicon);

window.customElements.define('equo-toolitem', WrappedElement);
window.customElements.define('equo-toolbar',WrappedElement2);
window.customElements.define('equo-toolicon',WrappedElement3);
