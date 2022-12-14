!(function (a) {
	function f(a) {
		return new RegExp("^" + a + "$");
	}
	function g(a, b) {
		for (var c = Array.prototype.slice.call(arguments).splice(2), d = a.split("."), e = d.pop(), f = 0; f < d.length; f++) b = b[d[f]];
		return b[e].apply(this, c);
	}
	var b = [],
		c = {
			options: {
				prependExistingHelpBlock: !1,
				sniffHtml: !0,
				preventSubmit: !0,
				submitError: !1,
				submitSuccess: !1,
				semanticallyStrict: !1,
				autoAdd: { helpBlocks: !0 },
				filter: function () {
					return !0;
				},
			},
			methods: {
				init: function (f) {
					var g = a.extend(!0, {}, c);
					g.options = a.extend(!0, g.options, f);
					var h = this,
						i = a.unique(
							h
								.map(function () {
									return a(this).parents("form")[0];
								})
								.toArray()
						);
					return (
						a(i).bind("submit", function (b) {
							var c = a(this),
								d = 0,
								e = c.find("input,textarea,select").not("[type=submit],[type=image]").filter(g.options.filter);
							e.trigger("submit.validation").trigger("validationLostFocus.validation"),
								e.each(function (b, c) {
									var e = a(c),
										f = e.parents(".form-group, .checkbox").first();
									f.hasClass("warning") && (f.removeClass("warning").addClass("error"), d++);
								}),
								e.trigger("validationLostFocus.validation"),
								d
									? (g.options.preventSubmit && b.preventDefault(),
									  c.addClass("error"),
									  a.isFunction(g.options.submitError) &&
											g.options.submitError(c, b, e.jqBootstrapValidation("collectErrors", !0)))
									: (c.removeClass("error"), a.isFunction(g.options.submitSuccess) && g.options.submitSuccess(c, b));
						}),
						this.each(function () {
							var c = a(this),
								f = c.parents(".form-group, .checkbox").first(),
								h = f.find(".help-block").first(),
								i = c.parents("form").first(),
								j = [];
							if (
								(!h.length &&
									g.options.autoAdd &&
									g.options.autoAdd.helpBlocks &&
									((h = a('<div class="help-block" />')), f.append(h), b.push(h[0])),
								g.options.sniffHtml)
							) {
								var k = "";
								if (
									(void 0 !== c.attr("pattern") &&
										((k = "Not in the expected format<!-- data-validation-pattern-message to override -->"),
										c.data("validationPatternMessage") && (k = c.data("validationPatternMessage")),
										c.data("validationPatternMessage", k),
										c.data("validationPatternRegex", c.attr("pattern"))),
									void 0 !== c.attr("max") || void 0 !== c.attr("aria-valuemax"))
								) {
									var l = c.attr(void 0 !== c.attr("max") ? "max" : "aria-valuemax");
									(k = "Too high: Maximum of '" + l + "'<!-- data-validation-max-message to override -->"),
										c.data("validationMaxMessage") && (k = c.data("validationMaxMessage")),
										c.data("validationMaxMessage", k),
										c.data("validationMaxMax", l);
								}
								if (void 0 !== c.attr("min") || void 0 !== c.attr("aria-valuemin")) {
									var m = c.attr(void 0 !== c.attr("min") ? "min" : "aria-valuemin");
									(k = "Too low: Minimum of '" + m + "'<!-- data-validation-min-message to override -->"),
										c.data("validationMinMessage") && (k = c.data("validationMinMessage")),
										c.data("validationMinMessage", k),
										c.data("validationMinMin", m);
								}
								void 0 !== c.attr("maxlength") &&
									((k =
										"Too long: Maximum of '" +
										c.attr("maxlength") +
										"' characters<!-- data-validation-maxlength-message to override -->"),
									c.data("validationMaxlengthMessage") && (k = c.data("validationMaxlengthMessage")),
									c.data("validationMaxlengthMessage", k),
									c.data("validationMaxlengthMaxlength", c.attr("maxlength"))),
									void 0 !== c.attr("minlength") &&
										((k =
											"Too short: Minimum of '" +
											c.attr("minlength") +
											"' characters<!-- data-validation-minlength-message to override -->"),
										c.data("validationMinlengthMessage") && (k = c.data("validationMinlengthMessage")),
										c.data("validationMinlengthMessage", k),
										c.data("validationMinlengthMinlength", c.attr("minlength"))),
									(void 0 !== c.attr("required") || void 0 !== c.attr("aria-required")) &&
										((k = g.builtInValidators.required.message),
										c.data("validationRequiredMessage") && (k = c.data("validationRequiredMessage")),
										c.data("validationRequiredMessage", k)),
									void 0 !== c.attr("type") &&
										"number" === c.attr("type").toLowerCase() &&
										((k = g.builtInValidators.number.message),
										c.data("validationNumberMessage") && (k = c.data("validationNumberMessage")),
										c.data("validationNumberMessage", k)),
									void 0 !== c.attr("type") &&
										"email" === c.attr("type").toLowerCase() &&
										((k = "Not a valid email address<!-- data-validator-validemail-message to override -->"),
										c.data("validationValidemailMessage")
											? (k = c.data("validationValidemailMessage"))
											: c.data("validationEmailMessage") && (k = c.data("validationEmailMessage")),
										c.data("validationValidemailMessage", k)),
									void 0 !== c.attr("minchecked") &&
										((k =
											"Not enough options checked; Minimum of '" +
											c.attr("minchecked") +
											"' required<!-- data-validation-minchecked-message to override -->"),
										c.data("validationMincheckedMessage") && (k = c.data("validationMincheckedMessage")),
										c.data("validationMincheckedMessage", k),
										c.data("validationMincheckedMinchecked", c.attr("minchecked"))),
									void 0 !== c.attr("maxchecked") &&
										((k =
											"Too many options checked; Maximum of '" +
											c.attr("maxchecked") +
											"' required<!-- data-validation-maxchecked-message to override -->"),
										c.data("validationMaxcheckedMessage") && (k = c.data("validationMaxcheckedMessage")),
										c.data("validationMaxcheckedMessage", k),
										c.data("validationMaxcheckedMaxchecked", c.attr("maxchecked")));
							}
							void 0 !== c.data("validation") && (j = c.data("validation").split(",")),
								a.each(c.data(), function (a) {
									var c = a.replace(/([A-Z])/g, ",$1").split(",");
									"validation" === c[0] && c[1] && j.push(c[1]);
								});
							var n = j,
								o = [];
							do
								a.each(j, function (a, b) {
									j[a] = d(b);
								}),
									(j = a.unique(j)),
									(o = []),
									a.each(n, function (b, e) {
										if (void 0 !== c.data("validation" + e + "Shortcut"))
											a.each(c.data("validation" + e + "Shortcut").split(","), function (a, b) {
												o.push(b);
											});
										else if (g.builtInValidators[e.toLowerCase()]) {
											var f = g.builtInValidators[e.toLowerCase()];
											"shortcut" === f.type.toLowerCase() &&
												a.each(f.shortcut.split(","), function (a, b) {
													(b = d(b)), o.push(b), j.push(b);
												});
										}
									}),
									(n = o);
							while (n.length > 0);
							var p = {};
							a.each(j, function (b, e) {
								var f = c.data("validation" + e + "Message"),
									h = void 0 !== f,
									i = !1;
								if (
									((f = f
										? f
										: "'" +
										  e +
										  "' validation failed <!-- Add attribute 'data-validation-" +
										  e.toLowerCase() +
										  "-message' to input to change this message -->"),
									a.each(g.validatorTypes, function (b, g) {
										void 0 === p[b] && (p[b] = []),
											i ||
												void 0 === c.data("validation" + e + d(g.name)) ||
												(p[b].push(a.extend(!0, { name: d(g.name), message: f }, g.init(c, e))), (i = !0));
									}),
									!i && g.builtInValidators[e.toLowerCase()])
								) {
									var j = a.extend(!0, {}, g.builtInValidators[e.toLowerCase()]);
									h && (j.message = f);
									var k = j.type.toLowerCase();
									"shortcut" === k
										? (i = !0)
										: a.each(g.validatorTypes, function (b, f) {
												void 0 === p[b] && (p[b] = []),
													i ||
														k !== b.toLowerCase() ||
														(c.data("validation" + e + d(f.name), j[f.name.toLowerCase()]),
														p[k].push(a.extend(j, f.init(c, e))),
														(i = !0));
										  });
								}
								i || a.error("Cannot find validation info for '" + e + "'");
							}),
								h.data("original-contents", h.data("original-contents") ? h.data("original-contents") : h.html()),
								h.data("original-role", h.data("original-role") ? h.data("original-role") : h.attr("role")),
								f.data("original-classes", f.data("original-clases") ? f.data("original-classes") : f.attr("class")),
								c.data(
									"original-aria-invalid",
									c.data("original-aria-invalid") ? c.data("original-aria-invalid") : c.attr("aria-invalid")
								),
								c.bind("validation.validation", function (b, d) {
									var f = e(c),
										h = [];
									return (
										a.each(p, function (b, e) {
											(f ||
												f.length ||
												(d && d.includeEmpty) ||
												(g.validatorTypes[b].blockSubmit && d && d.submitting)) &&
												a.each(e, function (a, d) {
													g.validatorTypes[b].validate(c, f, d) && h.push(d.message);
												});
										}),
										h
									);
								}),
								c.bind("getValidators.validation", function () {
									return p;
								}),
								c.bind("submit.validation", function () {
									return c.triggerHandler("change.validation", { submitting: !0 });
								}),
								c.bind(
									["keyup", "focus", "blur", "click", "keydown", "keypress", "change"].join(".validation ") +
										".validation",
									function (b, d) {
										var j = e(c),
											k = [];
										f.find("input,textarea,select").each(function (b, e) {
											var f = k.length;
											if (
												(a.each(a(e).triggerHandler("validation.validation", d), function (a, b) {
													k.push(b);
												}),
												k.length > f)
											)
												a(e).attr("aria-invalid", "true");
											else {
												var g = c.data("original-aria-invalid");
												a(e).attr("aria-invalid", void 0 !== g ? g : !1);
											}
										}),
											i
												.find("input,select,textarea")
												.not(c)
												.not('[name="' + c.attr("name") + '"]')
												.trigger("validationLostFocus.validation"),
											(k = a.unique(k.sort())),
											k.length
												? (f.removeClass("success error").addClass("warning"),
												  h.html(
														g.options.semanticallyStrict && 1 === k.length
															? k[0] + (g.options.prependExistingHelpBlock ? h.data("original-contents") : "")
															: '<ul class="list-unstyled alert alert-warning" role="alert"><li>' +
																	k.join("</li><li>") +
																	"</li></ul>" +
																	(g.options.prependExistingHelpBlock ? h.data("original-contents") : "")
												  ))
												: (f.removeClass("warning error success"),
												  j.length > 0 && f.addClass("success"),
												  h.html(h.data("original-contents"))),
											"blur" === b.type && f.removeClass("success");
									}
								),
								c.bind("validationLostFocus.validation", function () {
									f.removeClass("success");
								});
						})
					);
				},
				destroy: function () {
					return this.each(function () {
						var c = a(this),
							d = c.parents(".form-group, .checkbox").first(),
							e = d.find(".help-block").first();
						c.unbind(".validation"),
							e.html(e.data("original-contents")),
							d.attr("class", d.data("original-classes")),
							c.attr("aria-invalid", c.data("original-aria-invalid")),
							e.attr("role", c.data("original-role")),
							b.indexOf(e[0]) > -1 && e.remove();
					});
				},
				collectErrors: function () {
					var c = {};
					return (
						this.each(function (b, d) {
							var e = a(d),
								f = e.attr("name"),
								g = e.triggerHandler("validation.validation", { includeEmpty: !0 });
							c[f] = a.extend(!0, g, c[f]);
						}),
						a.each(c, function (a, b) {
							0 === b.length && delete c[a];
						}),
						c
					);
				},
				hasErrors: function () {
					var b = [];
					return (
						this.each(function (c, d) {
							b = b.concat(
								a(d).triggerHandler("getValidators.validation")
									? a(d).triggerHandler("validation.validation", { submitting: !0 })
									: []
							);
						}),
						b.length > 0
					);
				},
				override: function (b) {
					c = a.extend(!0, c, b);
				},
			},
			validatorTypes: {
				callback: {
					name: "callback",
					init: function (a, b) {
						return {
							validatorName: b,
							callback: a.data("validation" + b + "Callback"),
							lastValue: a.val(),
							lastValid: !0,
							lastFinished: !0,
						};
					},
					validate: function (a, b, c) {
						if (c.lastValue === b && c.lastFinished) return !c.lastValid;
						if (c.lastFinished === !0) {
							(c.lastValue = b), (c.lastValid = !0), (c.lastFinished = !1);
							var d = c,
								e = a;
							g(c.callback, window, a, b, function (a) {
								d.lastValue === a.value &&
									((d.lastValid = a.valid),
									a.message && (d.message = a.message),
									(d.lastFinished = !0),
									e.data("validation" + d.validatorName + "Message", d.message),
									setTimeout(function () {
										e.trigger("change.validation");
									}, 1));
							});
						}
						return !1;
					},
				},
				ajax: {
					name: "ajax",
					init: function (a, b) {
						return {
							validatorName: b,
							url: a.data("validation" + b + "Ajax"),
							lastValue: a.val(),
							lastValid: !0,
							lastFinished: !0,
						};
					},
					validate: function (b, c, d) {
						return "" + d.lastValue === "" + c && d.lastFinished === !0
							? d.lastValid === !1
							: (d.lastFinished === !0 &&
									((d.lastValue = c),
									(d.lastValid = !0),
									(d.lastFinished = !1),
									a.ajax({
										url: d.url,
										data: "value=" + c + "&field=" + b.attr("name"),
										dataType: "json",
										success: function (a) {
											"" + d.lastValue === "" + a.value &&
												((d.lastValid = !!a.valid),
												a.message && (d.message = a.message),
												(d.lastFinished = !0),
												b.data("validation" + d.validatorName + "Message", d.message),
												setTimeout(function () {
													b.trigger("change.validation");
												}, 1));
										},
										failure: function () {
											(d.lastValid = !0),
												(d.message = "ajax call failed"),
												(d.lastFinished = !0),
												b.data("validation" + d.validatorName + "Message", d.message),
												setTimeout(function () {
													b.trigger("change.validation");
												}, 1);
										},
									})),
							  !1);
					},
				},
				regex: {
					name: "regex",
					init: function (a, b) {
						return { regex: f(a.data("validation" + b + "Regex")) };
					},
					validate: function (a, b, c) {
						return (!c.regex.test(b) && !c.negative) || (c.regex.test(b) && c.negative);
					},
				},
				required: {
					name: "required",
					init: function () {
						return {};
					},
					validate: function (a, b, c) {
						return !(0 !== b.length || c.negative) || !!(b.length > 0 && c.negative);
					},
					blockSubmit: !0,
				},
				match: {
					name: "match",
					init: function (a, b) {
						var c = a
							.parents("form")
							.first()
							.find('[name="' + a.data("validation" + b + "Match") + '"]')
							.first();
						return (
							c.bind("validation.validation", function () {
								a.trigger("change.validation", { submitting: !0 });
							}),
							{ element: c }
						);
					},
					validate: function (a, b, c) {
						return (b !== c.element.val() && !c.negative) || (b === c.element.val() && c.negative);
					},
					blockSubmit: !0,
				},
				max: {
					name: "max",
					init: function (a, b) {
						return { max: a.data("validation" + b + "Max") };
					},
					validate: function (a, b, c) {
						return (
							(parseFloat(b, 10) > parseFloat(c.max, 10) && !c.negative) ||
							(parseFloat(b, 10) <= parseFloat(c.max, 10) && c.negative)
						);
					},
				},
				min: {
					name: "min",
					init: function (a, b) {
						return { min: a.data("validation" + b + "Min") };
					},
					validate: function (a, b, c) {
						return (parseFloat(b) < parseFloat(c.min) && !c.negative) || (parseFloat(b) >= parseFloat(c.min) && c.negative);
					},
				},
				maxlength: {
					name: "maxlength",
					init: function (a, b) {
						return { maxlength: a.data("validation" + b + "Maxlength") };
					},
					validate: function (a, b, c) {
						return (b.length > c.maxlength && !c.negative) || (b.length <= c.maxlength && c.negative);
					},
				},
				minlength: {
					name: "minlength",
					init: function (a, b) {
						return { minlength: a.data("validation" + b + "Minlength") };
					},
					validate: function (a, b, c) {
						return (b.length < c.minlength && !c.negative) || (b.length >= c.minlength && c.negative);
					},
				},
				maxchecked: {
					name: "maxchecked",
					init: function (a, b) {
						var c = a
							.parents("form")
							.first()
							.find('[name="' + a.attr("name") + '"]');
						return (
							c.bind("click.validation", function () {
								a.trigger("change.validation", { includeEmpty: !0 });
							}),
							{ maxchecked: a.data("validation" + b + "Maxchecked"), elements: c }
						);
					},
					validate: function (a, b, c) {
						return (
							(c.elements.filter(":checked").length > c.maxchecked && !c.negative) ||
							(c.elements.filter(":checked").length <= c.maxchecked && c.negative)
						);
					},
					blockSubmit: !0,
				},
				minchecked: {
					name: "minchecked",
					init: function (a, b) {
						var c = a
							.parents("form")
							.first()
							.find('[name="' + a.attr("name") + '"]');
						return (
							c.bind("click.validation", function () {
								a.trigger("change.validation", { includeEmpty: !0 });
							}),
							{ minchecked: a.data("validation" + b + "Minchecked"), elements: c }
						);
					},
					validate: function (a, b, c) {
						return (
							(c.elements.filter(":checked").length < c.minchecked && !c.negative) ||
							(c.elements.filter(":checked").length >= c.minchecked && c.negative)
						);
					},
					blockSubmit: !0,
				},
			},
			builtInValidators: {
				email: { name: "Email", type: "shortcut", shortcut: "validemail" },
				validemail: {
					name: "Validemail",
					type: "regex",
					regex: "[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,10}",
					message: "Not a valid email address<!-- data-validator-validemail-message to override -->",
				},
				passwordagain: {
					name: "Passwordagain",
					type: "match",
					match: "password",
					message: "Does not match the given password<!-- data-validator-paswordagain-message to override -->",
				},
				positive: { name: "Positive", type: "shortcut", shortcut: "number,positivenumber" },
				negative: { name: "Negative", type: "shortcut", shortcut: "number,negativenumber" },
				number: {
					name: "Number",
					type: "regex",
					regex: "([+-]?\\d+(\\.\\d*)?([eE][+-]?[0-9]+)?)?",
					message: "Must be a number<!-- data-validator-number-message to override -->",
				},
				integer: {
					name: "Integer",
					type: "regex",
					regex: "[+-]?\\d+",
					message: "No decimal places allowed<!-- data-validator-integer-message to override -->",
				},
				positivenumber: {
					name: "Positivenumber",
					type: "min",
					min: 0,
					message: "Must be a positive number<!-- data-validator-positivenumber-message to override -->",
				},
				negativenumber: {
					name: "Negativenumber",
					type: "max",
					max: 0,
					message: "Must be a negative number<!-- data-validator-negativenumber-message to override -->",
				},
				required: {
					name: "Required",
					type: "required",
					message: "This is required<!-- data-validator-required-message to override -->",
				},
				checkone: {
					name: "Checkone",
					type: "minchecked",
					minchecked: 1,
					message: "Check at least one option<!-- data-validation-checkone-message to override -->",
				},
			},
		},
		d = function (a) {
			return a.toLowerCase().replace(/(^|\s)([a-z])/g, function (a, b, c) {
				return b + c.toUpperCase();
			});
		},
		e = function (b) {
			var c = b.val(),
				d = b.attr("type");
			return (
				"checkbox" === d && (c = b.is(":checked") ? c : ""),
				"radio" === d && (c = a('input[name="' + b.attr("name") + '"]:checked').length > 0 ? c : ""),
				c
			);
		};
	(a.fn.jqBootstrapValidation = function (b) {
		return c.methods[b]
			? c.methods[b].apply(this, Array.prototype.slice.call(arguments, 1))
			: "object" !== typeof b && b
			? (a.error("Method " + b + " does not exist on jQuery.jqBootstrapValidation"), null)
			: c.methods.init.apply(this, arguments);
	}),
		(a.jqBootstrapValidation = function () {
			a(":input").not("[type=image],[type=submit]").jqBootstrapValidation.apply(this, arguments);
		});
})(jQuery);
