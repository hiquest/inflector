parsed = (n) ->
    if typeof n == 'string'
        parseInt(n, 10)
    else
        n

flat = (f, words) ->
    n = parsed(f)
    if n == 0 or (n > 4 and n < 10)
        words[2]
    else if n == 1
        words[0]
    else
        words[1]

twoDigit = (f, words) ->
    first = f[0]
    second = f[1]
    return words[2] if first == '1'
    flat parsed(second), words


class @Inflector

    # ?       1       2      5
    # like ['год', 'года', 'лет']
    # like ['день', 'дня', 'дней']
    # like ['книга', 'книги', 'книг']
    constructor: (@words) ->

    # n - number of string (get parsed as decimal)
    inflect: (n) ->
        # TODO: prevent other types?
        num = parsed(n)
        s = "#{num}"
        length = s.length
        if length == 1
            flat(num, @words)
        else
            twoDigit s[length - 2..length], @words