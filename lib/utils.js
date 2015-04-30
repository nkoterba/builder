var path = require('path');

/* Normalize URL or path to an absolute path, if it corresponds to one. */
function filePath(urlOrPath) {
  // give naked paths the benefit of the doubt that they are file paths
  if (path.isAbsolute(urlOrPath))
    return urlOrPath;
  else if (urlOrPath.substr(0, 5) === 'file:')
    return urlOrPath.replace(/^file:\/+/, '/');
}
exports.filePath = filePath;

exports.ensureFilePath = function(urlOrPath) {
  var value = filePath(urlOrPath);
  if (value)
    return value;
  else
    throw new Error("'" + urlOrPath + "' is not an absolute file path.");
};

