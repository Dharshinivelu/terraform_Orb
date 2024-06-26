/**
 * angular-calendar - A calendar component for angular 4.0+ that can display events on a month, week or day view
 * @version v0.21.0
 * @author Matt Lewis
 * @link https://github.com/mattlewis92/angular-calendar#readme
 * @license MIT
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("rxjs/Subject"), require("calendar-utils"), require("date-fns/add_days/index"), require("date-fns/get_iso_week/index"), require("@angular/common"), require("angular-resizable-element"), require("angular-draggable-droppable"), require("date-fns/add_minutes/index"), require("date-fns/is_same_day/index"), require("date-fns/set_date/index"), require("date-fns/set_month/index"), require("date-fns/set_year/index"), require("date-fns/get_date/index"), require("date-fns/get_month/index"), require("date-fns/get_year/index"), require("date-fns/difference_in_seconds/index"), require("date-fns/add_seconds/index"), require("@angular/animations"), require("@angular/platform-browser"), require("date-fns/sub_days/index"), require("date-fns/sub_weeks/index"), require("date-fns/sub_months/index"), require("date-fns/add_weeks/index"), require("date-fns/add_months/index"), require("date-fns/start_of_today/index"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "rxjs/Subject", "calendar-utils", "date-fns/add_days/index", "date-fns/get_iso_week/index", "@angular/common", "angular-resizable-element", "angular-draggable-droppable", "date-fns/add_minutes/index", "date-fns/is_same_day/index", "date-fns/set_date/index", "date-fns/set_month/index", "date-fns/set_year/index", "date-fns/get_date/index", "date-fns/get_month/index", "date-fns/get_year/index", "date-fns/difference_in_seconds/index", "date-fns/add_seconds/index", "@angular/animations", "@angular/platform-browser", "date-fns/sub_days/index", "date-fns/sub_weeks/index", "date-fns/sub_months/index", "date-fns/add_weeks/index", "date-fns/add_months/index", "date-fns/start_of_today/index"], factory);
	else if(typeof exports === 'object')
		exports["angularCalendar"] = factory(require("@angular/core"), require("rxjs/Subject"), require("calendar-utils"), require("date-fns/add_days/index"), require("date-fns/get_iso_week/index"), require("@angular/common"), require("angular-resizable-element"), require("angular-draggable-droppable"), require("date-fns/add_minutes/index"), require("date-fns/is_same_day/index"), require("date-fns/set_date/index"), require("date-fns/set_month/index"), require("date-fns/set_year/index"), require("date-fns/get_date/index"), require("date-fns/get_month/index"), require("date-fns/get_year/index"), require("date-fns/difference_in_seconds/index"), require("date-fns/add_seconds/index"), require("@angular/animations"), require("@angular/platform-browser"), require("date-fns/sub_days/index"), require("date-fns/sub_weeks/index"), require("date-fns/sub_months/index"), require("date-fns/add_weeks/index"), require("date-fns/add_months/index"), require("date-fns/start_of_today/index"));
	else
		root["angularCalendar"] = factory(root["ng"]["core"], root["Rx"], root["calendarUtils"], root["dateFns"]["addDays"], root["dateFns"]["getIsoWeek"], root["ng"]["common"], root["angularResizableElement"], root["angularDraggableDroppable"], root["dateFns"]["addMinutes"], root["dateFns"]["isSameDay"], root["dateFns"]["setDate"], root["dateFns"]["setMonth"], root["dateFns"]["setYear"], root["dateFns"]["getDate"], root["dateFns"]["getMonth"], root["dateFns"]["getYear"], root["dateFns"]["differenceInSeconds"], root["dateFns"]["addSeconds"], root["ng"]["animations"], root["ng"]["platformBrowser"], root["dateFns"]["subDays"], root["dateFns"]["subWeeks"], root["dateFns"]["subMonths"], root["dateFns"]["addWeeks"], root["dateFns"]["addMonths"], root["dateFns"]["startOfToday"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_0__, __WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__, __WEBPACK_EXTERNAL_MODULE_25__, __WEBPACK_EXTERNAL_MODULE_26__, __WEBPACK_EXTERNAL_MODULE_27__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_0__;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });

// EXTERNAL MODULE: ./scss/angular-calendar.scss
var angular_calendar = __webpack_require__(5);
var angular_calendar_default = /*#__PURE__*/__webpack_require__.n(angular_calendar);

// CONCATENATED MODULE: ./src/providers/calendarEventTitleFormatter.provider.ts
/**
 * This class is responsible for displaying all event titles within the calendar. You may override any of its methods via angulars DI to suit your requirements. For example:
 *
 * ```typescript
 * import { CalendarEventTitleFormatter, CalendarEvent } from 'angular-calendar';
 *
 * class CustomEventTitleFormatter extends CalendarEventTitleFormatter {
 *
 *   month(event: CalendarEvent): string {
 *     return `Custom prefix: ${event.title}`;
 *   }
 *
 * }
 *
 * // in your component
 * providers: [{
 *  provide: CalendarEventTitleFormatter,
 *  useClass: CustomEventTitleFormatter
 * }]
 * ```
 */
var CalendarEventTitleFormatter = (function () {
    function CalendarEventTitleFormatter() {
    }
    /**
     * The month view event title.
     */
    CalendarEventTitleFormatter.prototype.month = function (event) {
        return event.title;
    };
    /**
     * The month view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.monthTooltip = function (event) {
        return event.title;
    };
    /**
     * The week view event title.
     */
    CalendarEventTitleFormatter.prototype.week = function (event) {
        return event.title;
    };
    /**
     * The week view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.weekTooltip = function (event) {
        return event.title;
    };
    /**
     * The day view event title.
     */
    CalendarEventTitleFormatter.prototype.day = function (event) {
        return event.title;
    };
    /**
     * The day view event tooltip. Return a falsey value from this to disable the tooltip.
     */
    CalendarEventTitleFormatter.prototype.dayTooltip = function (event) {
        return event.title;
    };
    return CalendarEventTitleFormatter;
}());


// EXTERNAL MODULE: external {"root":["ng","core"],"commonjs":"@angular/core","commonjs2":"@angular/core","amd":"@angular/core"}
var core__ = __webpack_require__(0);
var core___default = /*#__PURE__*/__webpack_require__.n(core__);

// CONCATENATED MODULE: ./src/providers/calendarMomentDateFormatter.provider.ts
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};

var MOMENT = new core__["InjectionToken"]('Moment');
/**
 * This will use <a href="http://momentjs.com/" target="_blank">moment</a> to do all date formatting. To use this class:
 *
 * ```typescript
 * import { CalendarDateFormatter, CalendarMomentDateFormatter, MOMENT } from 'angular-calendar';
 * import * as moment from 'moment';
 *
 * // in your component
 * provide: [{
 *   provide: MOMENT, useValue: moment
 * }, {
 *   provide: CalendarDateFormatter, useClass: CalendarMomentDateFormatter
 * }]
 *
 * ```
 */
var calendarMomentDateFormatter_provider_CalendarMomentDateFormatter = (function () {
    /**
     * @hidden
     */
    function CalendarMomentDateFormatter(moment) {
        this.moment = moment;
    }
    /**
     * The month view header week day labels
     */
    CalendarMomentDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The month view cell day number
     */
    CalendarMomentDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D');
    };
    /**
     * The month view title
     */
    CalendarMomentDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('MMMM YYYY');
    };
    /**
     * The week view header week day labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd');
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarMomentDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('D MMM');
    };
    /**
     * The week view title
     */
    CalendarMomentDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('[Week] W [of] YYYY');
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarMomentDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('ha');
    };
    /**
     * The day view title
     */
    CalendarMomentDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return this.moment(date)
            .locale(locale)
            .format('dddd, D MMMM, YYYY');
    };
    CalendarMomentDateFormatter = __decorate([
        __param(0, Object(core__["Inject"])(MOMENT)),
        __metadata("design:paramtypes", [Object])
    ], CalendarMomentDateFormatter);
    return CalendarMomentDateFormatter;
}());


// EXTERNAL MODULE: external {"root":["dateFns","getIsoWeek"],"commonjs":"date-fns/get_iso_week/index","commonjs2":"date-fns/get_iso_week/index","amd":"date-fns/get_iso_week/index"}
var index__ = __webpack_require__(6);
var index___default = /*#__PURE__*/__webpack_require__.n(index__);

// CONCATENATED MODULE: ./src/providers/calendarNativeDateFormatter.provider.ts

/**
 * This will use <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to do all date formatting. It is the default date formatter used by the calendar.
 *
 * You will need to include a <a href="https://github.com/andyearnshaw/Intl.js/">polyfill</a> for older browsers.
 */
var calendarNativeDateFormatter_provider_CalendarNativeDateFormatter = (function () {
    function CalendarNativeDateFormatter() {
    }
    /**
     * The month view header week day labels
     */
    CalendarNativeDateFormatter.prototype.monthViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The month view cell day number
     */
    CalendarNativeDateFormatter.prototype.monthViewDayNumber = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { day: 'numeric' }).format(date);
    };
    /**
     * The month view title
     */
    CalendarNativeDateFormatter.prototype.monthViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            year: 'numeric',
            month: 'long'
        }).format(date);
    };
    /**
     * The week view header week day labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(date);
    };
    /**
     * The week view sub header day and month labels
     */
    CalendarNativeDateFormatter.prototype.weekViewColumnSubHeader = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'short'
        }).format(date);
    };
    /**
     * The week view title
     */
    CalendarNativeDateFormatter.prototype.weekViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        var year = new Intl.DateTimeFormat(locale, {
            year: 'numeric'
        }).format(date);
        var weekNumber = index___default()(date);
        return "Week " + weekNumber + " of " + year;
    };
    /**
     * The time formatting down the left hand side of the day view
     */
    CalendarNativeDateFormatter.prototype.dayViewHour = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, { hour: 'numeric' }).format(date);
    };
    /**
     * The day view title
     */
    CalendarNativeDateFormatter.prototype.dayViewTitle = function (_a) {
        var date = _a.date, locale = _a.locale;
        return new Intl.DateTimeFormat(locale, {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
            weekday: 'long'
        }).format(date);
    };
    return CalendarNativeDateFormatter;
}());


// CONCATENATED MODULE: ./src/providers/calendarDateFormatter.provider.ts
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

/**
 * This class is responsible for all formatting of dates. There are 2 implementations available, the `CalendarNativeDateFormatter` (default) which will use the <a href="https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Intl" target="_blank">Intl</a> API to format dates, or there is the `CalendarMomentDateFormatter` which uses <a href="http://momentjs.com/" target="_blank">moment</a>.
 *
 * If you wish, you may override any of the defaults via angulars DI. For example:
 *
 * ```typescript
 * import { CalendarDateFormatter, DateFormatterParams } from 'angular-calendar';
 *
 * class CustomDateFormatter extends CalendarDateFormatter {
 *
 *   public monthViewColumnHeader({date, locale}: DateFormatterParams): string {
 *     return new Intl.DateTimeFormat(locale, {weekday: 'short'}).format(date); // use short week days
 *   }
 *
 * }
 *
 * // in your component that uses the calendar
 * providers: [{
 *   provide: CalendarDateFormatter,
 *   useClass: CustomDateFormatter
 * }]
 * ```
 */
var CalendarDateFormatter = (function (_super) {
    __extends(CalendarDateFormatter, _super);
    function CalendarDateFormatter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return CalendarDateFormatter;
}(calendarNativeDateFormatter_provider_CalendarNativeDateFormatter));


// EXTERNAL MODULE: external {"root":["calendarUtils"],"commonjs":"calendar-utils","commonjs2":"calendar-utils","amd":"calendar-utils"}
var external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__ = __webpack_require__(2);
var external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils___default = /*#__PURE__*/__webpack_require__.n(external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__);

