let log42 = {};
const stringify__ = JSON.stringify;
const wrappedFunctions = {};
function copyArgs(from){
	let to = {};
	for (var i = 0; i<from.length; i++) {
		to[i] = from[i];
	}
	to.length = from.length;
	return to
}

wrappedFunctions["Object.prototype.hasOwnProperty"] = Object.prototype.hasOwnProperty;
Object.prototype.hasOwnProperty = { hasOwnProperty () {
	log42["Object.prototype.hasOwnProperty"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.hasOwnProperty"].apply__(this, args);
}}.hasOwnProperty
Object.prototype.hasOwnProperty.prototype !== undefined ? Object.prototype.hasOwnProperty.prototype = wrappedFunctions["Object.prototype.hasOwnProperty"].prototype : null;
Object.defineProperty(Object.prototype.hasOwnProperty, "length", {value: wrappedFunctions["Object.prototype.hasOwnProperty"].length});

wrappedFunctions["Object.prototype.isPrototypeOf"] = Object.prototype.isPrototypeOf;
Object.prototype.isPrototypeOf = { isPrototypeOf () {
	log42["Object.prototype.isPrototypeOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.isPrototypeOf"].apply__(this, args);
}}.isPrototypeOf
Object.prototype.isPrototypeOf.prototype !== undefined ? Object.prototype.isPrototypeOf.prototype = wrappedFunctions["Object.prototype.isPrototypeOf"].prototype : null;
Object.defineProperty(Object.prototype.isPrototypeOf, "length", {value: wrappedFunctions["Object.prototype.isPrototypeOf"].length});

wrappedFunctions["Object.prototype.propertyIsEnumerable"] = Object.prototype.propertyIsEnumerable;
Object.prototype.propertyIsEnumerable = { propertyIsEnumerable () {
	log42["Object.prototype.propertyIsEnumerable"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.propertyIsEnumerable"].apply__(this, args);
}}.propertyIsEnumerable
Object.prototype.propertyIsEnumerable.prototype !== undefined ? Object.prototype.propertyIsEnumerable.prototype = wrappedFunctions["Object.prototype.propertyIsEnumerable"].prototype : null;
Object.defineProperty(Object.prototype.propertyIsEnumerable, "length", {value: wrappedFunctions["Object.prototype.propertyIsEnumerable"].length});

wrappedFunctions["Object.prototype.toLocaleString"] = Object.prototype.toLocaleString;
Object.prototype.toLocaleString = { toLocaleString () {
	log42["Object.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Object.prototype.toLocaleString.prototype !== undefined ? Object.prototype.toLocaleString.prototype = wrappedFunctions["Object.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Object.prototype.toLocaleString, "length", {value: wrappedFunctions["Object.prototype.toLocaleString"].length});

wrappedFunctions["Object.prototype.toString"] = Object.prototype.toString;
Object.prototype.toString = { toString () {
	log42["Object.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.toString"].apply__(this, args);
}}.toString
Object.prototype.toString.prototype !== undefined ? Object.prototype.toString.prototype = wrappedFunctions["Object.prototype.toString"].prototype : null;
Object.defineProperty(Object.prototype.toString, "length", {value: wrappedFunctions["Object.prototype.toString"].length});

wrappedFunctions["Object.prototype.valueOf"] = Object.prototype.valueOf;
Object.prototype.valueOf = { valueOf () {
	log42["Object.prototype.valueOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.valueOf"].apply__(this, args);
}}.valueOf
Object.prototype.valueOf.prototype !== undefined ? Object.prototype.valueOf.prototype = wrappedFunctions["Object.prototype.valueOf"].prototype : null;
Object.defineProperty(Object.prototype.valueOf, "length", {value: wrappedFunctions["Object.prototype.valueOf"].length});

Function.prototype.apply__= Function.prototype.apply;
Function.prototype.apply = { apply () {
	log42["Function.prototype.apply"] = true;	let args = copyArgs(arguments);
	return Function.prototype.apply__.apply__(this, args);
}}.apply
Function.prototype.apply.prototype !== undefined ? Function.prototype.apply.prototype = Function.prototype.apply__.prototype: null;
Object.defineProperty(Function.prototype.apply, "length", {value: Function.prototype.apply__.length});

Function.prototype.bind__= Function.prototype.bind;
Function.prototype.bind = { bind () {
	log42["Function.prototype.bind"] = true;	let args = copyArgs(arguments);
	return Function.prototype.bind__.apply__(this, args);
}}.bind
Function.prototype.bind.prototype !== undefined ? Function.prototype.bind.prototype = Function.prototype.bind__.prototype: null;
Object.defineProperty(Function.prototype.bind, "length", {value: Function.prototype.bind__.length});

Function.prototype.call__= Function.prototype.call;
Function.prototype.call = { call () {
	log42["Function.prototype.call"] = true;	let args = copyArgs(arguments);
	return Function.prototype.call__.apply__(this, args);
}}.call
Function.prototype.call.prototype !== undefined ? Function.prototype.call.prototype = Function.prototype.call__.prototype: null;
Object.defineProperty(Function.prototype.call, "length", {value: Function.prototype.call__.length});

Function.prototype.toString__= Function.prototype.toString;
Function.prototype.toString = { toString () {
	log42["Function.prototype.toString"] = true;	let args = copyArgs(arguments);
	return Function.prototype.toString__.apply__(this, args);
}}.toString
Function.prototype.toString.prototype !== undefined ? Function.prototype.toString.prototype = Function.prototype.toString__.prototype: null;
Object.defineProperty(Function.prototype.toString, "length", {value: Function.prototype.toString__.length});

wrappedFunctions["Boolean.prototype.toString"] = Boolean.prototype.toString;
Boolean.prototype.toString = { toString () {
	log42["Boolean.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Boolean.prototype.toString"].apply__(this, args);
}}.toString
Boolean.prototype.toString.prototype !== undefined ? Boolean.prototype.toString.prototype = wrappedFunctions["Boolean.prototype.toString"].prototype : null;
Object.defineProperty(Boolean.prototype.toString, "length", {value: wrappedFunctions["Boolean.prototype.toString"].length});

wrappedFunctions["Boolean.prototype.valueOf"] = Boolean.prototype.valueOf;
Boolean.prototype.valueOf = { valueOf () {
	log42["Boolean.prototype.valueOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Boolean.prototype.valueOf"].apply__(this, args);
}}.valueOf
Boolean.prototype.valueOf.prototype !== undefined ? Boolean.prototype.valueOf.prototype = wrappedFunctions["Boolean.prototype.valueOf"].prototype : null;
Object.defineProperty(Boolean.prototype.valueOf, "length", {value: wrappedFunctions["Boolean.prototype.valueOf"].length});

wrappedFunctions["Symbol.prototype.toString"] = Symbol.prototype.toString;
Symbol.prototype.toString = { toString () {
	log42["Symbol.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Symbol.prototype.toString"].apply__(this, args);
}}.toString
Symbol.prototype.toString.prototype !== undefined ? Symbol.prototype.toString.prototype = wrappedFunctions["Symbol.prototype.toString"].prototype : null;
Object.defineProperty(Symbol.prototype.toString, "length", {value: wrappedFunctions["Symbol.prototype.toString"].length});

wrappedFunctions["Symbol.prototype.valueOf"] = Symbol.prototype.valueOf;
Symbol.prototype.valueOf = { valueOf () {
	log42["Symbol.prototype.valueOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Symbol.prototype.valueOf"].apply__(this, args);
}}.valueOf
Symbol.prototype.valueOf.prototype !== undefined ? Symbol.prototype.valueOf.prototype = wrappedFunctions["Symbol.prototype.valueOf"].prototype : null;
Object.defineProperty(Symbol.prototype.valueOf, "length", {value: wrappedFunctions["Symbol.prototype.valueOf"].length});

wrappedFunctions["Error.prototype.toString"] = Error.prototype.toString;
Error.prototype.toString = { toString () {
	log42["Error.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Error.prototype.toString"].apply__(this, args);
}}.toString
Error.prototype.toString.prototype !== undefined ? Error.prototype.toString.prototype = wrappedFunctions["Error.prototype.toString"].prototype : null;
Object.defineProperty(Error.prototype.toString, "length", {value: wrappedFunctions["Error.prototype.toString"].length});

wrappedFunctions["Number.prototype.toExponential"] = Number.prototype.toExponential;
Number.prototype.toExponential = { toExponential () {
	log42["Number.prototype.toExponential"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Number.prototype.toExponential"].apply__(this, args);
}}.toExponential
Number.prototype.toExponential.prototype !== undefined ? Number.prototype.toExponential.prototype = wrappedFunctions["Number.prototype.toExponential"].prototype : null;
Object.defineProperty(Number.prototype.toExponential, "length", {value: wrappedFunctions["Number.prototype.toExponential"].length});

wrappedFunctions["Number.prototype.toFixed"] = Number.prototype.toFixed;
Number.prototype.toFixed = { toFixed () {
	log42["Number.prototype.toFixed"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Number.prototype.toFixed"].apply__(this, args);
}}.toFixed
Number.prototype.toFixed.prototype !== undefined ? Number.prototype.toFixed.prototype = wrappedFunctions["Number.prototype.toFixed"].prototype : null;
Object.defineProperty(Number.prototype.toFixed, "length", {value: wrappedFunctions["Number.prototype.toFixed"].length});

wrappedFunctions["Number.prototype.toLocaleString"] = Number.prototype.toLocaleString;
Number.prototype.toLocaleString = { toLocaleString () {
	log42["Number.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Number.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Number.prototype.toLocaleString.prototype !== undefined ? Number.prototype.toLocaleString.prototype = wrappedFunctions["Number.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Number.prototype.toLocaleString, "length", {value: wrappedFunctions["Number.prototype.toLocaleString"].length});

wrappedFunctions["Number.prototype.toPrecision"] = Number.prototype.toPrecision;
Number.prototype.toPrecision = { toPrecision () {
	log42["Number.prototype.toPrecision"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Number.prototype.toPrecision"].apply__(this, args);
}}.toPrecision
Number.prototype.toPrecision.prototype !== undefined ? Number.prototype.toPrecision.prototype = wrappedFunctions["Number.prototype.toPrecision"].prototype : null;
Object.defineProperty(Number.prototype.toPrecision, "length", {value: wrappedFunctions["Number.prototype.toPrecision"].length});

wrappedFunctions["Number.prototype.toString"] = Number.prototype.toString;
Number.prototype.toString = { toString () {
	log42["Number.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Number.prototype.toString"].apply__(this, args);
}}.toString
Number.prototype.toString.prototype !== undefined ? Number.prototype.toString.prototype = wrappedFunctions["Number.prototype.toString"].prototype : null;
Object.defineProperty(Number.prototype.toString, "length", {value: wrappedFunctions["Number.prototype.toString"].length});

wrappedFunctions["Number.prototype.valueOf"] = Number.prototype.valueOf;
Number.prototype.valueOf = { valueOf () {
	log42["Number.prototype.valueOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Number.prototype.valueOf"].apply__(this, args);
}}.valueOf
Number.prototype.valueOf.prototype !== undefined ? Number.prototype.valueOf.prototype = wrappedFunctions["Number.prototype.valueOf"].prototype : null;
Object.defineProperty(Number.prototype.valueOf, "length", {value: wrappedFunctions["Number.prototype.valueOf"].length});

wrappedFunctions["BigInt.prototype.toLocaleString"] = BigInt.prototype.toLocaleString;
BigInt.prototype.toLocaleString = { toLocaleString () {
	log42["BigInt.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
BigInt.prototype.toLocaleString.prototype !== undefined ? BigInt.prototype.toLocaleString.prototype = wrappedFunctions["BigInt.prototype.toLocaleString"].prototype : null;
Object.defineProperty(BigInt.prototype.toLocaleString, "length", {value: wrappedFunctions["BigInt.prototype.toLocaleString"].length});

wrappedFunctions["BigInt.prototype.toString"] = BigInt.prototype.toString;
BigInt.prototype.toString = { toString () {
	log42["BigInt.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt.prototype.toString"].apply__(this, args);
}}.toString
BigInt.prototype.toString.prototype !== undefined ? BigInt.prototype.toString.prototype = wrappedFunctions["BigInt.prototype.toString"].prototype : null;
Object.defineProperty(BigInt.prototype.toString, "length", {value: wrappedFunctions["BigInt.prototype.toString"].length});

wrappedFunctions["BigInt.prototype.valueOf"] = BigInt.prototype.valueOf;
BigInt.prototype.valueOf = { valueOf () {
	log42["BigInt.prototype.valueOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt.prototype.valueOf"].apply__(this, args);
}}.valueOf
BigInt.prototype.valueOf.prototype !== undefined ? BigInt.prototype.valueOf.prototype = wrappedFunctions["BigInt.prototype.valueOf"].prototype : null;
Object.defineProperty(BigInt.prototype.valueOf, "length", {value: wrappedFunctions["BigInt.prototype.valueOf"].length});

wrappedFunctions["Date.prototype.getDate"] = Date.prototype.getDate;
Date.prototype.getDate = { getDate () {
	log42["Date.prototype.getDate"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getDate"].apply__(this, args);
}}.getDate
Date.prototype.getDate.prototype !== undefined ? Date.prototype.getDate.prototype = wrappedFunctions["Date.prototype.getDate"].prototype : null;
Object.defineProperty(Date.prototype.getDate, "length", {value: wrappedFunctions["Date.prototype.getDate"].length});

wrappedFunctions["Date.prototype.getDay"] = Date.prototype.getDay;
Date.prototype.getDay = { getDay () {
	log42["Date.prototype.getDay"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getDay"].apply__(this, args);
}}.getDay
Date.prototype.getDay.prototype !== undefined ? Date.prototype.getDay.prototype = wrappedFunctions["Date.prototype.getDay"].prototype : null;
Object.defineProperty(Date.prototype.getDay, "length", {value: wrappedFunctions["Date.prototype.getDay"].length});

wrappedFunctions["Date.prototype.getFullYear"] = Date.prototype.getFullYear;
Date.prototype.getFullYear = { getFullYear () {
	log42["Date.prototype.getFullYear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getFullYear"].apply__(this, args);
}}.getFullYear
Date.prototype.getFullYear.prototype !== undefined ? Date.prototype.getFullYear.prototype = wrappedFunctions["Date.prototype.getFullYear"].prototype : null;
Object.defineProperty(Date.prototype.getFullYear, "length", {value: wrappedFunctions["Date.prototype.getFullYear"].length});

wrappedFunctions["Date.prototype.getHours"] = Date.prototype.getHours;
Date.prototype.getHours = { getHours () {
	log42["Date.prototype.getHours"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getHours"].apply__(this, args);
}}.getHours
Date.prototype.getHours.prototype !== undefined ? Date.prototype.getHours.prototype = wrappedFunctions["Date.prototype.getHours"].prototype : null;
Object.defineProperty(Date.prototype.getHours, "length", {value: wrappedFunctions["Date.prototype.getHours"].length});

wrappedFunctions["Date.prototype.getMilliseconds"] = Date.prototype.getMilliseconds;
Date.prototype.getMilliseconds = { getMilliseconds () {
	log42["Date.prototype.getMilliseconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getMilliseconds"].apply__(this, args);
}}.getMilliseconds
Date.prototype.getMilliseconds.prototype !== undefined ? Date.prototype.getMilliseconds.prototype = wrappedFunctions["Date.prototype.getMilliseconds"].prototype : null;
Object.defineProperty(Date.prototype.getMilliseconds, "length", {value: wrappedFunctions["Date.prototype.getMilliseconds"].length});

wrappedFunctions["Date.prototype.getMinutes"] = Date.prototype.getMinutes;
Date.prototype.getMinutes = { getMinutes () {
	log42["Date.prototype.getMinutes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getMinutes"].apply__(this, args);
}}.getMinutes
Date.prototype.getMinutes.prototype !== undefined ? Date.prototype.getMinutes.prototype = wrappedFunctions["Date.prototype.getMinutes"].prototype : null;
Object.defineProperty(Date.prototype.getMinutes, "length", {value: wrappedFunctions["Date.prototype.getMinutes"].length});

wrappedFunctions["Date.prototype.getMonth"] = Date.prototype.getMonth;
Date.prototype.getMonth = { getMonth () {
	log42["Date.prototype.getMonth"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getMonth"].apply__(this, args);
}}.getMonth
Date.prototype.getMonth.prototype !== undefined ? Date.prototype.getMonth.prototype = wrappedFunctions["Date.prototype.getMonth"].prototype : null;
Object.defineProperty(Date.prototype.getMonth, "length", {value: wrappedFunctions["Date.prototype.getMonth"].length});

wrappedFunctions["Date.prototype.getSeconds"] = Date.prototype.getSeconds;
Date.prototype.getSeconds = { getSeconds () {
	log42["Date.prototype.getSeconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getSeconds"].apply__(this, args);
}}.getSeconds
Date.prototype.getSeconds.prototype !== undefined ? Date.prototype.getSeconds.prototype = wrappedFunctions["Date.prototype.getSeconds"].prototype : null;
Object.defineProperty(Date.prototype.getSeconds, "length", {value: wrappedFunctions["Date.prototype.getSeconds"].length});

wrappedFunctions["Date.prototype.getTime"] = Date.prototype.getTime;
Date.prototype.getTime = { getTime () {
	log42["Date.prototype.getTime"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getTime"].apply__(this, args);
}}.getTime
Date.prototype.getTime.prototype !== undefined ? Date.prototype.getTime.prototype = wrappedFunctions["Date.prototype.getTime"].prototype : null;
Object.defineProperty(Date.prototype.getTime, "length", {value: wrappedFunctions["Date.prototype.getTime"].length});

wrappedFunctions["Date.prototype.getTimezoneOffset"] = Date.prototype.getTimezoneOffset;
Date.prototype.getTimezoneOffset = { getTimezoneOffset () {
	log42["Date.prototype.getTimezoneOffset"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getTimezoneOffset"].apply__(this, args);
}}.getTimezoneOffset
Date.prototype.getTimezoneOffset.prototype !== undefined ? Date.prototype.getTimezoneOffset.prototype = wrappedFunctions["Date.prototype.getTimezoneOffset"].prototype : null;
Object.defineProperty(Date.prototype.getTimezoneOffset, "length", {value: wrappedFunctions["Date.prototype.getTimezoneOffset"].length});

wrappedFunctions["Date.prototype.getUTCDate"] = Date.prototype.getUTCDate;
Date.prototype.getUTCDate = { getUTCDate () {
	log42["Date.prototype.getUTCDate"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCDate"].apply__(this, args);
}}.getUTCDate
Date.prototype.getUTCDate.prototype !== undefined ? Date.prototype.getUTCDate.prototype = wrappedFunctions["Date.prototype.getUTCDate"].prototype : null;
Object.defineProperty(Date.prototype.getUTCDate, "length", {value: wrappedFunctions["Date.prototype.getUTCDate"].length});

wrappedFunctions["Date.prototype.getUTCDay"] = Date.prototype.getUTCDay;
Date.prototype.getUTCDay = { getUTCDay () {
	log42["Date.prototype.getUTCDay"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCDay"].apply__(this, args);
}}.getUTCDay
Date.prototype.getUTCDay.prototype !== undefined ? Date.prototype.getUTCDay.prototype = wrappedFunctions["Date.prototype.getUTCDay"].prototype : null;
Object.defineProperty(Date.prototype.getUTCDay, "length", {value: wrappedFunctions["Date.prototype.getUTCDay"].length});

wrappedFunctions["Date.prototype.getUTCFullYear"] = Date.prototype.getUTCFullYear;
Date.prototype.getUTCFullYear = { getUTCFullYear () {
	log42["Date.prototype.getUTCFullYear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCFullYear"].apply__(this, args);
}}.getUTCFullYear
Date.prototype.getUTCFullYear.prototype !== undefined ? Date.prototype.getUTCFullYear.prototype = wrappedFunctions["Date.prototype.getUTCFullYear"].prototype : null;
Object.defineProperty(Date.prototype.getUTCFullYear, "length", {value: wrappedFunctions["Date.prototype.getUTCFullYear"].length});

wrappedFunctions["Date.prototype.getUTCHours"] = Date.prototype.getUTCHours;
Date.prototype.getUTCHours = { getUTCHours () {
	log42["Date.prototype.getUTCHours"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCHours"].apply__(this, args);
}}.getUTCHours
Date.prototype.getUTCHours.prototype !== undefined ? Date.prototype.getUTCHours.prototype = wrappedFunctions["Date.prototype.getUTCHours"].prototype : null;
Object.defineProperty(Date.prototype.getUTCHours, "length", {value: wrappedFunctions["Date.prototype.getUTCHours"].length});

wrappedFunctions["Date.prototype.getUTCMilliseconds"] = Date.prototype.getUTCMilliseconds;
Date.prototype.getUTCMilliseconds = { getUTCMilliseconds () {
	log42["Date.prototype.getUTCMilliseconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCMilliseconds"].apply__(this, args);
}}.getUTCMilliseconds
Date.prototype.getUTCMilliseconds.prototype !== undefined ? Date.prototype.getUTCMilliseconds.prototype = wrappedFunctions["Date.prototype.getUTCMilliseconds"].prototype : null;
Object.defineProperty(Date.prototype.getUTCMilliseconds, "length", {value: wrappedFunctions["Date.prototype.getUTCMilliseconds"].length});

wrappedFunctions["Date.prototype.getUTCMinutes"] = Date.prototype.getUTCMinutes;
Date.prototype.getUTCMinutes = { getUTCMinutes () {
	log42["Date.prototype.getUTCMinutes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCMinutes"].apply__(this, args);
}}.getUTCMinutes
Date.prototype.getUTCMinutes.prototype !== undefined ? Date.prototype.getUTCMinutes.prototype = wrappedFunctions["Date.prototype.getUTCMinutes"].prototype : null;
Object.defineProperty(Date.prototype.getUTCMinutes, "length", {value: wrappedFunctions["Date.prototype.getUTCMinutes"].length});

wrappedFunctions["Date.prototype.getUTCMonth"] = Date.prototype.getUTCMonth;
Date.prototype.getUTCMonth = { getUTCMonth () {
	log42["Date.prototype.getUTCMonth"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCMonth"].apply__(this, args);
}}.getUTCMonth
Date.prototype.getUTCMonth.prototype !== undefined ? Date.prototype.getUTCMonth.prototype = wrappedFunctions["Date.prototype.getUTCMonth"].prototype : null;
Object.defineProperty(Date.prototype.getUTCMonth, "length", {value: wrappedFunctions["Date.prototype.getUTCMonth"].length});

wrappedFunctions["Date.prototype.getUTCSeconds"] = Date.prototype.getUTCSeconds;
Date.prototype.getUTCSeconds = { getUTCSeconds () {
	log42["Date.prototype.getUTCSeconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getUTCSeconds"].apply__(this, args);
}}.getUTCSeconds
Date.prototype.getUTCSeconds.prototype !== undefined ? Date.prototype.getUTCSeconds.prototype = wrappedFunctions["Date.prototype.getUTCSeconds"].prototype : null;
Object.defineProperty(Date.prototype.getUTCSeconds, "length", {value: wrappedFunctions["Date.prototype.getUTCSeconds"].length});

wrappedFunctions["Date.prototype.setDate"] = Date.prototype.setDate;
Date.prototype.setDate = { setDate () {
	log42["Date.prototype.setDate"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setDate"].apply__(this, args);
}}.setDate
Date.prototype.setDate.prototype !== undefined ? Date.prototype.setDate.prototype = wrappedFunctions["Date.prototype.setDate"].prototype : null;
Object.defineProperty(Date.prototype.setDate, "length", {value: wrappedFunctions["Date.prototype.setDate"].length});

wrappedFunctions["Date.prototype.setFullYear"] = Date.prototype.setFullYear;
Date.prototype.setFullYear = { setFullYear () {
	log42["Date.prototype.setFullYear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setFullYear"].apply__(this, args);
}}.setFullYear
Date.prototype.setFullYear.prototype !== undefined ? Date.prototype.setFullYear.prototype = wrappedFunctions["Date.prototype.setFullYear"].prototype : null;
Object.defineProperty(Date.prototype.setFullYear, "length", {value: wrappedFunctions["Date.prototype.setFullYear"].length});

wrappedFunctions["Date.prototype.setHours"] = Date.prototype.setHours;
Date.prototype.setHours = { setHours () {
	log42["Date.prototype.setHours"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setHours"].apply__(this, args);
}}.setHours
Date.prototype.setHours.prototype !== undefined ? Date.prototype.setHours.prototype = wrappedFunctions["Date.prototype.setHours"].prototype : null;
Object.defineProperty(Date.prototype.setHours, "length", {value: wrappedFunctions["Date.prototype.setHours"].length});

wrappedFunctions["Date.prototype.setMilliseconds"] = Date.prototype.setMilliseconds;
Date.prototype.setMilliseconds = { setMilliseconds () {
	log42["Date.prototype.setMilliseconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setMilliseconds"].apply__(this, args);
}}.setMilliseconds
Date.prototype.setMilliseconds.prototype !== undefined ? Date.prototype.setMilliseconds.prototype = wrappedFunctions["Date.prototype.setMilliseconds"].prototype : null;
Object.defineProperty(Date.prototype.setMilliseconds, "length", {value: wrappedFunctions["Date.prototype.setMilliseconds"].length});

wrappedFunctions["Date.prototype.setMinutes"] = Date.prototype.setMinutes;
Date.prototype.setMinutes = { setMinutes () {
	log42["Date.prototype.setMinutes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setMinutes"].apply__(this, args);
}}.setMinutes
Date.prototype.setMinutes.prototype !== undefined ? Date.prototype.setMinutes.prototype = wrappedFunctions["Date.prototype.setMinutes"].prototype : null;
Object.defineProperty(Date.prototype.setMinutes, "length", {value: wrappedFunctions["Date.prototype.setMinutes"].length});

wrappedFunctions["Date.prototype.setMonth"] = Date.prototype.setMonth;
Date.prototype.setMonth = { setMonth () {
	log42["Date.prototype.setMonth"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setMonth"].apply__(this, args);
}}.setMonth
Date.prototype.setMonth.prototype !== undefined ? Date.prototype.setMonth.prototype = wrappedFunctions["Date.prototype.setMonth"].prototype : null;
Object.defineProperty(Date.prototype.setMonth, "length", {value: wrappedFunctions["Date.prototype.setMonth"].length});

wrappedFunctions["Date.prototype.setSeconds"] = Date.prototype.setSeconds;
Date.prototype.setSeconds = { setSeconds () {
	log42["Date.prototype.setSeconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setSeconds"].apply__(this, args);
}}.setSeconds
Date.prototype.setSeconds.prototype !== undefined ? Date.prototype.setSeconds.prototype = wrappedFunctions["Date.prototype.setSeconds"].prototype : null;
Object.defineProperty(Date.prototype.setSeconds, "length", {value: wrappedFunctions["Date.prototype.setSeconds"].length});

wrappedFunctions["Date.prototype.setTime"] = Date.prototype.setTime;
Date.prototype.setTime = { setTime () {
	log42["Date.prototype.setTime"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setTime"].apply__(this, args);
}}.setTime
Date.prototype.setTime.prototype !== undefined ? Date.prototype.setTime.prototype = wrappedFunctions["Date.prototype.setTime"].prototype : null;
Object.defineProperty(Date.prototype.setTime, "length", {value: wrappedFunctions["Date.prototype.setTime"].length});

wrappedFunctions["Date.prototype.setUTCDate"] = Date.prototype.setUTCDate;
Date.prototype.setUTCDate = { setUTCDate () {
	log42["Date.prototype.setUTCDate"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setUTCDate"].apply__(this, args);
}}.setUTCDate
Date.prototype.setUTCDate.prototype !== undefined ? Date.prototype.setUTCDate.prototype = wrappedFunctions["Date.prototype.setUTCDate"].prototype : null;
Object.defineProperty(Date.prototype.setUTCDate, "length", {value: wrappedFunctions["Date.prototype.setUTCDate"].length});

wrappedFunctions["Date.prototype.setUTCFullYear"] = Date.prototype.setUTCFullYear;
Date.prototype.setUTCFullYear = { setUTCFullYear () {
	log42["Date.prototype.setUTCFullYear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setUTCFullYear"].apply__(this, args);
}}.setUTCFullYear
Date.prototype.setUTCFullYear.prototype !== undefined ? Date.prototype.setUTCFullYear.prototype = wrappedFunctions["Date.prototype.setUTCFullYear"].prototype : null;
Object.defineProperty(Date.prototype.setUTCFullYear, "length", {value: wrappedFunctions["Date.prototype.setUTCFullYear"].length});

wrappedFunctions["Date.prototype.setUTCHours"] = Date.prototype.setUTCHours;
Date.prototype.setUTCHours = { setUTCHours () {
	log42["Date.prototype.setUTCHours"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setUTCHours"].apply__(this, args);
}}.setUTCHours
Date.prototype.setUTCHours.prototype !== undefined ? Date.prototype.setUTCHours.prototype = wrappedFunctions["Date.prototype.setUTCHours"].prototype : null;
Object.defineProperty(Date.prototype.setUTCHours, "length", {value: wrappedFunctions["Date.prototype.setUTCHours"].length});

wrappedFunctions["Date.prototype.setUTCMilliseconds"] = Date.prototype.setUTCMilliseconds;
Date.prototype.setUTCMilliseconds = { setUTCMilliseconds () {
	log42["Date.prototype.setUTCMilliseconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setUTCMilliseconds"].apply__(this, args);
}}.setUTCMilliseconds
Date.prototype.setUTCMilliseconds.prototype !== undefined ? Date.prototype.setUTCMilliseconds.prototype = wrappedFunctions["Date.prototype.setUTCMilliseconds"].prototype : null;
Object.defineProperty(Date.prototype.setUTCMilliseconds, "length", {value: wrappedFunctions["Date.prototype.setUTCMilliseconds"].length});

wrappedFunctions["Date.prototype.setUTCMinutes"] = Date.prototype.setUTCMinutes;
Date.prototype.setUTCMinutes = { setUTCMinutes () {
	log42["Date.prototype.setUTCMinutes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setUTCMinutes"].apply__(this, args);
}}.setUTCMinutes
Date.prototype.setUTCMinutes.prototype !== undefined ? Date.prototype.setUTCMinutes.prototype = wrappedFunctions["Date.prototype.setUTCMinutes"].prototype : null;
Object.defineProperty(Date.prototype.setUTCMinutes, "length", {value: wrappedFunctions["Date.prototype.setUTCMinutes"].length});

wrappedFunctions["Date.prototype.setUTCMonth"] = Date.prototype.setUTCMonth;
Date.prototype.setUTCMonth = { setUTCMonth () {
	log42["Date.prototype.setUTCMonth"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setUTCMonth"].apply__(this, args);
}}.setUTCMonth
Date.prototype.setUTCMonth.prototype !== undefined ? Date.prototype.setUTCMonth.prototype = wrappedFunctions["Date.prototype.setUTCMonth"].prototype : null;
Object.defineProperty(Date.prototype.setUTCMonth, "length", {value: wrappedFunctions["Date.prototype.setUTCMonth"].length});

wrappedFunctions["Date.prototype.setUTCSeconds"] = Date.prototype.setUTCSeconds;
Date.prototype.setUTCSeconds = { setUTCSeconds () {
	log42["Date.prototype.setUTCSeconds"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setUTCSeconds"].apply__(this, args);
}}.setUTCSeconds
Date.prototype.setUTCSeconds.prototype !== undefined ? Date.prototype.setUTCSeconds.prototype = wrappedFunctions["Date.prototype.setUTCSeconds"].prototype : null;
Object.defineProperty(Date.prototype.setUTCSeconds, "length", {value: wrappedFunctions["Date.prototype.setUTCSeconds"].length});

wrappedFunctions["Date.prototype.toDateString"] = Date.prototype.toDateString;
Date.prototype.toDateString = { toDateString () {
	log42["Date.prototype.toDateString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toDateString"].apply__(this, args);
}}.toDateString
Date.prototype.toDateString.prototype !== undefined ? Date.prototype.toDateString.prototype = wrappedFunctions["Date.prototype.toDateString"].prototype : null;
Object.defineProperty(Date.prototype.toDateString, "length", {value: wrappedFunctions["Date.prototype.toDateString"].length});

wrappedFunctions["Date.prototype.toISOString"] = Date.prototype.toISOString;
Date.prototype.toISOString = { toISOString () {
	log42["Date.prototype.toISOString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toISOString"].apply__(this, args);
}}.toISOString
Date.prototype.toISOString.prototype !== undefined ? Date.prototype.toISOString.prototype = wrappedFunctions["Date.prototype.toISOString"].prototype : null;
Object.defineProperty(Date.prototype.toISOString, "length", {value: wrappedFunctions["Date.prototype.toISOString"].length});

wrappedFunctions["Date.prototype.toJSON"] = Date.prototype.toJSON;
Date.prototype.toJSON = { toJSON () {
	log42["Date.prototype.toJSON"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toJSON"].apply__(this, args);
}}.toJSON
Date.prototype.toJSON.prototype !== undefined ? Date.prototype.toJSON.prototype = wrappedFunctions["Date.prototype.toJSON"].prototype : null;
Object.defineProperty(Date.prototype.toJSON, "length", {value: wrappedFunctions["Date.prototype.toJSON"].length});

wrappedFunctions["Date.prototype.toLocaleDateString"] = Date.prototype.toLocaleDateString;
Date.prototype.toLocaleDateString = { toLocaleDateString () {
	log42["Date.prototype.toLocaleDateString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toLocaleDateString"].apply__(this, args);
}}.toLocaleDateString
Date.prototype.toLocaleDateString.prototype !== undefined ? Date.prototype.toLocaleDateString.prototype = wrappedFunctions["Date.prototype.toLocaleDateString"].prototype : null;
Object.defineProperty(Date.prototype.toLocaleDateString, "length", {value: wrappedFunctions["Date.prototype.toLocaleDateString"].length});

wrappedFunctions["Date.prototype.toLocaleString"] = Date.prototype.toLocaleString;
Date.prototype.toLocaleString = { toLocaleString () {
	log42["Date.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Date.prototype.toLocaleString.prototype !== undefined ? Date.prototype.toLocaleString.prototype = wrappedFunctions["Date.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Date.prototype.toLocaleString, "length", {value: wrappedFunctions["Date.prototype.toLocaleString"].length});

wrappedFunctions["Date.prototype.toLocaleTimeString"] = Date.prototype.toLocaleTimeString;
Date.prototype.toLocaleTimeString = { toLocaleTimeString () {
	log42["Date.prototype.toLocaleTimeString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toLocaleTimeString"].apply__(this, args);
}}.toLocaleTimeString
Date.prototype.toLocaleTimeString.prototype !== undefined ? Date.prototype.toLocaleTimeString.prototype = wrappedFunctions["Date.prototype.toLocaleTimeString"].prototype : null;
Object.defineProperty(Date.prototype.toLocaleTimeString, "length", {value: wrappedFunctions["Date.prototype.toLocaleTimeString"].length});

wrappedFunctions["Date.prototype.toString"] = Date.prototype.toString;
Date.prototype.toString = { toString () {
	log42["Date.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toString"].apply__(this, args);
}}.toString
Date.prototype.toString.prototype !== undefined ? Date.prototype.toString.prototype = wrappedFunctions["Date.prototype.toString"].prototype : null;
Object.defineProperty(Date.prototype.toString, "length", {value: wrappedFunctions["Date.prototype.toString"].length});

wrappedFunctions["Date.prototype.toTimeString"] = Date.prototype.toTimeString;
Date.prototype.toTimeString = { toTimeString () {
	log42["Date.prototype.toTimeString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toTimeString"].apply__(this, args);
}}.toTimeString
Date.prototype.toTimeString.prototype !== undefined ? Date.prototype.toTimeString.prototype = wrappedFunctions["Date.prototype.toTimeString"].prototype : null;
Object.defineProperty(Date.prototype.toTimeString, "length", {value: wrappedFunctions["Date.prototype.toTimeString"].length});

wrappedFunctions["Date.prototype.toUTCString"] = Date.prototype.toUTCString;
Date.prototype.toUTCString = { toUTCString () {
	log42["Date.prototype.toUTCString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toUTCString"].apply__(this, args);
}}.toUTCString
Date.prototype.toUTCString.prototype !== undefined ? Date.prototype.toUTCString.prototype = wrappedFunctions["Date.prototype.toUTCString"].prototype : null;
Object.defineProperty(Date.prototype.toUTCString, "length", {value: wrappedFunctions["Date.prototype.toUTCString"].length});

wrappedFunctions["Date.prototype.valueOf"] = Date.prototype.valueOf;
Date.prototype.valueOf = { valueOf () {
	log42["Date.prototype.valueOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.valueOf"].apply__(this, args);
}}.valueOf
Date.prototype.valueOf.prototype !== undefined ? Date.prototype.valueOf.prototype = wrappedFunctions["Date.prototype.valueOf"].prototype : null;
Object.defineProperty(Date.prototype.valueOf, "length", {value: wrappedFunctions["Date.prototype.valueOf"].length});

wrappedFunctions["String.prototype.charAt"] = String.prototype.charAt;
String.prototype.charAt = { charAt () {
	log42["String.prototype.charAt"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.charAt"].apply__(this, args);
}}.charAt
String.prototype.charAt.prototype !== undefined ? String.prototype.charAt.prototype = wrappedFunctions["String.prototype.charAt"].prototype : null;
Object.defineProperty(String.prototype.charAt, "length", {value: wrappedFunctions["String.prototype.charAt"].length});

wrappedFunctions["String.prototype.charCodeAt"] = String.prototype.charCodeAt;
String.prototype.charCodeAt = { charCodeAt () {
	log42["String.prototype.charCodeAt"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.charCodeAt"].apply__(this, args);
}}.charCodeAt
String.prototype.charCodeAt.prototype !== undefined ? String.prototype.charCodeAt.prototype = wrappedFunctions["String.prototype.charCodeAt"].prototype : null;
Object.defineProperty(String.prototype.charCodeAt, "length", {value: wrappedFunctions["String.prototype.charCodeAt"].length});

wrappedFunctions["String.prototype.codePointAt"] = String.prototype.codePointAt;
String.prototype.codePointAt = { codePointAt () {
	log42["String.prototype.codePointAt"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.codePointAt"].apply__(this, args);
}}.codePointAt
String.prototype.codePointAt.prototype !== undefined ? String.prototype.codePointAt.prototype = wrappedFunctions["String.prototype.codePointAt"].prototype : null;
Object.defineProperty(String.prototype.codePointAt, "length", {value: wrappedFunctions["String.prototype.codePointAt"].length});

wrappedFunctions["String.prototype.concat"] = String.prototype.concat;
String.prototype.concat = { concat () {
	log42["String.prototype.concat"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.concat"].apply__(this, args);
}}.concat
String.prototype.concat.prototype !== undefined ? String.prototype.concat.prototype = wrappedFunctions["String.prototype.concat"].prototype : null;
Object.defineProperty(String.prototype.concat, "length", {value: wrappedFunctions["String.prototype.concat"].length});

wrappedFunctions["String.prototype.endsWith"] = String.prototype.endsWith;
String.prototype.endsWith = { endsWith () {
	log42["String.prototype.endsWith"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.endsWith"].apply__(this, args);
}}.endsWith
String.prototype.endsWith.prototype !== undefined ? String.prototype.endsWith.prototype = wrappedFunctions["String.prototype.endsWith"].prototype : null;
Object.defineProperty(String.prototype.endsWith, "length", {value: wrappedFunctions["String.prototype.endsWith"].length});

wrappedFunctions["String.prototype.includes"] = String.prototype.includes;
String.prototype.includes = { includes () {
	log42["String.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.includes"].apply__(this, args);
}}.includes
String.prototype.includes.prototype !== undefined ? String.prototype.includes.prototype = wrappedFunctions["String.prototype.includes"].prototype : null;
Object.defineProperty(String.prototype.includes, "length", {value: wrappedFunctions["String.prototype.includes"].length});

wrappedFunctions["String.prototype.indexOf"] = String.prototype.indexOf;
String.prototype.indexOf = { indexOf () {
	log42["String.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.indexOf"].apply__(this, args);
}}.indexOf
String.prototype.indexOf.prototype !== undefined ? String.prototype.indexOf.prototype = wrappedFunctions["String.prototype.indexOf"].prototype : null;
Object.defineProperty(String.prototype.indexOf, "length", {value: wrappedFunctions["String.prototype.indexOf"].length});

wrappedFunctions["String.prototype.lastIndexOf"] = String.prototype.lastIndexOf;
String.prototype.lastIndexOf = { lastIndexOf () {
	log42["String.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
String.prototype.lastIndexOf.prototype !== undefined ? String.prototype.lastIndexOf.prototype = wrappedFunctions["String.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(String.prototype.lastIndexOf, "length", {value: wrappedFunctions["String.prototype.lastIndexOf"].length});

wrappedFunctions["String.prototype.localeCompare"] = String.prototype.localeCompare;
String.prototype.localeCompare = { localeCompare () {
	log42["String.prototype.localeCompare"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.localeCompare"].apply__(this, args);
}}.localeCompare
String.prototype.localeCompare.prototype !== undefined ? String.prototype.localeCompare.prototype = wrappedFunctions["String.prototype.localeCompare"].prototype : null;
Object.defineProperty(String.prototype.localeCompare, "length", {value: wrappedFunctions["String.prototype.localeCompare"].length});

wrappedFunctions["String.prototype.match"] = String.prototype.match;
String.prototype.match = { match () {
	log42["String.prototype.match"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.match"].apply__(this, args);
}}.match
String.prototype.match.prototype !== undefined ? String.prototype.match.prototype = wrappedFunctions["String.prototype.match"].prototype : null;
Object.defineProperty(String.prototype.match, "length", {value: wrappedFunctions["String.prototype.match"].length});

wrappedFunctions["String.prototype.matchAll"] = String.prototype.matchAll;
String.prototype.matchAll = { matchAll () {
	log42["String.prototype.matchAll"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.matchAll"].apply__(this, args);
}}.matchAll
String.prototype.matchAll.prototype !== undefined ? String.prototype.matchAll.prototype = wrappedFunctions["String.prototype.matchAll"].prototype : null;
Object.defineProperty(String.prototype.matchAll, "length", {value: wrappedFunctions["String.prototype.matchAll"].length});

wrappedFunctions["String.prototype.normalize"] = String.prototype.normalize;
String.prototype.normalize = { normalize () {
	log42["String.prototype.normalize"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.normalize"].apply__(this, args);
}}.normalize
String.prototype.normalize.prototype !== undefined ? String.prototype.normalize.prototype = wrappedFunctions["String.prototype.normalize"].prototype : null;
Object.defineProperty(String.prototype.normalize, "length", {value: wrappedFunctions["String.prototype.normalize"].length});

wrappedFunctions["String.prototype.padEnd"] = String.prototype.padEnd;
String.prototype.padEnd = { padEnd () {
	log42["String.prototype.padEnd"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.padEnd"].apply__(this, args);
}}.padEnd
String.prototype.padEnd.prototype !== undefined ? String.prototype.padEnd.prototype = wrappedFunctions["String.prototype.padEnd"].prototype : null;
Object.defineProperty(String.prototype.padEnd, "length", {value: wrappedFunctions["String.prototype.padEnd"].length});

wrappedFunctions["String.prototype.padStart"] = String.prototype.padStart;
String.prototype.padStart = { padStart () {
	log42["String.prototype.padStart"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.padStart"].apply__(this, args);
}}.padStart
String.prototype.padStart.prototype !== undefined ? String.prototype.padStart.prototype = wrappedFunctions["String.prototype.padStart"].prototype : null;
Object.defineProperty(String.prototype.padStart, "length", {value: wrappedFunctions["String.prototype.padStart"].length});

wrappedFunctions["String.prototype.repeat"] = String.prototype.repeat;
String.prototype.repeat = { repeat () {
	log42["String.prototype.repeat"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.repeat"].apply__(this, args);
}}.repeat
String.prototype.repeat.prototype !== undefined ? String.prototype.repeat.prototype = wrappedFunctions["String.prototype.repeat"].prototype : null;
Object.defineProperty(String.prototype.repeat, "length", {value: wrappedFunctions["String.prototype.repeat"].length});

wrappedFunctions["String.prototype.replace"] = String.prototype.replace;
String.prototype.replace = { replace () {
	log42["String.prototype.replace"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.replace"].apply__(this, args);
}}.replace
String.prototype.replace.prototype !== undefined ? String.prototype.replace.prototype = wrappedFunctions["String.prototype.replace"].prototype : null;
Object.defineProperty(String.prototype.replace, "length", {value: wrappedFunctions["String.prototype.replace"].length});

wrappedFunctions["String.prototype.replaceAll"] = String.prototype.replaceAll;
String.prototype.replaceAll = { replaceAll () {
	log42["String.prototype.replaceAll"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.replaceAll"].apply__(this, args);
}}.replaceAll
String.prototype.replaceAll.prototype !== undefined ? String.prototype.replaceAll.prototype = wrappedFunctions["String.prototype.replaceAll"].prototype : null;
Object.defineProperty(String.prototype.replaceAll, "length", {value: wrappedFunctions["String.prototype.replaceAll"].length});

wrappedFunctions["String.prototype.search"] = String.prototype.search;
String.prototype.search = { search () {
	log42["String.prototype.search"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.search"].apply__(this, args);
}}.search
String.prototype.search.prototype !== undefined ? String.prototype.search.prototype = wrappedFunctions["String.prototype.search"].prototype : null;
Object.defineProperty(String.prototype.search, "length", {value: wrappedFunctions["String.prototype.search"].length});

wrappedFunctions["String.prototype.slice"] = String.prototype.slice;
String.prototype.slice = { slice () {
	log42["String.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.slice"].apply__(this, args);
}}.slice
String.prototype.slice.prototype !== undefined ? String.prototype.slice.prototype = wrappedFunctions["String.prototype.slice"].prototype : null;
Object.defineProperty(String.prototype.slice, "length", {value: wrappedFunctions["String.prototype.slice"].length});

wrappedFunctions["String.prototype.split"] = String.prototype.split;
String.prototype.split = { split () {
	log42["String.prototype.split"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.split"].apply__(this, args);
}}.split
String.prototype.split.prototype !== undefined ? String.prototype.split.prototype = wrappedFunctions["String.prototype.split"].prototype : null;
Object.defineProperty(String.prototype.split, "length", {value: wrappedFunctions["String.prototype.split"].length});

wrappedFunctions["String.prototype.startsWith"] = String.prototype.startsWith;
String.prototype.startsWith = { startsWith () {
	log42["String.prototype.startsWith"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.startsWith"].apply__(this, args);
}}.startsWith
String.prototype.startsWith.prototype !== undefined ? String.prototype.startsWith.prototype = wrappedFunctions["String.prototype.startsWith"].prototype : null;
Object.defineProperty(String.prototype.startsWith, "length", {value: wrappedFunctions["String.prototype.startsWith"].length});

wrappedFunctions["String.prototype.substring"] = String.prototype.substring;
String.prototype.substring = { substring () {
	log42["String.prototype.substring"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.substring"].apply__(this, args);
}}.substring
String.prototype.substring.prototype !== undefined ? String.prototype.substring.prototype = wrappedFunctions["String.prototype.substring"].prototype : null;
Object.defineProperty(String.prototype.substring, "length", {value: wrappedFunctions["String.prototype.substring"].length});

wrappedFunctions["String.prototype.toLocaleLowerCase"] = String.prototype.toLocaleLowerCase;
String.prototype.toLocaleLowerCase = { toLocaleLowerCase () {
	log42["String.prototype.toLocaleLowerCase"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.toLocaleLowerCase"].apply__(this, args);
}}.toLocaleLowerCase
String.prototype.toLocaleLowerCase.prototype !== undefined ? String.prototype.toLocaleLowerCase.prototype = wrappedFunctions["String.prototype.toLocaleLowerCase"].prototype : null;
Object.defineProperty(String.prototype.toLocaleLowerCase, "length", {value: wrappedFunctions["String.prototype.toLocaleLowerCase"].length});

wrappedFunctions["String.prototype.toLocaleUpperCase"] = String.prototype.toLocaleUpperCase;
String.prototype.toLocaleUpperCase = { toLocaleUpperCase () {
	log42["String.prototype.toLocaleUpperCase"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.toLocaleUpperCase"].apply__(this, args);
}}.toLocaleUpperCase
String.prototype.toLocaleUpperCase.prototype !== undefined ? String.prototype.toLocaleUpperCase.prototype = wrappedFunctions["String.prototype.toLocaleUpperCase"].prototype : null;
Object.defineProperty(String.prototype.toLocaleUpperCase, "length", {value: wrappedFunctions["String.prototype.toLocaleUpperCase"].length});

wrappedFunctions["String.prototype.toLowerCase"] = String.prototype.toLowerCase;
String.prototype.toLowerCase = { toLowerCase () {
	log42["String.prototype.toLowerCase"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.toLowerCase"].apply__(this, args);
}}.toLowerCase
String.prototype.toLowerCase.prototype !== undefined ? String.prototype.toLowerCase.prototype = wrappedFunctions["String.prototype.toLowerCase"].prototype : null;
Object.defineProperty(String.prototype.toLowerCase, "length", {value: wrappedFunctions["String.prototype.toLowerCase"].length});

wrappedFunctions["String.prototype.toString"] = String.prototype.toString;
String.prototype.toString = { toString () {
	log42["String.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.toString"].apply__(this, args);
}}.toString
String.prototype.toString.prototype !== undefined ? String.prototype.toString.prototype = wrappedFunctions["String.prototype.toString"].prototype : null;
Object.defineProperty(String.prototype.toString, "length", {value: wrappedFunctions["String.prototype.toString"].length});

wrappedFunctions["String.prototype.toUpperCase"] = String.prototype.toUpperCase;
String.prototype.toUpperCase = { toUpperCase () {
	log42["String.prototype.toUpperCase"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.toUpperCase"].apply__(this, args);
}}.toUpperCase
String.prototype.toUpperCase.prototype !== undefined ? String.prototype.toUpperCase.prototype = wrappedFunctions["String.prototype.toUpperCase"].prototype : null;
Object.defineProperty(String.prototype.toUpperCase, "length", {value: wrappedFunctions["String.prototype.toUpperCase"].length});

wrappedFunctions["String.prototype.trim"] = String.prototype.trim;
String.prototype.trim = { trim () {
	log42["String.prototype.trim"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.trim"].apply__(this, args);
}}.trim
String.prototype.trim.prototype !== undefined ? String.prototype.trim.prototype = wrappedFunctions["String.prototype.trim"].prototype : null;
Object.defineProperty(String.prototype.trim, "length", {value: wrappedFunctions["String.prototype.trim"].length});

wrappedFunctions["String.prototype.trimEnd"] = String.prototype.trimEnd;
String.prototype.trimEnd = { trimEnd () {
	log42["String.prototype.trimEnd"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.trimEnd"].apply__(this, args);
}}.trimEnd
String.prototype.trimEnd.prototype !== undefined ? String.prototype.trimEnd.prototype = wrappedFunctions["String.prototype.trimEnd"].prototype : null;
Object.defineProperty(String.prototype.trimEnd, "length", {value: wrappedFunctions["String.prototype.trimEnd"].length});

wrappedFunctions["String.prototype.trimStart"] = String.prototype.trimStart;
String.prototype.trimStart = { trimStart () {
	log42["String.prototype.trimStart"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.trimStart"].apply__(this, args);
}}.trimStart
String.prototype.trimStart.prototype !== undefined ? String.prototype.trimStart.prototype = wrappedFunctions["String.prototype.trimStart"].prototype : null;
Object.defineProperty(String.prototype.trimStart, "length", {value: wrappedFunctions["String.prototype.trimStart"].length});

wrappedFunctions["String.prototype.valueOf"] = String.prototype.valueOf;
String.prototype.valueOf = { valueOf () {
	log42["String.prototype.valueOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.valueOf"].apply__(this, args);
}}.valueOf
String.prototype.valueOf.prototype !== undefined ? String.prototype.valueOf.prototype = wrappedFunctions["String.prototype.valueOf"].prototype : null;
Object.defineProperty(String.prototype.valueOf, "length", {value: wrappedFunctions["String.prototype.valueOf"].length});

wrappedFunctions["RegExp.prototype.exec"] = RegExp.prototype.exec;
RegExp.prototype.exec = { exec () {
	log42["RegExp.prototype.exec"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["RegExp.prototype.exec"].apply__(this, args);
}}.exec
RegExp.prototype.exec.prototype !== undefined ? RegExp.prototype.exec.prototype = wrappedFunctions["RegExp.prototype.exec"].prototype : null;
Object.defineProperty(RegExp.prototype.exec, "length", {value: wrappedFunctions["RegExp.prototype.exec"].length});

wrappedFunctions["RegExp.prototype.test"] = RegExp.prototype.test;
RegExp.prototype.test = { test () {
	log42["RegExp.prototype.test"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["RegExp.prototype.test"].apply__(this, args);
}}.test
RegExp.prototype.test.prototype !== undefined ? RegExp.prototype.test.prototype = wrappedFunctions["RegExp.prototype.test"].prototype : null;
Object.defineProperty(RegExp.prototype.test, "length", {value: wrappedFunctions["RegExp.prototype.test"].length});

wrappedFunctions["RegExp.prototype.toString"] = RegExp.prototype.toString;
RegExp.prototype.toString = { toString () {
	log42["RegExp.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["RegExp.prototype.toString"].apply__(this, args);
}}.toString
RegExp.prototype.toString.prototype !== undefined ? RegExp.prototype.toString.prototype = wrappedFunctions["RegExp.prototype.toString"].prototype : null;
Object.defineProperty(RegExp.prototype.toString, "length", {value: wrappedFunctions["RegExp.prototype.toString"].length});

wrappedFunctions["Array.prototype.concat"] = Array.prototype.concat;
Array.prototype.concat = { concat () {
	log42["Array.prototype.concat"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.concat"].apply__(this, args);
}}.concat
Array.prototype.concat.prototype !== undefined ? Array.prototype.concat.prototype = wrappedFunctions["Array.prototype.concat"].prototype : null;
Object.defineProperty(Array.prototype.concat, "length", {value: wrappedFunctions["Array.prototype.concat"].length});

wrappedFunctions["Array.prototype.copyWithin"] = Array.prototype.copyWithin;
Array.prototype.copyWithin = { copyWithin () {
	log42["Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Array.prototype.copyWithin.prototype !== undefined ? Array.prototype.copyWithin.prototype = wrappedFunctions["Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Array.prototype.copyWithin, "length", {value: wrappedFunctions["Array.prototype.copyWithin"].length});

wrappedFunctions["Array.prototype.entries"] = Array.prototype.entries;
Array.prototype.entries = { entries () {
	log42["Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.entries"].apply__(this, args);
}}.entries
Array.prototype.entries.prototype !== undefined ? Array.prototype.entries.prototype = wrappedFunctions["Array.prototype.entries"].prototype : null;
Object.defineProperty(Array.prototype.entries, "length", {value: wrappedFunctions["Array.prototype.entries"].length});

wrappedFunctions["Array.prototype.every"] = Array.prototype.every;
Array.prototype.every = { every () {
	log42["Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.every"].apply__(this, args);
}}.every
Array.prototype.every.prototype !== undefined ? Array.prototype.every.prototype = wrappedFunctions["Array.prototype.every"].prototype : null;
Object.defineProperty(Array.prototype.every, "length", {value: wrappedFunctions["Array.prototype.every"].length});

wrappedFunctions["Array.prototype.fill"] = Array.prototype.fill;
Array.prototype.fill = { fill () {
	log42["Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.fill"].apply__(this, args);
}}.fill
Array.prototype.fill.prototype !== undefined ? Array.prototype.fill.prototype = wrappedFunctions["Array.prototype.fill"].prototype : null;
Object.defineProperty(Array.prototype.fill, "length", {value: wrappedFunctions["Array.prototype.fill"].length});

wrappedFunctions["Array.prototype.filter"] = Array.prototype.filter;
Array.prototype.filter = { filter () {
	log42["Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.filter"].apply__(this, args);
}}.filter
Array.prototype.filter.prototype !== undefined ? Array.prototype.filter.prototype = wrappedFunctions["Array.prototype.filter"].prototype : null;
Object.defineProperty(Array.prototype.filter, "length", {value: wrappedFunctions["Array.prototype.filter"].length});

wrappedFunctions["Array.prototype.find"] = Array.prototype.find;
Array.prototype.find = { find () {
	log42["Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.find"].apply__(this, args);
}}.find
Array.prototype.find.prototype !== undefined ? Array.prototype.find.prototype = wrappedFunctions["Array.prototype.find"].prototype : null;
Object.defineProperty(Array.prototype.find, "length", {value: wrappedFunctions["Array.prototype.find"].length});

wrappedFunctions["Array.prototype.findIndex"] = Array.prototype.findIndex;
Array.prototype.findIndex = { findIndex () {
	log42["Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Array.prototype.findIndex.prototype !== undefined ? Array.prototype.findIndex.prototype = wrappedFunctions["Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Array.prototype.findIndex, "length", {value: wrappedFunctions["Array.prototype.findIndex"].length});

wrappedFunctions["Array.prototype.flat"] = Array.prototype.flat;
Array.prototype.flat = { flat () {
	log42["Array.prototype.flat"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.flat"].apply__(this, args);
}}.flat
Array.prototype.flat.prototype !== undefined ? Array.prototype.flat.prototype = wrappedFunctions["Array.prototype.flat"].prototype : null;
Object.defineProperty(Array.prototype.flat, "length", {value: wrappedFunctions["Array.prototype.flat"].length});

wrappedFunctions["Array.prototype.flatMap"] = Array.prototype.flatMap;
Array.prototype.flatMap = { flatMap () {
	log42["Array.prototype.flatMap"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.flatMap"].apply__(this, args);
}}.flatMap
Array.prototype.flatMap.prototype !== undefined ? Array.prototype.flatMap.prototype = wrappedFunctions["Array.prototype.flatMap"].prototype : null;
Object.defineProperty(Array.prototype.flatMap, "length", {value: wrappedFunctions["Array.prototype.flatMap"].length});

wrappedFunctions["Array.prototype.forEach"] = Array.prototype.forEach;
Array.prototype.forEach = { forEach () {
	log42["Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.forEach"].apply__(this, args);
}}.forEach
Array.prototype.forEach.prototype !== undefined ? Array.prototype.forEach.prototype = wrappedFunctions["Array.prototype.forEach"].prototype : null;
Object.defineProperty(Array.prototype.forEach, "length", {value: wrappedFunctions["Array.prototype.forEach"].length});

wrappedFunctions["Array.prototype.includes"] = Array.prototype.includes;
Array.prototype.includes = { includes () {
	log42["Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.includes"].apply__(this, args);
}}.includes
Array.prototype.includes.prototype !== undefined ? Array.prototype.includes.prototype = wrappedFunctions["Array.prototype.includes"].prototype : null;
Object.defineProperty(Array.prototype.includes, "length", {value: wrappedFunctions["Array.prototype.includes"].length});

wrappedFunctions["Array.prototype.indexOf"] = Array.prototype.indexOf;
Array.prototype.indexOf = { indexOf () {
	log42["Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Array.prototype.indexOf.prototype !== undefined ? Array.prototype.indexOf.prototype = wrappedFunctions["Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Array.prototype.indexOf, "length", {value: wrappedFunctions["Array.prototype.indexOf"].length});

wrappedFunctions["Array.prototype.join"] = Array.prototype.join;
Array.prototype.join = { join () {
	log42["Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.join"].apply__(this, args);
}}.join
Array.prototype.join.prototype !== undefined ? Array.prototype.join.prototype = wrappedFunctions["Array.prototype.join"].prototype : null;
Object.defineProperty(Array.prototype.join, "length", {value: wrappedFunctions["Array.prototype.join"].length});

wrappedFunctions["Array.prototype.keys"] = Array.prototype.keys;
Array.prototype.keys = { keys () {
	log42["Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.keys"].apply__(this, args);
}}.keys
Array.prototype.keys.prototype !== undefined ? Array.prototype.keys.prototype = wrappedFunctions["Array.prototype.keys"].prototype : null;
Object.defineProperty(Array.prototype.keys, "length", {value: wrappedFunctions["Array.prototype.keys"].length});

wrappedFunctions["Array.prototype.lastIndexOf"] = Array.prototype.lastIndexOf;
Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Array.prototype.lastIndexOf.prototype !== undefined ? Array.prototype.lastIndexOf.prototype = wrappedFunctions["Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Array.prototype.lastIndexOf"].length});

wrappedFunctions["Array.prototype.map"] = Array.prototype.map;
Array.prototype.map = { map () {
	log42["Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.map"].apply__(this, args);
}}.map
Array.prototype.map.prototype !== undefined ? Array.prototype.map.prototype = wrappedFunctions["Array.prototype.map"].prototype : null;
Object.defineProperty(Array.prototype.map, "length", {value: wrappedFunctions["Array.prototype.map"].length});

wrappedFunctions["Array.prototype.pop"] = Array.prototype.pop;
Array.prototype.pop = { pop () {
	log42["Array.prototype.pop"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.pop"].apply__(this, args);
}}.pop
Array.prototype.pop.prototype !== undefined ? Array.prototype.pop.prototype = wrappedFunctions["Array.prototype.pop"].prototype : null;
Object.defineProperty(Array.prototype.pop, "length", {value: wrappedFunctions["Array.prototype.pop"].length});

wrappedFunctions["Array.prototype.push"] = Array.prototype.push;
Array.prototype.push = { push () {
	log42["Array.prototype.push"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.push"].apply__(this, args);
}}.push
Array.prototype.push.prototype !== undefined ? Array.prototype.push.prototype = wrappedFunctions["Array.prototype.push"].prototype : null;
Object.defineProperty(Array.prototype.push, "length", {value: wrappedFunctions["Array.prototype.push"].length});

wrappedFunctions["Array.prototype.reduce"] = Array.prototype.reduce;
Array.prototype.reduce = { reduce () {
	log42["Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.reduce"].apply__(this, args);
}}.reduce
Array.prototype.reduce.prototype !== undefined ? Array.prototype.reduce.prototype = wrappedFunctions["Array.prototype.reduce"].prototype : null;
Object.defineProperty(Array.prototype.reduce, "length", {value: wrappedFunctions["Array.prototype.reduce"].length});

wrappedFunctions["Array.prototype.reduceRight"] = Array.prototype.reduceRight;
Array.prototype.reduceRight = { reduceRight () {
	log42["Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Array.prototype.reduceRight.prototype !== undefined ? Array.prototype.reduceRight.prototype = wrappedFunctions["Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Array.prototype.reduceRight, "length", {value: wrappedFunctions["Array.prototype.reduceRight"].length});

wrappedFunctions["Array.prototype.reverse"] = Array.prototype.reverse;
Array.prototype.reverse = { reverse () {
	log42["Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.reverse"].apply__(this, args);
}}.reverse
Array.prototype.reverse.prototype !== undefined ? Array.prototype.reverse.prototype = wrappedFunctions["Array.prototype.reverse"].prototype : null;
Object.defineProperty(Array.prototype.reverse, "length", {value: wrappedFunctions["Array.prototype.reverse"].length});

wrappedFunctions["Array.prototype.shift"] = Array.prototype.shift;
Array.prototype.shift = { shift () {
	log42["Array.prototype.shift"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.shift"].apply__(this, args);
}}.shift
Array.prototype.shift.prototype !== undefined ? Array.prototype.shift.prototype = wrappedFunctions["Array.prototype.shift"].prototype : null;
Object.defineProperty(Array.prototype.shift, "length", {value: wrappedFunctions["Array.prototype.shift"].length});

wrappedFunctions["Array.prototype.slice"] = Array.prototype.slice;
Array.prototype.slice = { slice () {
	log42["Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.slice"].apply__(this, args);
}}.slice
Array.prototype.slice.prototype !== undefined ? Array.prototype.slice.prototype = wrappedFunctions["Array.prototype.slice"].prototype : null;
Object.defineProperty(Array.prototype.slice, "length", {value: wrappedFunctions["Array.prototype.slice"].length});

wrappedFunctions["Array.prototype.some"] = Array.prototype.some;
Array.prototype.some = { some () {
	log42["Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.some"].apply__(this, args);
}}.some
Array.prototype.some.prototype !== undefined ? Array.prototype.some.prototype = wrappedFunctions["Array.prototype.some"].prototype : null;
Object.defineProperty(Array.prototype.some, "length", {value: wrappedFunctions["Array.prototype.some"].length});

wrappedFunctions["Array.prototype.sort"] = Array.prototype.sort;
Array.prototype.sort = { sort () {
	log42["Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.sort"].apply__(this, args);
}}.sort
Array.prototype.sort.prototype !== undefined ? Array.prototype.sort.prototype = wrappedFunctions["Array.prototype.sort"].prototype : null;
Object.defineProperty(Array.prototype.sort, "length", {value: wrappedFunctions["Array.prototype.sort"].length});

wrappedFunctions["Array.prototype.splice"] = Array.prototype.splice;
Array.prototype.splice = { splice () {
	log42["Array.prototype.splice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.splice"].apply__(this, args);
}}.splice
Array.prototype.splice.prototype !== undefined ? Array.prototype.splice.prototype = wrappedFunctions["Array.prototype.splice"].prototype : null;
Object.defineProperty(Array.prototype.splice, "length", {value: wrappedFunctions["Array.prototype.splice"].length});

wrappedFunctions["Array.prototype.toLocaleString"] = Array.prototype.toLocaleString;
Array.prototype.toLocaleString = { toLocaleString () {
	log42["Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Array.prototype.toLocaleString.prototype !== undefined ? Array.prototype.toLocaleString.prototype = wrappedFunctions["Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Array.prototype.toLocaleString"].length});

wrappedFunctions["Array.prototype.toString"] = Array.prototype.toString;
Array.prototype.toString = { toString () {
	log42["Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.toString"].apply__(this, args);
}}.toString
Array.prototype.toString.prototype !== undefined ? Array.prototype.toString.prototype = wrappedFunctions["Array.prototype.toString"].prototype : null;
Object.defineProperty(Array.prototype.toString, "length", {value: wrappedFunctions["Array.prototype.toString"].length});

wrappedFunctions["Array.prototype.unshift"] = Array.prototype.unshift;
Array.prototype.unshift = { unshift () {
	log42["Array.prototype.unshift"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.unshift"].apply__(this, args);
}}.unshift
Array.prototype.unshift.prototype !== undefined ? Array.prototype.unshift.prototype = wrappedFunctions["Array.prototype.unshift"].prototype : null;
Object.defineProperty(Array.prototype.unshift, "length", {value: wrappedFunctions["Array.prototype.unshift"].length});

wrappedFunctions["Array.prototype.values"] = Array.prototype.values;
Array.prototype.values = { values () {
	log42["Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Array.prototype.values"].apply__(this, args);
}}.values
Array.prototype.values.prototype !== undefined ? Array.prototype.values.prototype = wrappedFunctions["Array.prototype.values"].prototype : null;
Object.defineProperty(Array.prototype.values, "length", {value: wrappedFunctions["Array.prototype.values"].length});

wrappedFunctions["Int8Array.prototype.copyWithin"] = Int8Array.prototype.copyWithin;
Int8Array.prototype.copyWithin = { copyWithin () {
	log42["Int8Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Int8Array.prototype.copyWithin.prototype !== undefined ? Int8Array.prototype.copyWithin.prototype = wrappedFunctions["Int8Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Int8Array.prototype.copyWithin, "length", {value: wrappedFunctions["Int8Array.prototype.copyWithin"].length});

wrappedFunctions["Uint8Array.prototype.copyWithin"] = Uint8Array.prototype.copyWithin;
Uint8Array.prototype.copyWithin = { copyWithin () {
	log42["Uint8Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Uint8Array.prototype.copyWithin.prototype !== undefined ? Uint8Array.prototype.copyWithin.prototype = wrappedFunctions["Uint8Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Uint8Array.prototype.copyWithin, "length", {value: wrappedFunctions["Uint8Array.prototype.copyWithin"].length});

wrappedFunctions["Uint8ClampedArray.prototype.copyWithin"] = Uint8ClampedArray.prototype.copyWithin;
Uint8ClampedArray.prototype.copyWithin = { copyWithin () {
	log42["Uint8ClampedArray.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Uint8ClampedArray.prototype.copyWithin.prototype !== undefined ? Uint8ClampedArray.prototype.copyWithin.prototype = wrappedFunctions["Uint8ClampedArray.prototype.copyWithin"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.copyWithin, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.copyWithin"].length});

wrappedFunctions["Int16Array.prototype.copyWithin"] = Int16Array.prototype.copyWithin;
Int16Array.prototype.copyWithin = { copyWithin () {
	log42["Int16Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Int16Array.prototype.copyWithin.prototype !== undefined ? Int16Array.prototype.copyWithin.prototype = wrappedFunctions["Int16Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Int16Array.prototype.copyWithin, "length", {value: wrappedFunctions["Int16Array.prototype.copyWithin"].length});

wrappedFunctions["Uint16Array.prototype.copyWithin"] = Uint16Array.prototype.copyWithin;
Uint16Array.prototype.copyWithin = { copyWithin () {
	log42["Uint16Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Uint16Array.prototype.copyWithin.prototype !== undefined ? Uint16Array.prototype.copyWithin.prototype = wrappedFunctions["Uint16Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Uint16Array.prototype.copyWithin, "length", {value: wrappedFunctions["Uint16Array.prototype.copyWithin"].length});

wrappedFunctions["Int32Array.prototype.copyWithin"] = Int32Array.prototype.copyWithin;
Int32Array.prototype.copyWithin = { copyWithin () {
	log42["Int32Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Int32Array.prototype.copyWithin.prototype !== undefined ? Int32Array.prototype.copyWithin.prototype = wrappedFunctions["Int32Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Int32Array.prototype.copyWithin, "length", {value: wrappedFunctions["Int32Array.prototype.copyWithin"].length});

wrappedFunctions["Uint32Array.prototype.copyWithin"] = Uint32Array.prototype.copyWithin;
Uint32Array.prototype.copyWithin = { copyWithin () {
	log42["Uint32Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Uint32Array.prototype.copyWithin.prototype !== undefined ? Uint32Array.prototype.copyWithin.prototype = wrappedFunctions["Uint32Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Uint32Array.prototype.copyWithin, "length", {value: wrappedFunctions["Uint32Array.prototype.copyWithin"].length});

wrappedFunctions["BigInt64Array.prototype.copyWithin"] = BigInt64Array.prototype.copyWithin;
BigInt64Array.prototype.copyWithin = { copyWithin () {
	log42["BigInt64Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
BigInt64Array.prototype.copyWithin.prototype !== undefined ? BigInt64Array.prototype.copyWithin.prototype = wrappedFunctions["BigInt64Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.copyWithin, "length", {value: wrappedFunctions["BigInt64Array.prototype.copyWithin"].length});

wrappedFunctions["BigUint64Array.prototype.copyWithin"] = BigUint64Array.prototype.copyWithin;
BigUint64Array.prototype.copyWithin = { copyWithin () {
	log42["BigUint64Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
BigUint64Array.prototype.copyWithin.prototype !== undefined ? BigUint64Array.prototype.copyWithin.prototype = wrappedFunctions["BigUint64Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.copyWithin, "length", {value: wrappedFunctions["BigUint64Array.prototype.copyWithin"].length});

wrappedFunctions["Float32Array.prototype.copyWithin"] = Float32Array.prototype.copyWithin;
Float32Array.prototype.copyWithin = { copyWithin () {
	log42["Float32Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Float32Array.prototype.copyWithin.prototype !== undefined ? Float32Array.prototype.copyWithin.prototype = wrappedFunctions["Float32Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Float32Array.prototype.copyWithin, "length", {value: wrappedFunctions["Float32Array.prototype.copyWithin"].length});

wrappedFunctions["Float64Array.prototype.copyWithin"] = Float64Array.prototype.copyWithin;
Float64Array.prototype.copyWithin = { copyWithin () {
	log42["Float64Array.prototype.copyWithin"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.copyWithin"].apply__(this, args);
}}.copyWithin
Float64Array.prototype.copyWithin.prototype !== undefined ? Float64Array.prototype.copyWithin.prototype = wrappedFunctions["Float64Array.prototype.copyWithin"].prototype : null;
Object.defineProperty(Float64Array.prototype.copyWithin, "length", {value: wrappedFunctions["Float64Array.prototype.copyWithin"].length});

wrappedFunctions["Int8Array.prototype.entries"] = Int8Array.prototype.entries;
Int8Array.prototype.entries = { entries () {
	log42["Int8Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.entries"].apply__(this, args);
}}.entries
Int8Array.prototype.entries.prototype !== undefined ? Int8Array.prototype.entries.prototype = wrappedFunctions["Int8Array.prototype.entries"].prototype : null;
Object.defineProperty(Int8Array.prototype.entries, "length", {value: wrappedFunctions["Int8Array.prototype.entries"].length});

wrappedFunctions["Uint8Array.prototype.entries"] = Uint8Array.prototype.entries;
Uint8Array.prototype.entries = { entries () {
	log42["Uint8Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.entries"].apply__(this, args);
}}.entries
Uint8Array.prototype.entries.prototype !== undefined ? Uint8Array.prototype.entries.prototype = wrappedFunctions["Uint8Array.prototype.entries"].prototype : null;
Object.defineProperty(Uint8Array.prototype.entries, "length", {value: wrappedFunctions["Uint8Array.prototype.entries"].length});

wrappedFunctions["Uint8ClampedArray.prototype.entries"] = Uint8ClampedArray.prototype.entries;
Uint8ClampedArray.prototype.entries = { entries () {
	log42["Uint8ClampedArray.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.entries"].apply__(this, args);
}}.entries
Uint8ClampedArray.prototype.entries.prototype !== undefined ? Uint8ClampedArray.prototype.entries.prototype = wrappedFunctions["Uint8ClampedArray.prototype.entries"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.entries, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.entries"].length});

wrappedFunctions["Int16Array.prototype.entries"] = Int16Array.prototype.entries;
Int16Array.prototype.entries = { entries () {
	log42["Int16Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.entries"].apply__(this, args);
}}.entries
Int16Array.prototype.entries.prototype !== undefined ? Int16Array.prototype.entries.prototype = wrappedFunctions["Int16Array.prototype.entries"].prototype : null;
Object.defineProperty(Int16Array.prototype.entries, "length", {value: wrappedFunctions["Int16Array.prototype.entries"].length});

wrappedFunctions["Uint16Array.prototype.entries"] = Uint16Array.prototype.entries;
Uint16Array.prototype.entries = { entries () {
	log42["Uint16Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.entries"].apply__(this, args);
}}.entries
Uint16Array.prototype.entries.prototype !== undefined ? Uint16Array.prototype.entries.prototype = wrappedFunctions["Uint16Array.prototype.entries"].prototype : null;
Object.defineProperty(Uint16Array.prototype.entries, "length", {value: wrappedFunctions["Uint16Array.prototype.entries"].length});

wrappedFunctions["Int32Array.prototype.entries"] = Int32Array.prototype.entries;
Int32Array.prototype.entries = { entries () {
	log42["Int32Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.entries"].apply__(this, args);
}}.entries
Int32Array.prototype.entries.prototype !== undefined ? Int32Array.prototype.entries.prototype = wrappedFunctions["Int32Array.prototype.entries"].prototype : null;
Object.defineProperty(Int32Array.prototype.entries, "length", {value: wrappedFunctions["Int32Array.prototype.entries"].length});

wrappedFunctions["Uint32Array.prototype.entries"] = Uint32Array.prototype.entries;
Uint32Array.prototype.entries = { entries () {
	log42["Uint32Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.entries"].apply__(this, args);
}}.entries
Uint32Array.prototype.entries.prototype !== undefined ? Uint32Array.prototype.entries.prototype = wrappedFunctions["Uint32Array.prototype.entries"].prototype : null;
Object.defineProperty(Uint32Array.prototype.entries, "length", {value: wrappedFunctions["Uint32Array.prototype.entries"].length});

wrappedFunctions["BigInt64Array.prototype.entries"] = BigInt64Array.prototype.entries;
BigInt64Array.prototype.entries = { entries () {
	log42["BigInt64Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.entries"].apply__(this, args);
}}.entries
BigInt64Array.prototype.entries.prototype !== undefined ? BigInt64Array.prototype.entries.prototype = wrappedFunctions["BigInt64Array.prototype.entries"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.entries, "length", {value: wrappedFunctions["BigInt64Array.prototype.entries"].length});

wrappedFunctions["BigUint64Array.prototype.entries"] = BigUint64Array.prototype.entries;
BigUint64Array.prototype.entries = { entries () {
	log42["BigUint64Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.entries"].apply__(this, args);
}}.entries
BigUint64Array.prototype.entries.prototype !== undefined ? BigUint64Array.prototype.entries.prototype = wrappedFunctions["BigUint64Array.prototype.entries"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.entries, "length", {value: wrappedFunctions["BigUint64Array.prototype.entries"].length});

wrappedFunctions["Float32Array.prototype.entries"] = Float32Array.prototype.entries;
Float32Array.prototype.entries = { entries () {
	log42["Float32Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.entries"].apply__(this, args);
}}.entries
Float32Array.prototype.entries.prototype !== undefined ? Float32Array.prototype.entries.prototype = wrappedFunctions["Float32Array.prototype.entries"].prototype : null;
Object.defineProperty(Float32Array.prototype.entries, "length", {value: wrappedFunctions["Float32Array.prototype.entries"].length});

wrappedFunctions["Float64Array.prototype.entries"] = Float64Array.prototype.entries;
Float64Array.prototype.entries = { entries () {
	log42["Float64Array.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.entries"].apply__(this, args);
}}.entries
Float64Array.prototype.entries.prototype !== undefined ? Float64Array.prototype.entries.prototype = wrappedFunctions["Float64Array.prototype.entries"].prototype : null;
Object.defineProperty(Float64Array.prototype.entries, "length", {value: wrappedFunctions["Float64Array.prototype.entries"].length});

wrappedFunctions["Int8Array.prototype.every"] = Int8Array.prototype.every;
Int8Array.prototype.every = { every () {
	log42["Int8Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.every"].apply__(this, args);
}}.every
Int8Array.prototype.every.prototype !== undefined ? Int8Array.prototype.every.prototype = wrappedFunctions["Int8Array.prototype.every"].prototype : null;
Object.defineProperty(Int8Array.prototype.every, "length", {value: wrappedFunctions["Int8Array.prototype.every"].length});

wrappedFunctions["Uint8Array.prototype.every"] = Uint8Array.prototype.every;
Uint8Array.prototype.every = { every () {
	log42["Uint8Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.every"].apply__(this, args);
}}.every
Uint8Array.prototype.every.prototype !== undefined ? Uint8Array.prototype.every.prototype = wrappedFunctions["Uint8Array.prototype.every"].prototype : null;
Object.defineProperty(Uint8Array.prototype.every, "length", {value: wrappedFunctions["Uint8Array.prototype.every"].length});

wrappedFunctions["Uint8ClampedArray.prototype.every"] = Uint8ClampedArray.prototype.every;
Uint8ClampedArray.prototype.every = { every () {
	log42["Uint8ClampedArray.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.every"].apply__(this, args);
}}.every
Uint8ClampedArray.prototype.every.prototype !== undefined ? Uint8ClampedArray.prototype.every.prototype = wrappedFunctions["Uint8ClampedArray.prototype.every"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.every, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.every"].length});

wrappedFunctions["Int16Array.prototype.every"] = Int16Array.prototype.every;
Int16Array.prototype.every = { every () {
	log42["Int16Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.every"].apply__(this, args);
}}.every
Int16Array.prototype.every.prototype !== undefined ? Int16Array.prototype.every.prototype = wrappedFunctions["Int16Array.prototype.every"].prototype : null;
Object.defineProperty(Int16Array.prototype.every, "length", {value: wrappedFunctions["Int16Array.prototype.every"].length});

wrappedFunctions["Uint16Array.prototype.every"] = Uint16Array.prototype.every;
Uint16Array.prototype.every = { every () {
	log42["Uint16Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.every"].apply__(this, args);
}}.every
Uint16Array.prototype.every.prototype !== undefined ? Uint16Array.prototype.every.prototype = wrappedFunctions["Uint16Array.prototype.every"].prototype : null;
Object.defineProperty(Uint16Array.prototype.every, "length", {value: wrappedFunctions["Uint16Array.prototype.every"].length});

wrappedFunctions["Int32Array.prototype.every"] = Int32Array.prototype.every;
Int32Array.prototype.every = { every () {
	log42["Int32Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.every"].apply__(this, args);
}}.every
Int32Array.prototype.every.prototype !== undefined ? Int32Array.prototype.every.prototype = wrappedFunctions["Int32Array.prototype.every"].prototype : null;
Object.defineProperty(Int32Array.prototype.every, "length", {value: wrappedFunctions["Int32Array.prototype.every"].length});

wrappedFunctions["Uint32Array.prototype.every"] = Uint32Array.prototype.every;
Uint32Array.prototype.every = { every () {
	log42["Uint32Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.every"].apply__(this, args);
}}.every
Uint32Array.prototype.every.prototype !== undefined ? Uint32Array.prototype.every.prototype = wrappedFunctions["Uint32Array.prototype.every"].prototype : null;
Object.defineProperty(Uint32Array.prototype.every, "length", {value: wrappedFunctions["Uint32Array.prototype.every"].length});

wrappedFunctions["BigInt64Array.prototype.every"] = BigInt64Array.prototype.every;
BigInt64Array.prototype.every = { every () {
	log42["BigInt64Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.every"].apply__(this, args);
}}.every
BigInt64Array.prototype.every.prototype !== undefined ? BigInt64Array.prototype.every.prototype = wrappedFunctions["BigInt64Array.prototype.every"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.every, "length", {value: wrappedFunctions["BigInt64Array.prototype.every"].length});

wrappedFunctions["BigUint64Array.prototype.every"] = BigUint64Array.prototype.every;
BigUint64Array.prototype.every = { every () {
	log42["BigUint64Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.every"].apply__(this, args);
}}.every
BigUint64Array.prototype.every.prototype !== undefined ? BigUint64Array.prototype.every.prototype = wrappedFunctions["BigUint64Array.prototype.every"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.every, "length", {value: wrappedFunctions["BigUint64Array.prototype.every"].length});

wrappedFunctions["Float32Array.prototype.every"] = Float32Array.prototype.every;
Float32Array.prototype.every = { every () {
	log42["Float32Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.every"].apply__(this, args);
}}.every
Float32Array.prototype.every.prototype !== undefined ? Float32Array.prototype.every.prototype = wrappedFunctions["Float32Array.prototype.every"].prototype : null;
Object.defineProperty(Float32Array.prototype.every, "length", {value: wrappedFunctions["Float32Array.prototype.every"].length});

wrappedFunctions["Float64Array.prototype.every"] = Float64Array.prototype.every;
Float64Array.prototype.every = { every () {
	log42["Float64Array.prototype.every"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.every"].apply__(this, args);
}}.every
Float64Array.prototype.every.prototype !== undefined ? Float64Array.prototype.every.prototype = wrappedFunctions["Float64Array.prototype.every"].prototype : null;
Object.defineProperty(Float64Array.prototype.every, "length", {value: wrappedFunctions["Float64Array.prototype.every"].length});

wrappedFunctions["Int8Array.prototype.fill"] = Int8Array.prototype.fill;
Int8Array.prototype.fill = { fill () {
	log42["Int8Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.fill"].apply__(this, args);
}}.fill
Int8Array.prototype.fill.prototype !== undefined ? Int8Array.prototype.fill.prototype = wrappedFunctions["Int8Array.prototype.fill"].prototype : null;
Object.defineProperty(Int8Array.prototype.fill, "length", {value: wrappedFunctions["Int8Array.prototype.fill"].length});

wrappedFunctions["Uint8Array.prototype.fill"] = Uint8Array.prototype.fill;
Uint8Array.prototype.fill = { fill () {
	log42["Uint8Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.fill"].apply__(this, args);
}}.fill
Uint8Array.prototype.fill.prototype !== undefined ? Uint8Array.prototype.fill.prototype = wrappedFunctions["Uint8Array.prototype.fill"].prototype : null;
Object.defineProperty(Uint8Array.prototype.fill, "length", {value: wrappedFunctions["Uint8Array.prototype.fill"].length});

wrappedFunctions["Uint8ClampedArray.prototype.fill"] = Uint8ClampedArray.prototype.fill;
Uint8ClampedArray.prototype.fill = { fill () {
	log42["Uint8ClampedArray.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.fill"].apply__(this, args);
}}.fill
Uint8ClampedArray.prototype.fill.prototype !== undefined ? Uint8ClampedArray.prototype.fill.prototype = wrappedFunctions["Uint8ClampedArray.prototype.fill"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.fill, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.fill"].length});

wrappedFunctions["Int16Array.prototype.fill"] = Int16Array.prototype.fill;
Int16Array.prototype.fill = { fill () {
	log42["Int16Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.fill"].apply__(this, args);
}}.fill
Int16Array.prototype.fill.prototype !== undefined ? Int16Array.prototype.fill.prototype = wrappedFunctions["Int16Array.prototype.fill"].prototype : null;
Object.defineProperty(Int16Array.prototype.fill, "length", {value: wrappedFunctions["Int16Array.prototype.fill"].length});

wrappedFunctions["Uint16Array.prototype.fill"] = Uint16Array.prototype.fill;
Uint16Array.prototype.fill = { fill () {
	log42["Uint16Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.fill"].apply__(this, args);
}}.fill
Uint16Array.prototype.fill.prototype !== undefined ? Uint16Array.prototype.fill.prototype = wrappedFunctions["Uint16Array.prototype.fill"].prototype : null;
Object.defineProperty(Uint16Array.prototype.fill, "length", {value: wrappedFunctions["Uint16Array.prototype.fill"].length});

wrappedFunctions["Int32Array.prototype.fill"] = Int32Array.prototype.fill;
Int32Array.prototype.fill = { fill () {
	log42["Int32Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.fill"].apply__(this, args);
}}.fill
Int32Array.prototype.fill.prototype !== undefined ? Int32Array.prototype.fill.prototype = wrappedFunctions["Int32Array.prototype.fill"].prototype : null;
Object.defineProperty(Int32Array.prototype.fill, "length", {value: wrappedFunctions["Int32Array.prototype.fill"].length});

wrappedFunctions["Uint32Array.prototype.fill"] = Uint32Array.prototype.fill;
Uint32Array.prototype.fill = { fill () {
	log42["Uint32Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.fill"].apply__(this, args);
}}.fill
Uint32Array.prototype.fill.prototype !== undefined ? Uint32Array.prototype.fill.prototype = wrappedFunctions["Uint32Array.prototype.fill"].prototype : null;
Object.defineProperty(Uint32Array.prototype.fill, "length", {value: wrappedFunctions["Uint32Array.prototype.fill"].length});

wrappedFunctions["BigInt64Array.prototype.fill"] = BigInt64Array.prototype.fill;
BigInt64Array.prototype.fill = { fill () {
	log42["BigInt64Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.fill"].apply__(this, args);
}}.fill
BigInt64Array.prototype.fill.prototype !== undefined ? BigInt64Array.prototype.fill.prototype = wrappedFunctions["BigInt64Array.prototype.fill"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.fill, "length", {value: wrappedFunctions["BigInt64Array.prototype.fill"].length});

wrappedFunctions["BigUint64Array.prototype.fill"] = BigUint64Array.prototype.fill;
BigUint64Array.prototype.fill = { fill () {
	log42["BigUint64Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.fill"].apply__(this, args);
}}.fill
BigUint64Array.prototype.fill.prototype !== undefined ? BigUint64Array.prototype.fill.prototype = wrappedFunctions["BigUint64Array.prototype.fill"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.fill, "length", {value: wrappedFunctions["BigUint64Array.prototype.fill"].length});

wrappedFunctions["Float32Array.prototype.fill"] = Float32Array.prototype.fill;
Float32Array.prototype.fill = { fill () {
	log42["Float32Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.fill"].apply__(this, args);
}}.fill
Float32Array.prototype.fill.prototype !== undefined ? Float32Array.prototype.fill.prototype = wrappedFunctions["Float32Array.prototype.fill"].prototype : null;
Object.defineProperty(Float32Array.prototype.fill, "length", {value: wrappedFunctions["Float32Array.prototype.fill"].length});

wrappedFunctions["Float64Array.prototype.fill"] = Float64Array.prototype.fill;
Float64Array.prototype.fill = { fill () {
	log42["Float64Array.prototype.fill"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.fill"].apply__(this, args);
}}.fill
Float64Array.prototype.fill.prototype !== undefined ? Float64Array.prototype.fill.prototype = wrappedFunctions["Float64Array.prototype.fill"].prototype : null;
Object.defineProperty(Float64Array.prototype.fill, "length", {value: wrappedFunctions["Float64Array.prototype.fill"].length});

wrappedFunctions["Int8Array.prototype.filter"] = Int8Array.prototype.filter;
Int8Array.prototype.filter = { filter () {
	log42["Int8Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.filter"].apply__(this, args);
}}.filter
Int8Array.prototype.filter.prototype !== undefined ? Int8Array.prototype.filter.prototype = wrappedFunctions["Int8Array.prototype.filter"].prototype : null;
Object.defineProperty(Int8Array.prototype.filter, "length", {value: wrappedFunctions["Int8Array.prototype.filter"].length});

wrappedFunctions["Uint8Array.prototype.filter"] = Uint8Array.prototype.filter;
Uint8Array.prototype.filter = { filter () {
	log42["Uint8Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.filter"].apply__(this, args);
}}.filter
Uint8Array.prototype.filter.prototype !== undefined ? Uint8Array.prototype.filter.prototype = wrappedFunctions["Uint8Array.prototype.filter"].prototype : null;
Object.defineProperty(Uint8Array.prototype.filter, "length", {value: wrappedFunctions["Uint8Array.prototype.filter"].length});

wrappedFunctions["Uint8ClampedArray.prototype.filter"] = Uint8ClampedArray.prototype.filter;
Uint8ClampedArray.prototype.filter = { filter () {
	log42["Uint8ClampedArray.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.filter"].apply__(this, args);
}}.filter
Uint8ClampedArray.prototype.filter.prototype !== undefined ? Uint8ClampedArray.prototype.filter.prototype = wrappedFunctions["Uint8ClampedArray.prototype.filter"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.filter, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.filter"].length});

wrappedFunctions["Int16Array.prototype.filter"] = Int16Array.prototype.filter;
Int16Array.prototype.filter = { filter () {
	log42["Int16Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.filter"].apply__(this, args);
}}.filter
Int16Array.prototype.filter.prototype !== undefined ? Int16Array.prototype.filter.prototype = wrappedFunctions["Int16Array.prototype.filter"].prototype : null;
Object.defineProperty(Int16Array.prototype.filter, "length", {value: wrappedFunctions["Int16Array.prototype.filter"].length});

wrappedFunctions["Uint16Array.prototype.filter"] = Uint16Array.prototype.filter;
Uint16Array.prototype.filter = { filter () {
	log42["Uint16Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.filter"].apply__(this, args);
}}.filter
Uint16Array.prototype.filter.prototype !== undefined ? Uint16Array.prototype.filter.prototype = wrappedFunctions["Uint16Array.prototype.filter"].prototype : null;
Object.defineProperty(Uint16Array.prototype.filter, "length", {value: wrappedFunctions["Uint16Array.prototype.filter"].length});

wrappedFunctions["Int32Array.prototype.filter"] = Int32Array.prototype.filter;
Int32Array.prototype.filter = { filter () {
	log42["Int32Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.filter"].apply__(this, args);
}}.filter
Int32Array.prototype.filter.prototype !== undefined ? Int32Array.prototype.filter.prototype = wrappedFunctions["Int32Array.prototype.filter"].prototype : null;
Object.defineProperty(Int32Array.prototype.filter, "length", {value: wrappedFunctions["Int32Array.prototype.filter"].length});

wrappedFunctions["Uint32Array.prototype.filter"] = Uint32Array.prototype.filter;
Uint32Array.prototype.filter = { filter () {
	log42["Uint32Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.filter"].apply__(this, args);
}}.filter
Uint32Array.prototype.filter.prototype !== undefined ? Uint32Array.prototype.filter.prototype = wrappedFunctions["Uint32Array.prototype.filter"].prototype : null;
Object.defineProperty(Uint32Array.prototype.filter, "length", {value: wrappedFunctions["Uint32Array.prototype.filter"].length});

wrappedFunctions["BigInt64Array.prototype.filter"] = BigInt64Array.prototype.filter;
BigInt64Array.prototype.filter = { filter () {
	log42["BigInt64Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.filter"].apply__(this, args);
}}.filter
BigInt64Array.prototype.filter.prototype !== undefined ? BigInt64Array.prototype.filter.prototype = wrappedFunctions["BigInt64Array.prototype.filter"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.filter, "length", {value: wrappedFunctions["BigInt64Array.prototype.filter"].length});

wrappedFunctions["BigUint64Array.prototype.filter"] = BigUint64Array.prototype.filter;
BigUint64Array.prototype.filter = { filter () {
	log42["BigUint64Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.filter"].apply__(this, args);
}}.filter
BigUint64Array.prototype.filter.prototype !== undefined ? BigUint64Array.prototype.filter.prototype = wrappedFunctions["BigUint64Array.prototype.filter"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.filter, "length", {value: wrappedFunctions["BigUint64Array.prototype.filter"].length});

wrappedFunctions["Float32Array.prototype.filter"] = Float32Array.prototype.filter;
Float32Array.prototype.filter = { filter () {
	log42["Float32Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.filter"].apply__(this, args);
}}.filter
Float32Array.prototype.filter.prototype !== undefined ? Float32Array.prototype.filter.prototype = wrappedFunctions["Float32Array.prototype.filter"].prototype : null;
Object.defineProperty(Float32Array.prototype.filter, "length", {value: wrappedFunctions["Float32Array.prototype.filter"].length});

wrappedFunctions["Float64Array.prototype.filter"] = Float64Array.prototype.filter;
Float64Array.prototype.filter = { filter () {
	log42["Float64Array.prototype.filter"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.filter"].apply__(this, args);
}}.filter
Float64Array.prototype.filter.prototype !== undefined ? Float64Array.prototype.filter.prototype = wrappedFunctions["Float64Array.prototype.filter"].prototype : null;
Object.defineProperty(Float64Array.prototype.filter, "length", {value: wrappedFunctions["Float64Array.prototype.filter"].length});

wrappedFunctions["Int8Array.prototype.find"] = Int8Array.prototype.find;
Int8Array.prototype.find = { find () {
	log42["Int8Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.find"].apply__(this, args);
}}.find
Int8Array.prototype.find.prototype !== undefined ? Int8Array.prototype.find.prototype = wrappedFunctions["Int8Array.prototype.find"].prototype : null;
Object.defineProperty(Int8Array.prototype.find, "length", {value: wrappedFunctions["Int8Array.prototype.find"].length});

wrappedFunctions["Uint8Array.prototype.find"] = Uint8Array.prototype.find;
Uint8Array.prototype.find = { find () {
	log42["Uint8Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.find"].apply__(this, args);
}}.find
Uint8Array.prototype.find.prototype !== undefined ? Uint8Array.prototype.find.prototype = wrappedFunctions["Uint8Array.prototype.find"].prototype : null;
Object.defineProperty(Uint8Array.prototype.find, "length", {value: wrappedFunctions["Uint8Array.prototype.find"].length});

wrappedFunctions["Uint8ClampedArray.prototype.find"] = Uint8ClampedArray.prototype.find;
Uint8ClampedArray.prototype.find = { find () {
	log42["Uint8ClampedArray.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.find"].apply__(this, args);
}}.find
Uint8ClampedArray.prototype.find.prototype !== undefined ? Uint8ClampedArray.prototype.find.prototype = wrappedFunctions["Uint8ClampedArray.prototype.find"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.find, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.find"].length});

wrappedFunctions["Int16Array.prototype.find"] = Int16Array.prototype.find;
Int16Array.prototype.find = { find () {
	log42["Int16Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.find"].apply__(this, args);
}}.find
Int16Array.prototype.find.prototype !== undefined ? Int16Array.prototype.find.prototype = wrappedFunctions["Int16Array.prototype.find"].prototype : null;
Object.defineProperty(Int16Array.prototype.find, "length", {value: wrappedFunctions["Int16Array.prototype.find"].length});

wrappedFunctions["Uint16Array.prototype.find"] = Uint16Array.prototype.find;
Uint16Array.prototype.find = { find () {
	log42["Uint16Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.find"].apply__(this, args);
}}.find
Uint16Array.prototype.find.prototype !== undefined ? Uint16Array.prototype.find.prototype = wrappedFunctions["Uint16Array.prototype.find"].prototype : null;
Object.defineProperty(Uint16Array.prototype.find, "length", {value: wrappedFunctions["Uint16Array.prototype.find"].length});

wrappedFunctions["Int32Array.prototype.find"] = Int32Array.prototype.find;
Int32Array.prototype.find = { find () {
	log42["Int32Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.find"].apply__(this, args);
}}.find
Int32Array.prototype.find.prototype !== undefined ? Int32Array.prototype.find.prototype = wrappedFunctions["Int32Array.prototype.find"].prototype : null;
Object.defineProperty(Int32Array.prototype.find, "length", {value: wrappedFunctions["Int32Array.prototype.find"].length});

wrappedFunctions["Uint32Array.prototype.find"] = Uint32Array.prototype.find;
Uint32Array.prototype.find = { find () {
	log42["Uint32Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.find"].apply__(this, args);
}}.find
Uint32Array.prototype.find.prototype !== undefined ? Uint32Array.prototype.find.prototype = wrappedFunctions["Uint32Array.prototype.find"].prototype : null;
Object.defineProperty(Uint32Array.prototype.find, "length", {value: wrappedFunctions["Uint32Array.prototype.find"].length});

wrappedFunctions["BigInt64Array.prototype.find"] = BigInt64Array.prototype.find;
BigInt64Array.prototype.find = { find () {
	log42["BigInt64Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.find"].apply__(this, args);
}}.find
BigInt64Array.prototype.find.prototype !== undefined ? BigInt64Array.prototype.find.prototype = wrappedFunctions["BigInt64Array.prototype.find"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.find, "length", {value: wrappedFunctions["BigInt64Array.prototype.find"].length});

wrappedFunctions["BigUint64Array.prototype.find"] = BigUint64Array.prototype.find;
BigUint64Array.prototype.find = { find () {
	log42["BigUint64Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.find"].apply__(this, args);
}}.find
BigUint64Array.prototype.find.prototype !== undefined ? BigUint64Array.prototype.find.prototype = wrappedFunctions["BigUint64Array.prototype.find"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.find, "length", {value: wrappedFunctions["BigUint64Array.prototype.find"].length});

wrappedFunctions["Float32Array.prototype.find"] = Float32Array.prototype.find;
Float32Array.prototype.find = { find () {
	log42["Float32Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.find"].apply__(this, args);
}}.find
Float32Array.prototype.find.prototype !== undefined ? Float32Array.prototype.find.prototype = wrappedFunctions["Float32Array.prototype.find"].prototype : null;
Object.defineProperty(Float32Array.prototype.find, "length", {value: wrappedFunctions["Float32Array.prototype.find"].length});

wrappedFunctions["Float64Array.prototype.find"] = Float64Array.prototype.find;
Float64Array.prototype.find = { find () {
	log42["Float64Array.prototype.find"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.find"].apply__(this, args);
}}.find
Float64Array.prototype.find.prototype !== undefined ? Float64Array.prototype.find.prototype = wrappedFunctions["Float64Array.prototype.find"].prototype : null;
Object.defineProperty(Float64Array.prototype.find, "length", {value: wrappedFunctions["Float64Array.prototype.find"].length});

wrappedFunctions["Int8Array.prototype.findIndex"] = Int8Array.prototype.findIndex;
Int8Array.prototype.findIndex = { findIndex () {
	log42["Int8Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Int8Array.prototype.findIndex.prototype !== undefined ? Int8Array.prototype.findIndex.prototype = wrappedFunctions["Int8Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Int8Array.prototype.findIndex, "length", {value: wrappedFunctions["Int8Array.prototype.findIndex"].length});

wrappedFunctions["Uint8Array.prototype.findIndex"] = Uint8Array.prototype.findIndex;
Uint8Array.prototype.findIndex = { findIndex () {
	log42["Uint8Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Uint8Array.prototype.findIndex.prototype !== undefined ? Uint8Array.prototype.findIndex.prototype = wrappedFunctions["Uint8Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Uint8Array.prototype.findIndex, "length", {value: wrappedFunctions["Uint8Array.prototype.findIndex"].length});

wrappedFunctions["Uint8ClampedArray.prototype.findIndex"] = Uint8ClampedArray.prototype.findIndex;
Uint8ClampedArray.prototype.findIndex = { findIndex () {
	log42["Uint8ClampedArray.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.findIndex"].apply__(this, args);
}}.findIndex
Uint8ClampedArray.prototype.findIndex.prototype !== undefined ? Uint8ClampedArray.prototype.findIndex.prototype = wrappedFunctions["Uint8ClampedArray.prototype.findIndex"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.findIndex, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.findIndex"].length});

wrappedFunctions["Int16Array.prototype.findIndex"] = Int16Array.prototype.findIndex;
Int16Array.prototype.findIndex = { findIndex () {
	log42["Int16Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Int16Array.prototype.findIndex.prototype !== undefined ? Int16Array.prototype.findIndex.prototype = wrappedFunctions["Int16Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Int16Array.prototype.findIndex, "length", {value: wrappedFunctions["Int16Array.prototype.findIndex"].length});

wrappedFunctions["Uint16Array.prototype.findIndex"] = Uint16Array.prototype.findIndex;
Uint16Array.prototype.findIndex = { findIndex () {
	log42["Uint16Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Uint16Array.prototype.findIndex.prototype !== undefined ? Uint16Array.prototype.findIndex.prototype = wrappedFunctions["Uint16Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Uint16Array.prototype.findIndex, "length", {value: wrappedFunctions["Uint16Array.prototype.findIndex"].length});

wrappedFunctions["Int32Array.prototype.findIndex"] = Int32Array.prototype.findIndex;
Int32Array.prototype.findIndex = { findIndex () {
	log42["Int32Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Int32Array.prototype.findIndex.prototype !== undefined ? Int32Array.prototype.findIndex.prototype = wrappedFunctions["Int32Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Int32Array.prototype.findIndex, "length", {value: wrappedFunctions["Int32Array.prototype.findIndex"].length});

wrappedFunctions["Uint32Array.prototype.findIndex"] = Uint32Array.prototype.findIndex;
Uint32Array.prototype.findIndex = { findIndex () {
	log42["Uint32Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Uint32Array.prototype.findIndex.prototype !== undefined ? Uint32Array.prototype.findIndex.prototype = wrappedFunctions["Uint32Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Uint32Array.prototype.findIndex, "length", {value: wrappedFunctions["Uint32Array.prototype.findIndex"].length});

wrappedFunctions["BigInt64Array.prototype.findIndex"] = BigInt64Array.prototype.findIndex;
BigInt64Array.prototype.findIndex = { findIndex () {
	log42["BigInt64Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
BigInt64Array.prototype.findIndex.prototype !== undefined ? BigInt64Array.prototype.findIndex.prototype = wrappedFunctions["BigInt64Array.prototype.findIndex"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.findIndex, "length", {value: wrappedFunctions["BigInt64Array.prototype.findIndex"].length});

wrappedFunctions["BigUint64Array.prototype.findIndex"] = BigUint64Array.prototype.findIndex;
BigUint64Array.prototype.findIndex = { findIndex () {
	log42["BigUint64Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
BigUint64Array.prototype.findIndex.prototype !== undefined ? BigUint64Array.prototype.findIndex.prototype = wrappedFunctions["BigUint64Array.prototype.findIndex"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.findIndex, "length", {value: wrappedFunctions["BigUint64Array.prototype.findIndex"].length});

wrappedFunctions["Float32Array.prototype.findIndex"] = Float32Array.prototype.findIndex;
Float32Array.prototype.findIndex = { findIndex () {
	log42["Float32Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Float32Array.prototype.findIndex.prototype !== undefined ? Float32Array.prototype.findIndex.prototype = wrappedFunctions["Float32Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Float32Array.prototype.findIndex, "length", {value: wrappedFunctions["Float32Array.prototype.findIndex"].length});

wrappedFunctions["Float64Array.prototype.findIndex"] = Float64Array.prototype.findIndex;
Float64Array.prototype.findIndex = { findIndex () {
	log42["Float64Array.prototype.findIndex"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.findIndex"].apply__(this, args);
}}.findIndex
Float64Array.prototype.findIndex.prototype !== undefined ? Float64Array.prototype.findIndex.prototype = wrappedFunctions["Float64Array.prototype.findIndex"].prototype : null;
Object.defineProperty(Float64Array.prototype.findIndex, "length", {value: wrappedFunctions["Float64Array.prototype.findIndex"].length});

wrappedFunctions["Int8Array.prototype.forEach"] = Int8Array.prototype.forEach;
Int8Array.prototype.forEach = { forEach () {
	log42["Int8Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.forEach"].apply__(this, args);
}}.forEach
Int8Array.prototype.forEach.prototype !== undefined ? Int8Array.prototype.forEach.prototype = wrappedFunctions["Int8Array.prototype.forEach"].prototype : null;
Object.defineProperty(Int8Array.prototype.forEach, "length", {value: wrappedFunctions["Int8Array.prototype.forEach"].length});

wrappedFunctions["Uint8Array.prototype.forEach"] = Uint8Array.prototype.forEach;
Uint8Array.prototype.forEach = { forEach () {
	log42["Uint8Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.forEach"].apply__(this, args);
}}.forEach
Uint8Array.prototype.forEach.prototype !== undefined ? Uint8Array.prototype.forEach.prototype = wrappedFunctions["Uint8Array.prototype.forEach"].prototype : null;
Object.defineProperty(Uint8Array.prototype.forEach, "length", {value: wrappedFunctions["Uint8Array.prototype.forEach"].length});

wrappedFunctions["Uint8ClampedArray.prototype.forEach"] = Uint8ClampedArray.prototype.forEach;
Uint8ClampedArray.prototype.forEach = { forEach () {
	log42["Uint8ClampedArray.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.forEach"].apply__(this, args);
}}.forEach
Uint8ClampedArray.prototype.forEach.prototype !== undefined ? Uint8ClampedArray.prototype.forEach.prototype = wrappedFunctions["Uint8ClampedArray.prototype.forEach"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.forEach, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.forEach"].length});

wrappedFunctions["Int16Array.prototype.forEach"] = Int16Array.prototype.forEach;
Int16Array.prototype.forEach = { forEach () {
	log42["Int16Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.forEach"].apply__(this, args);
}}.forEach
Int16Array.prototype.forEach.prototype !== undefined ? Int16Array.prototype.forEach.prototype = wrappedFunctions["Int16Array.prototype.forEach"].prototype : null;
Object.defineProperty(Int16Array.prototype.forEach, "length", {value: wrappedFunctions["Int16Array.prototype.forEach"].length});

wrappedFunctions["Uint16Array.prototype.forEach"] = Uint16Array.prototype.forEach;
Uint16Array.prototype.forEach = { forEach () {
	log42["Uint16Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.forEach"].apply__(this, args);
}}.forEach
Uint16Array.prototype.forEach.prototype !== undefined ? Uint16Array.prototype.forEach.prototype = wrappedFunctions["Uint16Array.prototype.forEach"].prototype : null;
Object.defineProperty(Uint16Array.prototype.forEach, "length", {value: wrappedFunctions["Uint16Array.prototype.forEach"].length});

wrappedFunctions["Int32Array.prototype.forEach"] = Int32Array.prototype.forEach;
Int32Array.prototype.forEach = { forEach () {
	log42["Int32Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.forEach"].apply__(this, args);
}}.forEach
Int32Array.prototype.forEach.prototype !== undefined ? Int32Array.prototype.forEach.prototype = wrappedFunctions["Int32Array.prototype.forEach"].prototype : null;
Object.defineProperty(Int32Array.prototype.forEach, "length", {value: wrappedFunctions["Int32Array.prototype.forEach"].length});

wrappedFunctions["Uint32Array.prototype.forEach"] = Uint32Array.prototype.forEach;
Uint32Array.prototype.forEach = { forEach () {
	log42["Uint32Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.forEach"].apply__(this, args);
}}.forEach
Uint32Array.prototype.forEach.prototype !== undefined ? Uint32Array.prototype.forEach.prototype = wrappedFunctions["Uint32Array.prototype.forEach"].prototype : null;
Object.defineProperty(Uint32Array.prototype.forEach, "length", {value: wrappedFunctions["Uint32Array.prototype.forEach"].length});

wrappedFunctions["BigInt64Array.prototype.forEach"] = BigInt64Array.prototype.forEach;
BigInt64Array.prototype.forEach = { forEach () {
	log42["BigInt64Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.forEach"].apply__(this, args);
}}.forEach
BigInt64Array.prototype.forEach.prototype !== undefined ? BigInt64Array.prototype.forEach.prototype = wrappedFunctions["BigInt64Array.prototype.forEach"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.forEach, "length", {value: wrappedFunctions["BigInt64Array.prototype.forEach"].length});

wrappedFunctions["BigUint64Array.prototype.forEach"] = BigUint64Array.prototype.forEach;
BigUint64Array.prototype.forEach = { forEach () {
	log42["BigUint64Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.forEach"].apply__(this, args);
}}.forEach
BigUint64Array.prototype.forEach.prototype !== undefined ? BigUint64Array.prototype.forEach.prototype = wrappedFunctions["BigUint64Array.prototype.forEach"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.forEach, "length", {value: wrappedFunctions["BigUint64Array.prototype.forEach"].length});

wrappedFunctions["Float32Array.prototype.forEach"] = Float32Array.prototype.forEach;
Float32Array.prototype.forEach = { forEach () {
	log42["Float32Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.forEach"].apply__(this, args);
}}.forEach
Float32Array.prototype.forEach.prototype !== undefined ? Float32Array.prototype.forEach.prototype = wrappedFunctions["Float32Array.prototype.forEach"].prototype : null;
Object.defineProperty(Float32Array.prototype.forEach, "length", {value: wrappedFunctions["Float32Array.prototype.forEach"].length});

wrappedFunctions["Float64Array.prototype.forEach"] = Float64Array.prototype.forEach;
Float64Array.prototype.forEach = { forEach () {
	log42["Float64Array.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.forEach"].apply__(this, args);
}}.forEach
Float64Array.prototype.forEach.prototype !== undefined ? Float64Array.prototype.forEach.prototype = wrappedFunctions["Float64Array.prototype.forEach"].prototype : null;
Object.defineProperty(Float64Array.prototype.forEach, "length", {value: wrappedFunctions["Float64Array.prototype.forEach"].length});

wrappedFunctions["Int8Array.prototype.includes"] = Int8Array.prototype.includes;
Int8Array.prototype.includes = { includes () {
	log42["Int8Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.includes"].apply__(this, args);
}}.includes
Int8Array.prototype.includes.prototype !== undefined ? Int8Array.prototype.includes.prototype = wrappedFunctions["Int8Array.prototype.includes"].prototype : null;
Object.defineProperty(Int8Array.prototype.includes, "length", {value: wrappedFunctions["Int8Array.prototype.includes"].length});

wrappedFunctions["Uint8Array.prototype.includes"] = Uint8Array.prototype.includes;
Uint8Array.prototype.includes = { includes () {
	log42["Uint8Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.includes"].apply__(this, args);
}}.includes
Uint8Array.prototype.includes.prototype !== undefined ? Uint8Array.prototype.includes.prototype = wrappedFunctions["Uint8Array.prototype.includes"].prototype : null;
Object.defineProperty(Uint8Array.prototype.includes, "length", {value: wrappedFunctions["Uint8Array.prototype.includes"].length});

wrappedFunctions["Uint8ClampedArray.prototype.includes"] = Uint8ClampedArray.prototype.includes;
Uint8ClampedArray.prototype.includes = { includes () {
	log42["Uint8ClampedArray.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.includes"].apply__(this, args);
}}.includes
Uint8ClampedArray.prototype.includes.prototype !== undefined ? Uint8ClampedArray.prototype.includes.prototype = wrappedFunctions["Uint8ClampedArray.prototype.includes"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.includes, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.includes"].length});

wrappedFunctions["Int16Array.prototype.includes"] = Int16Array.prototype.includes;
Int16Array.prototype.includes = { includes () {
	log42["Int16Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.includes"].apply__(this, args);
}}.includes
Int16Array.prototype.includes.prototype !== undefined ? Int16Array.prototype.includes.prototype = wrappedFunctions["Int16Array.prototype.includes"].prototype : null;
Object.defineProperty(Int16Array.prototype.includes, "length", {value: wrappedFunctions["Int16Array.prototype.includes"].length});

wrappedFunctions["Uint16Array.prototype.includes"] = Uint16Array.prototype.includes;
Uint16Array.prototype.includes = { includes () {
	log42["Uint16Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.includes"].apply__(this, args);
}}.includes
Uint16Array.prototype.includes.prototype !== undefined ? Uint16Array.prototype.includes.prototype = wrappedFunctions["Uint16Array.prototype.includes"].prototype : null;
Object.defineProperty(Uint16Array.prototype.includes, "length", {value: wrappedFunctions["Uint16Array.prototype.includes"].length});

wrappedFunctions["Int32Array.prototype.includes"] = Int32Array.prototype.includes;
Int32Array.prototype.includes = { includes () {
	log42["Int32Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.includes"].apply__(this, args);
}}.includes
Int32Array.prototype.includes.prototype !== undefined ? Int32Array.prototype.includes.prototype = wrappedFunctions["Int32Array.prototype.includes"].prototype : null;
Object.defineProperty(Int32Array.prototype.includes, "length", {value: wrappedFunctions["Int32Array.prototype.includes"].length});

wrappedFunctions["Uint32Array.prototype.includes"] = Uint32Array.prototype.includes;
Uint32Array.prototype.includes = { includes () {
	log42["Uint32Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.includes"].apply__(this, args);
}}.includes
Uint32Array.prototype.includes.prototype !== undefined ? Uint32Array.prototype.includes.prototype = wrappedFunctions["Uint32Array.prototype.includes"].prototype : null;
Object.defineProperty(Uint32Array.prototype.includes, "length", {value: wrappedFunctions["Uint32Array.prototype.includes"].length});

wrappedFunctions["BigInt64Array.prototype.includes"] = BigInt64Array.prototype.includes;
BigInt64Array.prototype.includes = { includes () {
	log42["BigInt64Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.includes"].apply__(this, args);
}}.includes
BigInt64Array.prototype.includes.prototype !== undefined ? BigInt64Array.prototype.includes.prototype = wrappedFunctions["BigInt64Array.prototype.includes"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.includes, "length", {value: wrappedFunctions["BigInt64Array.prototype.includes"].length});

wrappedFunctions["BigUint64Array.prototype.includes"] = BigUint64Array.prototype.includes;
BigUint64Array.prototype.includes = { includes () {
	log42["BigUint64Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.includes"].apply__(this, args);
}}.includes
BigUint64Array.prototype.includes.prototype !== undefined ? BigUint64Array.prototype.includes.prototype = wrappedFunctions["BigUint64Array.prototype.includes"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.includes, "length", {value: wrappedFunctions["BigUint64Array.prototype.includes"].length});

wrappedFunctions["Float32Array.prototype.includes"] = Float32Array.prototype.includes;
Float32Array.prototype.includes = { includes () {
	log42["Float32Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.includes"].apply__(this, args);
}}.includes
Float32Array.prototype.includes.prototype !== undefined ? Float32Array.prototype.includes.prototype = wrappedFunctions["Float32Array.prototype.includes"].prototype : null;
Object.defineProperty(Float32Array.prototype.includes, "length", {value: wrappedFunctions["Float32Array.prototype.includes"].length});

wrappedFunctions["Float64Array.prototype.includes"] = Float64Array.prototype.includes;
Float64Array.prototype.includes = { includes () {
	log42["Float64Array.prototype.includes"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.includes"].apply__(this, args);
}}.includes
Float64Array.prototype.includes.prototype !== undefined ? Float64Array.prototype.includes.prototype = wrappedFunctions["Float64Array.prototype.includes"].prototype : null;
Object.defineProperty(Float64Array.prototype.includes, "length", {value: wrappedFunctions["Float64Array.prototype.includes"].length});

wrappedFunctions["Int8Array.prototype.indexOf"] = Int8Array.prototype.indexOf;
Int8Array.prototype.indexOf = { indexOf () {
	log42["Int8Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Int8Array.prototype.indexOf.prototype !== undefined ? Int8Array.prototype.indexOf.prototype = wrappedFunctions["Int8Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Int8Array.prototype.indexOf, "length", {value: wrappedFunctions["Int8Array.prototype.indexOf"].length});

wrappedFunctions["Uint8Array.prototype.indexOf"] = Uint8Array.prototype.indexOf;
Uint8Array.prototype.indexOf = { indexOf () {
	log42["Uint8Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Uint8Array.prototype.indexOf.prototype !== undefined ? Uint8Array.prototype.indexOf.prototype = wrappedFunctions["Uint8Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Uint8Array.prototype.indexOf, "length", {value: wrappedFunctions["Uint8Array.prototype.indexOf"].length});

wrappedFunctions["Uint8ClampedArray.prototype.indexOf"] = Uint8ClampedArray.prototype.indexOf;
Uint8ClampedArray.prototype.indexOf = { indexOf () {
	log42["Uint8ClampedArray.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.indexOf"].apply__(this, args);
}}.indexOf
Uint8ClampedArray.prototype.indexOf.prototype !== undefined ? Uint8ClampedArray.prototype.indexOf.prototype = wrappedFunctions["Uint8ClampedArray.prototype.indexOf"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.indexOf, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.indexOf"].length});

wrappedFunctions["Int16Array.prototype.indexOf"] = Int16Array.prototype.indexOf;
Int16Array.prototype.indexOf = { indexOf () {
	log42["Int16Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Int16Array.prototype.indexOf.prototype !== undefined ? Int16Array.prototype.indexOf.prototype = wrappedFunctions["Int16Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Int16Array.prototype.indexOf, "length", {value: wrappedFunctions["Int16Array.prototype.indexOf"].length});

wrappedFunctions["Uint16Array.prototype.indexOf"] = Uint16Array.prototype.indexOf;
Uint16Array.prototype.indexOf = { indexOf () {
	log42["Uint16Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Uint16Array.prototype.indexOf.prototype !== undefined ? Uint16Array.prototype.indexOf.prototype = wrappedFunctions["Uint16Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Uint16Array.prototype.indexOf, "length", {value: wrappedFunctions["Uint16Array.prototype.indexOf"].length});

wrappedFunctions["Int32Array.prototype.indexOf"] = Int32Array.prototype.indexOf;
Int32Array.prototype.indexOf = { indexOf () {
	log42["Int32Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Int32Array.prototype.indexOf.prototype !== undefined ? Int32Array.prototype.indexOf.prototype = wrappedFunctions["Int32Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Int32Array.prototype.indexOf, "length", {value: wrappedFunctions["Int32Array.prototype.indexOf"].length});

wrappedFunctions["Uint32Array.prototype.indexOf"] = Uint32Array.prototype.indexOf;
Uint32Array.prototype.indexOf = { indexOf () {
	log42["Uint32Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Uint32Array.prototype.indexOf.prototype !== undefined ? Uint32Array.prototype.indexOf.prototype = wrappedFunctions["Uint32Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Uint32Array.prototype.indexOf, "length", {value: wrappedFunctions["Uint32Array.prototype.indexOf"].length});

wrappedFunctions["BigInt64Array.prototype.indexOf"] = BigInt64Array.prototype.indexOf;
BigInt64Array.prototype.indexOf = { indexOf () {
	log42["BigInt64Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
BigInt64Array.prototype.indexOf.prototype !== undefined ? BigInt64Array.prototype.indexOf.prototype = wrappedFunctions["BigInt64Array.prototype.indexOf"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.indexOf, "length", {value: wrappedFunctions["BigInt64Array.prototype.indexOf"].length});

wrappedFunctions["BigUint64Array.prototype.indexOf"] = BigUint64Array.prototype.indexOf;
BigUint64Array.prototype.indexOf = { indexOf () {
	log42["BigUint64Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
BigUint64Array.prototype.indexOf.prototype !== undefined ? BigUint64Array.prototype.indexOf.prototype = wrappedFunctions["BigUint64Array.prototype.indexOf"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.indexOf, "length", {value: wrappedFunctions["BigUint64Array.prototype.indexOf"].length});

wrappedFunctions["Float32Array.prototype.indexOf"] = Float32Array.prototype.indexOf;
Float32Array.prototype.indexOf = { indexOf () {
	log42["Float32Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Float32Array.prototype.indexOf.prototype !== undefined ? Float32Array.prototype.indexOf.prototype = wrappedFunctions["Float32Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Float32Array.prototype.indexOf, "length", {value: wrappedFunctions["Float32Array.prototype.indexOf"].length});

wrappedFunctions["Float64Array.prototype.indexOf"] = Float64Array.prototype.indexOf;
Float64Array.prototype.indexOf = { indexOf () {
	log42["Float64Array.prototype.indexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.indexOf"].apply__(this, args);
}}.indexOf
Float64Array.prototype.indexOf.prototype !== undefined ? Float64Array.prototype.indexOf.prototype = wrappedFunctions["Float64Array.prototype.indexOf"].prototype : null;
Object.defineProperty(Float64Array.prototype.indexOf, "length", {value: wrappedFunctions["Float64Array.prototype.indexOf"].length});

wrappedFunctions["Int8Array.prototype.join"] = Int8Array.prototype.join;
Int8Array.prototype.join = { join () {
	log42["Int8Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.join"].apply__(this, args);
}}.join
Int8Array.prototype.join.prototype !== undefined ? Int8Array.prototype.join.prototype = wrappedFunctions["Int8Array.prototype.join"].prototype : null;
Object.defineProperty(Int8Array.prototype.join, "length", {value: wrappedFunctions["Int8Array.prototype.join"].length});

wrappedFunctions["Uint8Array.prototype.join"] = Uint8Array.prototype.join;
Uint8Array.prototype.join = { join () {
	log42["Uint8Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.join"].apply__(this, args);
}}.join
Uint8Array.prototype.join.prototype !== undefined ? Uint8Array.prototype.join.prototype = wrappedFunctions["Uint8Array.prototype.join"].prototype : null;
Object.defineProperty(Uint8Array.prototype.join, "length", {value: wrappedFunctions["Uint8Array.prototype.join"].length});

wrappedFunctions["Uint8ClampedArray.prototype.join"] = Uint8ClampedArray.prototype.join;
Uint8ClampedArray.prototype.join = { join () {
	log42["Uint8ClampedArray.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.join"].apply__(this, args);
}}.join
Uint8ClampedArray.prototype.join.prototype !== undefined ? Uint8ClampedArray.prototype.join.prototype = wrappedFunctions["Uint8ClampedArray.prototype.join"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.join, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.join"].length});

wrappedFunctions["Int16Array.prototype.join"] = Int16Array.prototype.join;
Int16Array.prototype.join = { join () {
	log42["Int16Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.join"].apply__(this, args);
}}.join
Int16Array.prototype.join.prototype !== undefined ? Int16Array.prototype.join.prototype = wrappedFunctions["Int16Array.prototype.join"].prototype : null;
Object.defineProperty(Int16Array.prototype.join, "length", {value: wrappedFunctions["Int16Array.prototype.join"].length});

wrappedFunctions["Uint16Array.prototype.join"] = Uint16Array.prototype.join;
Uint16Array.prototype.join = { join () {
	log42["Uint16Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.join"].apply__(this, args);
}}.join
Uint16Array.prototype.join.prototype !== undefined ? Uint16Array.prototype.join.prototype = wrappedFunctions["Uint16Array.prototype.join"].prototype : null;
Object.defineProperty(Uint16Array.prototype.join, "length", {value: wrappedFunctions["Uint16Array.prototype.join"].length});

wrappedFunctions["Int32Array.prototype.join"] = Int32Array.prototype.join;
Int32Array.prototype.join = { join () {
	log42["Int32Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.join"].apply__(this, args);
}}.join
Int32Array.prototype.join.prototype !== undefined ? Int32Array.prototype.join.prototype = wrappedFunctions["Int32Array.prototype.join"].prototype : null;
Object.defineProperty(Int32Array.prototype.join, "length", {value: wrappedFunctions["Int32Array.prototype.join"].length});

wrappedFunctions["Uint32Array.prototype.join"] = Uint32Array.prototype.join;
Uint32Array.prototype.join = { join () {
	log42["Uint32Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.join"].apply__(this, args);
}}.join
Uint32Array.prototype.join.prototype !== undefined ? Uint32Array.prototype.join.prototype = wrappedFunctions["Uint32Array.prototype.join"].prototype : null;
Object.defineProperty(Uint32Array.prototype.join, "length", {value: wrappedFunctions["Uint32Array.prototype.join"].length});

wrappedFunctions["BigInt64Array.prototype.join"] = BigInt64Array.prototype.join;
BigInt64Array.prototype.join = { join () {
	log42["BigInt64Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.join"].apply__(this, args);
}}.join
BigInt64Array.prototype.join.prototype !== undefined ? BigInt64Array.prototype.join.prototype = wrappedFunctions["BigInt64Array.prototype.join"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.join, "length", {value: wrappedFunctions["BigInt64Array.prototype.join"].length});

wrappedFunctions["BigUint64Array.prototype.join"] = BigUint64Array.prototype.join;
BigUint64Array.prototype.join = { join () {
	log42["BigUint64Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.join"].apply__(this, args);
}}.join
BigUint64Array.prototype.join.prototype !== undefined ? BigUint64Array.prototype.join.prototype = wrappedFunctions["BigUint64Array.prototype.join"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.join, "length", {value: wrappedFunctions["BigUint64Array.prototype.join"].length});

wrappedFunctions["Float32Array.prototype.join"] = Float32Array.prototype.join;
Float32Array.prototype.join = { join () {
	log42["Float32Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.join"].apply__(this, args);
}}.join
Float32Array.prototype.join.prototype !== undefined ? Float32Array.prototype.join.prototype = wrappedFunctions["Float32Array.prototype.join"].prototype : null;
Object.defineProperty(Float32Array.prototype.join, "length", {value: wrappedFunctions["Float32Array.prototype.join"].length});

wrappedFunctions["Float64Array.prototype.join"] = Float64Array.prototype.join;
Float64Array.prototype.join = { join () {
	log42["Float64Array.prototype.join"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.join"].apply__(this, args);
}}.join
Float64Array.prototype.join.prototype !== undefined ? Float64Array.prototype.join.prototype = wrappedFunctions["Float64Array.prototype.join"].prototype : null;
Object.defineProperty(Float64Array.prototype.join, "length", {value: wrappedFunctions["Float64Array.prototype.join"].length});

wrappedFunctions["Int8Array.prototype.keys"] = Int8Array.prototype.keys;
Int8Array.prototype.keys = { keys () {
	log42["Int8Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.keys"].apply__(this, args);
}}.keys
Int8Array.prototype.keys.prototype !== undefined ? Int8Array.prototype.keys.prototype = wrappedFunctions["Int8Array.prototype.keys"].prototype : null;
Object.defineProperty(Int8Array.prototype.keys, "length", {value: wrappedFunctions["Int8Array.prototype.keys"].length});

wrappedFunctions["Uint8Array.prototype.keys"] = Uint8Array.prototype.keys;
Uint8Array.prototype.keys = { keys () {
	log42["Uint8Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.keys"].apply__(this, args);
}}.keys
Uint8Array.prototype.keys.prototype !== undefined ? Uint8Array.prototype.keys.prototype = wrappedFunctions["Uint8Array.prototype.keys"].prototype : null;
Object.defineProperty(Uint8Array.prototype.keys, "length", {value: wrappedFunctions["Uint8Array.prototype.keys"].length});

wrappedFunctions["Uint8ClampedArray.prototype.keys"] = Uint8ClampedArray.prototype.keys;
Uint8ClampedArray.prototype.keys = { keys () {
	log42["Uint8ClampedArray.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.keys"].apply__(this, args);
}}.keys
Uint8ClampedArray.prototype.keys.prototype !== undefined ? Uint8ClampedArray.prototype.keys.prototype = wrappedFunctions["Uint8ClampedArray.prototype.keys"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.keys, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.keys"].length});

wrappedFunctions["Int16Array.prototype.keys"] = Int16Array.prototype.keys;
Int16Array.prototype.keys = { keys () {
	log42["Int16Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.keys"].apply__(this, args);
}}.keys
Int16Array.prototype.keys.prototype !== undefined ? Int16Array.prototype.keys.prototype = wrappedFunctions["Int16Array.prototype.keys"].prototype : null;
Object.defineProperty(Int16Array.prototype.keys, "length", {value: wrappedFunctions["Int16Array.prototype.keys"].length});

wrappedFunctions["Uint16Array.prototype.keys"] = Uint16Array.prototype.keys;
Uint16Array.prototype.keys = { keys () {
	log42["Uint16Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.keys"].apply__(this, args);
}}.keys
Uint16Array.prototype.keys.prototype !== undefined ? Uint16Array.prototype.keys.prototype = wrappedFunctions["Uint16Array.prototype.keys"].prototype : null;
Object.defineProperty(Uint16Array.prototype.keys, "length", {value: wrappedFunctions["Uint16Array.prototype.keys"].length});

wrappedFunctions["Int32Array.prototype.keys"] = Int32Array.prototype.keys;
Int32Array.prototype.keys = { keys () {
	log42["Int32Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.keys"].apply__(this, args);
}}.keys
Int32Array.prototype.keys.prototype !== undefined ? Int32Array.prototype.keys.prototype = wrappedFunctions["Int32Array.prototype.keys"].prototype : null;
Object.defineProperty(Int32Array.prototype.keys, "length", {value: wrappedFunctions["Int32Array.prototype.keys"].length});

wrappedFunctions["Uint32Array.prototype.keys"] = Uint32Array.prototype.keys;
Uint32Array.prototype.keys = { keys () {
	log42["Uint32Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.keys"].apply__(this, args);
}}.keys
Uint32Array.prototype.keys.prototype !== undefined ? Uint32Array.prototype.keys.prototype = wrappedFunctions["Uint32Array.prototype.keys"].prototype : null;
Object.defineProperty(Uint32Array.prototype.keys, "length", {value: wrappedFunctions["Uint32Array.prototype.keys"].length});

wrappedFunctions["BigInt64Array.prototype.keys"] = BigInt64Array.prototype.keys;
BigInt64Array.prototype.keys = { keys () {
	log42["BigInt64Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.keys"].apply__(this, args);
}}.keys
BigInt64Array.prototype.keys.prototype !== undefined ? BigInt64Array.prototype.keys.prototype = wrappedFunctions["BigInt64Array.prototype.keys"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.keys, "length", {value: wrappedFunctions["BigInt64Array.prototype.keys"].length});

wrappedFunctions["BigUint64Array.prototype.keys"] = BigUint64Array.prototype.keys;
BigUint64Array.prototype.keys = { keys () {
	log42["BigUint64Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.keys"].apply__(this, args);
}}.keys
BigUint64Array.prototype.keys.prototype !== undefined ? BigUint64Array.prototype.keys.prototype = wrappedFunctions["BigUint64Array.prototype.keys"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.keys, "length", {value: wrappedFunctions["BigUint64Array.prototype.keys"].length});

wrappedFunctions["Float32Array.prototype.keys"] = Float32Array.prototype.keys;
Float32Array.prototype.keys = { keys () {
	log42["Float32Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.keys"].apply__(this, args);
}}.keys
Float32Array.prototype.keys.prototype !== undefined ? Float32Array.prototype.keys.prototype = wrappedFunctions["Float32Array.prototype.keys"].prototype : null;
Object.defineProperty(Float32Array.prototype.keys, "length", {value: wrappedFunctions["Float32Array.prototype.keys"].length});

wrappedFunctions["Float64Array.prototype.keys"] = Float64Array.prototype.keys;
Float64Array.prototype.keys = { keys () {
	log42["Float64Array.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.keys"].apply__(this, args);
}}.keys
Float64Array.prototype.keys.prototype !== undefined ? Float64Array.prototype.keys.prototype = wrappedFunctions["Float64Array.prototype.keys"].prototype : null;
Object.defineProperty(Float64Array.prototype.keys, "length", {value: wrappedFunctions["Float64Array.prototype.keys"].length});

wrappedFunctions["Int8Array.prototype.lastIndexOf"] = Int8Array.prototype.lastIndexOf;
Int8Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Int8Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Int8Array.prototype.lastIndexOf.prototype !== undefined ? Int8Array.prototype.lastIndexOf.prototype = wrappedFunctions["Int8Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Int8Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Int8Array.prototype.lastIndexOf"].length});

wrappedFunctions["Uint8Array.prototype.lastIndexOf"] = Uint8Array.prototype.lastIndexOf;
Uint8Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Uint8Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Uint8Array.prototype.lastIndexOf.prototype !== undefined ? Uint8Array.prototype.lastIndexOf.prototype = wrappedFunctions["Uint8Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Uint8Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Uint8Array.prototype.lastIndexOf"].length});

wrappedFunctions["Uint8ClampedArray.prototype.lastIndexOf"] = Uint8ClampedArray.prototype.lastIndexOf;
Uint8ClampedArray.prototype.lastIndexOf = { lastIndexOf () {
	log42["Uint8ClampedArray.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Uint8ClampedArray.prototype.lastIndexOf.prototype !== undefined ? Uint8ClampedArray.prototype.lastIndexOf.prototype = wrappedFunctions["Uint8ClampedArray.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.lastIndexOf, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.lastIndexOf"].length});

wrappedFunctions["Int16Array.prototype.lastIndexOf"] = Int16Array.prototype.lastIndexOf;
Int16Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Int16Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Int16Array.prototype.lastIndexOf.prototype !== undefined ? Int16Array.prototype.lastIndexOf.prototype = wrappedFunctions["Int16Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Int16Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Int16Array.prototype.lastIndexOf"].length});

wrappedFunctions["Uint16Array.prototype.lastIndexOf"] = Uint16Array.prototype.lastIndexOf;
Uint16Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Uint16Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Uint16Array.prototype.lastIndexOf.prototype !== undefined ? Uint16Array.prototype.lastIndexOf.prototype = wrappedFunctions["Uint16Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Uint16Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Uint16Array.prototype.lastIndexOf"].length});

wrappedFunctions["Int32Array.prototype.lastIndexOf"] = Int32Array.prototype.lastIndexOf;
Int32Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Int32Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Int32Array.prototype.lastIndexOf.prototype !== undefined ? Int32Array.prototype.lastIndexOf.prototype = wrappedFunctions["Int32Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Int32Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Int32Array.prototype.lastIndexOf"].length});

wrappedFunctions["Uint32Array.prototype.lastIndexOf"] = Uint32Array.prototype.lastIndexOf;
Uint32Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Uint32Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Uint32Array.prototype.lastIndexOf.prototype !== undefined ? Uint32Array.prototype.lastIndexOf.prototype = wrappedFunctions["Uint32Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Uint32Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Uint32Array.prototype.lastIndexOf"].length});

wrappedFunctions["BigInt64Array.prototype.lastIndexOf"] = BigInt64Array.prototype.lastIndexOf;
BigInt64Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["BigInt64Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
BigInt64Array.prototype.lastIndexOf.prototype !== undefined ? BigInt64Array.prototype.lastIndexOf.prototype = wrappedFunctions["BigInt64Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["BigInt64Array.prototype.lastIndexOf"].length});

wrappedFunctions["BigUint64Array.prototype.lastIndexOf"] = BigUint64Array.prototype.lastIndexOf;
BigUint64Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["BigUint64Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
BigUint64Array.prototype.lastIndexOf.prototype !== undefined ? BigUint64Array.prototype.lastIndexOf.prototype = wrappedFunctions["BigUint64Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["BigUint64Array.prototype.lastIndexOf"].length});

wrappedFunctions["Float32Array.prototype.lastIndexOf"] = Float32Array.prototype.lastIndexOf;
Float32Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Float32Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Float32Array.prototype.lastIndexOf.prototype !== undefined ? Float32Array.prototype.lastIndexOf.prototype = wrappedFunctions["Float32Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Float32Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Float32Array.prototype.lastIndexOf"].length});

wrappedFunctions["Float64Array.prototype.lastIndexOf"] = Float64Array.prototype.lastIndexOf;
Float64Array.prototype.lastIndexOf = { lastIndexOf () {
	log42["Float64Array.prototype.lastIndexOf"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.lastIndexOf"].apply__(this, args);
}}.lastIndexOf
Float64Array.prototype.lastIndexOf.prototype !== undefined ? Float64Array.prototype.lastIndexOf.prototype = wrappedFunctions["Float64Array.prototype.lastIndexOf"].prototype : null;
Object.defineProperty(Float64Array.prototype.lastIndexOf, "length", {value: wrappedFunctions["Float64Array.prototype.lastIndexOf"].length});

wrappedFunctions["Int8Array.prototype.map"] = Int8Array.prototype.map;
Int8Array.prototype.map = { map () {
	log42["Int8Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.map"].apply__(this, args);
}}.map
Int8Array.prototype.map.prototype !== undefined ? Int8Array.prototype.map.prototype = wrappedFunctions["Int8Array.prototype.map"].prototype : null;
Object.defineProperty(Int8Array.prototype.map, "length", {value: wrappedFunctions["Int8Array.prototype.map"].length});

wrappedFunctions["Uint8Array.prototype.map"] = Uint8Array.prototype.map;
Uint8Array.prototype.map = { map () {
	log42["Uint8Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.map"].apply__(this, args);
}}.map
Uint8Array.prototype.map.prototype !== undefined ? Uint8Array.prototype.map.prototype = wrappedFunctions["Uint8Array.prototype.map"].prototype : null;
Object.defineProperty(Uint8Array.prototype.map, "length", {value: wrappedFunctions["Uint8Array.prototype.map"].length});

wrappedFunctions["Uint8ClampedArray.prototype.map"] = Uint8ClampedArray.prototype.map;
Uint8ClampedArray.prototype.map = { map () {
	log42["Uint8ClampedArray.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.map"].apply__(this, args);
}}.map
Uint8ClampedArray.prototype.map.prototype !== undefined ? Uint8ClampedArray.prototype.map.prototype = wrappedFunctions["Uint8ClampedArray.prototype.map"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.map, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.map"].length});

wrappedFunctions["Int16Array.prototype.map"] = Int16Array.prototype.map;
Int16Array.prototype.map = { map () {
	log42["Int16Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.map"].apply__(this, args);
}}.map
Int16Array.prototype.map.prototype !== undefined ? Int16Array.prototype.map.prototype = wrappedFunctions["Int16Array.prototype.map"].prototype : null;
Object.defineProperty(Int16Array.prototype.map, "length", {value: wrappedFunctions["Int16Array.prototype.map"].length});

wrappedFunctions["Uint16Array.prototype.map"] = Uint16Array.prototype.map;
Uint16Array.prototype.map = { map () {
	log42["Uint16Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.map"].apply__(this, args);
}}.map
Uint16Array.prototype.map.prototype !== undefined ? Uint16Array.prototype.map.prototype = wrappedFunctions["Uint16Array.prototype.map"].prototype : null;
Object.defineProperty(Uint16Array.prototype.map, "length", {value: wrappedFunctions["Uint16Array.prototype.map"].length});

wrappedFunctions["Int32Array.prototype.map"] = Int32Array.prototype.map;
Int32Array.prototype.map = { map () {
	log42["Int32Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.map"].apply__(this, args);
}}.map
Int32Array.prototype.map.prototype !== undefined ? Int32Array.prototype.map.prototype = wrappedFunctions["Int32Array.prototype.map"].prototype : null;
Object.defineProperty(Int32Array.prototype.map, "length", {value: wrappedFunctions["Int32Array.prototype.map"].length});

wrappedFunctions["Uint32Array.prototype.map"] = Uint32Array.prototype.map;
Uint32Array.prototype.map = { map () {
	log42["Uint32Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.map"].apply__(this, args);
}}.map
Uint32Array.prototype.map.prototype !== undefined ? Uint32Array.prototype.map.prototype = wrappedFunctions["Uint32Array.prototype.map"].prototype : null;
Object.defineProperty(Uint32Array.prototype.map, "length", {value: wrappedFunctions["Uint32Array.prototype.map"].length});

wrappedFunctions["BigInt64Array.prototype.map"] = BigInt64Array.prototype.map;
BigInt64Array.prototype.map = { map () {
	log42["BigInt64Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.map"].apply__(this, args);
}}.map
BigInt64Array.prototype.map.prototype !== undefined ? BigInt64Array.prototype.map.prototype = wrappedFunctions["BigInt64Array.prototype.map"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.map, "length", {value: wrappedFunctions["BigInt64Array.prototype.map"].length});

wrappedFunctions["BigUint64Array.prototype.map"] = BigUint64Array.prototype.map;
BigUint64Array.prototype.map = { map () {
	log42["BigUint64Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.map"].apply__(this, args);
}}.map
BigUint64Array.prototype.map.prototype !== undefined ? BigUint64Array.prototype.map.prototype = wrappedFunctions["BigUint64Array.prototype.map"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.map, "length", {value: wrappedFunctions["BigUint64Array.prototype.map"].length});

wrappedFunctions["Float32Array.prototype.map"] = Float32Array.prototype.map;
Float32Array.prototype.map = { map () {
	log42["Float32Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.map"].apply__(this, args);
}}.map
Float32Array.prototype.map.prototype !== undefined ? Float32Array.prototype.map.prototype = wrappedFunctions["Float32Array.prototype.map"].prototype : null;
Object.defineProperty(Float32Array.prototype.map, "length", {value: wrappedFunctions["Float32Array.prototype.map"].length});

wrappedFunctions["Float64Array.prototype.map"] = Float64Array.prototype.map;
Float64Array.prototype.map = { map () {
	log42["Float64Array.prototype.map"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.map"].apply__(this, args);
}}.map
Float64Array.prototype.map.prototype !== undefined ? Float64Array.prototype.map.prototype = wrappedFunctions["Float64Array.prototype.map"].prototype : null;
Object.defineProperty(Float64Array.prototype.map, "length", {value: wrappedFunctions["Float64Array.prototype.map"].length});

wrappedFunctions["Int8Array.prototype.reduce"] = Int8Array.prototype.reduce;
Int8Array.prototype.reduce = { reduce () {
	log42["Int8Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.reduce"].apply__(this, args);
}}.reduce
Int8Array.prototype.reduce.prototype !== undefined ? Int8Array.prototype.reduce.prototype = wrappedFunctions["Int8Array.prototype.reduce"].prototype : null;
Object.defineProperty(Int8Array.prototype.reduce, "length", {value: wrappedFunctions["Int8Array.prototype.reduce"].length});

wrappedFunctions["Uint8Array.prototype.reduce"] = Uint8Array.prototype.reduce;
Uint8Array.prototype.reduce = { reduce () {
	log42["Uint8Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.reduce"].apply__(this, args);
}}.reduce
Uint8Array.prototype.reduce.prototype !== undefined ? Uint8Array.prototype.reduce.prototype = wrappedFunctions["Uint8Array.prototype.reduce"].prototype : null;
Object.defineProperty(Uint8Array.prototype.reduce, "length", {value: wrappedFunctions["Uint8Array.prototype.reduce"].length});

wrappedFunctions["Uint8ClampedArray.prototype.reduce"] = Uint8ClampedArray.prototype.reduce;
Uint8ClampedArray.prototype.reduce = { reduce () {
	log42["Uint8ClampedArray.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.reduce"].apply__(this, args);
}}.reduce
Uint8ClampedArray.prototype.reduce.prototype !== undefined ? Uint8ClampedArray.prototype.reduce.prototype = wrappedFunctions["Uint8ClampedArray.prototype.reduce"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.reduce, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.reduce"].length});

wrappedFunctions["Int16Array.prototype.reduce"] = Int16Array.prototype.reduce;
Int16Array.prototype.reduce = { reduce () {
	log42["Int16Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.reduce"].apply__(this, args);
}}.reduce
Int16Array.prototype.reduce.prototype !== undefined ? Int16Array.prototype.reduce.prototype = wrappedFunctions["Int16Array.prototype.reduce"].prototype : null;
Object.defineProperty(Int16Array.prototype.reduce, "length", {value: wrappedFunctions["Int16Array.prototype.reduce"].length});

wrappedFunctions["Uint16Array.prototype.reduce"] = Uint16Array.prototype.reduce;
Uint16Array.prototype.reduce = { reduce () {
	log42["Uint16Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.reduce"].apply__(this, args);
}}.reduce
Uint16Array.prototype.reduce.prototype !== undefined ? Uint16Array.prototype.reduce.prototype = wrappedFunctions["Uint16Array.prototype.reduce"].prototype : null;
Object.defineProperty(Uint16Array.prototype.reduce, "length", {value: wrappedFunctions["Uint16Array.prototype.reduce"].length});

wrappedFunctions["Int32Array.prototype.reduce"] = Int32Array.prototype.reduce;
Int32Array.prototype.reduce = { reduce () {
	log42["Int32Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.reduce"].apply__(this, args);
}}.reduce
Int32Array.prototype.reduce.prototype !== undefined ? Int32Array.prototype.reduce.prototype = wrappedFunctions["Int32Array.prototype.reduce"].prototype : null;
Object.defineProperty(Int32Array.prototype.reduce, "length", {value: wrappedFunctions["Int32Array.prototype.reduce"].length});

wrappedFunctions["Uint32Array.prototype.reduce"] = Uint32Array.prototype.reduce;
Uint32Array.prototype.reduce = { reduce () {
	log42["Uint32Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.reduce"].apply__(this, args);
}}.reduce
Uint32Array.prototype.reduce.prototype !== undefined ? Uint32Array.prototype.reduce.prototype = wrappedFunctions["Uint32Array.prototype.reduce"].prototype : null;
Object.defineProperty(Uint32Array.prototype.reduce, "length", {value: wrappedFunctions["Uint32Array.prototype.reduce"].length});

wrappedFunctions["BigInt64Array.prototype.reduce"] = BigInt64Array.prototype.reduce;
BigInt64Array.prototype.reduce = { reduce () {
	log42["BigInt64Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.reduce"].apply__(this, args);
}}.reduce
BigInt64Array.prototype.reduce.prototype !== undefined ? BigInt64Array.prototype.reduce.prototype = wrappedFunctions["BigInt64Array.prototype.reduce"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.reduce, "length", {value: wrappedFunctions["BigInt64Array.prototype.reduce"].length});

wrappedFunctions["BigUint64Array.prototype.reduce"] = BigUint64Array.prototype.reduce;
BigUint64Array.prototype.reduce = { reduce () {
	log42["BigUint64Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.reduce"].apply__(this, args);
}}.reduce
BigUint64Array.prototype.reduce.prototype !== undefined ? BigUint64Array.prototype.reduce.prototype = wrappedFunctions["BigUint64Array.prototype.reduce"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.reduce, "length", {value: wrappedFunctions["BigUint64Array.prototype.reduce"].length});

wrappedFunctions["Float32Array.prototype.reduce"] = Float32Array.prototype.reduce;
Float32Array.prototype.reduce = { reduce () {
	log42["Float32Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.reduce"].apply__(this, args);
}}.reduce
Float32Array.prototype.reduce.prototype !== undefined ? Float32Array.prototype.reduce.prototype = wrappedFunctions["Float32Array.prototype.reduce"].prototype : null;
Object.defineProperty(Float32Array.prototype.reduce, "length", {value: wrappedFunctions["Float32Array.prototype.reduce"].length});

wrappedFunctions["Float64Array.prototype.reduce"] = Float64Array.prototype.reduce;
Float64Array.prototype.reduce = { reduce () {
	log42["Float64Array.prototype.reduce"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.reduce"].apply__(this, args);
}}.reduce
Float64Array.prototype.reduce.prototype !== undefined ? Float64Array.prototype.reduce.prototype = wrappedFunctions["Float64Array.prototype.reduce"].prototype : null;
Object.defineProperty(Float64Array.prototype.reduce, "length", {value: wrappedFunctions["Float64Array.prototype.reduce"].length});

wrappedFunctions["Int8Array.prototype.reduceRight"] = Int8Array.prototype.reduceRight;
Int8Array.prototype.reduceRight = { reduceRight () {
	log42["Int8Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Int8Array.prototype.reduceRight.prototype !== undefined ? Int8Array.prototype.reduceRight.prototype = wrappedFunctions["Int8Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Int8Array.prototype.reduceRight, "length", {value: wrappedFunctions["Int8Array.prototype.reduceRight"].length});

wrappedFunctions["Uint8Array.prototype.reduceRight"] = Uint8Array.prototype.reduceRight;
Uint8Array.prototype.reduceRight = { reduceRight () {
	log42["Uint8Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Uint8Array.prototype.reduceRight.prototype !== undefined ? Uint8Array.prototype.reduceRight.prototype = wrappedFunctions["Uint8Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Uint8Array.prototype.reduceRight, "length", {value: wrappedFunctions["Uint8Array.prototype.reduceRight"].length});

wrappedFunctions["Uint8ClampedArray.prototype.reduceRight"] = Uint8ClampedArray.prototype.reduceRight;
Uint8ClampedArray.prototype.reduceRight = { reduceRight () {
	log42["Uint8ClampedArray.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Uint8ClampedArray.prototype.reduceRight.prototype !== undefined ? Uint8ClampedArray.prototype.reduceRight.prototype = wrappedFunctions["Uint8ClampedArray.prototype.reduceRight"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.reduceRight, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.reduceRight"].length});

wrappedFunctions["Int16Array.prototype.reduceRight"] = Int16Array.prototype.reduceRight;
Int16Array.prototype.reduceRight = { reduceRight () {
	log42["Int16Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Int16Array.prototype.reduceRight.prototype !== undefined ? Int16Array.prototype.reduceRight.prototype = wrappedFunctions["Int16Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Int16Array.prototype.reduceRight, "length", {value: wrappedFunctions["Int16Array.prototype.reduceRight"].length});

wrappedFunctions["Uint16Array.prototype.reduceRight"] = Uint16Array.prototype.reduceRight;
Uint16Array.prototype.reduceRight = { reduceRight () {
	log42["Uint16Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Uint16Array.prototype.reduceRight.prototype !== undefined ? Uint16Array.prototype.reduceRight.prototype = wrappedFunctions["Uint16Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Uint16Array.prototype.reduceRight, "length", {value: wrappedFunctions["Uint16Array.prototype.reduceRight"].length});

wrappedFunctions["Int32Array.prototype.reduceRight"] = Int32Array.prototype.reduceRight;
Int32Array.prototype.reduceRight = { reduceRight () {
	log42["Int32Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Int32Array.prototype.reduceRight.prototype !== undefined ? Int32Array.prototype.reduceRight.prototype = wrappedFunctions["Int32Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Int32Array.prototype.reduceRight, "length", {value: wrappedFunctions["Int32Array.prototype.reduceRight"].length});

wrappedFunctions["Uint32Array.prototype.reduceRight"] = Uint32Array.prototype.reduceRight;
Uint32Array.prototype.reduceRight = { reduceRight () {
	log42["Uint32Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Uint32Array.prototype.reduceRight.prototype !== undefined ? Uint32Array.prototype.reduceRight.prototype = wrappedFunctions["Uint32Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Uint32Array.prototype.reduceRight, "length", {value: wrappedFunctions["Uint32Array.prototype.reduceRight"].length});

wrappedFunctions["BigInt64Array.prototype.reduceRight"] = BigInt64Array.prototype.reduceRight;
BigInt64Array.prototype.reduceRight = { reduceRight () {
	log42["BigInt64Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
BigInt64Array.prototype.reduceRight.prototype !== undefined ? BigInt64Array.prototype.reduceRight.prototype = wrappedFunctions["BigInt64Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.reduceRight, "length", {value: wrappedFunctions["BigInt64Array.prototype.reduceRight"].length});

wrappedFunctions["BigUint64Array.prototype.reduceRight"] = BigUint64Array.prototype.reduceRight;
BigUint64Array.prototype.reduceRight = { reduceRight () {
	log42["BigUint64Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
BigUint64Array.prototype.reduceRight.prototype !== undefined ? BigUint64Array.prototype.reduceRight.prototype = wrappedFunctions["BigUint64Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.reduceRight, "length", {value: wrappedFunctions["BigUint64Array.prototype.reduceRight"].length});

wrappedFunctions["Float32Array.prototype.reduceRight"] = Float32Array.prototype.reduceRight;
Float32Array.prototype.reduceRight = { reduceRight () {
	log42["Float32Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Float32Array.prototype.reduceRight.prototype !== undefined ? Float32Array.prototype.reduceRight.prototype = wrappedFunctions["Float32Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Float32Array.prototype.reduceRight, "length", {value: wrappedFunctions["Float32Array.prototype.reduceRight"].length});

wrappedFunctions["Float64Array.prototype.reduceRight"] = Float64Array.prototype.reduceRight;
Float64Array.prototype.reduceRight = { reduceRight () {
	log42["Float64Array.prototype.reduceRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.reduceRight"].apply__(this, args);
}}.reduceRight
Float64Array.prototype.reduceRight.prototype !== undefined ? Float64Array.prototype.reduceRight.prototype = wrappedFunctions["Float64Array.prototype.reduceRight"].prototype : null;
Object.defineProperty(Float64Array.prototype.reduceRight, "length", {value: wrappedFunctions["Float64Array.prototype.reduceRight"].length});

wrappedFunctions["Int8Array.prototype.reverse"] = Int8Array.prototype.reverse;
Int8Array.prototype.reverse = { reverse () {
	log42["Int8Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.reverse"].apply__(this, args);
}}.reverse
Int8Array.prototype.reverse.prototype !== undefined ? Int8Array.prototype.reverse.prototype = wrappedFunctions["Int8Array.prototype.reverse"].prototype : null;
Object.defineProperty(Int8Array.prototype.reverse, "length", {value: wrappedFunctions["Int8Array.prototype.reverse"].length});

wrappedFunctions["Uint8Array.prototype.reverse"] = Uint8Array.prototype.reverse;
Uint8Array.prototype.reverse = { reverse () {
	log42["Uint8Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.reverse"].apply__(this, args);
}}.reverse
Uint8Array.prototype.reverse.prototype !== undefined ? Uint8Array.prototype.reverse.prototype = wrappedFunctions["Uint8Array.prototype.reverse"].prototype : null;
Object.defineProperty(Uint8Array.prototype.reverse, "length", {value: wrappedFunctions["Uint8Array.prototype.reverse"].length});

wrappedFunctions["Uint8ClampedArray.prototype.reverse"] = Uint8ClampedArray.prototype.reverse;
Uint8ClampedArray.prototype.reverse = { reverse () {
	log42["Uint8ClampedArray.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.reverse"].apply__(this, args);
}}.reverse
Uint8ClampedArray.prototype.reverse.prototype !== undefined ? Uint8ClampedArray.prototype.reverse.prototype = wrappedFunctions["Uint8ClampedArray.prototype.reverse"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.reverse, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.reverse"].length});

wrappedFunctions["Int16Array.prototype.reverse"] = Int16Array.prototype.reverse;
Int16Array.prototype.reverse = { reverse () {
	log42["Int16Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.reverse"].apply__(this, args);
}}.reverse
Int16Array.prototype.reverse.prototype !== undefined ? Int16Array.prototype.reverse.prototype = wrappedFunctions["Int16Array.prototype.reverse"].prototype : null;
Object.defineProperty(Int16Array.prototype.reverse, "length", {value: wrappedFunctions["Int16Array.prototype.reverse"].length});

wrappedFunctions["Uint16Array.prototype.reverse"] = Uint16Array.prototype.reverse;
Uint16Array.prototype.reverse = { reverse () {
	log42["Uint16Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.reverse"].apply__(this, args);
}}.reverse
Uint16Array.prototype.reverse.prototype !== undefined ? Uint16Array.prototype.reverse.prototype = wrappedFunctions["Uint16Array.prototype.reverse"].prototype : null;
Object.defineProperty(Uint16Array.prototype.reverse, "length", {value: wrappedFunctions["Uint16Array.prototype.reverse"].length});

wrappedFunctions["Int32Array.prototype.reverse"] = Int32Array.prototype.reverse;
Int32Array.prototype.reverse = { reverse () {
	log42["Int32Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.reverse"].apply__(this, args);
}}.reverse
Int32Array.prototype.reverse.prototype !== undefined ? Int32Array.prototype.reverse.prototype = wrappedFunctions["Int32Array.prototype.reverse"].prototype : null;
Object.defineProperty(Int32Array.prototype.reverse, "length", {value: wrappedFunctions["Int32Array.prototype.reverse"].length});

wrappedFunctions["Uint32Array.prototype.reverse"] = Uint32Array.prototype.reverse;
Uint32Array.prototype.reverse = { reverse () {
	log42["Uint32Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.reverse"].apply__(this, args);
}}.reverse
Uint32Array.prototype.reverse.prototype !== undefined ? Uint32Array.prototype.reverse.prototype = wrappedFunctions["Uint32Array.prototype.reverse"].prototype : null;
Object.defineProperty(Uint32Array.prototype.reverse, "length", {value: wrappedFunctions["Uint32Array.prototype.reverse"].length});

wrappedFunctions["BigInt64Array.prototype.reverse"] = BigInt64Array.prototype.reverse;
BigInt64Array.prototype.reverse = { reverse () {
	log42["BigInt64Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.reverse"].apply__(this, args);
}}.reverse
BigInt64Array.prototype.reverse.prototype !== undefined ? BigInt64Array.prototype.reverse.prototype = wrappedFunctions["BigInt64Array.prototype.reverse"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.reverse, "length", {value: wrappedFunctions["BigInt64Array.prototype.reverse"].length});

wrappedFunctions["BigUint64Array.prototype.reverse"] = BigUint64Array.prototype.reverse;
BigUint64Array.prototype.reverse = { reverse () {
	log42["BigUint64Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.reverse"].apply__(this, args);
}}.reverse
BigUint64Array.prototype.reverse.prototype !== undefined ? BigUint64Array.prototype.reverse.prototype = wrappedFunctions["BigUint64Array.prototype.reverse"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.reverse, "length", {value: wrappedFunctions["BigUint64Array.prototype.reverse"].length});

wrappedFunctions["Float32Array.prototype.reverse"] = Float32Array.prototype.reverse;
Float32Array.prototype.reverse = { reverse () {
	log42["Float32Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.reverse"].apply__(this, args);
}}.reverse
Float32Array.prototype.reverse.prototype !== undefined ? Float32Array.prototype.reverse.prototype = wrappedFunctions["Float32Array.prototype.reverse"].prototype : null;
Object.defineProperty(Float32Array.prototype.reverse, "length", {value: wrappedFunctions["Float32Array.prototype.reverse"].length});

wrappedFunctions["Float64Array.prototype.reverse"] = Float64Array.prototype.reverse;
Float64Array.prototype.reverse = { reverse () {
	log42["Float64Array.prototype.reverse"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.reverse"].apply__(this, args);
}}.reverse
Float64Array.prototype.reverse.prototype !== undefined ? Float64Array.prototype.reverse.prototype = wrappedFunctions["Float64Array.prototype.reverse"].prototype : null;
Object.defineProperty(Float64Array.prototype.reverse, "length", {value: wrappedFunctions["Float64Array.prototype.reverse"].length});

wrappedFunctions["Int8Array.prototype.set"] = Int8Array.prototype.set;
Int8Array.prototype.set = { set () {
	log42["Int8Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.set"].apply__(this, args);
}}.set
Int8Array.prototype.set.prototype !== undefined ? Int8Array.prototype.set.prototype = wrappedFunctions["Int8Array.prototype.set"].prototype : null;
Object.defineProperty(Int8Array.prototype.set, "length", {value: wrappedFunctions["Int8Array.prototype.set"].length});

wrappedFunctions["Uint8Array.prototype.set"] = Uint8Array.prototype.set;
Uint8Array.prototype.set = { set () {
	log42["Uint8Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.set"].apply__(this, args);
}}.set
Uint8Array.prototype.set.prototype !== undefined ? Uint8Array.prototype.set.prototype = wrappedFunctions["Uint8Array.prototype.set"].prototype : null;
Object.defineProperty(Uint8Array.prototype.set, "length", {value: wrappedFunctions["Uint8Array.prototype.set"].length});

wrappedFunctions["Uint8ClampedArray.prototype.set"] = Uint8ClampedArray.prototype.set;
Uint8ClampedArray.prototype.set = { set () {
	log42["Uint8ClampedArray.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.set"].apply__(this, args);
}}.set
Uint8ClampedArray.prototype.set.prototype !== undefined ? Uint8ClampedArray.prototype.set.prototype = wrappedFunctions["Uint8ClampedArray.prototype.set"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.set, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.set"].length});

wrappedFunctions["Int16Array.prototype.set"] = Int16Array.prototype.set;
Int16Array.prototype.set = { set () {
	log42["Int16Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.set"].apply__(this, args);
}}.set
Int16Array.prototype.set.prototype !== undefined ? Int16Array.prototype.set.prototype = wrappedFunctions["Int16Array.prototype.set"].prototype : null;
Object.defineProperty(Int16Array.prototype.set, "length", {value: wrappedFunctions["Int16Array.prototype.set"].length});

wrappedFunctions["Uint16Array.prototype.set"] = Uint16Array.prototype.set;
Uint16Array.prototype.set = { set () {
	log42["Uint16Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.set"].apply__(this, args);
}}.set
Uint16Array.prototype.set.prototype !== undefined ? Uint16Array.prototype.set.prototype = wrappedFunctions["Uint16Array.prototype.set"].prototype : null;
Object.defineProperty(Uint16Array.prototype.set, "length", {value: wrappedFunctions["Uint16Array.prototype.set"].length});

wrappedFunctions["Int32Array.prototype.set"] = Int32Array.prototype.set;
Int32Array.prototype.set = { set () {
	log42["Int32Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.set"].apply__(this, args);
}}.set
Int32Array.prototype.set.prototype !== undefined ? Int32Array.prototype.set.prototype = wrappedFunctions["Int32Array.prototype.set"].prototype : null;
Object.defineProperty(Int32Array.prototype.set, "length", {value: wrappedFunctions["Int32Array.prototype.set"].length});

wrappedFunctions["Uint32Array.prototype.set"] = Uint32Array.prototype.set;
Uint32Array.prototype.set = { set () {
	log42["Uint32Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.set"].apply__(this, args);
}}.set
Uint32Array.prototype.set.prototype !== undefined ? Uint32Array.prototype.set.prototype = wrappedFunctions["Uint32Array.prototype.set"].prototype : null;
Object.defineProperty(Uint32Array.prototype.set, "length", {value: wrappedFunctions["Uint32Array.prototype.set"].length});

wrappedFunctions["BigInt64Array.prototype.set"] = BigInt64Array.prototype.set;
BigInt64Array.prototype.set = { set () {
	log42["BigInt64Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.set"].apply__(this, args);
}}.set
BigInt64Array.prototype.set.prototype !== undefined ? BigInt64Array.prototype.set.prototype = wrappedFunctions["BigInt64Array.prototype.set"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.set, "length", {value: wrappedFunctions["BigInt64Array.prototype.set"].length});

wrappedFunctions["BigUint64Array.prototype.set"] = BigUint64Array.prototype.set;
BigUint64Array.prototype.set = { set () {
	log42["BigUint64Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.set"].apply__(this, args);
}}.set
BigUint64Array.prototype.set.prototype !== undefined ? BigUint64Array.prototype.set.prototype = wrappedFunctions["BigUint64Array.prototype.set"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.set, "length", {value: wrappedFunctions["BigUint64Array.prototype.set"].length});

wrappedFunctions["Float32Array.prototype.set"] = Float32Array.prototype.set;
Float32Array.prototype.set = { set () {
	log42["Float32Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.set"].apply__(this, args);
}}.set
Float32Array.prototype.set.prototype !== undefined ? Float32Array.prototype.set.prototype = wrappedFunctions["Float32Array.prototype.set"].prototype : null;
Object.defineProperty(Float32Array.prototype.set, "length", {value: wrappedFunctions["Float32Array.prototype.set"].length});

wrappedFunctions["Float64Array.prototype.set"] = Float64Array.prototype.set;
Float64Array.prototype.set = { set () {
	log42["Float64Array.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.set"].apply__(this, args);
}}.set
Float64Array.prototype.set.prototype !== undefined ? Float64Array.prototype.set.prototype = wrappedFunctions["Float64Array.prototype.set"].prototype : null;
Object.defineProperty(Float64Array.prototype.set, "length", {value: wrappedFunctions["Float64Array.prototype.set"].length});

wrappedFunctions["Int8Array.prototype.slice"] = Int8Array.prototype.slice;
Int8Array.prototype.slice = { slice () {
	log42["Int8Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.slice"].apply__(this, args);
}}.slice
Int8Array.prototype.slice.prototype !== undefined ? Int8Array.prototype.slice.prototype = wrappedFunctions["Int8Array.prototype.slice"].prototype : null;
Object.defineProperty(Int8Array.prototype.slice, "length", {value: wrappedFunctions["Int8Array.prototype.slice"].length});

wrappedFunctions["Uint8Array.prototype.slice"] = Uint8Array.prototype.slice;
Uint8Array.prototype.slice = { slice () {
	log42["Uint8Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.slice"].apply__(this, args);
}}.slice
Uint8Array.prototype.slice.prototype !== undefined ? Uint8Array.prototype.slice.prototype = wrappedFunctions["Uint8Array.prototype.slice"].prototype : null;
Object.defineProperty(Uint8Array.prototype.slice, "length", {value: wrappedFunctions["Uint8Array.prototype.slice"].length});

wrappedFunctions["Uint8ClampedArray.prototype.slice"] = Uint8ClampedArray.prototype.slice;
Uint8ClampedArray.prototype.slice = { slice () {
	log42["Uint8ClampedArray.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.slice"].apply__(this, args);
}}.slice
Uint8ClampedArray.prototype.slice.prototype !== undefined ? Uint8ClampedArray.prototype.slice.prototype = wrappedFunctions["Uint8ClampedArray.prototype.slice"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.slice, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.slice"].length});

wrappedFunctions["Int16Array.prototype.slice"] = Int16Array.prototype.slice;
Int16Array.prototype.slice = { slice () {
	log42["Int16Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.slice"].apply__(this, args);
}}.slice
Int16Array.prototype.slice.prototype !== undefined ? Int16Array.prototype.slice.prototype = wrappedFunctions["Int16Array.prototype.slice"].prototype : null;
Object.defineProperty(Int16Array.prototype.slice, "length", {value: wrappedFunctions["Int16Array.prototype.slice"].length});

wrappedFunctions["Uint16Array.prototype.slice"] = Uint16Array.prototype.slice;
Uint16Array.prototype.slice = { slice () {
	log42["Uint16Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.slice"].apply__(this, args);
}}.slice
Uint16Array.prototype.slice.prototype !== undefined ? Uint16Array.prototype.slice.prototype = wrappedFunctions["Uint16Array.prototype.slice"].prototype : null;
Object.defineProperty(Uint16Array.prototype.slice, "length", {value: wrappedFunctions["Uint16Array.prototype.slice"].length});

wrappedFunctions["Int32Array.prototype.slice"] = Int32Array.prototype.slice;
Int32Array.prototype.slice = { slice () {
	log42["Int32Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.slice"].apply__(this, args);
}}.slice
Int32Array.prototype.slice.prototype !== undefined ? Int32Array.prototype.slice.prototype = wrappedFunctions["Int32Array.prototype.slice"].prototype : null;
Object.defineProperty(Int32Array.prototype.slice, "length", {value: wrappedFunctions["Int32Array.prototype.slice"].length});

wrappedFunctions["Uint32Array.prototype.slice"] = Uint32Array.prototype.slice;
Uint32Array.prototype.slice = { slice () {
	log42["Uint32Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.slice"].apply__(this, args);
}}.slice
Uint32Array.prototype.slice.prototype !== undefined ? Uint32Array.prototype.slice.prototype = wrappedFunctions["Uint32Array.prototype.slice"].prototype : null;
Object.defineProperty(Uint32Array.prototype.slice, "length", {value: wrappedFunctions["Uint32Array.prototype.slice"].length});

wrappedFunctions["BigInt64Array.prototype.slice"] = BigInt64Array.prototype.slice;
BigInt64Array.prototype.slice = { slice () {
	log42["BigInt64Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.slice"].apply__(this, args);
}}.slice
BigInt64Array.prototype.slice.prototype !== undefined ? BigInt64Array.prototype.slice.prototype = wrappedFunctions["BigInt64Array.prototype.slice"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.slice, "length", {value: wrappedFunctions["BigInt64Array.prototype.slice"].length});

wrappedFunctions["BigUint64Array.prototype.slice"] = BigUint64Array.prototype.slice;
BigUint64Array.prototype.slice = { slice () {
	log42["BigUint64Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.slice"].apply__(this, args);
}}.slice
BigUint64Array.prototype.slice.prototype !== undefined ? BigUint64Array.prototype.slice.prototype = wrappedFunctions["BigUint64Array.prototype.slice"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.slice, "length", {value: wrappedFunctions["BigUint64Array.prototype.slice"].length});

wrappedFunctions["Float32Array.prototype.slice"] = Float32Array.prototype.slice;
Float32Array.prototype.slice = { slice () {
	log42["Float32Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.slice"].apply__(this, args);
}}.slice
Float32Array.prototype.slice.prototype !== undefined ? Float32Array.prototype.slice.prototype = wrappedFunctions["Float32Array.prototype.slice"].prototype : null;
Object.defineProperty(Float32Array.prototype.slice, "length", {value: wrappedFunctions["Float32Array.prototype.slice"].length});

wrappedFunctions["Float64Array.prototype.slice"] = Float64Array.prototype.slice;
Float64Array.prototype.slice = { slice () {
	log42["Float64Array.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.slice"].apply__(this, args);
}}.slice
Float64Array.prototype.slice.prototype !== undefined ? Float64Array.prototype.slice.prototype = wrappedFunctions["Float64Array.prototype.slice"].prototype : null;
Object.defineProperty(Float64Array.prototype.slice, "length", {value: wrappedFunctions["Float64Array.prototype.slice"].length});

wrappedFunctions["Int8Array.prototype.some"] = Int8Array.prototype.some;
Int8Array.prototype.some = { some () {
	log42["Int8Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.some"].apply__(this, args);
}}.some
Int8Array.prototype.some.prototype !== undefined ? Int8Array.prototype.some.prototype = wrappedFunctions["Int8Array.prototype.some"].prototype : null;
Object.defineProperty(Int8Array.prototype.some, "length", {value: wrappedFunctions["Int8Array.prototype.some"].length});

wrappedFunctions["Uint8Array.prototype.some"] = Uint8Array.prototype.some;
Uint8Array.prototype.some = { some () {
	log42["Uint8Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.some"].apply__(this, args);
}}.some
Uint8Array.prototype.some.prototype !== undefined ? Uint8Array.prototype.some.prototype = wrappedFunctions["Uint8Array.prototype.some"].prototype : null;
Object.defineProperty(Uint8Array.prototype.some, "length", {value: wrappedFunctions["Uint8Array.prototype.some"].length});

wrappedFunctions["Uint8ClampedArray.prototype.some"] = Uint8ClampedArray.prototype.some;
Uint8ClampedArray.prototype.some = { some () {
	log42["Uint8ClampedArray.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.some"].apply__(this, args);
}}.some
Uint8ClampedArray.prototype.some.prototype !== undefined ? Uint8ClampedArray.prototype.some.prototype = wrappedFunctions["Uint8ClampedArray.prototype.some"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.some, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.some"].length});

wrappedFunctions["Int16Array.prototype.some"] = Int16Array.prototype.some;
Int16Array.prototype.some = { some () {
	log42["Int16Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.some"].apply__(this, args);
}}.some
Int16Array.prototype.some.prototype !== undefined ? Int16Array.prototype.some.prototype = wrappedFunctions["Int16Array.prototype.some"].prototype : null;
Object.defineProperty(Int16Array.prototype.some, "length", {value: wrappedFunctions["Int16Array.prototype.some"].length});

wrappedFunctions["Uint16Array.prototype.some"] = Uint16Array.prototype.some;
Uint16Array.prototype.some = { some () {
	log42["Uint16Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.some"].apply__(this, args);
}}.some
Uint16Array.prototype.some.prototype !== undefined ? Uint16Array.prototype.some.prototype = wrappedFunctions["Uint16Array.prototype.some"].prototype : null;
Object.defineProperty(Uint16Array.prototype.some, "length", {value: wrappedFunctions["Uint16Array.prototype.some"].length});

wrappedFunctions["Int32Array.prototype.some"] = Int32Array.prototype.some;
Int32Array.prototype.some = { some () {
	log42["Int32Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.some"].apply__(this, args);
}}.some
Int32Array.prototype.some.prototype !== undefined ? Int32Array.prototype.some.prototype = wrappedFunctions["Int32Array.prototype.some"].prototype : null;
Object.defineProperty(Int32Array.prototype.some, "length", {value: wrappedFunctions["Int32Array.prototype.some"].length});

wrappedFunctions["Uint32Array.prototype.some"] = Uint32Array.prototype.some;
Uint32Array.prototype.some = { some () {
	log42["Uint32Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.some"].apply__(this, args);
}}.some
Uint32Array.prototype.some.prototype !== undefined ? Uint32Array.prototype.some.prototype = wrappedFunctions["Uint32Array.prototype.some"].prototype : null;
Object.defineProperty(Uint32Array.prototype.some, "length", {value: wrappedFunctions["Uint32Array.prototype.some"].length});

wrappedFunctions["BigInt64Array.prototype.some"] = BigInt64Array.prototype.some;
BigInt64Array.prototype.some = { some () {
	log42["BigInt64Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.some"].apply__(this, args);
}}.some
BigInt64Array.prototype.some.prototype !== undefined ? BigInt64Array.prototype.some.prototype = wrappedFunctions["BigInt64Array.prototype.some"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.some, "length", {value: wrappedFunctions["BigInt64Array.prototype.some"].length});

wrappedFunctions["BigUint64Array.prototype.some"] = BigUint64Array.prototype.some;
BigUint64Array.prototype.some = { some () {
	log42["BigUint64Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.some"].apply__(this, args);
}}.some
BigUint64Array.prototype.some.prototype !== undefined ? BigUint64Array.prototype.some.prototype = wrappedFunctions["BigUint64Array.prototype.some"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.some, "length", {value: wrappedFunctions["BigUint64Array.prototype.some"].length});

wrappedFunctions["Float32Array.prototype.some"] = Float32Array.prototype.some;
Float32Array.prototype.some = { some () {
	log42["Float32Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.some"].apply__(this, args);
}}.some
Float32Array.prototype.some.prototype !== undefined ? Float32Array.prototype.some.prototype = wrappedFunctions["Float32Array.prototype.some"].prototype : null;
Object.defineProperty(Float32Array.prototype.some, "length", {value: wrappedFunctions["Float32Array.prototype.some"].length});

wrappedFunctions["Float64Array.prototype.some"] = Float64Array.prototype.some;
Float64Array.prototype.some = { some () {
	log42["Float64Array.prototype.some"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.some"].apply__(this, args);
}}.some
Float64Array.prototype.some.prototype !== undefined ? Float64Array.prototype.some.prototype = wrappedFunctions["Float64Array.prototype.some"].prototype : null;
Object.defineProperty(Float64Array.prototype.some, "length", {value: wrappedFunctions["Float64Array.prototype.some"].length});

wrappedFunctions["Int8Array.prototype.sort"] = Int8Array.prototype.sort;
Int8Array.prototype.sort = { sort () {
	log42["Int8Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.sort"].apply__(this, args);
}}.sort
Int8Array.prototype.sort.prototype !== undefined ? Int8Array.prototype.sort.prototype = wrappedFunctions["Int8Array.prototype.sort"].prototype : null;
Object.defineProperty(Int8Array.prototype.sort, "length", {value: wrappedFunctions["Int8Array.prototype.sort"].length});

wrappedFunctions["Uint8Array.prototype.sort"] = Uint8Array.prototype.sort;
Uint8Array.prototype.sort = { sort () {
	log42["Uint8Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.sort"].apply__(this, args);
}}.sort
Uint8Array.prototype.sort.prototype !== undefined ? Uint8Array.prototype.sort.prototype = wrappedFunctions["Uint8Array.prototype.sort"].prototype : null;
Object.defineProperty(Uint8Array.prototype.sort, "length", {value: wrappedFunctions["Uint8Array.prototype.sort"].length});

wrappedFunctions["Uint8ClampedArray.prototype.sort"] = Uint8ClampedArray.prototype.sort;
Uint8ClampedArray.prototype.sort = { sort () {
	log42["Uint8ClampedArray.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.sort"].apply__(this, args);
}}.sort
Uint8ClampedArray.prototype.sort.prototype !== undefined ? Uint8ClampedArray.prototype.sort.prototype = wrappedFunctions["Uint8ClampedArray.prototype.sort"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.sort, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.sort"].length});

wrappedFunctions["Int16Array.prototype.sort"] = Int16Array.prototype.sort;
Int16Array.prototype.sort = { sort () {
	log42["Int16Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.sort"].apply__(this, args);
}}.sort
Int16Array.prototype.sort.prototype !== undefined ? Int16Array.prototype.sort.prototype = wrappedFunctions["Int16Array.prototype.sort"].prototype : null;
Object.defineProperty(Int16Array.prototype.sort, "length", {value: wrappedFunctions["Int16Array.prototype.sort"].length});

wrappedFunctions["Uint16Array.prototype.sort"] = Uint16Array.prototype.sort;
Uint16Array.prototype.sort = { sort () {
	log42["Uint16Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.sort"].apply__(this, args);
}}.sort
Uint16Array.prototype.sort.prototype !== undefined ? Uint16Array.prototype.sort.prototype = wrappedFunctions["Uint16Array.prototype.sort"].prototype : null;
Object.defineProperty(Uint16Array.prototype.sort, "length", {value: wrappedFunctions["Uint16Array.prototype.sort"].length});

wrappedFunctions["Int32Array.prototype.sort"] = Int32Array.prototype.sort;
Int32Array.prototype.sort = { sort () {
	log42["Int32Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.sort"].apply__(this, args);
}}.sort
Int32Array.prototype.sort.prototype !== undefined ? Int32Array.prototype.sort.prototype = wrappedFunctions["Int32Array.prototype.sort"].prototype : null;
Object.defineProperty(Int32Array.prototype.sort, "length", {value: wrappedFunctions["Int32Array.prototype.sort"].length});

wrappedFunctions["Uint32Array.prototype.sort"] = Uint32Array.prototype.sort;
Uint32Array.prototype.sort = { sort () {
	log42["Uint32Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.sort"].apply__(this, args);
}}.sort
Uint32Array.prototype.sort.prototype !== undefined ? Uint32Array.prototype.sort.prototype = wrappedFunctions["Uint32Array.prototype.sort"].prototype : null;
Object.defineProperty(Uint32Array.prototype.sort, "length", {value: wrappedFunctions["Uint32Array.prototype.sort"].length});

wrappedFunctions["BigInt64Array.prototype.sort"] = BigInt64Array.prototype.sort;
BigInt64Array.prototype.sort = { sort () {
	log42["BigInt64Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.sort"].apply__(this, args);
}}.sort
BigInt64Array.prototype.sort.prototype !== undefined ? BigInt64Array.prototype.sort.prototype = wrappedFunctions["BigInt64Array.prototype.sort"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.sort, "length", {value: wrappedFunctions["BigInt64Array.prototype.sort"].length});

wrappedFunctions["BigUint64Array.prototype.sort"] = BigUint64Array.prototype.sort;
BigUint64Array.prototype.sort = { sort () {
	log42["BigUint64Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.sort"].apply__(this, args);
}}.sort
BigUint64Array.prototype.sort.prototype !== undefined ? BigUint64Array.prototype.sort.prototype = wrappedFunctions["BigUint64Array.prototype.sort"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.sort, "length", {value: wrappedFunctions["BigUint64Array.prototype.sort"].length});

wrappedFunctions["Float32Array.prototype.sort"] = Float32Array.prototype.sort;
Float32Array.prototype.sort = { sort () {
	log42["Float32Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.sort"].apply__(this, args);
}}.sort
Float32Array.prototype.sort.prototype !== undefined ? Float32Array.prototype.sort.prototype = wrappedFunctions["Float32Array.prototype.sort"].prototype : null;
Object.defineProperty(Float32Array.prototype.sort, "length", {value: wrappedFunctions["Float32Array.prototype.sort"].length});

wrappedFunctions["Float64Array.prototype.sort"] = Float64Array.prototype.sort;
Float64Array.prototype.sort = { sort () {
	log42["Float64Array.prototype.sort"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.sort"].apply__(this, args);
}}.sort
Float64Array.prototype.sort.prototype !== undefined ? Float64Array.prototype.sort.prototype = wrappedFunctions["Float64Array.prototype.sort"].prototype : null;
Object.defineProperty(Float64Array.prototype.sort, "length", {value: wrappedFunctions["Float64Array.prototype.sort"].length});

wrappedFunctions["Int8Array.prototype.subarray"] = Int8Array.prototype.subarray;
Int8Array.prototype.subarray = { subarray () {
	log42["Int8Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.subarray"].apply__(this, args);
}}.subarray
Int8Array.prototype.subarray.prototype !== undefined ? Int8Array.prototype.subarray.prototype = wrappedFunctions["Int8Array.prototype.subarray"].prototype : null;
Object.defineProperty(Int8Array.prototype.subarray, "length", {value: wrappedFunctions["Int8Array.prototype.subarray"].length});

wrappedFunctions["Uint8Array.prototype.subarray"] = Uint8Array.prototype.subarray;
Uint8Array.prototype.subarray = { subarray () {
	log42["Uint8Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.subarray"].apply__(this, args);
}}.subarray
Uint8Array.prototype.subarray.prototype !== undefined ? Uint8Array.prototype.subarray.prototype = wrappedFunctions["Uint8Array.prototype.subarray"].prototype : null;
Object.defineProperty(Uint8Array.prototype.subarray, "length", {value: wrappedFunctions["Uint8Array.prototype.subarray"].length});

wrappedFunctions["Uint8ClampedArray.prototype.subarray"] = Uint8ClampedArray.prototype.subarray;
Uint8ClampedArray.prototype.subarray = { subarray () {
	log42["Uint8ClampedArray.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.subarray"].apply__(this, args);
}}.subarray
Uint8ClampedArray.prototype.subarray.prototype !== undefined ? Uint8ClampedArray.prototype.subarray.prototype = wrappedFunctions["Uint8ClampedArray.prototype.subarray"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.subarray, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.subarray"].length});

wrappedFunctions["Int16Array.prototype.subarray"] = Int16Array.prototype.subarray;
Int16Array.prototype.subarray = { subarray () {
	log42["Int16Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.subarray"].apply__(this, args);
}}.subarray
Int16Array.prototype.subarray.prototype !== undefined ? Int16Array.prototype.subarray.prototype = wrappedFunctions["Int16Array.prototype.subarray"].prototype : null;
Object.defineProperty(Int16Array.prototype.subarray, "length", {value: wrappedFunctions["Int16Array.prototype.subarray"].length});

wrappedFunctions["Uint16Array.prototype.subarray"] = Uint16Array.prototype.subarray;
Uint16Array.prototype.subarray = { subarray () {
	log42["Uint16Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.subarray"].apply__(this, args);
}}.subarray
Uint16Array.prototype.subarray.prototype !== undefined ? Uint16Array.prototype.subarray.prototype = wrappedFunctions["Uint16Array.prototype.subarray"].prototype : null;
Object.defineProperty(Uint16Array.prototype.subarray, "length", {value: wrappedFunctions["Uint16Array.prototype.subarray"].length});

wrappedFunctions["Int32Array.prototype.subarray"] = Int32Array.prototype.subarray;
Int32Array.prototype.subarray = { subarray () {
	log42["Int32Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.subarray"].apply__(this, args);
}}.subarray
Int32Array.prototype.subarray.prototype !== undefined ? Int32Array.prototype.subarray.prototype = wrappedFunctions["Int32Array.prototype.subarray"].prototype : null;
Object.defineProperty(Int32Array.prototype.subarray, "length", {value: wrappedFunctions["Int32Array.prototype.subarray"].length});

wrappedFunctions["Uint32Array.prototype.subarray"] = Uint32Array.prototype.subarray;
Uint32Array.prototype.subarray = { subarray () {
	log42["Uint32Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.subarray"].apply__(this, args);
}}.subarray
Uint32Array.prototype.subarray.prototype !== undefined ? Uint32Array.prototype.subarray.prototype = wrappedFunctions["Uint32Array.prototype.subarray"].prototype : null;
Object.defineProperty(Uint32Array.prototype.subarray, "length", {value: wrappedFunctions["Uint32Array.prototype.subarray"].length});

wrappedFunctions["BigInt64Array.prototype.subarray"] = BigInt64Array.prototype.subarray;
BigInt64Array.prototype.subarray = { subarray () {
	log42["BigInt64Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.subarray"].apply__(this, args);
}}.subarray
BigInt64Array.prototype.subarray.prototype !== undefined ? BigInt64Array.prototype.subarray.prototype = wrappedFunctions["BigInt64Array.prototype.subarray"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.subarray, "length", {value: wrappedFunctions["BigInt64Array.prototype.subarray"].length});

wrappedFunctions["BigUint64Array.prototype.subarray"] = BigUint64Array.prototype.subarray;
BigUint64Array.prototype.subarray = { subarray () {
	log42["BigUint64Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.subarray"].apply__(this, args);
}}.subarray
BigUint64Array.prototype.subarray.prototype !== undefined ? BigUint64Array.prototype.subarray.prototype = wrappedFunctions["BigUint64Array.prototype.subarray"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.subarray, "length", {value: wrappedFunctions["BigUint64Array.prototype.subarray"].length});

wrappedFunctions["Float32Array.prototype.subarray"] = Float32Array.prototype.subarray;
Float32Array.prototype.subarray = { subarray () {
	log42["Float32Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.subarray"].apply__(this, args);
}}.subarray
Float32Array.prototype.subarray.prototype !== undefined ? Float32Array.prototype.subarray.prototype = wrappedFunctions["Float32Array.prototype.subarray"].prototype : null;
Object.defineProperty(Float32Array.prototype.subarray, "length", {value: wrappedFunctions["Float32Array.prototype.subarray"].length});

wrappedFunctions["Float64Array.prototype.subarray"] = Float64Array.prototype.subarray;
Float64Array.prototype.subarray = { subarray () {
	log42["Float64Array.prototype.subarray"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.subarray"].apply__(this, args);
}}.subarray
Float64Array.prototype.subarray.prototype !== undefined ? Float64Array.prototype.subarray.prototype = wrappedFunctions["Float64Array.prototype.subarray"].prototype : null;
Object.defineProperty(Float64Array.prototype.subarray, "length", {value: wrappedFunctions["Float64Array.prototype.subarray"].length});

wrappedFunctions["Int8Array.prototype.toLocaleString"] = Int8Array.prototype.toLocaleString;
Int8Array.prototype.toLocaleString = { toLocaleString () {
	log42["Int8Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Int8Array.prototype.toLocaleString.prototype !== undefined ? Int8Array.prototype.toLocaleString.prototype = wrappedFunctions["Int8Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Int8Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Int8Array.prototype.toLocaleString"].length});

wrappedFunctions["Uint8Array.prototype.toLocaleString"] = Uint8Array.prototype.toLocaleString;
Uint8Array.prototype.toLocaleString = { toLocaleString () {
	log42["Uint8Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Uint8Array.prototype.toLocaleString.prototype !== undefined ? Uint8Array.prototype.toLocaleString.prototype = wrappedFunctions["Uint8Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Uint8Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Uint8Array.prototype.toLocaleString"].length});

wrappedFunctions["Uint8ClampedArray.prototype.toLocaleString"] = Uint8ClampedArray.prototype.toLocaleString;
Uint8ClampedArray.prototype.toLocaleString = { toLocaleString () {
	log42["Uint8ClampedArray.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Uint8ClampedArray.prototype.toLocaleString.prototype !== undefined ? Uint8ClampedArray.prototype.toLocaleString.prototype = wrappedFunctions["Uint8ClampedArray.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.toLocaleString, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.toLocaleString"].length});

wrappedFunctions["Int16Array.prototype.toLocaleString"] = Int16Array.prototype.toLocaleString;
Int16Array.prototype.toLocaleString = { toLocaleString () {
	log42["Int16Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Int16Array.prototype.toLocaleString.prototype !== undefined ? Int16Array.prototype.toLocaleString.prototype = wrappedFunctions["Int16Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Int16Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Int16Array.prototype.toLocaleString"].length});

wrappedFunctions["Uint16Array.prototype.toLocaleString"] = Uint16Array.prototype.toLocaleString;
Uint16Array.prototype.toLocaleString = { toLocaleString () {
	log42["Uint16Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Uint16Array.prototype.toLocaleString.prototype !== undefined ? Uint16Array.prototype.toLocaleString.prototype = wrappedFunctions["Uint16Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Uint16Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Uint16Array.prototype.toLocaleString"].length});

wrappedFunctions["Int32Array.prototype.toLocaleString"] = Int32Array.prototype.toLocaleString;
Int32Array.prototype.toLocaleString = { toLocaleString () {
	log42["Int32Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Int32Array.prototype.toLocaleString.prototype !== undefined ? Int32Array.prototype.toLocaleString.prototype = wrappedFunctions["Int32Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Int32Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Int32Array.prototype.toLocaleString"].length});

wrappedFunctions["Uint32Array.prototype.toLocaleString"] = Uint32Array.prototype.toLocaleString;
Uint32Array.prototype.toLocaleString = { toLocaleString () {
	log42["Uint32Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Uint32Array.prototype.toLocaleString.prototype !== undefined ? Uint32Array.prototype.toLocaleString.prototype = wrappedFunctions["Uint32Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Uint32Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Uint32Array.prototype.toLocaleString"].length});

wrappedFunctions["BigInt64Array.prototype.toLocaleString"] = BigInt64Array.prototype.toLocaleString;
BigInt64Array.prototype.toLocaleString = { toLocaleString () {
	log42["BigInt64Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
BigInt64Array.prototype.toLocaleString.prototype !== undefined ? BigInt64Array.prototype.toLocaleString.prototype = wrappedFunctions["BigInt64Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.toLocaleString, "length", {value: wrappedFunctions["BigInt64Array.prototype.toLocaleString"].length});

wrappedFunctions["BigUint64Array.prototype.toLocaleString"] = BigUint64Array.prototype.toLocaleString;
BigUint64Array.prototype.toLocaleString = { toLocaleString () {
	log42["BigUint64Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
BigUint64Array.prototype.toLocaleString.prototype !== undefined ? BigUint64Array.prototype.toLocaleString.prototype = wrappedFunctions["BigUint64Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.toLocaleString, "length", {value: wrappedFunctions["BigUint64Array.prototype.toLocaleString"].length});

wrappedFunctions["Float32Array.prototype.toLocaleString"] = Float32Array.prototype.toLocaleString;
Float32Array.prototype.toLocaleString = { toLocaleString () {
	log42["Float32Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Float32Array.prototype.toLocaleString.prototype !== undefined ? Float32Array.prototype.toLocaleString.prototype = wrappedFunctions["Float32Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Float32Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Float32Array.prototype.toLocaleString"].length});

wrappedFunctions["Float64Array.prototype.toLocaleString"] = Float64Array.prototype.toLocaleString;
Float64Array.prototype.toLocaleString = { toLocaleString () {
	log42["Float64Array.prototype.toLocaleString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.toLocaleString"].apply__(this, args);
}}.toLocaleString
Float64Array.prototype.toLocaleString.prototype !== undefined ? Float64Array.prototype.toLocaleString.prototype = wrappedFunctions["Float64Array.prototype.toLocaleString"].prototype : null;
Object.defineProperty(Float64Array.prototype.toLocaleString, "length", {value: wrappedFunctions["Float64Array.prototype.toLocaleString"].length});

wrappedFunctions["Int8Array.prototype.toString"] = Int8Array.prototype.toString;
Int8Array.prototype.toString = { toString () {
	log42["Int8Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.toString"].apply__(this, args);
}}.toString
Int8Array.prototype.toString.prototype !== undefined ? Int8Array.prototype.toString.prototype = wrappedFunctions["Int8Array.prototype.toString"].prototype : null;
Object.defineProperty(Int8Array.prototype.toString, "length", {value: wrappedFunctions["Int8Array.prototype.toString"].length});

wrappedFunctions["Uint8Array.prototype.toString"] = Uint8Array.prototype.toString;
Uint8Array.prototype.toString = { toString () {
	log42["Uint8Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.toString"].apply__(this, args);
}}.toString
Uint8Array.prototype.toString.prototype !== undefined ? Uint8Array.prototype.toString.prototype = wrappedFunctions["Uint8Array.prototype.toString"].prototype : null;
Object.defineProperty(Uint8Array.prototype.toString, "length", {value: wrappedFunctions["Uint8Array.prototype.toString"].length});

wrappedFunctions["Uint8ClampedArray.prototype.toString"] = Uint8ClampedArray.prototype.toString;
Uint8ClampedArray.prototype.toString = { toString () {
	log42["Uint8ClampedArray.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.toString"].apply__(this, args);
}}.toString
Uint8ClampedArray.prototype.toString.prototype !== undefined ? Uint8ClampedArray.prototype.toString.prototype = wrappedFunctions["Uint8ClampedArray.prototype.toString"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.toString, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.toString"].length});

wrappedFunctions["Int16Array.prototype.toString"] = Int16Array.prototype.toString;
Int16Array.prototype.toString = { toString () {
	log42["Int16Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.toString"].apply__(this, args);
}}.toString
Int16Array.prototype.toString.prototype !== undefined ? Int16Array.prototype.toString.prototype = wrappedFunctions["Int16Array.prototype.toString"].prototype : null;
Object.defineProperty(Int16Array.prototype.toString, "length", {value: wrappedFunctions["Int16Array.prototype.toString"].length});

wrappedFunctions["Uint16Array.prototype.toString"] = Uint16Array.prototype.toString;
Uint16Array.prototype.toString = { toString () {
	log42["Uint16Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.toString"].apply__(this, args);
}}.toString
Uint16Array.prototype.toString.prototype !== undefined ? Uint16Array.prototype.toString.prototype = wrappedFunctions["Uint16Array.prototype.toString"].prototype : null;
Object.defineProperty(Uint16Array.prototype.toString, "length", {value: wrappedFunctions["Uint16Array.prototype.toString"].length});

wrappedFunctions["Int32Array.prototype.toString"] = Int32Array.prototype.toString;
Int32Array.prototype.toString = { toString () {
	log42["Int32Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.toString"].apply__(this, args);
}}.toString
Int32Array.prototype.toString.prototype !== undefined ? Int32Array.prototype.toString.prototype = wrappedFunctions["Int32Array.prototype.toString"].prototype : null;
Object.defineProperty(Int32Array.prototype.toString, "length", {value: wrappedFunctions["Int32Array.prototype.toString"].length});

wrappedFunctions["Uint32Array.prototype.toString"] = Uint32Array.prototype.toString;
Uint32Array.prototype.toString = { toString () {
	log42["Uint32Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.toString"].apply__(this, args);
}}.toString
Uint32Array.prototype.toString.prototype !== undefined ? Uint32Array.prototype.toString.prototype = wrappedFunctions["Uint32Array.prototype.toString"].prototype : null;
Object.defineProperty(Uint32Array.prototype.toString, "length", {value: wrappedFunctions["Uint32Array.prototype.toString"].length});

wrappedFunctions["BigInt64Array.prototype.toString"] = BigInt64Array.prototype.toString;
BigInt64Array.prototype.toString = { toString () {
	log42["BigInt64Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.toString"].apply__(this, args);
}}.toString
BigInt64Array.prototype.toString.prototype !== undefined ? BigInt64Array.prototype.toString.prototype = wrappedFunctions["BigInt64Array.prototype.toString"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.toString, "length", {value: wrappedFunctions["BigInt64Array.prototype.toString"].length});

wrappedFunctions["BigUint64Array.prototype.toString"] = BigUint64Array.prototype.toString;
BigUint64Array.prototype.toString = { toString () {
	log42["BigUint64Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.toString"].apply__(this, args);
}}.toString
BigUint64Array.prototype.toString.prototype !== undefined ? BigUint64Array.prototype.toString.prototype = wrappedFunctions["BigUint64Array.prototype.toString"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.toString, "length", {value: wrappedFunctions["BigUint64Array.prototype.toString"].length});

wrappedFunctions["Float32Array.prototype.toString"] = Float32Array.prototype.toString;
Float32Array.prototype.toString = { toString () {
	log42["Float32Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.toString"].apply__(this, args);
}}.toString
Float32Array.prototype.toString.prototype !== undefined ? Float32Array.prototype.toString.prototype = wrappedFunctions["Float32Array.prototype.toString"].prototype : null;
Object.defineProperty(Float32Array.prototype.toString, "length", {value: wrappedFunctions["Float32Array.prototype.toString"].length});

wrappedFunctions["Float64Array.prototype.toString"] = Float64Array.prototype.toString;
Float64Array.prototype.toString = { toString () {
	log42["Float64Array.prototype.toString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.toString"].apply__(this, args);
}}.toString
Float64Array.prototype.toString.prototype !== undefined ? Float64Array.prototype.toString.prototype = wrappedFunctions["Float64Array.prototype.toString"].prototype : null;
Object.defineProperty(Float64Array.prototype.toString, "length", {value: wrappedFunctions["Float64Array.prototype.toString"].length});

wrappedFunctions["Int8Array.prototype.values"] = Int8Array.prototype.values;
Int8Array.prototype.values = { values () {
	log42["Int8Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int8Array.prototype.values"].apply__(this, args);
}}.values
Int8Array.prototype.values.prototype !== undefined ? Int8Array.prototype.values.prototype = wrappedFunctions["Int8Array.prototype.values"].prototype : null;
Object.defineProperty(Int8Array.prototype.values, "length", {value: wrappedFunctions["Int8Array.prototype.values"].length});

wrappedFunctions["Uint8Array.prototype.values"] = Uint8Array.prototype.values;
Uint8Array.prototype.values = { values () {
	log42["Uint8Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8Array.prototype.values"].apply__(this, args);
}}.values
Uint8Array.prototype.values.prototype !== undefined ? Uint8Array.prototype.values.prototype = wrappedFunctions["Uint8Array.prototype.values"].prototype : null;
Object.defineProperty(Uint8Array.prototype.values, "length", {value: wrappedFunctions["Uint8Array.prototype.values"].length});

wrappedFunctions["Uint8ClampedArray.prototype.values"] = Uint8ClampedArray.prototype.values;
Uint8ClampedArray.prototype.values = { values () {
	log42["Uint8ClampedArray.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint8ClampedArray.prototype.values"].apply__(this, args);
}}.values
Uint8ClampedArray.prototype.values.prototype !== undefined ? Uint8ClampedArray.prototype.values.prototype = wrappedFunctions["Uint8ClampedArray.prototype.values"].prototype : null;
Object.defineProperty(Uint8ClampedArray.prototype.values, "length", {value: wrappedFunctions["Uint8ClampedArray.prototype.values"].length});

wrappedFunctions["Int16Array.prototype.values"] = Int16Array.prototype.values;
Int16Array.prototype.values = { values () {
	log42["Int16Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int16Array.prototype.values"].apply__(this, args);
}}.values
Int16Array.prototype.values.prototype !== undefined ? Int16Array.prototype.values.prototype = wrappedFunctions["Int16Array.prototype.values"].prototype : null;
Object.defineProperty(Int16Array.prototype.values, "length", {value: wrappedFunctions["Int16Array.prototype.values"].length});

wrappedFunctions["Uint16Array.prototype.values"] = Uint16Array.prototype.values;
Uint16Array.prototype.values = { values () {
	log42["Uint16Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint16Array.prototype.values"].apply__(this, args);
}}.values
Uint16Array.prototype.values.prototype !== undefined ? Uint16Array.prototype.values.prototype = wrappedFunctions["Uint16Array.prototype.values"].prototype : null;
Object.defineProperty(Uint16Array.prototype.values, "length", {value: wrappedFunctions["Uint16Array.prototype.values"].length});

wrappedFunctions["Int32Array.prototype.values"] = Int32Array.prototype.values;
Int32Array.prototype.values = { values () {
	log42["Int32Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Int32Array.prototype.values"].apply__(this, args);
}}.values
Int32Array.prototype.values.prototype !== undefined ? Int32Array.prototype.values.prototype = wrappedFunctions["Int32Array.prototype.values"].prototype : null;
Object.defineProperty(Int32Array.prototype.values, "length", {value: wrappedFunctions["Int32Array.prototype.values"].length});

wrappedFunctions["Uint32Array.prototype.values"] = Uint32Array.prototype.values;
Uint32Array.prototype.values = { values () {
	log42["Uint32Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Uint32Array.prototype.values"].apply__(this, args);
}}.values
Uint32Array.prototype.values.prototype !== undefined ? Uint32Array.prototype.values.prototype = wrappedFunctions["Uint32Array.prototype.values"].prototype : null;
Object.defineProperty(Uint32Array.prototype.values, "length", {value: wrappedFunctions["Uint32Array.prototype.values"].length});

wrappedFunctions["BigInt64Array.prototype.values"] = BigInt64Array.prototype.values;
BigInt64Array.prototype.values = { values () {
	log42["BigInt64Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigInt64Array.prototype.values"].apply__(this, args);
}}.values
BigInt64Array.prototype.values.prototype !== undefined ? BigInt64Array.prototype.values.prototype = wrappedFunctions["BigInt64Array.prototype.values"].prototype : null;
Object.defineProperty(BigInt64Array.prototype.values, "length", {value: wrappedFunctions["BigInt64Array.prototype.values"].length});

wrappedFunctions["BigUint64Array.prototype.values"] = BigUint64Array.prototype.values;
BigUint64Array.prototype.values = { values () {
	log42["BigUint64Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["BigUint64Array.prototype.values"].apply__(this, args);
}}.values
BigUint64Array.prototype.values.prototype !== undefined ? BigUint64Array.prototype.values.prototype = wrappedFunctions["BigUint64Array.prototype.values"].prototype : null;
Object.defineProperty(BigUint64Array.prototype.values, "length", {value: wrappedFunctions["BigUint64Array.prototype.values"].length});

wrappedFunctions["Float32Array.prototype.values"] = Float32Array.prototype.values;
Float32Array.prototype.values = { values () {
	log42["Float32Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float32Array.prototype.values"].apply__(this, args);
}}.values
Float32Array.prototype.values.prototype !== undefined ? Float32Array.prototype.values.prototype = wrappedFunctions["Float32Array.prototype.values"].prototype : null;
Object.defineProperty(Float32Array.prototype.values, "length", {value: wrappedFunctions["Float32Array.prototype.values"].length});

wrappedFunctions["Float64Array.prototype.values"] = Float64Array.prototype.values;
Float64Array.prototype.values = { values () {
	log42["Float64Array.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Float64Array.prototype.values"].apply__(this, args);
}}.values
Float64Array.prototype.values.prototype !== undefined ? Float64Array.prototype.values.prototype = wrappedFunctions["Float64Array.prototype.values"].prototype : null;
Object.defineProperty(Float64Array.prototype.values, "length", {value: wrappedFunctions["Float64Array.prototype.values"].length});

wrappedFunctions["Map.prototype.clear"] = Map.prototype.clear;
Map.prototype.clear = { clear () {
	log42["Map.prototype.clear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.clear"].apply__(this, args);
}}.clear
Map.prototype.clear.prototype !== undefined ? Map.prototype.clear.prototype = wrappedFunctions["Map.prototype.clear"].prototype : null;
Object.defineProperty(Map.prototype.clear, "length", {value: wrappedFunctions["Map.prototype.clear"].length});

wrappedFunctions["Map.prototype.delete"] = Map.prototype.delete;
Map.prototype.delete = { delete () {
	log42["Map.prototype.delete"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.delete"].apply__(this, args);
}}.delete
Map.prototype.delete.prototype !== undefined ? Map.prototype.delete.prototype = wrappedFunctions["Map.prototype.delete"].prototype : null;
Object.defineProperty(Map.prototype.delete, "length", {value: wrappedFunctions["Map.prototype.delete"].length});

wrappedFunctions["Map.prototype.entries"] = Map.prototype.entries;
Map.prototype.entries = { entries () {
	log42["Map.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.entries"].apply__(this, args);
}}.entries
Map.prototype.entries.prototype !== undefined ? Map.prototype.entries.prototype = wrappedFunctions["Map.prototype.entries"].prototype : null;
Object.defineProperty(Map.prototype.entries, "length", {value: wrappedFunctions["Map.prototype.entries"].length});

wrappedFunctions["Map.prototype.forEach"] = Map.prototype.forEach;
Map.prototype.forEach = { forEach () {
	log42["Map.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.forEach"].apply__(this, args);
}}.forEach
Map.prototype.forEach.prototype !== undefined ? Map.prototype.forEach.prototype = wrappedFunctions["Map.prototype.forEach"].prototype : null;
Object.defineProperty(Map.prototype.forEach, "length", {value: wrappedFunctions["Map.prototype.forEach"].length});

wrappedFunctions["Map.prototype.get"] = Map.prototype.get;
Map.prototype.get = { get () {
	log42["Map.prototype.get"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.get"].apply__(this, args);
}}.get
Map.prototype.get.prototype !== undefined ? Map.prototype.get.prototype = wrappedFunctions["Map.prototype.get"].prototype : null;
Object.defineProperty(Map.prototype.get, "length", {value: wrappedFunctions["Map.prototype.get"].length});

wrappedFunctions["Map.prototype.has"] = Map.prototype.has;
Map.prototype.has = { has () {
	log42["Map.prototype.has"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.has"].apply__(this, args);
}}.has
Map.prototype.has.prototype !== undefined ? Map.prototype.has.prototype = wrappedFunctions["Map.prototype.has"].prototype : null;
Object.defineProperty(Map.prototype.has, "length", {value: wrappedFunctions["Map.prototype.has"].length});

wrappedFunctions["Map.prototype.keys"] = Map.prototype.keys;
Map.prototype.keys = { keys () {
	log42["Map.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.keys"].apply__(this, args);
}}.keys
Map.prototype.keys.prototype !== undefined ? Map.prototype.keys.prototype = wrappedFunctions["Map.prototype.keys"].prototype : null;
Object.defineProperty(Map.prototype.keys, "length", {value: wrappedFunctions["Map.prototype.keys"].length});

wrappedFunctions["Map.prototype.set"] = Map.prototype.set;
Map.prototype.set = { set () {
	log42["Map.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.set"].apply__(this, args);
}}.set
Map.prototype.set.prototype !== undefined ? Map.prototype.set.prototype = wrappedFunctions["Map.prototype.set"].prototype : null;
Object.defineProperty(Map.prototype.set, "length", {value: wrappedFunctions["Map.prototype.set"].length});

wrappedFunctions["Map.prototype.values"] = Map.prototype.values;
Map.prototype.values = { values () {
	log42["Map.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Map.prototype.values"].apply__(this, args);
}}.values
Map.prototype.values.prototype !== undefined ? Map.prototype.values.prototype = wrappedFunctions["Map.prototype.values"].prototype : null;
Object.defineProperty(Map.prototype.values, "length", {value: wrappedFunctions["Map.prototype.values"].length});

wrappedFunctions["Set.prototype.add"] = Set.prototype.add;
Set.prototype.add = { add () {
	log42["Set.prototype.add"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.add"].apply__(this, args);
}}.add
Set.prototype.add.prototype !== undefined ? Set.prototype.add.prototype = wrappedFunctions["Set.prototype.add"].prototype : null;
Object.defineProperty(Set.prototype.add, "length", {value: wrappedFunctions["Set.prototype.add"].length});

wrappedFunctions["Set.prototype.clear"] = Set.prototype.clear;
Set.prototype.clear = { clear () {
	log42["Set.prototype.clear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.clear"].apply__(this, args);
}}.clear
Set.prototype.clear.prototype !== undefined ? Set.prototype.clear.prototype = wrappedFunctions["Set.prototype.clear"].prototype : null;
Object.defineProperty(Set.prototype.clear, "length", {value: wrappedFunctions["Set.prototype.clear"].length});

wrappedFunctions["Set.prototype.delete"] = Set.prototype.delete;
Set.prototype.delete = { delete () {
	log42["Set.prototype.delete"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.delete"].apply__(this, args);
}}.delete
Set.prototype.delete.prototype !== undefined ? Set.prototype.delete.prototype = wrappedFunctions["Set.prototype.delete"].prototype : null;
Object.defineProperty(Set.prototype.delete, "length", {value: wrappedFunctions["Set.prototype.delete"].length});

wrappedFunctions["Set.prototype.entries"] = Set.prototype.entries;
Set.prototype.entries = { entries () {
	log42["Set.prototype.entries"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.entries"].apply__(this, args);
}}.entries
Set.prototype.entries.prototype !== undefined ? Set.prototype.entries.prototype = wrappedFunctions["Set.prototype.entries"].prototype : null;
Object.defineProperty(Set.prototype.entries, "length", {value: wrappedFunctions["Set.prototype.entries"].length});

wrappedFunctions["Set.prototype.forEach"] = Set.prototype.forEach;
Set.prototype.forEach = { forEach () {
	log42["Set.prototype.forEach"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.forEach"].apply__(this, args);
}}.forEach
Set.prototype.forEach.prototype !== undefined ? Set.prototype.forEach.prototype = wrappedFunctions["Set.prototype.forEach"].prototype : null;
Object.defineProperty(Set.prototype.forEach, "length", {value: wrappedFunctions["Set.prototype.forEach"].length});

wrappedFunctions["Set.prototype.has"] = Set.prototype.has;
Set.prototype.has = { has () {
	log42["Set.prototype.has"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.has"].apply__(this, args);
}}.has
Set.prototype.has.prototype !== undefined ? Set.prototype.has.prototype = wrappedFunctions["Set.prototype.has"].prototype : null;
Object.defineProperty(Set.prototype.has, "length", {value: wrappedFunctions["Set.prototype.has"].length});

wrappedFunctions["Set.prototype.keys"] = Set.prototype.keys;
Set.prototype.keys = { keys () {
	log42["Set.prototype.keys"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.keys"].apply__(this, args);
}}.keys
Set.prototype.keys.prototype !== undefined ? Set.prototype.keys.prototype = wrappedFunctions["Set.prototype.keys"].prototype : null;
Object.defineProperty(Set.prototype.keys, "length", {value: wrappedFunctions["Set.prototype.keys"].length});

wrappedFunctions["Set.prototype.values"] = Set.prototype.values;
Set.prototype.values = { values () {
	log42["Set.prototype.values"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Set.prototype.values"].apply__(this, args);
}}.values
Set.prototype.values.prototype !== undefined ? Set.prototype.values.prototype = wrappedFunctions["Set.prototype.values"].prototype : null;
Object.defineProperty(Set.prototype.values, "length", {value: wrappedFunctions["Set.prototype.values"].length});

wrappedFunctions["WeakMap.prototype.delete"] = WeakMap.prototype.delete;
WeakMap.prototype.delete = { delete () {
	log42["WeakMap.prototype.delete"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakMap.prototype.delete"].apply__(this, args);
}}.delete
WeakMap.prototype.delete.prototype !== undefined ? WeakMap.prototype.delete.prototype = wrappedFunctions["WeakMap.prototype.delete"].prototype : null;
Object.defineProperty(WeakMap.prototype.delete, "length", {value: wrappedFunctions["WeakMap.prototype.delete"].length});

wrappedFunctions["WeakMap.prototype.get"] = WeakMap.prototype.get;
WeakMap.prototype.get = { get () {
	log42["WeakMap.prototype.get"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakMap.prototype.get"].apply__(this, args);
}}.get
WeakMap.prototype.get.prototype !== undefined ? WeakMap.prototype.get.prototype = wrappedFunctions["WeakMap.prototype.get"].prototype : null;
Object.defineProperty(WeakMap.prototype.get, "length", {value: wrappedFunctions["WeakMap.prototype.get"].length});

wrappedFunctions["WeakMap.prototype.has"] = WeakMap.prototype.has;
WeakMap.prototype.has = { has () {
	log42["WeakMap.prototype.has"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakMap.prototype.has"].apply__(this, args);
}}.has
WeakMap.prototype.has.prototype !== undefined ? WeakMap.prototype.has.prototype = wrappedFunctions["WeakMap.prototype.has"].prototype : null;
Object.defineProperty(WeakMap.prototype.has, "length", {value: wrappedFunctions["WeakMap.prototype.has"].length});

wrappedFunctions["WeakMap.prototype.set"] = WeakMap.prototype.set;
WeakMap.prototype.set = { set () {
	log42["WeakMap.prototype.set"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakMap.prototype.set"].apply__(this, args);
}}.set
WeakMap.prototype.set.prototype !== undefined ? WeakMap.prototype.set.prototype = wrappedFunctions["WeakMap.prototype.set"].prototype : null;
Object.defineProperty(WeakMap.prototype.set, "length", {value: wrappedFunctions["WeakMap.prototype.set"].length});

wrappedFunctions["WeakSet.prototype.add"] = WeakSet.prototype.add;
WeakSet.prototype.add = { add () {
	log42["WeakSet.prototype.add"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakSet.prototype.add"].apply__(this, args);
}}.add
WeakSet.prototype.add.prototype !== undefined ? WeakSet.prototype.add.prototype = wrappedFunctions["WeakSet.prototype.add"].prototype : null;
Object.defineProperty(WeakSet.prototype.add, "length", {value: wrappedFunctions["WeakSet.prototype.add"].length});

wrappedFunctions["WeakSet.prototype.delete"] = WeakSet.prototype.delete;
WeakSet.prototype.delete = { delete () {
	log42["WeakSet.prototype.delete"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakSet.prototype.delete"].apply__(this, args);
}}.delete
WeakSet.prototype.delete.prototype !== undefined ? WeakSet.prototype.delete.prototype = wrappedFunctions["WeakSet.prototype.delete"].prototype : null;
Object.defineProperty(WeakSet.prototype.delete, "length", {value: wrappedFunctions["WeakSet.prototype.delete"].length});

wrappedFunctions["WeakSet.prototype.has"] = WeakSet.prototype.has;
WeakSet.prototype.has = { has () {
	log42["WeakSet.prototype.has"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakSet.prototype.has"].apply__(this, args);
}}.has
WeakSet.prototype.has.prototype !== undefined ? WeakSet.prototype.has.prototype = wrappedFunctions["WeakSet.prototype.has"].prototype : null;
Object.defineProperty(WeakSet.prototype.has, "length", {value: wrappedFunctions["WeakSet.prototype.has"].length});

wrappedFunctions["ArrayBuffer.prototype.slice"] = ArrayBuffer.prototype.slice;
ArrayBuffer.prototype.slice = { slice () {
	log42["ArrayBuffer.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["ArrayBuffer.prototype.slice"].apply__(this, args);
}}.slice
ArrayBuffer.prototype.slice.prototype !== undefined ? ArrayBuffer.prototype.slice.prototype = wrappedFunctions["ArrayBuffer.prototype.slice"].prototype : null;
Object.defineProperty(ArrayBuffer.prototype.slice, "length", {value: wrappedFunctions["ArrayBuffer.prototype.slice"].length});

wrappedFunctions["SharedArrayBuffer.prototype.slice"] = SharedArrayBuffer.prototype.slice;
SharedArrayBuffer.prototype.slice = { slice () {
	log42["SharedArrayBuffer.prototype.slice"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["SharedArrayBuffer.prototype.slice"].apply__(this, args);
}}.slice
SharedArrayBuffer.prototype.slice.prototype !== undefined ? SharedArrayBuffer.prototype.slice.prototype = wrappedFunctions["SharedArrayBuffer.prototype.slice"].prototype : null;
Object.defineProperty(SharedArrayBuffer.prototype.slice, "length", {value: wrappedFunctions["SharedArrayBuffer.prototype.slice"].length});

wrappedFunctions["DataView.prototype.getBigInt64"] = DataView.prototype.getBigInt64;
DataView.prototype.getBigInt64 = { getBigInt64 () {
	log42["DataView.prototype.getBigInt64"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getBigInt64"].apply__(this, args);
}}.getBigInt64
DataView.prototype.getBigInt64.prototype !== undefined ? DataView.prototype.getBigInt64.prototype = wrappedFunctions["DataView.prototype.getBigInt64"].prototype : null;
Object.defineProperty(DataView.prototype.getBigInt64, "length", {value: wrappedFunctions["DataView.prototype.getBigInt64"].length});

wrappedFunctions["DataView.prototype.getBigUint64"] = DataView.prototype.getBigUint64;
DataView.prototype.getBigUint64 = { getBigUint64 () {
	log42["DataView.prototype.getBigUint64"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getBigUint64"].apply__(this, args);
}}.getBigUint64
DataView.prototype.getBigUint64.prototype !== undefined ? DataView.prototype.getBigUint64.prototype = wrappedFunctions["DataView.prototype.getBigUint64"].prototype : null;
Object.defineProperty(DataView.prototype.getBigUint64, "length", {value: wrappedFunctions["DataView.prototype.getBigUint64"].length});

wrappedFunctions["DataView.prototype.getFloat32"] = DataView.prototype.getFloat32;
DataView.prototype.getFloat32 = { getFloat32 () {
	log42["DataView.prototype.getFloat32"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getFloat32"].apply__(this, args);
}}.getFloat32
DataView.prototype.getFloat32.prototype !== undefined ? DataView.prototype.getFloat32.prototype = wrappedFunctions["DataView.prototype.getFloat32"].prototype : null;
Object.defineProperty(DataView.prototype.getFloat32, "length", {value: wrappedFunctions["DataView.prototype.getFloat32"].length});

wrappedFunctions["DataView.prototype.getFloat64"] = DataView.prototype.getFloat64;
DataView.prototype.getFloat64 = { getFloat64 () {
	log42["DataView.prototype.getFloat64"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getFloat64"].apply__(this, args);
}}.getFloat64
DataView.prototype.getFloat64.prototype !== undefined ? DataView.prototype.getFloat64.prototype = wrappedFunctions["DataView.prototype.getFloat64"].prototype : null;
Object.defineProperty(DataView.prototype.getFloat64, "length", {value: wrappedFunctions["DataView.prototype.getFloat64"].length});

wrappedFunctions["DataView.prototype.getInt8"] = DataView.prototype.getInt8;
DataView.prototype.getInt8 = { getInt8 () {
	log42["DataView.prototype.getInt8"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getInt8"].apply__(this, args);
}}.getInt8
DataView.prototype.getInt8.prototype !== undefined ? DataView.prototype.getInt8.prototype = wrappedFunctions["DataView.prototype.getInt8"].prototype : null;
Object.defineProperty(DataView.prototype.getInt8, "length", {value: wrappedFunctions["DataView.prototype.getInt8"].length});

wrappedFunctions["DataView.prototype.getInt16"] = DataView.prototype.getInt16;
DataView.prototype.getInt16 = { getInt16 () {
	log42["DataView.prototype.getInt16"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getInt16"].apply__(this, args);
}}.getInt16
DataView.prototype.getInt16.prototype !== undefined ? DataView.prototype.getInt16.prototype = wrappedFunctions["DataView.prototype.getInt16"].prototype : null;
Object.defineProperty(DataView.prototype.getInt16, "length", {value: wrappedFunctions["DataView.prototype.getInt16"].length});

wrappedFunctions["DataView.prototype.getInt32"] = DataView.prototype.getInt32;
DataView.prototype.getInt32 = { getInt32 () {
	log42["DataView.prototype.getInt32"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getInt32"].apply__(this, args);
}}.getInt32
DataView.prototype.getInt32.prototype !== undefined ? DataView.prototype.getInt32.prototype = wrappedFunctions["DataView.prototype.getInt32"].prototype : null;
Object.defineProperty(DataView.prototype.getInt32, "length", {value: wrappedFunctions["DataView.prototype.getInt32"].length});

wrappedFunctions["DataView.prototype.getUint8"] = DataView.prototype.getUint8;
DataView.prototype.getUint8 = { getUint8 () {
	log42["DataView.prototype.getUint8"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getUint8"].apply__(this, args);
}}.getUint8
DataView.prototype.getUint8.prototype !== undefined ? DataView.prototype.getUint8.prototype = wrappedFunctions["DataView.prototype.getUint8"].prototype : null;
Object.defineProperty(DataView.prototype.getUint8, "length", {value: wrappedFunctions["DataView.prototype.getUint8"].length});

wrappedFunctions["DataView.prototype.getUint16"] = DataView.prototype.getUint16;
DataView.prototype.getUint16 = { getUint16 () {
	log42["DataView.prototype.getUint16"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getUint16"].apply__(this, args);
}}.getUint16
DataView.prototype.getUint16.prototype !== undefined ? DataView.prototype.getUint16.prototype = wrappedFunctions["DataView.prototype.getUint16"].prototype : null;
Object.defineProperty(DataView.prototype.getUint16, "length", {value: wrappedFunctions["DataView.prototype.getUint16"].length});

wrappedFunctions["DataView.prototype.getUint32"] = DataView.prototype.getUint32;
DataView.prototype.getUint32 = { getUint32 () {
	log42["DataView.prototype.getUint32"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.getUint32"].apply__(this, args);
}}.getUint32
DataView.prototype.getUint32.prototype !== undefined ? DataView.prototype.getUint32.prototype = wrappedFunctions["DataView.prototype.getUint32"].prototype : null;
Object.defineProperty(DataView.prototype.getUint32, "length", {value: wrappedFunctions["DataView.prototype.getUint32"].length});

wrappedFunctions["DataView.prototype.setBigInt64"] = DataView.prototype.setBigInt64;
DataView.prototype.setBigInt64 = { setBigInt64 () {
	log42["DataView.prototype.setBigInt64"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setBigInt64"].apply__(this, args);
}}.setBigInt64
DataView.prototype.setBigInt64.prototype !== undefined ? DataView.prototype.setBigInt64.prototype = wrappedFunctions["DataView.prototype.setBigInt64"].prototype : null;
Object.defineProperty(DataView.prototype.setBigInt64, "length", {value: wrappedFunctions["DataView.prototype.setBigInt64"].length});

wrappedFunctions["DataView.prototype.setBigUint64"] = DataView.prototype.setBigUint64;
DataView.prototype.setBigUint64 = { setBigUint64 () {
	log42["DataView.prototype.setBigUint64"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setBigUint64"].apply__(this, args);
}}.setBigUint64
DataView.prototype.setBigUint64.prototype !== undefined ? DataView.prototype.setBigUint64.prototype = wrappedFunctions["DataView.prototype.setBigUint64"].prototype : null;
Object.defineProperty(DataView.prototype.setBigUint64, "length", {value: wrappedFunctions["DataView.prototype.setBigUint64"].length});

wrappedFunctions["DataView.prototype.setFloat32"] = DataView.prototype.setFloat32;
DataView.prototype.setFloat32 = { setFloat32 () {
	log42["DataView.prototype.setFloat32"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setFloat32"].apply__(this, args);
}}.setFloat32
DataView.prototype.setFloat32.prototype !== undefined ? DataView.prototype.setFloat32.prototype = wrappedFunctions["DataView.prototype.setFloat32"].prototype : null;
Object.defineProperty(DataView.prototype.setFloat32, "length", {value: wrappedFunctions["DataView.prototype.setFloat32"].length});

wrappedFunctions["DataView.prototype.setFloat64"] = DataView.prototype.setFloat64;
DataView.prototype.setFloat64 = { setFloat64 () {
	log42["DataView.prototype.setFloat64"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setFloat64"].apply__(this, args);
}}.setFloat64
DataView.prototype.setFloat64.prototype !== undefined ? DataView.prototype.setFloat64.prototype = wrappedFunctions["DataView.prototype.setFloat64"].prototype : null;
Object.defineProperty(DataView.prototype.setFloat64, "length", {value: wrappedFunctions["DataView.prototype.setFloat64"].length});

wrappedFunctions["DataView.prototype.setInt8"] = DataView.prototype.setInt8;
DataView.prototype.setInt8 = { setInt8 () {
	log42["DataView.prototype.setInt8"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setInt8"].apply__(this, args);
}}.setInt8
DataView.prototype.setInt8.prototype !== undefined ? DataView.prototype.setInt8.prototype = wrappedFunctions["DataView.prototype.setInt8"].prototype : null;
Object.defineProperty(DataView.prototype.setInt8, "length", {value: wrappedFunctions["DataView.prototype.setInt8"].length});

wrappedFunctions["DataView.prototype.setInt16"] = DataView.prototype.setInt16;
DataView.prototype.setInt16 = { setInt16 () {
	log42["DataView.prototype.setInt16"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setInt16"].apply__(this, args);
}}.setInt16
DataView.prototype.setInt16.prototype !== undefined ? DataView.prototype.setInt16.prototype = wrappedFunctions["DataView.prototype.setInt16"].prototype : null;
Object.defineProperty(DataView.prototype.setInt16, "length", {value: wrappedFunctions["DataView.prototype.setInt16"].length});

wrappedFunctions["DataView.prototype.setInt32"] = DataView.prototype.setInt32;
DataView.prototype.setInt32 = { setInt32 () {
	log42["DataView.prototype.setInt32"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setInt32"].apply__(this, args);
}}.setInt32
DataView.prototype.setInt32.prototype !== undefined ? DataView.prototype.setInt32.prototype = wrappedFunctions["DataView.prototype.setInt32"].prototype : null;
Object.defineProperty(DataView.prototype.setInt32, "length", {value: wrappedFunctions["DataView.prototype.setInt32"].length});

wrappedFunctions["DataView.prototype.setUint8"] = DataView.prototype.setUint8;
DataView.prototype.setUint8 = { setUint8 () {
	log42["DataView.prototype.setUint8"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setUint8"].apply__(this, args);
}}.setUint8
DataView.prototype.setUint8.prototype !== undefined ? DataView.prototype.setUint8.prototype = wrappedFunctions["DataView.prototype.setUint8"].prototype : null;
Object.defineProperty(DataView.prototype.setUint8, "length", {value: wrappedFunctions["DataView.prototype.setUint8"].length});

wrappedFunctions["DataView.prototype.setUint16"] = DataView.prototype.setUint16;
DataView.prototype.setUint16 = { setUint16 () {
	log42["DataView.prototype.setUint16"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setUint16"].apply__(this, args);
}}.setUint16
DataView.prototype.setUint16.prototype !== undefined ? DataView.prototype.setUint16.prototype = wrappedFunctions["DataView.prototype.setUint16"].prototype : null;
Object.defineProperty(DataView.prototype.setUint16, "length", {value: wrappedFunctions["DataView.prototype.setUint16"].length});

wrappedFunctions["DataView.prototype.setUint32"] = DataView.prototype.setUint32;
DataView.prototype.setUint32 = { setUint32 () {
	log42["DataView.prototype.setUint32"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["DataView.prototype.setUint32"].apply__(this, args);
}}.setUint32
DataView.prototype.setUint32.prototype !== undefined ? DataView.prototype.setUint32.prototype = wrappedFunctions["DataView.prototype.setUint32"].prototype : null;
Object.defineProperty(DataView.prototype.setUint32, "length", {value: wrappedFunctions["DataView.prototype.setUint32"].length});

wrappedFunctions["WeakRef.prototype.deref"] = WeakRef.prototype.deref;
WeakRef.prototype.deref = { deref () {
	log42["WeakRef.prototype.deref"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["WeakRef.prototype.deref"].apply__(this, args);
}}.deref
WeakRef.prototype.deref.prototype !== undefined ? WeakRef.prototype.deref.prototype = wrappedFunctions["WeakRef.prototype.deref"].prototype : null;
Object.defineProperty(WeakRef.prototype.deref, "length", {value: wrappedFunctions["WeakRef.prototype.deref"].length});

wrappedFunctions["FinalizationRegistry.prototype.register"] = FinalizationRegistry.prototype.register;
FinalizationRegistry.prototype.register = { register () {
	log42["FinalizationRegistry.prototype.register"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["FinalizationRegistry.prototype.register"].apply__(this, args);
}}.register
FinalizationRegistry.prototype.register.prototype !== undefined ? FinalizationRegistry.prototype.register.prototype = wrappedFunctions["FinalizationRegistry.prototype.register"].prototype : null;
Object.defineProperty(FinalizationRegistry.prototype.register, "length", {value: wrappedFunctions["FinalizationRegistry.prototype.register"].length});

wrappedFunctions["FinalizationRegistry.prototype.unregister"] = FinalizationRegistry.prototype.unregister;
FinalizationRegistry.prototype.unregister = { unregister () {
	log42["FinalizationRegistry.prototype.unregister"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["FinalizationRegistry.prototype.unregister"].apply__(this, args);
}}.unregister
FinalizationRegistry.prototype.unregister.prototype !== undefined ? FinalizationRegistry.prototype.unregister.prototype = wrappedFunctions["FinalizationRegistry.prototype.unregister"].prototype : null;
Object.defineProperty(FinalizationRegistry.prototype.unregister, "length", {value: wrappedFunctions["FinalizationRegistry.prototype.unregister"].length});

wrappedFunctions["Promise.prototype.catch"] = Promise.prototype.catch;
Promise.prototype.catch = { catch () {
	log42["Promise.prototype.catch"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Promise.prototype.catch"].apply__(this, args);
}}.catch
Promise.prototype.catch.prototype !== undefined ? Promise.prototype.catch.prototype = wrappedFunctions["Promise.prototype.catch"].prototype : null;
Object.defineProperty(Promise.prototype.catch, "length", {value: wrappedFunctions["Promise.prototype.catch"].length});

wrappedFunctions["Promise.prototype.finally"] = Promise.prototype.finally;
Promise.prototype.finally = { finally () {
	log42["Promise.prototype.finally"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Promise.prototype.finally"].apply__(this, args);
}}.finally
Promise.prototype.finally.prototype !== undefined ? Promise.prototype.finally.prototype = wrappedFunctions["Promise.prototype.finally"].prototype : null;
Object.defineProperty(Promise.prototype.finally, "length", {value: wrappedFunctions["Promise.prototype.finally"].length});

wrappedFunctions["Promise.prototype.then"] = Promise.prototype.then;
Promise.prototype.then = { then () {
	log42["Promise.prototype.then"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Promise.prototype.then"].apply__(this, args);
}}.then
Promise.prototype.then.prototype !== undefined ? Promise.prototype.then.prototype = wrappedFunctions["Promise.prototype.then"].prototype : null;
Object.defineProperty(Promise.prototype.then, "length", {value: wrappedFunctions["Promise.prototype.then"].length});

wrappedFunctions["Object.prototype.__defineGetter__"] = Object.prototype.__defineGetter__;
Object.prototype.__defineGetter__ = { __defineGetter__ () {
	log42["Object.prototype.__defineGetter__"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.__defineGetter__"].apply__(this, args);
}}.__defineGetter__
Object.prototype.__defineGetter__.prototype !== undefined ? Object.prototype.__defineGetter__.prototype = wrappedFunctions["Object.prototype.__defineGetter__"].prototype : null;
Object.defineProperty(Object.prototype.__defineGetter__, "length", {value: wrappedFunctions["Object.prototype.__defineGetter__"].length});

wrappedFunctions["Object.prototype.__defineSetter__"] = Object.prototype.__defineSetter__;
Object.prototype.__defineSetter__ = { __defineSetter__ () {
	log42["Object.prototype.__defineSetter__"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.__defineSetter__"].apply__(this, args);
}}.__defineSetter__
Object.prototype.__defineSetter__.prototype !== undefined ? Object.prototype.__defineSetter__.prototype = wrappedFunctions["Object.prototype.__defineSetter__"].prototype : null;
Object.defineProperty(Object.prototype.__defineSetter__, "length", {value: wrappedFunctions["Object.prototype.__defineSetter__"].length});

wrappedFunctions["Object.prototype.__lookupGetter__"] = Object.prototype.__lookupGetter__;
Object.prototype.__lookupGetter__ = { __lookupGetter__ () {
	log42["Object.prototype.__lookupGetter__"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.__lookupGetter__"].apply__(this, args);
}}.__lookupGetter__
Object.prototype.__lookupGetter__.prototype !== undefined ? Object.prototype.__lookupGetter__.prototype = wrappedFunctions["Object.prototype.__lookupGetter__"].prototype : null;
Object.defineProperty(Object.prototype.__lookupGetter__, "length", {value: wrappedFunctions["Object.prototype.__lookupGetter__"].length});

wrappedFunctions["Object.prototype.__lookupSetter__"] = Object.prototype.__lookupSetter__;
Object.prototype.__lookupSetter__ = { __lookupSetter__ () {
	log42["Object.prototype.__lookupSetter__"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Object.prototype.__lookupSetter__"].apply__(this, args);
}}.__lookupSetter__
Object.prototype.__lookupSetter__.prototype !== undefined ? Object.prototype.__lookupSetter__.prototype = wrappedFunctions["Object.prototype.__lookupSetter__"].prototype : null;
Object.defineProperty(Object.prototype.__lookupSetter__, "length", {value: wrappedFunctions["Object.prototype.__lookupSetter__"].length});

wrappedFunctions["String.prototype.substr"] = String.prototype.substr;
String.prototype.substr = { substr () {
	log42["String.prototype.substr"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.substr"].apply__(this, args);
}}.substr
String.prototype.substr.prototype !== undefined ? String.prototype.substr.prototype = wrappedFunctions["String.prototype.substr"].prototype : null;
Object.defineProperty(String.prototype.substr, "length", {value: wrappedFunctions["String.prototype.substr"].length});

wrappedFunctions["String.prototype.anchor"] = String.prototype.anchor;
String.prototype.anchor = { anchor () {
	log42["String.prototype.anchor"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.anchor"].apply__(this, args);
}}.anchor
String.prototype.anchor.prototype !== undefined ? String.prototype.anchor.prototype = wrappedFunctions["String.prototype.anchor"].prototype : null;
Object.defineProperty(String.prototype.anchor, "length", {value: wrappedFunctions["String.prototype.anchor"].length});

wrappedFunctions["String.prototype.big"] = String.prototype.big;
String.prototype.big = { big () {
	log42["String.prototype.big"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.big"].apply__(this, args);
}}.big
String.prototype.big.prototype !== undefined ? String.prototype.big.prototype = wrappedFunctions["String.prototype.big"].prototype : null;
Object.defineProperty(String.prototype.big, "length", {value: wrappedFunctions["String.prototype.big"].length});

wrappedFunctions["String.prototype.blink"] = String.prototype.blink;
String.prototype.blink = { blink () {
	log42["String.prototype.blink"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.blink"].apply__(this, args);
}}.blink
String.prototype.blink.prototype !== undefined ? String.prototype.blink.prototype = wrappedFunctions["String.prototype.blink"].prototype : null;
Object.defineProperty(String.prototype.blink, "length", {value: wrappedFunctions["String.prototype.blink"].length});

wrappedFunctions["String.prototype.bold"] = String.prototype.bold;
String.prototype.bold = { bold () {
	log42["String.prototype.bold"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.bold"].apply__(this, args);
}}.bold
String.prototype.bold.prototype !== undefined ? String.prototype.bold.prototype = wrappedFunctions["String.prototype.bold"].prototype : null;
Object.defineProperty(String.prototype.bold, "length", {value: wrappedFunctions["String.prototype.bold"].length});

wrappedFunctions["String.prototype.fixed"] = String.prototype.fixed;
String.prototype.fixed = { fixed () {
	log42["String.prototype.fixed"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.fixed"].apply__(this, args);
}}.fixed
String.prototype.fixed.prototype !== undefined ? String.prototype.fixed.prototype = wrappedFunctions["String.prototype.fixed"].prototype : null;
Object.defineProperty(String.prototype.fixed, "length", {value: wrappedFunctions["String.prototype.fixed"].length});

wrappedFunctions["String.prototype.fontcolor"] = String.prototype.fontcolor;
String.prototype.fontcolor = { fontcolor () {
	log42["String.prototype.fontcolor"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.fontcolor"].apply__(this, args);
}}.fontcolor
String.prototype.fontcolor.prototype !== undefined ? String.prototype.fontcolor.prototype = wrappedFunctions["String.prototype.fontcolor"].prototype : null;
Object.defineProperty(String.prototype.fontcolor, "length", {value: wrappedFunctions["String.prototype.fontcolor"].length});

wrappedFunctions["String.prototype.fontsize"] = String.prototype.fontsize;
String.prototype.fontsize = { fontsize () {
	log42["String.prototype.fontsize"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.fontsize"].apply__(this, args);
}}.fontsize
String.prototype.fontsize.prototype !== undefined ? String.prototype.fontsize.prototype = wrappedFunctions["String.prototype.fontsize"].prototype : null;
Object.defineProperty(String.prototype.fontsize, "length", {value: wrappedFunctions["String.prototype.fontsize"].length});

wrappedFunctions["String.prototype.italics"] = String.prototype.italics;
String.prototype.italics = { italics () {
	log42["String.prototype.italics"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.italics"].apply__(this, args);
}}.italics
String.prototype.italics.prototype !== undefined ? String.prototype.italics.prototype = wrappedFunctions["String.prototype.italics"].prototype : null;
Object.defineProperty(String.prototype.italics, "length", {value: wrappedFunctions["String.prototype.italics"].length});

wrappedFunctions["String.prototype.link"] = String.prototype.link;
String.prototype.link = { link () {
	log42["String.prototype.link"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.link"].apply__(this, args);
}}.link
String.prototype.link.prototype !== undefined ? String.prototype.link.prototype = wrappedFunctions["String.prototype.link"].prototype : null;
Object.defineProperty(String.prototype.link, "length", {value: wrappedFunctions["String.prototype.link"].length});

wrappedFunctions["String.prototype.small"] = String.prototype.small;
String.prototype.small = { small () {
	log42["String.prototype.small"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.small"].apply__(this, args);
}}.small
String.prototype.small.prototype !== undefined ? String.prototype.small.prototype = wrappedFunctions["String.prototype.small"].prototype : null;
Object.defineProperty(String.prototype.small, "length", {value: wrappedFunctions["String.prototype.small"].length});

wrappedFunctions["String.prototype.strike"] = String.prototype.strike;
String.prototype.strike = { strike () {
	log42["String.prototype.strike"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.strike"].apply__(this, args);
}}.strike
String.prototype.strike.prototype !== undefined ? String.prototype.strike.prototype = wrappedFunctions["String.prototype.strike"].prototype : null;
Object.defineProperty(String.prototype.strike, "length", {value: wrappedFunctions["String.prototype.strike"].length});

wrappedFunctions["String.prototype.sub"] = String.prototype.sub;
String.prototype.sub = { sub () {
	log42["String.prototype.sub"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.sub"].apply__(this, args);
}}.sub
String.prototype.sub.prototype !== undefined ? String.prototype.sub.prototype = wrappedFunctions["String.prototype.sub"].prototype : null;
Object.defineProperty(String.prototype.sub, "length", {value: wrappedFunctions["String.prototype.sub"].length});

wrappedFunctions["String.prototype.sup"] = String.prototype.sup;
String.prototype.sup = { sup () {
	log42["String.prototype.sup"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.sup"].apply__(this, args);
}}.sup
String.prototype.sup.prototype !== undefined ? String.prototype.sup.prototype = wrappedFunctions["String.prototype.sup"].prototype : null;
Object.defineProperty(String.prototype.sup, "length", {value: wrappedFunctions["String.prototype.sup"].length});

wrappedFunctions["String.prototype.trimLeft"] = String.prototype.trimLeft;
String.prototype.trimLeft = { trimLeft () {
	log42["String.prototype.trimLeft"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.trimLeft"].apply__(this, args);
}}.trimLeft
String.prototype.trimLeft.prototype !== undefined ? String.prototype.trimLeft.prototype = wrappedFunctions["String.prototype.trimLeft"].prototype : null;
Object.defineProperty(String.prototype.trimLeft, "length", {value: wrappedFunctions["String.prototype.trimLeft"].length});

wrappedFunctions["String.prototype.trimRight"] = String.prototype.trimRight;
String.prototype.trimRight = { trimRight () {
	log42["String.prototype.trimRight"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["String.prototype.trimRight"].apply__(this, args);
}}.trimRight
String.prototype.trimRight.prototype !== undefined ? String.prototype.trimRight.prototype = wrappedFunctions["String.prototype.trimRight"].prototype : null;
Object.defineProperty(String.prototype.trimRight, "length", {value: wrappedFunctions["String.prototype.trimRight"].length});

wrappedFunctions["Date.prototype.getYear"] = Date.prototype.getYear;
Date.prototype.getYear = { getYear () {
	log42["Date.prototype.getYear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.getYear"].apply__(this, args);
}}.getYear
Date.prototype.getYear.prototype !== undefined ? Date.prototype.getYear.prototype = wrappedFunctions["Date.prototype.getYear"].prototype : null;
Object.defineProperty(Date.prototype.getYear, "length", {value: wrappedFunctions["Date.prototype.getYear"].length});

wrappedFunctions["Date.prototype.setYear"] = Date.prototype.setYear;
Date.prototype.setYear = { setYear () {
	log42["Date.prototype.setYear"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.setYear"].apply__(this, args);
}}.setYear
Date.prototype.setYear.prototype !== undefined ? Date.prototype.setYear.prototype = wrappedFunctions["Date.prototype.setYear"].prototype : null;
Object.defineProperty(Date.prototype.setYear, "length", {value: wrappedFunctions["Date.prototype.setYear"].length});

wrappedFunctions["Date.prototype.toGMTString"] = Date.prototype.toGMTString;
Date.prototype.toGMTString = { toGMTString () {
	log42["Date.prototype.toGMTString"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["Date.prototype.toGMTString"].apply__(this, args);
}}.toGMTString
Date.prototype.toGMTString.prototype !== undefined ? Date.prototype.toGMTString.prototype = wrappedFunctions["Date.prototype.toGMTString"].prototype : null;
Object.defineProperty(Date.prototype.toGMTString, "length", {value: wrappedFunctions["Date.prototype.toGMTString"].length});

wrappedFunctions["RegExp.prototype.compile"] = RegExp.prototype.compile;
RegExp.prototype.compile = { compile () {
	log42["RegExp.prototype.compile"] = true;
	let args = copyArgs(arguments);
	return wrappedFunctions["RegExp.prototype.compile"].apply__(this, args);
}}.compile
RegExp.prototype.compile.prototype !== undefined ? RegExp.prototype.compile.prototype = wrappedFunctions["RegExp.prototype.compile"].prototype : null;
Object.defineProperty(RegExp.prototype.compile, "length", {value: wrappedFunctions["RegExp.prototype.compile"].length});
