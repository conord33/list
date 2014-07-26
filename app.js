var config = require('./config'),
    express = require('express'),
    app = express();

app.post('/users', function(req, res) {
    res.json({
        userId: '4af9f23d8ead0e1d32000000',
        userName: 'walterWhite420lulz',
        list: []
    });
});

app.get('/users/:userId', function(req, res){
    res.json({
        userId: '4af9f23d8ead0e1d32000000',
        userName: 'walterWhite420lulz',
        list: [
            {
                itemId: '4af9f23d8ead0e1d32000006',
                title: 'Simple Song'
            },
            {
                itemId: '4af9f23d8ead0e1d32000007',
                title: 'Beast of Burden'
            },
            {
                itemId: '4af9f23d8ead0e1d32000008',
                title: 'Immigrant Song'
            }
        ]
    });
});

app.get('/users/:userId/friends', function(req, res){
    res.json([
        {
            userId: '4af9f23d8ead0e1d32000000',
            userName: 'walterwhite420lulz'
        },
        {
            userId: '4af9f23d8ead0e1d32000001',
            userName: 'gusloveschicken69'
        },
        {
            userId: '4af9f23d8ead0e1d32000002',
            userName: 'hodorhodor'
        }
    ]);
});

app.post('/users/:userId/share', function(req, res){
    res.json({
        userId: '4af9f23d8ead0e1d32000000',
        userName: 'walterWhite420lulz',
        list: [
            {
                title: 'Simple Song'
            },
            {
                title: 'Beast of Burden'
            },
            {
                title: 'Immigrant Song'
            },
            {
                title: 'Paint It Black'
            }
        ]
    });
});

app.delete('/users/:userId/list/:itemId', function(req, res){
    res.json({
        userId: '4af9f23d8ead0e1d32000000',
        userName: 'walterWhite420lulz',
        list: [
            {
                title: 'Simple Song'
            },
            {
                title: 'Beast of Burden'
            }
        ]
    });
});

var server = app.listen(config.port, function() {
    console.log('Listening on port %d', server.address().port);
});