// CONCATENATED MODULE: ./src/providers/calendarUtils.provider.ts
var calendarUtils_provider___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var calendarUtils_provider_CalendarUtils = (function () {
    function CalendarUtils() {
    }
    CalendarUtils.prototype.getMonthView = function (args) {
        return Object(external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__["getMonthView"])(args);
    };
    CalendarUtils.prototype.getWeekViewHeader = function (args) {
        return Object(external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__["getWeekViewHeader"])(args);
    };
    CalendarUtils.prototype.getWeekView = function (args) {
        return Object(external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__["getWeekView"])(args);
    };
    CalendarUtils.prototype.getDayView = function (args) {
        return Object(external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__["getDayView"])(args);
    };
    CalendarUtils.prototype.getDayViewHourGrid = function (args) {
        return Object(external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__["getDayViewHourGrid"])(args);
    };
    CalendarUtils = calendarUtils_provider___decorate([
        Object(core__["Injectable"])()
    ], CalendarUtils);
    return CalendarUtils;
}());


// EXTERNAL MODULE: external {"root":["ng","common"],"commonjs":"@angular/common","commonjs2":"@angular/common","amd":"@angular/common"}
var common__ = __webpack_require__(7);
var common___default = /*#__PURE__*/__webpack_require__.n(common__);

// EXTERNAL MODULE: external {"root":"angularResizableElement","commonjs":"angular-resizable-element","commonjs2":"angular-resizable-element","amd":"angular-resizable-element"}
var external___root___angularResizableElement___commonjs___angular_resizable_element___commonjs2___angular_resizable_element___amd___angular_resizable_element__ = __webpack_require__(8);
var external___root___angularResizableElement___commonjs___angular_resizable_element___commonjs2___angular_resizable_element___amd___angular_resizable_element___default = /*#__PURE__*/__webpack_require__.n(external___root___angularResizableElement___commonjs___angular_resizable_element___commonjs2___angular_resizable_element___amd___angular_resizable_element__);

// EXTERNAL MODULE: external {"root":"angularDraggableDroppable","commonjs":"angular-draggable-droppable","commonjs2":"angular-draggable-droppable","amd":"angular-draggable-droppable"}
var external___root___angularDraggableDroppable___commonjs___angular_draggable_droppable___commonjs2___angular_draggable_droppable___amd___angular_draggable_droppable__ = __webpack_require__(9);
var external___root___angularDraggableDroppable___commonjs___angular_draggable_droppable___commonjs2___angular_draggable_droppable___amd___angular_draggable_droppable___default = /*#__PURE__*/__webpack_require__.n(external___root___angularDraggableDroppable___commonjs___angular_draggable_droppable___commonjs2___angular_draggable_droppable___amd___angular_draggable_droppable__);

// EXTERNAL MODULE: external {"root":"Rx","commonjs":"rxjs/Subject","commonjs2":"rxjs/Subject","amd":"rxjs/Subject"}
var Subject__ = __webpack_require__(1);
var Subject___default = /*#__PURE__*/__webpack_require__.n(Subject__);

// EXTERNAL MODULE: external {"root":["dateFns","addMinutes"],"commonjs":"date-fns/add_minutes/index","commonjs2":"date-fns/add_minutes/index","amd":"date-fns/add_minutes/index"}
var add_minutes_index__ = __webpack_require__(10);
var add_minutes_index___default = /*#__PURE__*/__webpack_require__.n(add_minutes_index__);

// CONCATENATED MODULE: ./src/providers/util.ts
function isInside(outer, inner) {
    return (outer.left <= inner.left &&
        inner.left <= outer.right &&
        outer.left <= inner.right &&
        inner.right <= outer.right &&
        outer.top <= inner.top &&
        inner.top <= outer.bottom &&
        outer.top <= inner.bottom &&
        inner.bottom <= outer.bottom);
}

// CONCATENATED MODULE: ./src/providers/calendarDragHelper.provider.ts

var calendarDragHelper_provider_CalendarDragHelper = (function () {
    function CalendarDragHelper(dragContainerElement, draggableElement) {
        this.dragContainerElement = dragContainerElement;
        this.startPosition = draggableElement.getBoundingClientRect();
    }
    CalendarDragHelper.prototype.validateDrag = function (_a) {
        var x = _a.x, y = _a.y;
        var newRect = Object.assign({}, this.startPosition, {
            left: this.startPosition.left + x,
            right: this.startPosition.right + x,
            top: this.startPosition.top + y,
            bottom: this.startPosition.bottom + y
        });
        return isInside(this.dragContainerElement.getBoundingClientRect(), newRect);
    };
    return CalendarDragHelper;
}());


// CONCATENATED MODULE: ./src/providers/calendarResizeHelper.provider.ts

var calendarResizeHelper_provider_CalendarResizeHelper = (function () {
    function CalendarResizeHelper(resizeContainerElement, minWidth) {
        this.resizeContainerElement = resizeContainerElement;
        this.minWidth = minWidth;
    }
    CalendarResizeHelper.prototype.validateResize = function (_a) {
        var rectangle = _a.rectangle;
        if (this.minWidth && rectangle.width < this.minWidth) {
            return false;
        }
        return isInside(this.resizeContainerElement.getBoundingClientRect(), rectangle);
    };
    return CalendarResizeHelper;
}());


// CONCATENATED MODULE: ./src/components/day/calendarDayView.component.ts
var calendarDayView_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarDayView_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var calendarDayView_component___param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * @hidden
 */
var SEGMENT_HEIGHT = 30;
/**
 * @hidden
 */
var MINUTES_IN_HOUR = 60;
/**
 * Shows all events on a given day. Example usage:
 *
 * ```typescript
 * <mwl-calendar-day-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-day-view>
 * ```
 */
var calendarDayView_component_CalendarDayViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarDayViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * The number of segments in an hour. Must be <= 6
         */
        this.hourSegments = 2;
        /**
         * The day start hours in 24 hour time. Must be 0-23
         */
        this.dayStartHour = 0;
        /**
         * The day start minutes. Must be 0-59
         */
        this.dayStartMinute = 0;
        /**
         * The day end hours in 24 hour time. Must be 0-23
         */
        this.dayEndHour = 23;
        /**
         * The day end minutes. Must be 0-59
         */
        this.dayEndMinute = 59;
        /**
         * The width in pixels of each event on the view
         */
        this.eventWidth = 150;
        /**
         * The grid size to snap resizing and dragging of events to
         */
        this.eventSnapSize = 30;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * Called when an event title is clicked
         */
        this.eventClicked = new core__["EventEmitter"]();
        /**
         * Called when an hour segment is clicked
         */
        this.hourSegmentClicked = new core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current day.
         * If you add the `cssClass` property to a segment it will add that class to the hour segment in the template
         */
        this.beforeViewRender = new core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.hours = [];
        /**
         * @hidden
         */
        this.width = 0;
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarDayViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute) {
            this.refreshHourGrid();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.dayStartHour ||
            changes.dayStartMinute ||
            changes.dayEndHour ||
            changes.dayEndMinute ||
            changes.eventWidth) {
            this.refreshView();
        }
    };
    CalendarDayViewComponent.prototype.eventDropped = function (dropEvent, segment) {
        if (dropEvent.dropData && dropEvent.dropData.event) {
            this.eventTimesChanged.emit({
                event: dropEvent.dropData.event,
                newStart: segment.date
            });
        }
    };
    CalendarDayViewComponent.prototype.resizeStarted = function (event, resizeEvent, dayViewContainer) {
        this.currentResizes.set(event, {
            originalTop: event.top,
            originalHeight: event.height,
            edge: typeof resizeEvent.edges.top !== 'undefined' ? 'top' : 'bottom'
        });
        var resizeHelper = new calendarResizeHelper_provider_CalendarResizeHelper(dayViewContainer);
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.resizing = function (event, resizeEvent) {
        var currentResize = this.currentResizes.get(event);
        if (resizeEvent.edges.top) {
            event.top = currentResize.originalTop + +resizeEvent.edges.top;
            event.height = currentResize.originalHeight - +resizeEvent.edges.top;
        }
        else if (resizeEvent.edges.bottom) {
            event.height = currentResize.originalHeight + +resizeEvent.edges.bottom;
        }
    };
    CalendarDayViewComponent.prototype.resizeEnded = function (dayEvent) {
        var currentResize = this.currentResizes.get(dayEvent);
        var pixelsMoved;
        if (currentResize.edge === 'top') {
            pixelsMoved = dayEvent.top - currentResize.originalTop;
        }
        else {
            pixelsMoved = dayEvent.height - currentResize.originalHeight;
        }
        dayEvent.top = currentResize.originalTop;
        dayEvent.height = currentResize.originalHeight;
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = pixelsMoved * pixelAmountInMinutes;
        var newStart = dayEvent.event.start;
        var newEnd = dayEvent.event.end;
        if (currentResize.edge === 'top') {
            newStart = add_minutes_index___default()(newStart, minutesMoved);
        }
        else if (newEnd) {
            newEnd = add_minutes_index___default()(newEnd, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
        this.currentResizes.delete(dayEvent);
    };
    CalendarDayViewComponent.prototype.dragStart = function (event, dayViewContainer) {
        var _this = this;
        var dragHelper = new calendarDragHelper_provider_CalendarDragHelper(dayViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarDayViewComponent.prototype.eventDragged = function (dayEvent, draggedInPixels) {
        var pixelAmountInMinutes = MINUTES_IN_HOUR / (this.hourSegments * SEGMENT_HEIGHT);
        var minutesMoved = draggedInPixels * pixelAmountInMinutes;
        var newStart = add_minutes_index___default()(dayEvent.event.start, minutesMoved);
        var newEnd;
        if (dayEvent.event.end) {
            newEnd = add_minutes_index___default()(dayEvent.event.end, minutesMoved);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: dayEvent.event });
    };
    CalendarDayViewComponent.prototype.refreshHourGrid = function () {
        this.hours = this.utils.getDayViewHourGrid({
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            }
        });
        this.beforeViewRender.emit({
            body: this.hours
        });
    };
    CalendarDayViewComponent.prototype.refreshView = function () {
        this.view = this.utils.getDayView({
            events: this.events,
            viewDate: this.viewDate,
            hourSegments: this.hourSegments,
            dayStart: {
                hour: this.dayStartHour,
                minute: this.dayStartMinute
            },
            dayEnd: {
                hour: this.dayEndHour,
                minute: this.dayEndMinute
            },
            eventWidth: this.eventWidth,
            segmentHeight: SEGMENT_HEIGHT
        });
    };
    CalendarDayViewComponent.prototype.refreshAll = function () {
        this.refreshHourGrid();
        this.refreshView();
    };
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Date)
    ], CalendarDayViewComponent.prototype, "viewDate", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Array)
    ], CalendarDayViewComponent.prototype, "events", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "hourSegments", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartHour", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayStartMinute", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndHour", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "dayEndMinute", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "eventWidth", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Subject__["Subject"])
    ], CalendarDayViewComponent.prototype, "refresh", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", String)
    ], CalendarDayViewComponent.prototype, "locale", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Number)
    ], CalendarDayViewComponent.prototype, "eventSnapSize", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", String)
    ], CalendarDayViewComponent.prototype, "tooltipPlacement", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "tooltipTemplate", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", Boolean)
    ], CalendarDayViewComponent.prototype, "tooltipAppendToBody", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "hourSegmentTemplate", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "allDayEventTemplate", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "eventTemplate", void 0);
    calendarDayView_component___decorate([
        Object(core__["Input"])(),
        calendarDayView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewComponent.prototype, "eventTitleTemplate", void 0);
    calendarDayView_component___decorate([
        Object(core__["Output"])(),
        calendarDayView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarDayViewComponent.prototype, "eventClicked", void 0);
    calendarDayView_component___decorate([
        Object(core__["Output"])(),
        calendarDayView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarDayViewComponent.prototype, "hourSegmentClicked", void 0);
    calendarDayView_component___decorate([
        Object(core__["Output"])(),
        calendarDayView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarDayViewComponent.prototype, "eventTimesChanged", void 0);
    calendarDayView_component___decorate([
        Object(core__["Output"])(),
        calendarDayView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarDayViewComponent.prototype, "beforeViewRender", void 0);
    CalendarDayViewComponent = calendarDayView_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-day-view',
            template: "\n    <div class=\"cal-day-view\" #dayViewContainer>\n      <mwl-calendar-all-day-event\n        *ngFor=\"let event of view.allDayEvents\"\n        [event]=\"event\"\n        [customTemplate]=\"allDayEventTemplate\"\n        [eventTitleTemplate]=\"eventTitleTemplate\"\n        (eventClicked)=\"eventClicked.emit({event: event})\">\n      </mwl-calendar-all-day-event>\n      <div class=\"cal-hour-rows\">\n        <div class=\"cal-events\">\n          <div\n            #event\n            *ngFor=\"let dayEvent of view?.events\"\n            class=\"cal-event-container\"\n            [class.cal-draggable]=\"dayEvent.event.draggable\"\n            [class.cal-starts-within-day]=\"!dayEvent.startsBeforeDay\"\n            [class.cal-ends-within-day]=\"!dayEvent.endsAfterDay\"\n            [ngClass]=\"dayEvent.event.cssClass\"\n            mwlResizable\n            [resizeEdges]=\"{top: dayEvent.event?.resizable?.beforeStart, bottom: dayEvent.event?.resizable?.afterEnd}\"\n            [resizeSnapGrid]=\"{top: eventSnapSize, bottom: eventSnapSize}\"\n            [validateResize]=\"validateResize\"\n            (resizeStart)=\"resizeStarted(dayEvent, $event, dayViewContainer)\"\n            (resizing)=\"resizing(dayEvent, $event)\"\n            (resizeEnd)=\"resizeEnded(dayEvent)\"\n            mwlDraggable\n            [dragAxis]=\"{x: false, y: dayEvent.event.draggable && currentResizes.size === 0}\"\n            [dragSnapGrid]=\"{y: eventSnapSize}\"\n            [validateDrag]=\"validateDrag\"\n            (dragStart)=\"dragStart(event, dayViewContainer)\"\n            (dragEnd)=\"eventDragged(dayEvent, $event.y)\"\n            [style.marginTop.px]=\"dayEvent.top\"\n            [style.height.px]=\"dayEvent.height\"\n            [style.marginLeft.px]=\"dayEvent.left + 70\"\n            [style.width.px]=\"dayEvent.width - 1\">\n            <mwl-calendar-day-view-event\n              [dayEvent]=\"dayEvent\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [customTemplate]=\"eventTemplate\"\n              [eventTitleTemplate]=\"eventTitleTemplate\"\n              (eventClicked)=\"eventClicked.emit({event: dayEvent.event})\">\n            </mwl-calendar-day-view-event>\n          </div>\n        </div>\n        <div class=\"cal-hour\" *ngFor=\"let hour of hours\" [style.minWidth.px]=\"view?.width + 70\">\n          <mwl-calendar-day-view-hour-segment\n            *ngFor=\"let segment of hour.segments\"\n            [segment]=\"segment\"\n            [locale]=\"locale\"\n            [customTemplate]=\"hourSegmentTemplate\"\n            (mwlClick)=\"hourSegmentClicked.emit({date: segment.date})\"\n            [class.cal-drag-over]=\"segment.dragOver\"\n            mwlDroppable\n            (dragEnter)=\"segment.dragOver = true\"\n            (dragLeave)=\"segment.dragOver = false\"\n            (drop)=\"segment.dragOver = false; eventDropped($event, segment)\">\n          </mwl-calendar-day-view-hour-segment>\n        </div>\n      </div>\n    </div>\n  "
        }),
        calendarDayView_component___param(2, Object(core__["Inject"])(core__["LOCALE_ID"])),
        calendarDayView_component___metadata("design:paramtypes", [core__["ChangeDetectorRef"],
            calendarUtils_provider_CalendarUtils, String])
    ], CalendarDayViewComponent);
    return CalendarDayViewComponent;
}());


