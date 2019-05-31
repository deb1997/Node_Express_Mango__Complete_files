const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

// create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });

// Contacts
let contacts = [];
let sno = 100;

let profiles = [{"id":1,"first_name":"Lorene","last_name":"Huertas","email":"lhuertas0@ifeng.com","gender":"Female","ip_address":"61.18.108.196"},{"id":2,"first_name":"Vito","last_name":"Penhaleurack","email":"vpenhaleurack1@elegantthemes.com","gender":"Male","ip_address":"27.72.72.92"},{"id":3,"first_name":"Felizio","last_name":"Broadbridge","email":"fbroadbridge2@drupal.org","gender":"Male","ip_address":"176.10.201.13"},{"id":4,"first_name":"Claresta","last_name":"Skyppe","email":"cskyppe3@example.com","gender":"Female","ip_address":"93.108.9.118"},{"id":5,"first_name":"Bernita","last_name":"Tansill","email":"btansill4@dot.gov","gender":"Female","ip_address":"191.91.122.32"},{"id":6,"first_name":"Ree","last_name":"Kiledal","email":"rkiledal5@liveinternet.ru","gender":"Female","ip_address":"205.119.212.177"},{"id":7,"first_name":"Bradan","last_name":"Fleis","email":"bfleis6@google.it","gender":"Male","ip_address":"46.149.15.42"},{"id":8,"first_name":"Thaine","last_name":"Roddie","email":"troddie7@indiatimes.com","gender":"Male","ip_address":"129.198.239.157"},{"id":9,"first_name":"Emilia","last_name":"Jenkinson","email":"ejenkinson8@printfriendly.com","gender":"Female","ip_address":"125.125.147.176"},{"id":10,"first_name":"Nickie","last_name":"Ragborne","email":"nragborne9@mapquest.com","gender":"Male","ip_address":"119.43.2.200"},{"id":11,"first_name":"Bear","last_name":"Slide","email":"bslidea@mapy.cz","gender":"Male","ip_address":"130.96.35.18"},{"id":12,"first_name":"Rafael","last_name":"Chillingworth","email":"rchillingworthb@theglobeandmail.com","gender":"Male","ip_address":"251.148.141.161"},{"id":13,"first_name":"Maxy","last_name":"Feldmark","email":"mfeldmarkc@gnu.org","gender":"Female","ip_address":"86.153.193.172"},{"id":14,"first_name":"Minni","last_name":"Negal","email":"mnegald@alibaba.com","gender":"Female","ip_address":"243.254.68.29"},{"id":15,"first_name":"Delinda","last_name":"Putson","email":"dputsone@google.it","gender":"Female","ip_address":"234.179.165.155"},{"id":16,"first_name":"Gerhardine","last_name":"Hardy-Piggin","email":"ghardypigginf@elpais.com","gender":"Female","ip_address":"106.30.36.231"},{"id":17,"first_name":"Aristotle","last_name":"Warwicker","email":"awarwickerg@google.es","gender":"Male","ip_address":"124.210.91.92"},{"id":18,"first_name":"Marlie","last_name":"Hedan","email":"mhedanh@studiopress.com","gender":"Female","ip_address":"65.107.94.177"},{"id":19,"first_name":"Ivett","last_name":"Startin","email":"istartini@devhub.com","gender":"Female","ip_address":"70.253.3.30"},{"id":20,"first_name":"Hobey","last_name":"Ronaghan","email":"hronaghanj@jimdo.com","gender":"Male","ip_address":"149.27.172.84"},{"id":21,"first_name":"Kenneth","last_name":"Meere","email":"kmeerek@jiathis.com","gender":"Male","ip_address":"192.188.216.254"},{"id":22,"first_name":"Burnaby","last_name":"Stanluck","email":"bstanluckl@latimes.com","gender":"Male","ip_address":"178.142.193.231"},{"id":23,"first_name":"Dorie","last_name":"Carnilian","email":"dcarnilianm@1und1.de","gender":"Male","ip_address":"233.244.5.41"},{"id":24,"first_name":"Webster","last_name":"Walcar","email":"wwalcarn@symantec.com","gender":"Male","ip_address":"69.104.50.196"},{"id":25,"first_name":"Orelie","last_name":"Mustill","email":"omustillo@addtoany.com","gender":"Female","ip_address":"137.233.152.30"},{"id":26,"first_name":"Mord","last_name":"Lawty","email":"mlawtyp@pbs.org","gender":"Male","ip_address":"127.208.36.113"},{"id":27,"first_name":"Rochell","last_name":"Reeman","email":"rreemanq@seattletimes.com","gender":"Female","ip_address":"133.7.129.253"},{"id":28,"first_name":"Dolores","last_name":"Garrad","email":"dgarradr@surveymonkey.com","gender":"Female","ip_address":"186.164.249.41"},{"id":29,"first_name":"Kevina","last_name":"Baynes","email":"kbayness@edublogs.org","gender":"Female","ip_address":"105.83.86.45"},{"id":30,"first_name":"Mathias","last_name":"Issacson","email":"missacsont@1und1.de","gender":"Male","ip_address":"176.129.216.73"},{"id":31,"first_name":"Jesse","last_name":"Pellingar","email":"jpellingaru@cornell.edu","gender":"Male","ip_address":"94.209.12.233"},{"id":32,"first_name":"Earl","last_name":"Brunnstein","email":"ebrunnsteinv@scribd.com","gender":"Male","ip_address":"19.239.31.178"},{"id":33,"first_name":"Ilise","last_name":"Evill","email":"ievillw@hatena.ne.jp","gender":"Female","ip_address":"79.11.61.98"},{"id":34,"first_name":"Shel","last_name":"Wardall","email":"swardallx@homestead.com","gender":"Female","ip_address":"121.168.15.241"},{"id":35,"first_name":"Clotilda","last_name":"Bezants","email":"cbezantsy@newyorker.com","gender":"Female","ip_address":"86.168.31.207"},{"id":36,"first_name":"Devy","last_name":"Yes","email":"dyesz@mediafire.com","gender":"Male","ip_address":"144.205.248.8"},{"id":37,"first_name":"Goldia","last_name":"Amesbury","email":"gamesbury10@sciencedaily.com","gender":"Female","ip_address":"204.18.149.59"},{"id":38,"first_name":"Uriel","last_name":"Pllu","email":"upllu11@aol.com","gender":"Male","ip_address":"78.116.104.218"},{"id":39,"first_name":"Gretchen","last_name":"Kuzma","email":"gkuzma12@ifeng.com","gender":"Female","ip_address":"12.135.38.116"},{"id":40,"first_name":"Darlene","last_name":"Braunfeld","email":"dbraunfeld13@ft.com","gender":"Female","ip_address":"157.56.6.212"},{"id":41,"first_name":"Nicolea","last_name":"Forber","email":"nforber14@fema.gov","gender":"Female","ip_address":"150.142.62.63"},{"id":42,"first_name":"Hansiain","last_name":"Norval","email":"hnorval15@jugem.jp","gender":"Male","ip_address":"190.1.19.58"},{"id":43,"first_name":"Caldwell","last_name":"Rubinovitch","email":"crubinovitch16@parallels.com","gender":"Male","ip_address":"215.42.139.71"},{"id":44,"first_name":"Hilde","last_name":"Gilfillan","email":"hgilfillan17@amazon.co.uk","gender":"Female","ip_address":"137.135.51.168"},{"id":45,"first_name":"Joellen","last_name":"Elmar","email":"jelmar18@woothemes.com","gender":"Female","ip_address":"110.64.38.200"},{"id":46,"first_name":"Marthena","last_name":"Alenikov","email":"malenikov19@washington.edu","gender":"Female","ip_address":"225.146.37.155"},{"id":47,"first_name":"Gussi","last_name":"Hanratty","email":"ghanratty1a@sourceforge.net","gender":"Female","ip_address":"168.202.20.3"},{"id":48,"first_name":"Giraldo","last_name":"Conisbee","email":"gconisbee1b@oakley.com","gender":"Male","ip_address":"209.25.16.173"},{"id":49,"first_name":"Jenine","last_name":"Williscroft","email":"jwilliscroft1c@sciencedirect.com","gender":"Female","ip_address":"0.118.17.24"},{"id":50,"first_name":"Victoir","last_name":"Allebone","email":"vallebone1d@mozilla.org","gender":"Male","ip_address":"125.110.179.41"},{"id":51,"first_name":"Angelina","last_name":"Slyford","email":"aslyford1e@dailymotion.com","gender":"Female","ip_address":"6.87.100.136"},{"id":52,"first_name":"Mahmud","last_name":"Renzo","email":"mrenzo1f@symantec.com","gender":"Male","ip_address":"205.246.205.223"},{"id":53,"first_name":"Flossie","last_name":"Feehery","email":"ffeehery1g@networksolutions.com","gender":"Female","ip_address":"99.252.243.49"},{"id":54,"first_name":"Saunders","last_name":"Godwin","email":"sgodwin1h@businesswire.com","gender":"Male","ip_address":"42.114.88.157"},{"id":55,"first_name":"Sollie","last_name":"Dummer","email":"sdummer1i@mozilla.com","gender":"Male","ip_address":"133.13.183.104"},{"id":56,"first_name":"Jinny","last_name":"Mulholland","email":"jmulholland1j@microsoft.com","gender":"Female","ip_address":"21.48.212.77"},{"id":57,"first_name":"Virgil","last_name":"Watkiss","email":"vwatkiss1k@usda.gov","gender":"Male","ip_address":"49.47.103.135"},{"id":58,"first_name":"Rab","last_name":"McVitie","email":"rmcvitie1l@cbc.ca","gender":"Male","ip_address":"244.164.216.176"},{"id":59,"first_name":"Holly","last_name":"Petegre","email":"hpetegre1m@yahoo.com","gender":"Male","ip_address":"240.213.6.100"},{"id":60,"first_name":"Rocky","last_name":"Flude","email":"rflude1n@sun.com","gender":"Male","ip_address":"163.145.83.50"},{"id":61,"first_name":"Benjamin","last_name":"Winterflood","email":"bwinterflood1o@mashable.com","gender":"Male","ip_address":"117.67.220.63"},{"id":62,"first_name":"Shir","last_name":"Casburn","email":"scasburn1p@slate.com","gender":"Female","ip_address":"134.44.238.133"},{"id":63,"first_name":"Decca","last_name":"Daybell","email":"ddaybell1q@elpais.com","gender":"Male","ip_address":"55.247.152.130"},{"id":64,"first_name":"Fransisco","last_name":"Whitlow","email":"fwhitlow1r@trellian.com","gender":"Male","ip_address":"90.242.162.137"},{"id":65,"first_name":"Beauregard","last_name":"Fairburn","email":"bfairburn1s@businessweek.com","gender":"Male","ip_address":"37.1.32.230"},{"id":66,"first_name":"Melinde","last_name":"Copestake","email":"mcopestake1t@indiatimes.com","gender":"Female","ip_address":"208.59.62.4"},{"id":67,"first_name":"Farly","last_name":"Thredder","email":"fthredder1u@squidoo.com","gender":"Male","ip_address":"82.4.30.59"},{"id":68,"first_name":"Aubrey","last_name":"Leathem","email":"aleathem1v@disqus.com","gender":"Female","ip_address":"119.191.40.119"},{"id":69,"first_name":"Laney","last_name":"Sanders","email":"lsanders1w@digg.com","gender":"Female","ip_address":"153.250.87.71"},{"id":70,"first_name":"Gilberta","last_name":"Gaze","email":"ggaze1x@opera.com","gender":"Female","ip_address":"62.183.70.235"},{"id":71,"first_name":"Lolita","last_name":"Mordan","email":"lmordan1y@wunderground.com","gender":"Female","ip_address":"107.209.124.238"},{"id":72,"first_name":"Hobey","last_name":"Marzele","email":"hmarzele1z@ox.ac.uk","gender":"Male","ip_address":"90.128.81.120"},{"id":73,"first_name":"Jemima","last_name":"Izzat","email":"jizzat20@i2i.jp","gender":"Female","ip_address":"226.200.51.201"},{"id":74,"first_name":"Tomlin","last_name":"Miguel","email":"tmiguel21@google.co.jp","gender":"Male","ip_address":"240.90.156.150"},{"id":75,"first_name":"Celestyna","last_name":"Ivasechko","email":"civasechko22@tumblr.com","gender":"Female","ip_address":"100.84.103.114"},{"id":76,"first_name":"Denney","last_name":"Minall","email":"dminall23@prweb.com","gender":"Male","ip_address":"159.65.79.173"},{"id":77,"first_name":"Edik","last_name":"Winch","email":"ewinch24@shareasale.com","gender":"Male","ip_address":"81.6.162.29"},{"id":78,"first_name":"Kerstin","last_name":"Boulde","email":"kboulde25@huffingtonpost.com","gender":"Female","ip_address":"68.130.206.80"},{"id":79,"first_name":"Felizio","last_name":"Landon","email":"flandon26@constantcontact.com","gender":"Male","ip_address":"79.133.151.28"},{"id":80,"first_name":"Peterus","last_name":"Prestedge","email":"pprestedge27@auda.org.au","gender":"Male","ip_address":"181.127.131.14"},{"id":81,"first_name":"Caresse","last_name":"MacDermott","email":"cmacdermott28@sciencedirect.com","gender":"Female","ip_address":"127.186.206.205"},{"id":82,"first_name":"Suzette","last_name":"Sanham","email":"ssanham29@fema.gov","gender":"Female","ip_address":"85.99.103.59"},{"id":83,"first_name":"Althea","last_name":"Shovlin","email":"ashovlin2a@pen.io","gender":"Female","ip_address":"120.130.21.40"},{"id":84,"first_name":"Ev","last_name":"Daviddi","email":"edaviddi2b@pbs.org","gender":"Male","ip_address":"141.187.205.165"},{"id":85,"first_name":"Freedman","last_name":"Howett","email":"fhowett2c@nps.gov","gender":"Male","ip_address":"136.108.107.185"},{"id":86,"first_name":"Antony","last_name":"Keems","email":"akeems2d@e-recht24.de","gender":"Male","ip_address":"50.46.101.3"},{"id":87,"first_name":"Aura","last_name":"Brookes","email":"abrookes2e@globo.com","gender":"Female","ip_address":"168.61.193.11"},{"id":88,"first_name":"Romain","last_name":"Masselin","email":"rmasselin2f@shareasale.com","gender":"Male","ip_address":"167.75.76.145"},{"id":89,"first_name":"Elle","last_name":"Leyban","email":"eleyban2g@bravesites.com","gender":"Female","ip_address":"13.211.169.127"},{"id":90,"first_name":"Georgeta","last_name":"Derham","email":"gderham2h@reverbnation.com","gender":"Female","ip_address":"94.77.48.150"},{"id":91,"first_name":"Albert","last_name":"Hairon","email":"ahairon2i@census.gov","gender":"Male","ip_address":"2.29.37.159"},{"id":92,"first_name":"Tomaso","last_name":"Rawe","email":"trawe2j@prlog.org","gender":"Male","ip_address":"100.22.137.76"},{"id":93,"first_name":"Fredrika","last_name":"Layman","email":"flayman2k@mtv.com","gender":"Female","ip_address":"119.167.175.54"},{"id":94,"first_name":"Port","last_name":"Bradwell","email":"pbradwell2l@dailymail.co.uk","gender":"Male","ip_address":"144.183.29.76"},{"id":95,"first_name":"Jeanine","last_name":"Fieldgate","email":"jfieldgate2m@vimeo.com","gender":"Female","ip_address":"116.33.82.66"},{"id":96,"first_name":"Chilton","last_name":"Antunez","email":"cantunez2n@tripadvisor.com","gender":"Male","ip_address":"220.70.77.216"},{"id":97,"first_name":"Dulsea","last_name":"Snodin","email":"dsnodin2o@squidoo.com","gender":"Female","ip_address":"98.176.207.162"},{"id":98,"first_name":"Cass","last_name":"Saxby","email":"csaxby2p@ted.com","gender":"Male","ip_address":"206.79.107.12"},{"id":99,"first_name":"Harman","last_name":"Baxill","email":"hbaxill2q@dailymail.co.uk","gender":"Male","ip_address":"37.210.165.49"},{"id":100,"first_name":"Fredrick","last_name":"Bills","email":"fbills2r@squidoo.com","gender":"Male","ip_address":"224.51.100.170"}];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',{pageTitle : 'Welcome to PUG'});
});

