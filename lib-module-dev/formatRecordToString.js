import levelToSymbol from './levelToSymbol';
import levelToStyles from './levelToStyles';
import formatObject from './formatObject';

export default function formatRecordToString(record, style) {
  var parts = [];

  if (record.displayName) {
    parts.push(style(['gray-light'], record.displayName));
  } else if (record.key) {
    parts.push(style(['gray-light'], record.key));
  }

  if (record.datetime) {
    parts.push(style(['gray', 'bold'], record.datetime.toTimeString().split(' ')[0]));
    /* new Date().toFormat('HH24:MI:SS') */
  }

  var message = record.symbol || levelToSymbol[record.level];
  var styles = record.styles || levelToStyles[record.level];

  if (record.message) {
    if (message) {
      message += ' ' + record.message;
    } else {
      message = record.message;
    }
  }

  if (message) {
    if (styles) {
      message = style(styles, message);
    }
    parts.push(message);
  }

  ['metadata', 'extra', 'context'].forEach(function (key) {
    if (!record[key]) {
      return;
    }

    var stringObject = formatObject(record[key], style, record[key + 'Styles']);

    if (!stringObject) {
      return;
    }

    parts.push(stringObject);
  });

  return parts.join(' ');
}
//# sourceMappingURL=formatRecordToString.js.map