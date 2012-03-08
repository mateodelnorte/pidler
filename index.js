var fs = require('fs');

module.exports = function(options) {
  var filename;

  filename = (options && options.filename) || 'pid';

  if(process.env.PID_FILE_DIR){

    var pid = ''+process.pid;

    var path = (process.env.PID_FILE_DIR.lastIndexOf('/') === process.env.PID_FILE_DIR.length - 1)
                ? process.env.PID_FILE_DIR + filename
                : process.env.PID_FILE_DIR + '/' + filename;

    fs.writeFile(path, pid, function (err) {
       if (err) throw err;
       console.log('wrote pid file to', path);
    });

  }

}();

//.substring(0, process.env.PID_FILE_DIR.length - 1)
