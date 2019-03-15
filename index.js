
window.Yoga = {
    ALIGN_COUNT: 8,
    ALIGN_AUTO: 0,
    ALIGN_FLEX_START: 1,
    ALIGN_CENTER: 2,
    ALIGN_FLEX_END: 3,
    ALIGN_STRETCH: 4,
    ALIGN_BASELINE: 5,
    ALIGN_SPACE_BETWEEN: 6,
    ALIGN_SPACE_AROUND: 7,

    DIMENSION_COUNT: 2,
    DIMENSION_WIDTH: 0,
    DIMENSION_HEIGHT: 1,

    DIRECTION_COUNT: 3,
    DIRECTION_INHERIT: 0,
    DIRECTION_LTR: 1,
    DIRECTION_RTL: 2,

    DISPLAY_COUNT: 2,
    DISPLAY_FLEX: 0,
    DISPLAY_NONE: 1,

    EDGE_COUNT: 9,
    EDGE_LEFT: 0,
    EDGE_TOP: 1,
    EDGE_RIGHT: 2,
    EDGE_BOTTOM: 3,
    EDGE_START: 4,
    EDGE_END: 5,
    EDGE_HORIZONTAL: 6,
    EDGE_VERTICAL: 7,
    EDGE_ALL: 8,

    EXPERIMENTAL_FEATURE_COUNT: 1,
    EXPERIMENTAL_FEATURE_WEB_FLEX_BASIS: 0,

    FLEX_DIRECTION_COUNT: 4,
    FLEX_DIRECTION_COLUMN: 0,
    FLEX_DIRECTION_COLUMN_REVERSE: 1,
    FLEX_DIRECTION_ROW: 2,
    FLEX_DIRECTION_ROW_REVERSE: 3,

    JUSTIFY_COUNT: 6,
    JUSTIFY_FLEX_START: 0,
    JUSTIFY_CENTER: 1,
    JUSTIFY_FLEX_END: 2,
    JUSTIFY_SPACE_BETWEEN: 3,
    JUSTIFY_SPACE_AROUND: 4,
    JUSTIFY_SPACE_EVENLY: 5,

    LOG_LEVEL_COUNT: 6,
    LOG_LEVEL_ERROR: 0,
    LOG_LEVEL_WARN: 1,
    LOG_LEVEL_INFO: 2,
    LOG_LEVEL_DEBUG: 3,
    LOG_LEVEL_VERBOSE: 4,
    LOG_LEVEL_FATAL: 5,

    MEASURE_MODE_COUNT: 3,
    MEASURE_MODE_UNDEFINED: 0,
    MEASURE_MODE_EXACTLY: 1,
    MEASURE_MODE_AT_MOST: 2,

    NODE_TYPE_COUNT: 2,
    NODE_TYPE_DEFAULT: 0,
    NODE_TYPE_TEXT: 1,

    OVERFLOW_COUNT: 3,
    OVERFLOW_VISIBLE: 0,
    OVERFLOW_HIDDEN: 1,
    OVERFLOW_SCROLL: 2,

    POSITION_TYPE_COUNT: 2,
    POSITION_TYPE_RELATIVE: 0,
    POSITION_TYPE_ABSOLUTE: 1,

    PRINT_OPTIONS_COUNT: 3,
    PRINT_OPTIONS_LAYOUT: 1,
    PRINT_OPTIONS_STYLE: 2,
    PRINT_OPTIONS_CHILDREN: 4,

    UNIT_COUNT: 4,
    UNIT_UNDEFINED: 0,
    UNIT_POINT: 1,
    UNIT_PERCENT: 2,
    UNIT_AUTO: 3,

    WRAP_COUNT: 3,
    WRAP_NO_WRAP: 0,
    WRAP_WRAP: 1,
    WRAP_WRAP_REVERSE: 2
};
module.exports = {
  //  yoga:require('./src/yoga'),
    app:require('./src'),
};