// EXTERNAL MODULE: external {"root":["dateFns","addDays"],"commonjs":"date-fns/add_days/index","commonjs2":"date-fns/add_days/index","amd":"date-fns/add_days/index"}
var add_days_index__ = __webpack_require__(3);
var add_days_index___default = /*#__PURE__*/__webpack_require__.n(add_days_index__);

// CONCATENATED MODULE: ./src/components/week/calendarWeekView.component.ts
var calendarWeekView_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarWeekView_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var calendarWeekView_component___param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






/**
 * Shows all events on a given week. Example usage:
 *
 * ```typescript
 * <mwl-calendar-week-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-week-view>
 * ```
 */
var calendarWeekView_component_CalendarWeekViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarWeekViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'bottom';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * The precision to display events.
         * `days` will round event start and end dates to the nearest day and `minutes` will not do this rounding
         */
        this.precision = 'days';
        /**
         * Called when a header week day is clicked. Adding a `cssClass` property on `$event.day` will add that class to the header element
         */
        this.dayHeaderClicked = new core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new core__["EventEmitter"]();
        /**
         * Called when an event is resized or dragged and dropped
         */
        this.eventTimesChanged = new core__["EventEmitter"]();
        /**
         * An output that will be called before the view is rendered for the current week.
         * If you add the `cssClass` property to a day in the header it will add that class to the cell element in the template
         */
        this.beforeViewRender = new core__["EventEmitter"]();
        /**
         * @hidden
         */
        this.eventRows = [];
        /**
         * @hidden
         */
        this.currentResizes = new Map();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.events || changes.viewDate || changes.excludeDays) {
            this.refreshBody();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeStarted = function (weekViewContainer, weekEvent, resizeEvent) {
        this.currentResizes.set(weekEvent, {
            originalOffset: weekEvent.offset,
            originalSpan: weekEvent.span,
            edge: typeof resizeEvent.edges.left !== 'undefined' ? 'left' : 'right'
        });
        var resizeHelper = new calendarResizeHelper_provider_CalendarResizeHelper(weekViewContainer, this.getDayColumnWidth(weekViewContainer));
        this.validateResize = function (_a) {
            var rectangle = _a.rectangle;
            return resizeHelper.validateResize({ rectangle: rectangle });
        };
        this.cdr.markForCheck();
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizing = function (weekEvent, resizeEvent, dayWidth) {
        var currentResize = this.currentResizes.get(weekEvent);
        if (resizeEvent.edges.left) {
            var diff = Math.round(+resizeEvent.edges.left / dayWidth);
            weekEvent.offset = currentResize.originalOffset + diff;
            weekEvent.span = currentResize.originalSpan - diff;
        }
        else if (resizeEvent.edges.right) {
            var diff = Math.round(+resizeEvent.edges.right / dayWidth);
            weekEvent.span = currentResize.originalSpan + diff;
        }
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.resizeEnded = function (weekEvent) {
        var currentResize = this.currentResizes.get(weekEvent);
        var daysDiff;
        if (currentResize.edge === 'left') {
            daysDiff = weekEvent.offset - currentResize.originalOffset;
        }
        else {
            daysDiff = weekEvent.span - currentResize.originalSpan;
        }
        weekEvent.offset = currentResize.originalOffset;
        weekEvent.span = currentResize.originalSpan;
        var newStart = weekEvent.event.start;
        var newEnd = weekEvent.event.end;
        if (currentResize.edge === 'left') {
            newStart = add_days_index___default()(newStart, daysDiff);
        }
        else if (newEnd) {
            newEnd = add_days_index___default()(newEnd, daysDiff);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
        this.currentResizes.delete(weekEvent);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.eventDragged = function (weekEvent, draggedByPx, dayWidth) {
        var daysDragged = draggedByPx / dayWidth;
        var newStart = add_days_index___default()(weekEvent.event.start, daysDragged);
        var newEnd;
        if (weekEvent.event.end) {
            newEnd = add_days_index___default()(weekEvent.event.end, daysDragged);
        }
        this.eventTimesChanged.emit({ newStart: newStart, newEnd: newEnd, event: weekEvent.event });
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.getDayColumnWidth = function (eventRowContainer) {
        return Math.floor(eventRowContainer.offsetWidth / this.days.length);
    };
    /**
     * @hidden
     */
    CalendarWeekViewComponent.prototype.dragStart = function (weekViewContainer, event) {
        var _this = this;
        var dragHelper = new calendarDragHelper_provider_CalendarDragHelper(weekViewContainer, event);
        this.validateDrag = function (_a) {
            var x = _a.x, y = _a.y;
            return _this.currentResizes.size === 0 && dragHelper.validateDrag({ x: x, y: y });
        };
        this.cdr.markForCheck();
    };
    CalendarWeekViewComponent.prototype.refreshHeader = function () {
        this.days = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.beforeViewRender.emit({
            header: this.days
        });
    };
    CalendarWeekViewComponent.prototype.refreshBody = function () {
        this.eventRows = this.utils.getWeekView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            precision: this.precision,
            absolutePositionedEvents: true
        });
    };
    CalendarWeekViewComponent.prototype.refreshAll = function () {
        this.refreshHeader();
        this.refreshBody();
    };
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", Date)
    ], CalendarWeekViewComponent.prototype, "viewDate", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "events", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "excludeDays", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", Subject__["Subject"])
    ], CalendarWeekViewComponent.prototype, "refresh", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "locale", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "tooltipPlacement", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "tooltipTemplate", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", Boolean)
    ], CalendarWeekViewComponent.prototype, "tooltipAppendToBody", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", Number)
    ], CalendarWeekViewComponent.prototype, "weekStartsOn", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "headerTemplate", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "eventTemplate", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewComponent.prototype, "eventTitleTemplate", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", String)
    ], CalendarWeekViewComponent.prototype, "precision", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Input"])(),
        calendarWeekView_component___metadata("design:type", Array)
    ], CalendarWeekViewComponent.prototype, "weekendDays", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Output"])(),
        calendarWeekView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarWeekViewComponent.prototype, "dayHeaderClicked", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Output"])(),
        calendarWeekView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarWeekViewComponent.prototype, "eventClicked", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Output"])(),
        calendarWeekView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarWeekViewComponent.prototype, "eventTimesChanged", void 0);
    calendarWeekView_component___decorate([
        Object(core__["Output"])(),
        calendarWeekView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarWeekViewComponent.prototype, "beforeViewRender", void 0);
    CalendarWeekViewComponent = calendarWeekView_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-week-view',
            template: "\n    <div class=\"cal-week-view\" #weekViewContainer>\n      <mwl-calendar-week-view-header\n        [days]=\"days\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\"\n        (dayHeaderClicked)=\"dayHeaderClicked.emit($event)\"\n        (eventDropped)=\"eventTimesChanged.emit($event)\">\n      </mwl-calendar-week-view-header>\n      <div *ngFor=\"let eventRow of eventRows\" #eventRowContainer class=\"cal-events-row\">\n        <div\n          *ngFor=\"let weekEvent of eventRow.row\"\n          #event\n          class=\"cal-event-container\"\n          [class.cal-draggable]=\"weekEvent.event.draggable\"\n          [class.cal-starts-within-week]=\"!weekEvent.startsBeforeWeek\"\n          [class.cal-ends-within-week]=\"!weekEvent.endsAfterWeek\"\n          [ngClass]=\"weekEvent.event?.cssClass\"\n          [style.width]=\"((100 / days.length) * weekEvent.span) + '%'\"\n          [style.marginLeft]=\"((100 / days.length) * weekEvent.offset) + '%'\"\n          mwlResizable\n          [resizeEdges]=\"{left: weekEvent.event?.resizable?.beforeStart, right: weekEvent.event?.resizable?.afterEnd}\"\n          [resizeSnapGrid]=\"{left: getDayColumnWidth(eventRowContainer), right: getDayColumnWidth(eventRowContainer)}\"\n          [validateResize]=\"validateResize\"\n          (resizeStart)=\"resizeStarted(weekViewContainer, weekEvent, $event)\"\n          (resizing)=\"resizing(weekEvent, $event, getDayColumnWidth(eventRowContainer))\"\n          (resizeEnd)=\"resizeEnded(weekEvent)\"\n          mwlDraggable\n          [dragAxis]=\"{x: weekEvent.event.draggable && currentResizes.size === 0, y: false}\"\n          [dragSnapGrid]=\"{x: getDayColumnWidth(eventRowContainer)}\"\n          [validateDrag]=\"validateDrag\"\n          (dragStart)=\"dragStart(weekViewContainer, event)\"\n          (dragEnd)=\"eventDragged(weekEvent, $event.x, getDayColumnWidth(eventRowContainer))\">\n          <mwl-calendar-week-view-event\n            [weekEvent]=\"weekEvent\"\n            [tooltipPlacement]=\"tooltipPlacement\"\n            [tooltipTemplate]=\"tooltipTemplate\"\n            [tooltipAppendToBody]=\"tooltipAppendToBody\"\n            [customTemplate]=\"eventTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: weekEvent.event})\">\n          </mwl-calendar-week-view-event>\n        </div>\n      </div>\n    </div>\n  "
        }),
        calendarWeekView_component___param(2, Object(core__["Inject"])(core__["LOCALE_ID"])),
        calendarWeekView_component___metadata("design:paramtypes", [core__["ChangeDetectorRef"],
            calendarUtils_provider_CalendarUtils, String])
    ], CalendarWeekViewComponent);
    return CalendarWeekViewComponent;
}());


