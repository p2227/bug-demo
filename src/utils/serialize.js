const isBoolean = (val) => {
  return Object.prototype.toString.call(val) === '[object Boolean]';
};

const isNull = (val) => {
  return Object.prototype.toString.call(val) === '[object Null]';
};

const isUndefined = (val) => {
  return Object.prototype.toString.call(val) === '[object Undefined]';
};

const isNumber = (val) => {
  return Object.prototype.toString.call(val) === '[object Number]';
};

const isString = (val) => {
  return Object.prototype.toString.call(val) === '[object String]';
};

const isObject = (val) => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

const isArray = (val) => {
  return Object.prototype.toString.call(val) === '[object Array]';
};

const isNullString = (val) => {
  return val === 'null';
};

const isUndefinedString = (val) => {
  return val === 'undefined';
};

const isBooleanString = (val) => {
  return val === 'false' || val === 'true';
};

const isObjectString = (val) => {
  try {
    return isObject(JSON.parse(val));
  } catch (err) {
    return false;
  }
};

const isArrayString = (val) => {
  try {
    return isArray(JSON.parse(val));
  } catch (err) {
    return false;
  }
};

const stringify = (val) => {
  if (isUndefined(val)) {
    return 'undefined';
  } else if (isNull(val)) {
    return 'null';
  } else if (isBoolean(val)) {
    return val ? 'true' : 'false';
  } else if (isNumber(val)) {
    return isFinite(val) ? val : '';
  } else if (isObject(val) || isArray(val)) {
    return JSON.stringify(val);
  } else if (isString(val)) {
    return val;
  } else {
    return '';
  }
};

const parse = (val) => {
  if (isUndefinedString(val)) {
    return undefined;
  } else if (isNullString(val)) {
    return null;
  } else if (isBooleanString(val)) {
    return val === 'true';
  } else if (isArrayString(val)) {
    return JSON.parse(val);
  } else if (isObjectString(val)) {
    return JSON.parse(val);
  } else {
    return val;
  }
};

const objectToQuery = (obj = {}) => {
  return Object.keys(obj).reduce((result, key) => {
    const value = obj[key];
    const encodeValue = encodeURIComponent(stringify(value));
    return result ? `${result}&${key}=${encodeValue}` : `${key}=${encodeValue}`;
  }, '');
};

const queryToObject = (query = '') => {
  return query
    .replace(/(^\?)/, '')
    .split('&')
    .reduce((result, item) => {
      const [key, value] = item.split('=');
      return { ...result, [key]: parse(decodeURIComponent(value)) };
    }, {});
};

export { parse, stringify, objectToQuery, queryToObject };
