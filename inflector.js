(function() {
  var flat, parsed, twoDigit;

  parsed = function(n) {
    if (typeof n === 'string') {
      return parseInt(n, 10);
    } else {
      return n;
    }
  };

  flat = function(f, words) {
    var n;
    n = parsed(f);
    if (n === 0 || (n > 4 && n < 10)) {
      return words[2];
    } else if (n === 1) {
      return words[0];
    } else {
      return words[1];
    }
  };

  twoDigit = function(f, words) {
    var first, second;
    first = f[0];
    second = f[1];
    if (first === '1') {
      return words[2];
    }
    return flat(parsed(second), words);
  };

  this.Inflector = (function() {
    function Inflector(words) {
      this.words = words;
    }

    Inflector.prototype.inflect = function(n) {
      var length, s;
      s = "" + (parsed(n));
      length = s.length;
      if (length === 1) {
        return flat(num, this.words);
      } else {
        return twoDigit(s.slice(length - 2, +length + 1 || 9e9), this.words);
      }
    };

    return Inflector;

  })();

}).call(this);