// EXTERNAL MODULE: external {"root":["dateFns","isSameDay"],"commonjs":"date-fns/is_same_day/index","commonjs2":"date-fns/is_same_day/index","amd":"date-fns/is_same_day/index"}
var is_same_day_index__ = __webpack_require__(11);
var is_same_day_index___default = /*#__PURE__*/__webpack_require__.n(is_same_day_index__);

// EXTERNAL MODULE: external {"root":["dateFns","setDate"],"commonjs":"date-fns/set_date/index","commonjs2":"date-fns/set_date/index","amd":"date-fns/set_date/index"}
var set_date_index__ = __webpack_require__(12);
var set_date_index___default = /*#__PURE__*/__webpack_require__.n(set_date_index__);

// EXTERNAL MODULE: external {"root":["dateFns","setMonth"],"commonjs":"date-fns/set_month/index","commonjs2":"date-fns/set_month/index","amd":"date-fns/set_month/index"}
var set_month_index__ = __webpack_require__(13);
var set_month_index___default = /*#__PURE__*/__webpack_require__.n(set_month_index__);

// EXTERNAL MODULE: external {"root":["dateFns","setYear"],"commonjs":"date-fns/set_year/index","commonjs2":"date-fns/set_year/index","amd":"date-fns/set_year/index"}
var set_year_index__ = __webpack_require__(14);
var set_year_index___default = /*#__PURE__*/__webpack_require__.n(set_year_index__);

// EXTERNAL MODULE: external {"root":["dateFns","getDate"],"commonjs":"date-fns/get_date/index","commonjs2":"date-fns/get_date/index","amd":"date-fns/get_date/index"}
var get_date_index__ = __webpack_require__(15);
var get_date_index___default = /*#__PURE__*/__webpack_require__.n(get_date_index__);

// EXTERNAL MODULE: external {"root":["dateFns","getMonth"],"commonjs":"date-fns/get_month/index","commonjs2":"date-fns/get_month/index","amd":"date-fns/get_month/index"}
var get_month_index__ = __webpack_require__(16);
var get_month_index___default = /*#__PURE__*/__webpack_require__.n(get_month_index__);

// EXTERNAL MODULE: external {"root":["dateFns","getYear"],"commonjs":"date-fns/get_year/index","commonjs2":"date-fns/get_year/index","amd":"date-fns/get_year/index"}
var get_year_index__ = __webpack_require__(17);
var get_year_index___default = /*#__PURE__*/__webpack_require__.n(get_year_index__);

// EXTERNAL MODULE: external {"root":["dateFns","differenceInSeconds"],"commonjs":"date-fns/difference_in_seconds/index","commonjs2":"date-fns/difference_in_seconds/index","amd":"date-fns/difference_in_seconds/index"}
var difference_in_seconds_index__ = __webpack_require__(18);
var difference_in_seconds_index___default = /*#__PURE__*/__webpack_require__.n(difference_in_seconds_index__);

// EXTERNAL MODULE: external {"root":["dateFns","addSeconds"],"commonjs":"date-fns/add_seconds/index","commonjs2":"date-fns/add_seconds/index","amd":"date-fns/add_seconds/index"}
var add_seconds_index__ = __webpack_require__(19);
var add_seconds_index___default = /*#__PURE__*/__webpack_require__.n(add_seconds_index__);

// CONCATENATED MODULE: ./src/components/month/calendarMonthView.component.ts
var calendarMonthView_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarMonthView_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var calendarMonthView_component___param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};












/**
 * Shows all events on a given month. Example usage:
 *
 * ```typescript
 * <mwl-calendar-month-view
 *  [viewDate]="viewDate"
 *  [events]="events">
 * </mwl-calendar-month-view>
 * ```
 */
var calendarMonthView_component_CalendarMonthViewComponent = (function () {
    /**
     * @hidden
     */
    function CalendarMonthViewComponent(cdr, utils, locale) {
        this.cdr = cdr;
        this.utils = utils;
        /**
         * An array of events to display on view.
         * The schema is available here: https://github.com/mattlewis92/calendar-utils/blob/c51689985f59a271940e30bc4e2c4e1fee3fcb5c/src/calendarUtils.ts#L49-L63
         */
        this.events = [];
        /**
         * An array of day indexes (0 = sunday, 1 = monday etc) that will be hidden on the view
         */
        this.excludeDays = [];
        /**
         * Whether the events list for the day of the `viewDate` option is visible or not
         */
        this.activeDayIsOpen = false;
        /**
         * The placement of the event tooltip
         */
        this.tooltipPlacement = 'top';
        /**
         * Whether to append tooltips to the body or next to the trigger element
         */
        this.tooltipAppendToBody = true;
        /**
         * An output that will be called before the view is rendered for the current month.
         * If you add the `cssClass` property to a day in the body it will add that class to the cell element in the template
         */
        this.beforeViewRender = new core__["EventEmitter"]();
        /**
         * Called when the day cell is clicked
         */
        this.dayClicked = new core__["EventEmitter"]();
        /**
         * Called when the event title is clicked
         */
        this.eventClicked = new core__["EventEmitter"]();
        /**
         * Called when an event is dragged and dropped
         */
        this.eventTimesChanged = new core__["EventEmitter"]();
        this.locale = locale;
    }
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.refresh) {
            this.refreshSubscription = this.refresh.subscribe(function () {
                _this.refreshAll();
                _this.cdr.markForCheck();
            });
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnChanges = function (changes) {
        if (changes.viewDate || changes.excludeDays || changes.weekendDays) {
            this.refreshHeader();
        }
        if (changes.viewDate ||
            changes.events ||
            changes.excludeDays ||
            changes.weekendDays) {
            this.refreshBody();
        }
        if (changes.activeDayIsOpen ||
            changes.viewDate ||
            changes.events ||
            changes.excludeDays) {
            this.checkActiveDayIsOpen();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.ngOnDestroy = function () {
        if (this.refreshSubscription) {
            this.refreshSubscription.unsubscribe();
        }
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.toggleDayHighlight = function (event, isHighlighted) {
        this.view.days.forEach(function (day) {
            if (isHighlighted && day.events.indexOf(event) > -1) {
                day.backgroundColor = event.color.secondary;
            }
            else {
                delete day.backgroundColor;
            }
        });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.eventDropped = function (day, event) {
        var year = get_year_index___default()(day.date);
        var month = get_month_index___default()(day.date);
        var date = get_date_index___default()(day.date);
        var newStart = set_date_index___default()(set_month_index___default()(set_year_index___default()(event.start, year), month), date);
        var newEnd;
        if (event.end) {
            var secondsDiff = difference_in_seconds_index___default()(newStart, event.start);
            newEnd = add_seconds_index___default()(event.end, secondsDiff);
        }
        this.eventTimesChanged.emit({ event: event, newStart: newStart, newEnd: newEnd });
    };
    /**
     * @hidden
     */
    CalendarMonthViewComponent.prototype.handleDayClick = function (clickEvent, day) {
        // when using hammerjs, stopPropagation doesn't work. See https://github.com/mattlewis92/angular-calendar/issues/318
        if (!clickEvent.target.classList.contains('cal-event')) {
            this.dayClicked.emit({ day: day });
        }
    };
    CalendarMonthViewComponent.prototype.refreshHeader = function () {
        this.columnHeaders = this.utils.getWeekViewHeader({
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.refreshBody = function () {
        this.view = this.utils.getMonthView({
            events: this.events,
            viewDate: this.viewDate,
            weekStartsOn: this.weekStartsOn,
            excluded: this.excludeDays,
            weekendDays: this.weekendDays
        });
        this.emitBeforeViewRender();
    };
    CalendarMonthViewComponent.prototype.checkActiveDayIsOpen = function () {
        var _this = this;
        if (this.activeDayIsOpen === true) {
            this.openDay = this.view.days.find(function (day) {
                return is_same_day_index___default()(day.date, _this.viewDate);
            });
            var index = this.view.days.indexOf(this.openDay);
            this.openRowIndex =
                Math.floor(index / this.view.totalDaysVisibleInWeek) *
                    this.view.totalDaysVisibleInWeek;
        }
        else {
            this.openRowIndex = null;
            this.openDay = null;
        }
    };
    CalendarMonthViewComponent.prototype.refreshAll = function () {
        this.columnHeaders = null;
        this.view = null;
        this.refreshHeader();
        this.refreshBody();
        this.checkActiveDayIsOpen();
    };
    CalendarMonthViewComponent.prototype.emitBeforeViewRender = function () {
        if (this.columnHeaders && this.view) {
            this.beforeViewRender.emit({
                header: this.columnHeaders,
                body: this.view.days
            });
        }
    };
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Date)
    ], CalendarMonthViewComponent.prototype, "viewDate", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "events", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "excludeDays", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "activeDayIsOpen", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Subject__["Subject"])
    ], CalendarMonthViewComponent.prototype, "refresh", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", String)
    ], CalendarMonthViewComponent.prototype, "locale", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", String)
    ], CalendarMonthViewComponent.prototype, "tooltipPlacement", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "tooltipTemplate", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Boolean)
    ], CalendarMonthViewComponent.prototype, "tooltipAppendToBody", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Number)
    ], CalendarMonthViewComponent.prototype, "weekStartsOn", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "headerTemplate", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "cellTemplate", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "openDayEventsTemplate", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthViewComponent.prototype, "eventTitleTemplate", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Input"])(),
        calendarMonthView_component___metadata("design:type", Array)
    ], CalendarMonthViewComponent.prototype, "weekendDays", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Output"])(),
        calendarMonthView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarMonthViewComponent.prototype, "beforeViewRender", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Output"])(),
        calendarMonthView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarMonthViewComponent.prototype, "dayClicked", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Output"])(),
        calendarMonthView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarMonthViewComponent.prototype, "eventClicked", void 0);
    calendarMonthView_component___decorate([
        Object(core__["Output"])(),
        calendarMonthView_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarMonthViewComponent.prototype, "eventTimesChanged", void 0);
    CalendarMonthViewComponent = calendarMonthView_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-month-view',
            template: "\n    <div class=\"cal-month-view\">\n      <mwl-calendar-month-view-header\n        [days]=\"columnHeaders\"\n        [locale]=\"locale\"\n        [customTemplate]=\"headerTemplate\">\n      </mwl-calendar-month-view-header>\n      <div class=\"cal-days\">\n        <div *ngFor=\"let rowIndex of view.rowOffsets\">\n          <div class=\"cal-cell-row\">\n            <mwl-calendar-month-cell\n              *ngFor=\"let day of view.days | slice : rowIndex : rowIndex + (view.totalDaysVisibleInWeek)\"\n              [class.cal-drag-over]=\"day.dragOver\"\n              [ngClass]=\"day?.cssClass\"\n              [day]=\"day\"\n              [openDay]=\"openDay\"\n              [locale]=\"locale\"\n              [tooltipPlacement]=\"tooltipPlacement\"\n              [tooltipAppendToBody]=\"tooltipAppendToBody\"\n              [tooltipTemplate]=\"tooltipTemplate\"\n              [customTemplate]=\"cellTemplate\"\n              (click)=\"handleDayClick($event, day)\"\n              (highlightDay)=\"toggleDayHighlight($event.event, true)\"\n              (unhighlightDay)=\"toggleDayHighlight($event.event, false)\"\n              mwlDroppable\n              (dragEnter)=\"day.dragOver = true\"\n              (dragLeave)=\"day.dragOver = false\"\n              (drop)=\"day.dragOver = false; eventDropped(day, $event.dropData.event)\"\n              (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n            </mwl-calendar-month-cell>\n          </div>\n          <mwl-calendar-open-day-events\n            [isOpen]=\"openRowIndex === rowIndex\"\n            [events]=\"openDay?.events\"\n            [customTemplate]=\"openDayEventsTemplate\"\n            [eventTitleTemplate]=\"eventTitleTemplate\"\n            (eventClicked)=\"eventClicked.emit({event: $event.event})\">\n          </mwl-calendar-open-day-events>\n        </div>\n      </div>\n    </div>\n  "
        }),
        calendarMonthView_component___param(2, Object(core__["Inject"])(core__["LOCALE_ID"])),
        calendarMonthView_component___metadata("design:paramtypes", [core__["ChangeDetectorRef"],
            calendarUtils_provider_CalendarUtils, String])
    ], CalendarMonthViewComponent);
    return CalendarMonthViewComponent;
}());


