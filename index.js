let soap = require('strong-soap').soap;

let url = 'http://localhost:8080/ws/teams.wsdl';

let options = {};

soap.createClient(
    url, 
    options, 
    function(err, client) {

        let soapRequestParam = {
            getTeamRequest: {
                name: 'ASSE'
            }
        };

        client.getTeam(
            soapRequestParam, 
            function(err, result, envelope, soapHeader) {

                console.log(result);
            }
        );
    }
);


soap.createClient(
    url, 
    options, 
    function(err, client) {

        let soapRequestParam = {
            getPlayerRequest: {
                name: 'Kylian Mbappé'
            }
        };

        client.getPlayer(
            soapRequestParam, 
            function(err, result, envelope, soapHeader) {

                console.log(result);
            }
        );
    }
);

soap.createClient(
    url, 
    options, 
    function(err, client) {

        let soapRequestParam = {
            getAllTeamRequest: {
                }
        };

        client.getAllTeam(
            soapRequestParam, 
            function(err, result, envelope, soapHeader) {

                console.log(result);
            }
        );
    }
);


soap.createClient(
    url, 
    options, 
    function(err, client) {

        let soapRequestParam = {
            getAllPlayerRequest: {
                }
        };

        client.getAllPlayer(
            soapRequestParam, 
            function(err, result, envelope, soapHeader) {

                console.log(result);
            }
        );
    }
);