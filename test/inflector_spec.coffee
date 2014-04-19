describe 'Inflector', ->

    it 'should correctly init', ->
        i = new Inflector(['книга', 'книги', 'книг'])

        test = (num, word)->
            expect(i.inflect(num)).toBe word

        test 0, 'книг'
        test 1, 'книга'
        test 3, 'книги'
        test 4, 'книги'
        test 5, 'книг'
        test 6, 'книг'
        test 7, 'книг'
        test 10, 'книг'
        test 11, 'книг'
        test 12, 'книг'
        test 17, 'книг'
        test 19, 'книг'
        test 20, 'книг'
        test 21, 'книга'
        test 22, 'книги'
        test 25, 'книг'
        test 102, 'книги'
        test 111, 'книг'
        test 115, 'книг'
        test 121, 'книга'