// CONCATENATED MODULE: ./src/components/month/calendarMonthViewHeader.component.ts
var calendarMonthViewHeader_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarMonthViewHeader_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarMonthViewHeader_component_CalendarMonthViewHeaderComponent = (function () {
    function CalendarMonthViewHeaderComponent() {
    }
    calendarMonthViewHeader_component___decorate([
        Object(core__["Input"])(),
        calendarMonthViewHeader_component___metadata("design:type", Array)
    ], CalendarMonthViewHeaderComponent.prototype, "days", void 0);
    calendarMonthViewHeader_component___decorate([
        Object(core__["Input"])(),
        calendarMonthViewHeader_component___metadata("design:type", String)
    ], CalendarMonthViewHeaderComponent.prototype, "locale", void 0);
    calendarMonthViewHeader_component___decorate([
        Object(core__["Input"])(),
        calendarMonthViewHeader_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthViewHeaderComponent.prototype, "customTemplate", void 0);
    CalendarMonthViewHeaderComponent = calendarMonthViewHeader_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-month-view-header',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\">\n      <div class=\"cal-cell-row cal-header\">\n        <div\n          class=\"cal-cell\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [ngClass]=\"day.cssClass\">\n          {{ day.date | calendarDate:'monthViewColumnHeader':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale}\">\n    </ng-template>\n  "
        })
    ], CalendarMonthViewHeaderComponent);
    return CalendarMonthViewHeaderComponent;
}());


// CONCATENATED MODULE: ./src/components/common/calendarEventActions.component.ts
var calendarEventActions_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarEventActions_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarEventActions_component_CalendarEventActionsComponent = (function () {
    function CalendarEventActionsComponent() {
    }
    calendarEventActions_component___decorate([
        Object(core__["Input"])(),
        calendarEventActions_component___metadata("design:type", Object)
    ], CalendarEventActionsComponent.prototype, "event", void 0);
    CalendarEventActionsComponent = calendarEventActions_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-event-actions',
            template: "\n    <span *ngIf=\"event.actions\" class=\"cal-event-actions\">\n      <a\n        class=\"cal-event-action\"\n        href=\"javascript:;\"\n        *ngFor=\"let action of event.actions\"\n        (mwlClick)=\"action.onClick({event: event})\"\n        [ngClass]=\"action.cssClass\"\n        [innerHtml]=\"action.label\">\n      </a>\n    </span>\n  "
        })
    ], CalendarEventActionsComponent);
    return CalendarEventActionsComponent;
}());


// CONCATENATED MODULE: ./src/components/common/calendarEventTitle.component.ts
var calendarEventTitle_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarEventTitle_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarEventTitle_component_CalendarEventTitleComponent = (function () {
    function CalendarEventTitleComponent() {
    }
    calendarEventTitle_component___decorate([
        Object(core__["Input"])(),
        calendarEventTitle_component___metadata("design:type", Object)
    ], CalendarEventTitleComponent.prototype, "event", void 0);
    calendarEventTitle_component___decorate([
        Object(core__["Input"])(),
        calendarEventTitle_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarEventTitleComponent.prototype, "customTemplate", void 0);
    calendarEventTitle_component___decorate([
        Object(core__["Input"])(),
        calendarEventTitle_component___metadata("design:type", String)
    ], CalendarEventTitleComponent.prototype, "view", void 0);
    CalendarEventTitleComponent = calendarEventTitle_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-event-title',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-view=\"view\">\n      <a\n        class=\"cal-event-title\"\n        href=\"javascript:;\"\n        [innerHTML]=\"event.title | calendarEventTitle:view:event\">\n      </a>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        view: view\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarEventTitleComponent);
    return CalendarEventTitleComponent;
}());


// CONCATENATED MODULE: ./src/components/month/calendarMonthCell.component.ts
var calendarMonthCell_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarMonthCell_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarMonthCell_component_CalendarMonthCellComponent = (function () {
    function CalendarMonthCellComponent() {
        this.highlightDay = new core__["EventEmitter"]();
        this.unhighlightDay = new core__["EventEmitter"]();
        this.eventClicked = new core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarMonthCellComponent.prototype.onEventClick = function (mouseEvent, calendarEvent) {
        if (mouseEvent.stopPropagation) {
            mouseEvent.stopPropagation();
        }
        this.eventClicked.emit({ event: calendarEvent });
    };
    calendarMonthCell_component___decorate([
        Object(core__["Input"])(),
        calendarMonthCell_component___metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "day", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Input"])(),
        calendarMonthCell_component___metadata("design:type", Object)
    ], CalendarMonthCellComponent.prototype, "openDay", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Input"])(),
        calendarMonthCell_component___metadata("design:type", String)
    ], CalendarMonthCellComponent.prototype, "locale", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Input"])(),
        calendarMonthCell_component___metadata("design:type", String)
    ], CalendarMonthCellComponent.prototype, "tooltipPlacement", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Input"])(),
        calendarMonthCell_component___metadata("design:type", Boolean)
    ], CalendarMonthCellComponent.prototype, "tooltipAppendToBody", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Input"])(),
        calendarMonthCell_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthCellComponent.prototype, "customTemplate", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Input"])(),
        calendarMonthCell_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarMonthCellComponent.prototype, "tooltipTemplate", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Output"])(),
        calendarMonthCell_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarMonthCellComponent.prototype, "highlightDay", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Output"])(),
        calendarMonthCell_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarMonthCellComponent.prototype, "unhighlightDay", void 0);
    calendarMonthCell_component___decorate([
        Object(core__["Output"])(),
        calendarMonthCell_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarMonthCellComponent.prototype, "eventClicked", void 0);
    CalendarMonthCellComponent = calendarMonthCell_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-month-cell',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-day=\"day\"\n      let-openDay=\"openDay\"\n      let-locale=\"locale\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-highlightDay=\"highlightDay\"\n      let-unhighlightDay=\"unhighlightDay\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div class=\"cal-cell-top\">\n        <span class=\"cal-day-badge\" *ngIf=\"day.badgeTotal > 0\">{{ day.badgeTotal }}</span>\n        <span class=\"cal-day-number\">{{ day.date | calendarDate:'monthViewDayNumber':locale }}</span>\n      </div>\n      <div class=\"cal-events\" *ngIf=\"day.events.length > 0\">\n        <div\n          class=\"cal-event\"\n          *ngFor=\"let event of day.events\"\n          [style.backgroundColor]=\"event.color.primary\"\n          [ngClass]=\"event?.cssClass\"\n          (mouseenter)=\"highlightDay.emit({event: event})\"\n          (mouseleave)=\"unhighlightDay.emit({event: event})\"\n          [mwlCalendarTooltip]=\"event.title | calendarEventTitle:'monthTooltip':event\"\n          [tooltipPlacement]=\"tooltipPlacement\"\n          [tooltipEvent]=\"event\"\n          [tooltipTemplate]=\"tooltipTemplate\"\n          [tooltipAppendToBody]=\"tooltipAppendToBody\"\n          mwlDraggable\n          [dropData]=\"{event: event}\"\n          [dragAxis]=\"{x: event.draggable, y: event.draggable}\"\n          (mwlClick)=\"onEventClick($event, event)\">\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        day: day,\n        openDay: openDay,\n        locale: locale,\n        tooltipPlacement: tooltipPlacement,\n        highlightDay: highlightDay,\n        unhighlightDay: unhighlightDay,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  ",
            host: {
                class: 'cal-cell cal-day-cell',
                '[class.cal-past]': 'day.isPast',
                '[class.cal-today]': 'day.isToday',
                '[class.cal-future]': 'day.isFuture',
                '[class.cal-weekend]': 'day.isWeekend',
                '[class.cal-in-month]': 'day.inMonth',
                '[class.cal-out-month]': '!day.inMonth',
                '[class.cal-has-events]': 'day.events.length > 0',
                '[class.cal-open]': 'day === openDay',
                '[style.backgroundColor]': 'day.backgroundColor'
            }
        })
    ], CalendarMonthCellComponent);
    return CalendarMonthCellComponent;
}());


// EXTERNAL MODULE: external {"root":["ng","animations"],"commonjs":"@angular/animations","commonjs2":"@angular/animations","amd":"@angular/animations"}
var animations__ = __webpack_require__(20);
var animations___default = /*#__PURE__*/__webpack_require__.n(animations__);

// CONCATENATED MODULE: ./src/components/month/calendarOpenDayEvents.component.ts
var calendarOpenDayEvents_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarOpenDayEvents_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var calendarOpenDayEvents_component_CalendarOpenDayEventsComponent = (function () {
    function CalendarOpenDayEventsComponent() {
        this.isOpen = false;
        this.eventClicked = new core__["EventEmitter"]();
    }
    calendarOpenDayEvents_component___decorate([
        Object(core__["Input"])(),
        calendarOpenDayEvents_component___metadata("design:type", Boolean)
    ], CalendarOpenDayEventsComponent.prototype, "isOpen", void 0);
    calendarOpenDayEvents_component___decorate([
        Object(core__["Input"])(),
        calendarOpenDayEvents_component___metadata("design:type", Array)
    ], CalendarOpenDayEventsComponent.prototype, "events", void 0);
    calendarOpenDayEvents_component___decorate([
        Object(core__["Input"])(),
        calendarOpenDayEvents_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarOpenDayEventsComponent.prototype, "customTemplate", void 0);
    calendarOpenDayEvents_component___decorate([
        Object(core__["Input"])(),
        calendarOpenDayEvents_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarOpenDayEventsComponent.prototype, "eventTitleTemplate", void 0);
    calendarOpenDayEvents_component___decorate([
        Object(core__["Output"])(),
        calendarOpenDayEvents_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarOpenDayEventsComponent.prototype, "eventClicked", void 0);
    CalendarOpenDayEventsComponent = calendarOpenDayEvents_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-open-day-events',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-events=\"events\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        *ngFor=\"let event of events\"\n        [ngClass]=\"event?.cssClass\"\n        mwlDraggable\n        [dropData]=\"{event: event}\"\n        [dragAxis]=\"{x: event.draggable, y: event.draggable}\">\n        <span\n          class=\"cal-event\"\n          [style.backgroundColor]=\"event.color.primary\">\n        </span>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"month\"\n          (mwlClick)=\"eventClicked.emit({event: event})\">\n        </mwl-calendar-event-title>\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n      </div>\n    </ng-template>\n    <div class=\"cal-open-day-events\" [@collapse] *ngIf=\"isOpen\">\n      <ng-template\n        [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n        [ngTemplateOutletContext]=\"{\n          events: events,\n          eventClicked: eventClicked\n        }\">\n      </ng-template>\n    </div>\n  ",
            animations: [
                Object(animations__["trigger"])('collapse', [
                    Object(animations__["transition"])('void => *', [
                        Object(animations__["style"])({ height: 0, overflow: 'hidden' }),
                        Object(animations__["animate"])('150ms', Object(animations__["style"])({ height: '*' }))
                    ]),
                    Object(animations__["transition"])('* => void', [
                        Object(animations__["style"])({ height: '*', overflow: 'hidden' }),
                        Object(animations__["animate"])('150ms', Object(animations__["style"])({ height: 0 }))
                    ])
                ])
            ]
        })
    ], CalendarOpenDayEventsComponent);
    return CalendarOpenDayEventsComponent;
}());


