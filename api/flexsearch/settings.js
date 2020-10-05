var FlexSearch = require("./flexsearch.min.js");

exports.index = new FlexSearch({
	threshold: 0,
	resolution: 16,
	depth: 3,
	async: false,
	worker: false,
	cache: true,
	doc: {
		id: "id",
		field: {
			definition: {
				encode: "advanced",
				tokenize: "strict",
				threshold: 16,
			},
			simplified: {
				encode: false,
				tokenize: function (str) {
					return str.replace(/[\x00-\x7F]/g, "").split("");
				},
			},
			traditional: {
				encode: false,
				tokenize: function (str) {
					return str.replace(/[\x00-\x7F]/g, "").split("");
				},
			},
			pinyin: {
				encode: "simple",
				tokenize: "strict",
			},
			toneless_pinyin: {
				encode: "simple",
				tokenize: "strict",
			},
		},
	},
});