/* GET About page. */
router.get('/about', function(req, res, next) {
    res.render('about',{pageTitle : 'About Us'});
});

/* GET Contact page. */
router.get('/contact', function(req, res, next) {
    res.render('contact',{pageTitle : 'Contact Us'});
});

/* GET profile page. */
router.get('/profile', function(req, res, next) {
    let selectedProfile =
        {"id":'',
            "first_name":"",
            "last_name":"",
            "email":"",
            "gender":"",
            "ip_address":""};
    res.render('profile',{pageTitle : 'Welcome to Your Profile', selectedProfile : selectedProfile});
});

/* GET profile page with params. */
router.get('/profile/:id', function(req, res, next) {
    let profile_id = Number(req.params.id);
    let selectedProfile = profiles.find((profile) => {
        return profile.id === profile_id;
    });
    res.render('profile',{pageTitle : 'Welcome to Your Profile', selectedProfile : selectedProfile});
});

/* GET services page. */
router.get('/services', function(req, res, next) {
    res.render('services',{pageTitle : 'Welcome to Our Services',contacts : contacts});
});


/* POST Request for Contact Form */
router.post('/contact-form', urlencodedParser, function(req, res, next) {
    let contact = {
        id : sno,
        username : req.body.username,
        email : req.body.email,
        subject : req.body.subject,
        description : req.body.description
    };
    contacts.push(contact);
    sno++;
    res.render('services',{pageTitle : 'Welcome to Services' , contacts : contacts});
});

module.exports = router;