// CONCATENATED MODULE: ./src/components/week/calendarWeekViewHeader.component.ts
var calendarWeekViewHeader_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarWeekViewHeader_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarWeekViewHeader_component_CalendarWeekViewHeaderComponent = (function () {
    function CalendarWeekViewHeaderComponent() {
        this.dayHeaderClicked = new core__["EventEmitter"]();
        this.eventDropped = new core__["EventEmitter"]();
    }
    calendarWeekViewHeader_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewHeader_component___metadata("design:type", Array)
    ], CalendarWeekViewHeaderComponent.prototype, "days", void 0);
    calendarWeekViewHeader_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewHeader_component___metadata("design:type", String)
    ], CalendarWeekViewHeaderComponent.prototype, "locale", void 0);
    calendarWeekViewHeader_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewHeader_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewHeaderComponent.prototype, "customTemplate", void 0);
    calendarWeekViewHeader_component___decorate([
        Object(core__["Output"])(),
        calendarWeekViewHeader_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarWeekViewHeaderComponent.prototype, "dayHeaderClicked", void 0);
    calendarWeekViewHeader_component___decorate([
        Object(core__["Output"])(),
        calendarWeekViewHeader_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarWeekViewHeaderComponent.prototype, "eventDropped", void 0);
    CalendarWeekViewHeaderComponent = calendarWeekViewHeader_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-week-view-header',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-days=\"days\"\n      let-locale=\"locale\"\n      let-dayHeaderClicked=\"dayHeaderClicked\"\n      let-eventDropped=\"eventDropped\">\n      <div class=\"cal-day-headers\">\n        <div\n          class=\"cal-header\"\n          *ngFor=\"let day of days\"\n          [class.cal-past]=\"day.isPast\"\n          [class.cal-today]=\"day.isToday\"\n          [class.cal-future]=\"day.isFuture\"\n          [class.cal-weekend]=\"day.isWeekend\"\n          [class.cal-drag-over]=\"day.dragOver\"\n          [ngClass]=\"day.cssClass\"\n          (mwlClick)=\"dayHeaderClicked.emit({day: day})\"\n          mwlDroppable\n          (dragEnter)=\"day.dragOver = true\"\n          (dragLeave)=\"day.dragOver = false\"\n          (drop)=\"day.dragOver = false; eventDropped.emit({event: $event.dropData.event, newStart: day.date})\">\n          <b>{{ day.date | calendarDate:'weekViewColumnHeader':locale }}</b><br>\n          <span>{{ day.date | calendarDate:'weekViewColumnSubHeader':locale }}</span>\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{days: days, locale: locale, dayHeaderClicked: dayHeaderClicked, eventDropped: eventDropped}\">\n    </ng-template>\n  "
        })
    ], CalendarWeekViewHeaderComponent);
    return CalendarWeekViewHeaderComponent;
}());


// CONCATENATED MODULE: ./src/components/week/calendarWeekViewEvent.component.ts
var calendarWeekViewEvent_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarWeekViewEvent_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarWeekViewEvent_component_CalendarWeekViewEventComponent = (function () {
    function CalendarWeekViewEventComponent() {
        this.eventClicked = new core__["EventEmitter"]();
    }
    calendarWeekViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewEvent_component___metadata("design:type", Object)
    ], CalendarWeekViewEventComponent.prototype, "weekEvent", void 0);
    calendarWeekViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewEvent_component___metadata("design:type", String)
    ], CalendarWeekViewEventComponent.prototype, "tooltipPlacement", void 0);
    calendarWeekViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewEvent_component___metadata("design:type", Boolean)
    ], CalendarWeekViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    calendarWeekViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewEventComponent.prototype, "customTemplate", void 0);
    calendarWeekViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewEventComponent.prototype, "eventTitleTemplate", void 0);
    calendarWeekViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarWeekViewEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarWeekViewEventComponent.prototype, "tooltipTemplate", void 0);
    calendarWeekViewEvent_component___decorate([
        Object(core__["Output"])(),
        calendarWeekViewEvent_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarWeekViewEventComponent.prototype, "eventClicked", void 0);
    CalendarWeekViewEventComponent = calendarWeekViewEvent_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-week-view-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-weekEvent=\"weekEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"weekEvent.event.color.secondary\"\n        [mwlCalendarTooltip]=\"weekEvent.event.title | calendarEventTitle:'weekTooltip':weekEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"weekEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"weekEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"weekEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"week\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        weekEvent: weekEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarWeekViewEventComponent);
    return CalendarWeekViewEventComponent;
}());


// CONCATENATED MODULE: ./src/components/day/calendarAllDayEvent.component.ts
var calendarAllDayEvent_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarAllDayEvent_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarAllDayEvent_component_CalendarAllDayEventComponent = (function () {
    function CalendarAllDayEventComponent() {
        this.eventClicked = new core__["EventEmitter"]();
    }
    calendarAllDayEvent_component___decorate([
        Object(core__["Input"])(),
        calendarAllDayEvent_component___metadata("design:type", Object)
    ], CalendarAllDayEventComponent.prototype, "event", void 0);
    calendarAllDayEvent_component___decorate([
        Object(core__["Input"])(),
        calendarAllDayEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarAllDayEventComponent.prototype, "customTemplate", void 0);
    calendarAllDayEvent_component___decorate([
        Object(core__["Input"])(),
        calendarAllDayEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarAllDayEventComponent.prototype, "eventTitleTemplate", void 0);
    calendarAllDayEvent_component___decorate([
        Object(core__["Output"])(),
        calendarAllDayEvent_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarAllDayEventComponent.prototype, "eventClicked", void 0);
    CalendarAllDayEventComponent = calendarAllDayEvent_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-all-day-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-event=\"event\"\n      let-eventClicked=\"eventClicked\">\n      <div\n        class=\"cal-all-day-event\"\n        [style.backgroundColor]=\"event.color.secondary\"\n        [style.borderColor]=\"event.color.primary\">\n        <mwl-calendar-event-actions [event]=\"event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        event: event,\n        eventClicked: eventClicked\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarAllDayEventComponent);
    return CalendarAllDayEventComponent;
}());


// CONCATENATED MODULE: ./src/components/day/calendarDayViewHourSegment.component.ts
var calendarDayViewHourSegment_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarDayViewHourSegment_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarDayViewHourSegment_component_CalendarDayViewHourSegmentComponent = (function () {
    function CalendarDayViewHourSegmentComponent() {
    }
    calendarDayViewHourSegment_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewHourSegment_component___metadata("design:type", Object)
    ], CalendarDayViewHourSegmentComponent.prototype, "segment", void 0);
    calendarDayViewHourSegment_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewHourSegment_component___metadata("design:type", String)
    ], CalendarDayViewHourSegmentComponent.prototype, "locale", void 0);
    calendarDayViewHourSegment_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewHourSegment_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewHourSegmentComponent.prototype, "customTemplate", void 0);
    CalendarDayViewHourSegmentComponent = calendarDayViewHourSegment_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-day-view-hour-segment',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-segment=\"segment\"\n      let-locale=\"locale\">\n      <div\n        class=\"cal-hour-segment\"\n        [class.cal-hour-start]=\"segment.isStart\"\n        [class.cal-after-hour-start]=\"!segment.isStart\"\n        [ngClass]=\"segment.cssClass\">\n        <div class=\"cal-time\">\n          {{ segment.date | calendarDate:'dayViewHour':locale }}\n        </div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        segment: segment,\n        locale: locale\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarDayViewHourSegmentComponent);
    return CalendarDayViewHourSegmentComponent;
}());


// CONCATENATED MODULE: ./src/components/day/calendarDayViewEvent.component.ts
var calendarDayViewEvent_component___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarDayViewEvent_component___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var calendarDayViewEvent_component_CalendarDayViewEventComponent = (function () {
    function CalendarDayViewEventComponent() {
        this.eventClicked = new core__["EventEmitter"]();
    }
    calendarDayViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewEvent_component___metadata("design:type", Object)
    ], CalendarDayViewEventComponent.prototype, "dayEvent", void 0);
    calendarDayViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewEvent_component___metadata("design:type", String)
    ], CalendarDayViewEventComponent.prototype, "tooltipPlacement", void 0);
    calendarDayViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewEvent_component___metadata("design:type", Boolean)
    ], CalendarDayViewEventComponent.prototype, "tooltipAppendToBody", void 0);
    calendarDayViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewEventComponent.prototype, "customTemplate", void 0);
    calendarDayViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewEventComponent.prototype, "eventTitleTemplate", void 0);
    calendarDayViewEvent_component___decorate([
        Object(core__["Input"])(),
        calendarDayViewEvent_component___metadata("design:type", core__["TemplateRef"])
    ], CalendarDayViewEventComponent.prototype, "tooltipTemplate", void 0);
    calendarDayViewEvent_component___decorate([
        Object(core__["Output"])(),
        calendarDayViewEvent_component___metadata("design:type", core__["EventEmitter"])
    ], CalendarDayViewEventComponent.prototype, "eventClicked", void 0);
    CalendarDayViewEventComponent = calendarDayViewEvent_component___decorate([
        Object(core__["Component"])({
            selector: 'mwl-calendar-day-view-event',
            template: "\n    <ng-template\n      #defaultTemplate\n      let-dayEvent=\"dayEvent\"\n      let-tooltipPlacement=\"tooltipPlacement\"\n      let-eventClicked=\"eventClicked\"\n      let-tooltipTemplate=\"tooltipTemplate\"\n      let-tooltipAppendToBody=\"tooltipAppendToBody\">\n      <div\n        class=\"cal-event\"\n        [style.backgroundColor]=\"dayEvent.event.color.secondary\"\n        [style.borderColor]=\"dayEvent.event.color.primary\"\n        [mwlCalendarTooltip]=\"dayEvent.event.title | calendarEventTitle:'dayTooltip':dayEvent.event\"\n        [tooltipPlacement]=\"tooltipPlacement\"\n        [tooltipEvent]=\"dayEvent.event\"\n        [tooltipTemplate]=\"tooltipTemplate\"\n        [tooltipAppendToBody]=\"tooltipAppendToBody\">\n        <mwl-calendar-event-actions [event]=\"dayEvent.event\"></mwl-calendar-event-actions>\n        <mwl-calendar-event-title\n          [event]=\"dayEvent.event\"\n          [customTemplate]=\"eventTitleTemplate\"\n          view=\"day\"\n          (mwlClick)=\"eventClicked.emit()\">\n        </mwl-calendar-event-title>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        dayEvent: dayEvent,\n        tooltipPlacement: tooltipPlacement,\n        eventClicked: eventClicked,\n        tooltipTemplate: tooltipTemplate,\n        tooltipAppendToBody: tooltipAppendToBody\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarDayViewEventComponent);
    return CalendarDayViewEventComponent;
}());


// EXTERNAL MODULE: external {"root":["ng","platformBrowser"],"commonjs":"@angular/platform-browser","commonjs2":"@angular/platform-browser","amd":"@angular/platform-browser"}
var platform_browser__ = __webpack_require__(21);
var platform_browser___default = /*#__PURE__*/__webpack_require__.n(platform_browser__);

// CONCATENATED MODULE: ./node_modules/positioning/dist/positioning.js
// previous version:
// https://github.com/angular-ui/bootstrap/blob/07c31d0731f7cb068a1932b8e01d2312b796b4ec/src/position/position.js
var Positioning = (function () {
    function Positioning() {
    }
    Positioning.prototype.getAllStyles = function (element) { return window.getComputedStyle(element); };
    Positioning.prototype.getStyle = function (element, prop) { return this.getAllStyles(element)[prop]; };
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    Positioning.prototype.offsetParent = function (element) {
        var offsetParentEl = element.offsetParent || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = offsetParentEl.offsetParent;
        }
        return offsetParentEl || document.documentElement;
    };
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var elPosition;
        var parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            elPosition = element.getBoundingClientRect();
        }
        else {
            var offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    };
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var elBcr = element.getBoundingClientRect();
        var viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    };
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var targetElStyles = this.getAllStyles(targetElement);
        var targetElBCR = targetElement.getBoundingClientRect();
        var placementPrimary = placement.split('-')[0] || 'top';
        var placementSecondary = placement.split('-')[1] || 'center';
        var targetElPosition = {
            'height': targetElBCR.height || targetElement.offsetHeight,
            'width': targetElBCR.width || targetElement.offsetWidth,
            'top': 0,
            'bottom': targetElBCR.height || targetElement.offsetHeight,
            'left': 0,
            'right': targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top =
                    hostElPosition.top - (targetElement.offsetHeight + parseFloat(targetElStyles.marginBottom));
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height;
                break;
            case 'left':
                targetElPosition.left =
                    hostElPosition.left - (targetElement.offsetWidth + parseFloat(targetElStyles.marginRight));
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width;
                break;
        }
        switch (placementSecondary) {
            case 'top':
                targetElPosition.top = hostElPosition.top;
                break;
            case 'bottom':
                targetElPosition.top = hostElPosition.top + hostElPosition.height - targetElement.offsetHeight;
                break;
            case 'left':
                targetElPosition.left = hostElPosition.left;
                break;
            case 'right':
                targetElPosition.left = hostElPosition.left + hostElPosition.width - targetElement.offsetWidth;
                break;
            case 'center':
                if (placementPrimary === 'top' || placementPrimary === 'bottom') {
                    targetElPosition.left = hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2;
                }
                else {
                    targetElPosition.top = hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2;
                }
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    };
    return Positioning;
}());

