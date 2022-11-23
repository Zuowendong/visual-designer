ace.define(
	'ace/snippets/javascript.snippets',
	['require', 'exports', 'module'],
	function (require, exports, module) {
		module.exports =
			'# Prototype\nsnippet proto\n\t${1:class_name}.prototype.${2:method_name} = function(${3:first_argument}) {\n\t\t${4:// body...}\n\t};\n# Function\nsnippet fun\n\tfunction ${1?:function_name}(${2:argument}) {\n\t\t${3:// body...}\n\t}\n# Anonymous Function\nregex /((=)\\s*|(:)\\s*|(\\()|\\b)/f/(\\))?/\nsnippet f\n\tfunction${M1?: ${1:functionName}}($2) {\n\t\t${0:$TM_SELECTED_TEXT}\n\t}${M2?;}${M3?,}${M4?)}\n# Immediate function\ntrigger \\(?f\\(\nendTrigger \\)?\nsnippet f(\n\t(function(${1}) {\n\t\t${0:${TM_SELECTED_TEXT:/* code */}}\n\t}(${1}));\n# if\nsnippet if\n\tif (${1:true}) {\n\t\t${0}\n\t}\n# if ... else\nsnippet ife\n\tif (${1:true}) {\n\t\t${2}\n\t} else {\n\t\t${0}\n\t}\n# tertiary conditional\nsnippet ter\n\t${1:/* condition */} ? ${2:a} : ${3:b}\n# switch\nsnippet switch\n\tswitch (${1:expression}) {\n\t\tcase \'${3:case}\':\n\t\t\t${4:// code}\n\t\t\tbreak;\n\t\t${5}\n\t\tdefault:\n\t\t\t${2:// code}\n\t}\n# case\nsnippet case\n\tcase \'${1:case}\':\n\t\t${2:// code}\n\t\tbreak;\n\t${3}\n\n# while (...) {...}\nsnippet wh\n\twhile (${1:/* condition */}) {\n\t\t${0:/* code */}\n\t}\n# try\nsnippet try\n\ttry {\n\t\t${0:/* code */}\n\t} catch (e) {}\n# do...while\nsnippet do\n\tdo {\n\t\t${2:/* code */}\n\t} while (${1:/* condition */});\n# Object Method\nsnippet :f\nregex /([,{[])|^\\s*/:f/\n\t${1:method_name}: function(${2:attribute}) {\n\t\t${0}\n\t}${3:,}\n# setTimeout function\nsnippet setTimeout\nregex /\\b/st|timeout|setTimeo?u?t?/\n\tsetTimeout(function() {${3:$TM_SELECTED_TEXT}}, ${1:10});\n# Get Elements\nsnippet gett\n\tgetElementsBy${1:TagName}(\'${2}\')${3}\n# Get Element\nsnippet get\n\tgetElementBy${1:Id}(\'${2}\')${3}\n# console.log (Firebug)\nsnippet cl\n\tconsole.log(${1});\n# return\nsnippet ret\n\treturn ${1:result}\n# for (property in object ) { ... }\nsnippet fori\n\tfor (var ${1:prop} in ${2:Things}) {\n\t\t${0:$2[$1]}\n\t}\n# hasOwnProperty\nsnippet has\n\thasOwnProperty(${1})\n# docstring\nsnippet /**\n\t/**\n\t * ${1:description}\n\t *\n\t */\nsnippet @par\nregex /^\\s*\\*\\s*/@(para?m?)?/\n\t@param {${1:type}} ${2:name} ${3:description}\nsnippet @ret\n\t@return {${1:type}} ${2:description}\n# JSON.parse\nsnippet jsonp\n\tJSON.parse(${1:jstr});\n# JSON.stringify\nsnippet jsons\n\tJSON.stringify(${1:object});\n# self-defining function\nsnippet sdf\n\tvar ${1:function_name} = function(${2:argument}) {\n\t\t${3:// initial code ...}\n\n\t\t$1 = function($2) {\n\t\t\t${4:// main code}\n\t\t};\n\t}\n# singleton\nsnippet sing\n\tfunction ${1:Singleton} (${2:argument}) {\n\t\t// the cached instance\n\t\tvar instance;\n\n\t\t// rewrite the constructor\n\t\t$1 = function $1($2) {\n\t\t\treturn instance;\n\t\t};\n\t\t\n\t\t// carry over the prototype properties\n\t\t$1.prototype = this;\n\n\t\t// the instance\n\t\tinstance = new $1();\n\n\t\t// reset the constructor pointer\n\t\tinstance.constructor = $1;\n\n\t\t${3:// code ...}\n\n\t\treturn instance;\n\t}\n# class\nsnippet class\nregex /^\\s*/clas{0,2}/\n\tvar ${1:class} = function(${20}) {\n\t\t$40$0\n\t};\n\t\n\t(function() {\n\t\t${60:this.prop = ""}\n\t}).call(${1:class}.prototype);\n\t\n\texports.${1:class} = ${1:class};\n# \nsnippet for-\n\tfor (var ${1:i} = ${2:Things}.length; ${1:i}--; ) {\n\t\t${0:${2:Things}[${1:i}];}\n\t}\n# for (...) {...}\nsnippet for\n\tfor (var ${1:i} = 0; $1 < ${2:Things}.length; $1++) {\n\t\t${3:$2[$1]}$0\n\t}\n# for (...) {...} (Improved Native For-Loop)\nsnippet forr\n\tfor (var ${1:i} = ${2:Things}.length - 1; $1 >= 0; $1--) {\n\t\t${3:$2[$1]}$0\n\t}\n\n\n#modules\nsnippet def\n\tdefine(function(require, exports, module) {\n\t"use strict";\n\tvar ${1/.*\\///} = require("${1}");\n\t\n\t$TM_SELECTED_TEXT\n\t});\nsnippet req\nguard ^\\s*\n\tvar ${1/.*\\///} = require("${1}");\n\t$0\nsnippet requ\nguard ^\\s*\n\tvar ${1/.*\\/(.)/\\u$1/} = require("${1}").${1/.*\\/(.)/\\u$1/};\n\t$0\n';
	}
);

ace.define(
	'ace/snippets/javascript',
	['require', 'exports', 'module', 'ace/snippets/javascript.snippets'],
	function (require, exports, module) {
		'use strict';
		exports.snippetText = require('./javascript.snippets');
		exports.scope = 'javascript';
	}
);
(function () {
	ace.require(['ace/snippets/javascript'], function (m) {
		if (typeof module == 'object' && typeof exports == 'object' && module) {
			module.exports = m;
		}
	});
})();
