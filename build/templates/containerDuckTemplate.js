"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});
var getTemplate = function getTemplate(name) {
	return "// @flow\nimport React, { Component} from 'react';\nimport PropTypes from 'prop-types';\nimport { connect } from 'react-redux';\nimport { bindActionCreators } from 'redux';\nimport " + name + "View from '../components/" + name + "';\nimport { actions } from '../ducks/" + name + "Duck';\n\nexport class " + name + " extends Component {\n\n\tstate = {};\n\n\trender() {\n\t\treturn (\n\t\t\t<" + name + "View />\n\t\t);\n\t}\n}\n\n\n" + name + ".defaultProps = {};\n" + name + ".propTypes = {};\n\nfunction _mapStoreToProps(state, ownProps) {\n\treturn {};\n}\nfunction _mapDispatchToProps(dispatch) {\n\treturn bindActionCreators({\n\t\t...actions,\n\t}, dispatch);\n}\n\nexport default connect(_mapStoreToProps, _mapDispatchToProps)(" + name + ");\n\n";
};

exports.default = getTemplate;
//# sourceMappingURL=containerDuckTemplate.js.map