var positionService = new Positioning();
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
//# sourceMappingURL=positioning.js.map
// CONCATENATED MODULE: ./src/directives/calendarTooltip.directive.ts
var calendarTooltip_directive___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarTooltip_directive___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var calendarTooltip_directive___param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};



var calendarTooltip_directive_CalendarTooltipWindowComponent = (function () {
    function CalendarTooltipWindowComponent() {
    }
    calendarTooltip_directive___decorate([
        Object(core__["Input"])(),
        calendarTooltip_directive___metadata("design:type", String)
    ], CalendarTooltipWindowComponent.prototype, "contents", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["Input"])(),
        calendarTooltip_directive___metadata("design:type", String)
    ], CalendarTooltipWindowComponent.prototype, "placement", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["Input"])(),
        calendarTooltip_directive___metadata("design:type", Object)
    ], CalendarTooltipWindowComponent.prototype, "event", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["Input"])(),
        calendarTooltip_directive___metadata("design:type", core__["TemplateRef"])
    ], CalendarTooltipWindowComponent.prototype, "customTemplate", void 0);
    CalendarTooltipWindowComponent = calendarTooltip_directive___decorate([
        Object(core__["Component"])({
            template: "\n    <ng-template\n      #defaultTemplate\n      let-contents=\"contents\"\n      let-placement=\"placement\"\n      let-event=\"event\">\n      <div class=\"cal-tooltip\" [ngClass]=\"'cal-tooltip-' + placement\">\n        <div class=\"cal-tooltip-arrow\"></div>\n        <div class=\"cal-tooltip-inner\" [innerHtml]=\"contents\"></div>\n      </div>\n    </ng-template>\n    <ng-template\n      [ngTemplateOutlet]=\"customTemplate || defaultTemplate\"\n      [ngTemplateOutletContext]=\"{\n        contents: contents,\n        placement: placement,\n        event: event\n      }\">\n    </ng-template>\n  "
        })
    ], CalendarTooltipWindowComponent);
    return CalendarTooltipWindowComponent;
}());

