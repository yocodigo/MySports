'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('nbaTeams', [{
        name: "Atlanta Hawks", 
        color1:"#E03A3E",
        color2: "#C4D600",
        logo: "http://content.sportslogos.net/logos/6/220/full/9168_atlanta_hawks-primary-2016.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Boston Celtics",
        color1: "#008248",
        color2: "#BA9653",
        logo: "http://content.sportslogos.net/logos/6/213/thumbs/slhg02hbef3j1ov4lsnwyol5o.gif",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Brooklyn Nets",
        color1: "#000000",
        color2: "#FFFFFF",
        logo: "http://content.sportslogos.net/logos/6/3786/full/137_brooklyn-nets-primary-2013.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Charlotte Hornets",
        color1: "#1D1160",
        color2: "#00788C",
        logo: "http://content.sportslogos.net/logos/6/5120/full/1926_charlotte__hornets_-primary-2015.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Chicago Bulls",
        color1: "#CE1141",
        color2: "#000000",
        logo: "http://content.sportslogos.net/logos/6/221/full/hj3gmh82w9hffmeh3fjm5h874.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Cleveland Cavaliers",
        color1: "#6F2633",
        color2: "#FFB81C",
        logo: "http://content.sportslogos.net/logos/6/222/full/6921_cleveland_cavaliers-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Dallas Mavericks",
        color1: "#007DC5",
        color2: "#C4CED4",
        logo: "http://content.sportslogos.net/logos/6/222/full/6921_cleveland_cavaliers-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Denver Nuggets",
        color1: "#00285E",
        color2: "#5091CD",
        logo: "http://content.sportslogos.net/logos/6/228/full/3463_dallas_mavericks-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Detroit Pistons",
        color1: "#E01E38",
        color2: "#0C4C93",
        logo: "http://content.sportslogos.net/logos/6/223/full/2164_detroit_pistons-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Golden State Warriors",
        color1: "#243E90",
        color2: "#FFCD34",
        logo: "http://content.sportslogos.net/logos/6/235/full/qhhir6fj8zp30f33s7sfb4yw0.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Houston Rockets",
        color1: "#CE1141",
        color2: "#FDB927",
        logo: "http://content.sportslogos.net/logos/6/230/full/8xe4813lzybfhfl14axgzzqeq.gif",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Indiana Pacers",
        color1: "#002D62",
        color2: "#FDBB30",
        logo: "http://content.sportslogos.net/logos/6/224/full/4812_indiana_pacers-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Los Angeles Clippers",
        color1: "#ED174C",
        color2: "#006BB6",
        logo: "http://content.sportslogos.net/logos/6/236/full/5462_los_angeles_clippers-primary-2016.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Los Angeles Lakers",
        color1: "#552583",
        color2: "#FDB927",
        logo: "http://content.sportslogos.net/logos/6/237/full/uig7aiht8jnpl1szbi57zzlsh.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Memphis Grizzlies",
        color1: "#00285E",
        color2: "#6189B9",
        logo: "http://content.sportslogos.net/logos/6/231/full/793.gif",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Miami Heat",
        color1: "#98002E",
        color2: "#F9A018",
        logo: "http://content.sportslogos.net/logos/6/214/full/burm5gh2wvjti3xhei5h16k8e.gif",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Milwaukee Bucks",
        color1: "#00471B",
        color2: "#EEE1C6",
        logo: "http://content.sportslogos.net/logos/6/225/full/8275_milwaukee_bucks-primary-2016.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Minnesota Timberwolves",
        color1: "#002B5C",
        color2: "#005083",
        logo: "http://content.sportslogos.net/logos/6/232/full/9669_minnesota_timberwolves-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "New Orleans Pelicans",
        color1: "#0C2340",
        color2: "#C8102E",
        logo: "http://content.sportslogos.net/logos/6/4962/full/2681_new_orleans_pelicans-primary-2014.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "New York Knicks",
        color1: "#006BB6",
        color2: "#F58426",
        logo: "http://content.sportslogos.net/logos/6/216/full/2nn48xofg0hms8k326cqdmuis.gif",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Oklahoma City Thunder",
        color1: "#007AC1",
        color2: "#002D62",
        logo: "http://content.sportslogos.net/logos/6/2687/full/khmovcnezy06c3nm05ccn0oj2.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Orlando Magic",
        color1: "#0B77BD",
        color2: "#C2CCD2",
        logo: "http://content.sportslogos.net/logos/6/217/full/wd9ic7qafgfb0yxs7tem7n5g4.gif",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Philadelphia 76ers",
        color1: "#006BB6",
        color2: "#ED174C",
        logo: "http://content.sportslogos.net/logos/6/218/full/7034_philadelphia_76ers-primary-2016.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Phoenix Suns",
        color1: "#E56020",
        color2: "#1D1160",
        logo: "http://content.sportslogos.net/logos/6/238/full/4370_phoenix_suns-primary-2014.png",
        createdAt: new Date(),
        updatedAt: new Date()
     }, {
        name: "Portland Trailblazers",
        color1: "#E13A3E",
        color2: "#C4CED4",
        logo: "http://content.sportslogos.net/logos/6/239/full/9725_portland_trail_blazers-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        name: "Sacramento Kings",
        color1: "#5A2D81",
        color2: "#63727A",
        logo: "http://content.sportslogos.net/logos/6/240/full/4043_sacramento_kings-primary-2017.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        name: "San Antonio Spurs",
        color1: "#C4CED4",
        color2: "#000000",
        logo: "http://content.sportslogos.net/logos/6/233/full/2547_san_antonio_spurs-primary-2018.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        name: "Toronto Raptors",
        color1: "#CD1141",
        color2: "#A0A0A3",
        logo: "http://content.sportslogos.net/logos/6/227/full/4578_toronto_raptors-primary-2016.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        name: "Utah Jazz",
        color1: "#0C2340",
        color2: "#00471B",
        logo: "http://content.sportslogos.net/logos/6/234/full/6749_utah_jazz-primary-2017.png",
        createdAt: new Date(),
        updatedAt: new Date()
      },  {
        name: "Washington Wizards",
        color1: "#002B5C",
        color2: "#E31837",
        logo: "http://content.sportslogos.net/logos/6/219/full/5671_washington_wizards-primary-2016.png",
        createdAt: new Date(),
        updatedAt: new Date()
      }

    ]);
    
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('Person', null, {});
    */
  }
};