var calendarTooltip_directive_CalendarTooltipDirective = (function () {
    function CalendarTooltipDirective(elementRef, injector, renderer, componentFactoryResolver, viewContainerRef, document //tslint:disable-line
    ) {
        this.elementRef = elementRef;
        this.injector = injector;
        this.renderer = renderer;
        this.viewContainerRef = viewContainerRef;
        this.document = document; //tslint:disable-line
        this.placement = 'top'; // tslint:disable-line no-input-rename
        this.positioning = new Positioning();
        this.tooltipFactory = componentFactoryResolver.resolveComponentFactory(calendarTooltip_directive_CalendarTooltipWindowComponent);
    }
    CalendarTooltipDirective.prototype.ngOnDestroy = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.onMouseOver = function () {
        this.show();
    };
    CalendarTooltipDirective.prototype.onMouseOut = function () {
        this.hide();
    };
    CalendarTooltipDirective.prototype.show = function () {
        var _this = this;
        if (!this.tooltipRef && this.contents) {
            this.tooltipRef = this.viewContainerRef.createComponent(this.tooltipFactory, 0, this.injector, []);
            this.tooltipRef.instance.contents = this.contents;
            this.tooltipRef.instance.placement = this.placement;
            this.tooltipRef.instance.customTemplate = this.customTemplate;
            this.tooltipRef.instance.event = this.event;
            if (this.appendToBody) {
                this.document.body.appendChild(this.tooltipRef.location.nativeElement);
            }
            requestAnimationFrame(function () {
                _this.positionTooltip();
            });
        }
    };
    CalendarTooltipDirective.prototype.hide = function () {
        if (this.tooltipRef) {
            this.viewContainerRef.remove(this.viewContainerRef.indexOf(this.tooltipRef.hostView));
            this.tooltipRef = null;
        }
    };
    CalendarTooltipDirective.prototype.positionTooltip = function () {
        if (this.tooltipRef) {
            var targetPosition = this.positioning.positionElements(this.elementRef.nativeElement, this.tooltipRef.location.nativeElement.children[0], this.placement, this.appendToBody);
            var elm = this.tooltipRef.location.nativeElement
                .children[0];
            this.renderer.setStyle(elm, 'top', targetPosition.top + "px");
            this.renderer.setStyle(elm, 'left', targetPosition.left + "px");
        }
    };
    calendarTooltip_directive___decorate([
        Object(core__["Input"])('mwlCalendarTooltip'),
        calendarTooltip_directive___metadata("design:type", String)
    ], CalendarTooltipDirective.prototype, "contents", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["Input"])('tooltipPlacement'),
        calendarTooltip_directive___metadata("design:type", String)
    ], CalendarTooltipDirective.prototype, "placement", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["Input"])('tooltipTemplate'),
        calendarTooltip_directive___metadata("design:type", core__["TemplateRef"])
    ], CalendarTooltipDirective.prototype, "customTemplate", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["Input"])('tooltipEvent'),
        calendarTooltip_directive___metadata("design:type", Object)
    ], CalendarTooltipDirective.prototype, "event", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["Input"])('tooltipAppendToBody'),
        calendarTooltip_directive___metadata("design:type", Boolean)
    ], CalendarTooltipDirective.prototype, "appendToBody", void 0);
    calendarTooltip_directive___decorate([
        Object(core__["HostListener"])('mouseenter'),
        calendarTooltip_directive___metadata("design:type", Function),
        calendarTooltip_directive___metadata("design:paramtypes", []),
        calendarTooltip_directive___metadata("design:returntype", void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOver", null);
    calendarTooltip_directive___decorate([
        Object(core__["HostListener"])('mouseleave'),
        calendarTooltip_directive___metadata("design:type", Function),
        calendarTooltip_directive___metadata("design:paramtypes", []),
        calendarTooltip_directive___metadata("design:returntype", void 0)
    ], CalendarTooltipDirective.prototype, "onMouseOut", null);
    CalendarTooltipDirective = calendarTooltip_directive___decorate([
        Object(core__["Directive"])({
            selector: '[mwlCalendarTooltip]'
        }),
        calendarTooltip_directive___param(5, Object(core__["Inject"])(platform_browser__["DOCUMENT"])),
        calendarTooltip_directive___metadata("design:paramtypes", [core__["ElementRef"],
            core__["Injector"],
            core__["Renderer2"],
            core__["ComponentFactoryResolver"],
            core__["ViewContainerRef"], Object])
    ], CalendarTooltipDirective);
    return CalendarTooltipDirective;
}());


// EXTERNAL MODULE: external {"root":["dateFns","subDays"],"commonjs":"date-fns/sub_days/index","commonjs2":"date-fns/sub_days/index","amd":"date-fns/sub_days/index"}
var sub_days_index__ = __webpack_require__(22);
var sub_days_index___default = /*#__PURE__*/__webpack_require__.n(sub_days_index__);

// EXTERNAL MODULE: external {"root":["dateFns","subWeeks"],"commonjs":"date-fns/sub_weeks/index","commonjs2":"date-fns/sub_weeks/index","amd":"date-fns/sub_weeks/index"}
var sub_weeks_index__ = __webpack_require__(23);
var sub_weeks_index___default = /*#__PURE__*/__webpack_require__.n(sub_weeks_index__);

// EXTERNAL MODULE: external {"root":["dateFns","subMonths"],"commonjs":"date-fns/sub_months/index","commonjs2":"date-fns/sub_months/index","amd":"date-fns/sub_months/index"}
var sub_months_index__ = __webpack_require__(24);
var sub_months_index___default = /*#__PURE__*/__webpack_require__.n(sub_months_index__);

// CONCATENATED MODULE: ./src/directives/calendarPreviousView.directive.ts
var calendarPreviousView_directive___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarPreviousView_directive___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Change the view date to the previous view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarPreviousView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Previous
 * </button>
 * ```
 */
var calendarPreviousView_directive_CalendarPreviousViewDirective = (function () {
    function CalendarPreviousViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarPreviousViewDirective.prototype.onClick = function () {
        var subFn = {
            day: sub_days_index___default.a,
            week: sub_weeks_index___default.a,
            month: sub_months_index___default.a
        }[this.view];
        this.viewDateChange.emit(subFn(this.viewDate, 1));
    };
    calendarPreviousView_directive___decorate([
        Object(core__["Input"])(),
        calendarPreviousView_directive___metadata("design:type", String)
    ], CalendarPreviousViewDirective.prototype, "view", void 0);
    calendarPreviousView_directive___decorate([
        Object(core__["Input"])(),
        calendarPreviousView_directive___metadata("design:type", Date)
    ], CalendarPreviousViewDirective.prototype, "viewDate", void 0);
    calendarPreviousView_directive___decorate([
        Object(core__["Output"])(),
        calendarPreviousView_directive___metadata("design:type", core__["EventEmitter"])
    ], CalendarPreviousViewDirective.prototype, "viewDateChange", void 0);
    calendarPreviousView_directive___decorate([
        Object(core__["HostListener"])('click'),
        calendarPreviousView_directive___metadata("design:type", Function),
        calendarPreviousView_directive___metadata("design:paramtypes", []),
        calendarPreviousView_directive___metadata("design:returntype", void 0)
    ], CalendarPreviousViewDirective.prototype, "onClick", null);
    CalendarPreviousViewDirective = calendarPreviousView_directive___decorate([
        Object(core__["Directive"])({
            selector: '[mwlCalendarPreviousView]'
        })
    ], CalendarPreviousViewDirective);
    return CalendarPreviousViewDirective;
}());


// EXTERNAL MODULE: external {"root":["dateFns","addWeeks"],"commonjs":"date-fns/add_weeks/index","commonjs2":"date-fns/add_weeks/index","amd":"date-fns/add_weeks/index"}
var add_weeks_index__ = __webpack_require__(25);
var add_weeks_index___default = /*#__PURE__*/__webpack_require__.n(add_weeks_index__);

// EXTERNAL MODULE: external {"root":["dateFns","addMonths"],"commonjs":"date-fns/add_months/index","commonjs2":"date-fns/add_months/index","amd":"date-fns/add_months/index"}
var add_months_index__ = __webpack_require__(26);
var add_months_index___default = /*#__PURE__*/__webpack_require__.n(add_months_index__);

// CONCATENATED MODULE: ./src/directives/calendarNextView.directive.ts
var calendarNextView_directive___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarNextView_directive___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Change the view date to the next view. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarNextView
 *  [(viewDate)]="viewDate"
 *  [view]="view">
 *  Next
 * </button>
 * ```
 */
var calendarNextView_directive_CalendarNextViewDirective = (function () {
    function CalendarNextViewDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarNextViewDirective.prototype.onClick = function () {
        var addFn = {
            day: add_days_index___default.a,
            week: add_weeks_index___default.a,
            month: add_months_index___default.a
        }[this.view];
        this.viewDateChange.emit(addFn(this.viewDate, 1));
    };
    calendarNextView_directive___decorate([
        Object(core__["Input"])(),
        calendarNextView_directive___metadata("design:type", String)
    ], CalendarNextViewDirective.prototype, "view", void 0);
    calendarNextView_directive___decorate([
        Object(core__["Input"])(),
        calendarNextView_directive___metadata("design:type", Date)
    ], CalendarNextViewDirective.prototype, "viewDate", void 0);
    calendarNextView_directive___decorate([
        Object(core__["Output"])(),
        calendarNextView_directive___metadata("design:type", core__["EventEmitter"])
    ], CalendarNextViewDirective.prototype, "viewDateChange", void 0);
    calendarNextView_directive___decorate([
        Object(core__["HostListener"])('click'),
        calendarNextView_directive___metadata("design:type", Function),
        calendarNextView_directive___metadata("design:paramtypes", []),
        calendarNextView_directive___metadata("design:returntype", void 0)
    ], CalendarNextViewDirective.prototype, "onClick", null);
    CalendarNextViewDirective = calendarNextView_directive___decorate([
        Object(core__["Directive"])({
            selector: '[mwlCalendarNextView]'
        })
    ], CalendarNextViewDirective);
    return CalendarNextViewDirective;
}());


// EXTERNAL MODULE: external {"root":["dateFns","startOfToday"],"commonjs":"date-fns/start_of_today/index","commonjs2":"date-fns/start_of_today/index","amd":"date-fns/start_of_today/index"}
var start_of_today_index__ = __webpack_require__(27);
var start_of_today_index___default = /*#__PURE__*/__webpack_require__.n(start_of_today_index__);

// CONCATENATED MODULE: ./src/directives/calendarToday.directive.ts
var calendarToday_directive___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarToday_directive___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Change the view date to the current day. For example:
 *
 * ```typescript
 * <button
 *  mwlCalendarToday
 *  [(viewDate)]="viewDate">
 *  Today
 * </button>
 * ```
 */
var calendarToday_directive_CalendarTodayDirective = (function () {
    function CalendarTodayDirective() {
        /**
         * Called when the view date is changed
         */
        this.viewDateChange = new core__["EventEmitter"]();
    }
    /**
     * @hidden
     */
    CalendarTodayDirective.prototype.onClick = function () {
        this.viewDateChange.emit(start_of_today_index___default()());
    };
    calendarToday_directive___decorate([
        Object(core__["Input"])(),
        calendarToday_directive___metadata("design:type", Date)
    ], CalendarTodayDirective.prototype, "viewDate", void 0);
    calendarToday_directive___decorate([
        Object(core__["Output"])(),
        calendarToday_directive___metadata("design:type", core__["EventEmitter"])
    ], CalendarTodayDirective.prototype, "viewDateChange", void 0);
    calendarToday_directive___decorate([
        Object(core__["HostListener"])('click'),
        calendarToday_directive___metadata("design:type", Function),
        calendarToday_directive___metadata("design:paramtypes", []),
        calendarToday_directive___metadata("design:returntype", void 0)
    ], CalendarTodayDirective.prototype, "onClick", null);
    CalendarTodayDirective = calendarToday_directive___decorate([
        Object(core__["Directive"])({
            selector: '[mwlCalendarToday]'
        })
    ], CalendarTodayDirective);
    return CalendarTodayDirective;
}());


// CONCATENATED MODULE: ./src/directives/click.directive.ts
var click_directive___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var click_directive___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var click_directive_ClickDirective = (function () {
    function ClickDirective(renderer, elm) {
        this.renderer = renderer;
        this.elm = elm;
        this.click = new core__["EventEmitter"](); // tslint:disable-line
    }
    ClickDirective.prototype.ngOnInit = function () {
        var _this = this;
        var eventName = typeof window['Hammer'] !== 'undefined' ? 'tap' : 'click';
        this.removeListener = this.renderer.listen(this.elm.nativeElement, eventName, function (event) {
            _this.click.next(event);
        });
    };
    ClickDirective.prototype.ngOnDestroy = function () {
        this.removeListener();
    };
    click_directive___decorate([
        Object(core__["Output"])('mwlClick'),
        click_directive___metadata("design:type", core__["EventEmitter"])
    ], ClickDirective.prototype, "click", void 0);
    ClickDirective = click_directive___decorate([
        Object(core__["Directive"])({
            selector: '[mwlClick]'
        }),
        click_directive___metadata("design:paramtypes", [core__["Renderer2"], core__["ElementRef"]])
    ], ClickDirective);
    return ClickDirective;
}());


// CONCATENATED MODULE: ./src/pipes/calendarDate.pipe.ts
var calendarDate_pipe___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarDate_pipe___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var calendarDate_pipe___param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


/**
 * This pipe is primarily for rendering the current view title. Example usage:
 * ```typescript
 * // where `viewDate` is a `Date` and view is `'month' | 'week' | 'day'`
 * {{ viewDate | calendarDate:(view + 'ViewTitle'):'en' }}
 * ```
 */
var calendarDate_pipe_CalendarDatePipe = (function () {
    function CalendarDatePipe(dateFormatter, locale) {
        this.dateFormatter = dateFormatter;
        this.locale = locale;
    }
    CalendarDatePipe.prototype.transform = function (date, method, locale) {
        if (locale === void 0) { locale = this.locale; }
        return this.dateFormatter[method]({ date: date, locale: locale });
    };
    CalendarDatePipe = calendarDate_pipe___decorate([
        Object(core__["Pipe"])({
            name: 'calendarDate'
        }),
        calendarDate_pipe___param(1, Object(core__["Inject"])(core__["LOCALE_ID"])),
        calendarDate_pipe___metadata("design:paramtypes", [CalendarDateFormatter, String])
    ], CalendarDatePipe);
    return CalendarDatePipe;
}());


// CONCATENATED MODULE: ./src/pipes/calendarEventTitle.pipe.ts
var calendarEventTitle_pipe___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var calendarEventTitle_pipe___metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var calendarEventTitle_pipe_CalendarEventTitlePipe = (function () {
    function CalendarEventTitlePipe(calendarEventTitle) {
        this.calendarEventTitle = calendarEventTitle;
    }
    CalendarEventTitlePipe.prototype.transform = function (title, titleType, event) {
        return this.calendarEventTitle[titleType](event);
    };
    CalendarEventTitlePipe = calendarEventTitle_pipe___decorate([
        Object(core__["Pipe"])({
            name: 'calendarEventTitle'
        }),
        calendarEventTitle_pipe___metadata("design:paramtypes", [CalendarEventTitleFormatter])
    ], CalendarEventTitlePipe);
    return CalendarEventTitlePipe;
}());


// CONCATENATED MODULE: ./src/calendar.module.ts
var calendar_module___decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



























/**
 * The main module of this library. Example usage:
 *
 * ```typescript
 * import { CalenderModule } from 'angular-calendar';
 *
 * &commat;NgModule({
 *   imports: [
 *     CalenderModule.forRoot()
 *   ]
 * })
 * class MyModule {}
 * ```
 *
 */
var calendar_module_CalendarModule = (function () {
    function CalendarModule() {
    }
    CalendarModule_1 = CalendarModule;
    CalendarModule.forRoot = function (config) {
        if (config === void 0) { config = {}; }
        return {
            ngModule: CalendarModule_1,
            providers: [
                external___root___angularDraggableDroppable___commonjs___angular_draggable_droppable___commonjs2___angular_draggable_droppable___amd___angular_draggable_droppable__["DraggableHelper"],
                config.eventTitleFormatter || CalendarEventTitleFormatter,
                config.dateFormatter || CalendarDateFormatter,
                config.utils || calendarUtils_provider_CalendarUtils
            ]
        };
    };
    CalendarModule = CalendarModule_1 = calendar_module___decorate([
        Object(core__["NgModule"])({
            declarations: [
                calendarDayView_component_CalendarDayViewComponent,
                calendarWeekView_component_CalendarWeekViewComponent,
                calendarMonthView_component_CalendarMonthViewComponent,
                calendarEventActions_component_CalendarEventActionsComponent,
                calendarEventTitle_component_CalendarEventTitleComponent,
                calendarMonthCell_component_CalendarMonthCellComponent,
                calendarOpenDayEvents_component_CalendarOpenDayEventsComponent,
                calendarWeekViewHeader_component_CalendarWeekViewHeaderComponent,
                calendarWeekViewEvent_component_CalendarWeekViewEventComponent,
                calendarAllDayEvent_component_CalendarAllDayEventComponent,
                calendarDayViewHourSegment_component_CalendarDayViewHourSegmentComponent,
                calendarTooltip_directive_CalendarTooltipWindowComponent,
                calendarTooltip_directive_CalendarTooltipDirective,
                calendarPreviousView_directive_CalendarPreviousViewDirective,
                calendarNextView_directive_CalendarNextViewDirective,
                calendarToday_directive_CalendarTodayDirective,
                calendarDate_pipe_CalendarDatePipe,
                calendarEventTitle_pipe_CalendarEventTitlePipe,
                calendarMonthViewHeader_component_CalendarMonthViewHeaderComponent,
                calendarDayViewEvent_component_CalendarDayViewEventComponent,
                click_directive_ClickDirective
            ],
            imports: [common__["CommonModule"], external___root___angularResizableElement___commonjs___angular_resizable_element___commonjs2___angular_resizable_element___amd___angular_resizable_element__["ResizableModule"], external___root___angularDraggableDroppable___commonjs___angular_draggable_droppable___commonjs2___angular_draggable_droppable___amd___angular_draggable_droppable__["DragAndDropModule"]],
            exports: [
                calendarDayView_component_CalendarDayViewComponent,
                calendarWeekView_component_CalendarWeekViewComponent,
                calendarMonthView_component_CalendarMonthViewComponent,
                calendarEventActions_component_CalendarEventActionsComponent,
                calendarEventTitle_component_CalendarEventTitleComponent,
                calendarMonthCell_component_CalendarMonthCellComponent,
                calendarOpenDayEvents_component_CalendarOpenDayEventsComponent,
                calendarWeekViewHeader_component_CalendarWeekViewHeaderComponent,
                calendarWeekViewEvent_component_CalendarWeekViewEventComponent,
                calendarAllDayEvent_component_CalendarAllDayEventComponent,
                calendarDayViewHourSegment_component_CalendarDayViewHourSegmentComponent,
                calendarTooltip_directive_CalendarTooltipWindowComponent,
                calendarTooltip_directive_CalendarTooltipDirective,
                calendarPreviousView_directive_CalendarPreviousViewDirective,
                calendarNextView_directive_CalendarNextViewDirective,
                calendarToday_directive_CalendarTodayDirective,
                calendarDate_pipe_CalendarDatePipe,
                calendarEventTitle_pipe_CalendarEventTitlePipe,
                calendarMonthViewHeader_component_CalendarMonthViewHeaderComponent,
                calendarDayViewEvent_component_CalendarDayViewEventComponent,
                click_directive_ClickDirective
            ],
            entryComponents: [calendarTooltip_directive_CalendarTooltipWindowComponent]
        })
    ], CalendarModule);
    return CalendarModule;
    var CalendarModule_1;
}());


// CONCATENATED MODULE: ./src/index.ts











// CONCATENATED MODULE: ./src/index.umd.ts
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "DAYS_OF_WEEK", function() { return external___root____calendarUtils____commonjs___calendar_utils___commonjs2___calendar_utils___amd___calendar_utils__["DAYS_OF_WEEK"]; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarEventTitleFormatter", function() { return CalendarEventTitleFormatter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "MOMENT", function() { return MOMENT; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarMomentDateFormatter", function() { return calendarMomentDateFormatter_provider_CalendarMomentDateFormatter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarNativeDateFormatter", function() { return calendarNativeDateFormatter_provider_CalendarNativeDateFormatter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarDateFormatter", function() { return CalendarDateFormatter; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarUtils", function() { return calendarUtils_provider_CalendarUtils; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarModule", function() { return calendar_module_CalendarModule; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarDayViewComponent", function() { return calendarDayView_component_CalendarDayViewComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarMonthViewComponent", function() { return calendarMonthView_component_CalendarMonthViewComponent; });
/* concated harmony reexport */__webpack_require__.d(__webpack_exports__, "CalendarWeekViewComponent", function() { return calendarWeekView_component_CalendarWeekViewComponent; });




/***/ }),
/* 5 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_25__;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_26__;

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE_27__;

/***/ })
/******/ ]);
});
//# sourceMappingURL=angular-calendar.js.map