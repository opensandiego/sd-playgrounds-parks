# San Diego Playgrounds and Parks

[![Join the chat at https://gitter.im/opensandiego/sd-playgrounds-parks](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/opensandiego/sd-playgrounds-parks?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

## Table of contents
- [Pitch](#section_pitch "Pitch")
- [Goal](#section_goal "Goal")
- [Data](#section_data "Data")
- [Stack](#section_stack "Stack")
- [Installation](#section_installation "Installation")
  - [Build and development](#section_build "Build and development")
- [Skills](#section_skills "Skills")
- [Team](#section_team "team")
- [Similar projects](#section_similar "Similar projects")
- [Github](#section_github "Github")
- [Participate](#section_participate "How to Participate")

### <a name="section_pitch"></a>Pitch

Develop an app that a young mother could open on her smartphone and see the location of a city park close to her for her and her children to go to.

### <a name="section_goal"></a>Goal

- Prototype goal: web map showing family friendly parks and playgrounds in San Diego County
- Secondary goal: crowd-source locations
- Secondary goal: allow users to provide feedback

### <a name="section_data"></a>Data

- Park data from [SanGIS](http://www.sangis.org/ "San Diego Geographic Information Source") (polygons)
- Parks in [OpenStreetMap](https://www.openstreetmap.org/ "OpenStreetMap") (polygon and points)
 - [leisure=playground](http://wiki.openstreetmap.org/wiki/Tag:leisure%3Dplayground) tag on OSM wiki
 - [playground=*](http://wiki.openstreetmap.org/wiki/Key:playground) key on OSM wiki
 - Sample [Leafleft map](http://overpass-turbo.eu/map.html?Q=%2F*%0AThis%20query%20looks%20for%20nodes%2C%20ways%20and%20relations%20%0Awith%20the%20given%20key%2Fvalue%20combination.%0AChoose%20your%20region%20and%20hit%20the%20Run%20button%20above!%0A*%2F%0A%5Bout%3Ajson%5D%5Btimeout%3A25%5D%3B%0A%2F%2F%20gather%20results%0A(%0A%20%20%2F%2F%20query%20part%20for%3A%20%E2%80%9Cleisure%3Dplayground%E2%80%9D%0A%20%20node%5B%22leisure%22%3D%22playground%22%5D(32.58153501413734%2C-117.33947753906249%2C32.945877572188245%2C-116.87667846679689)%3B%0A%20%20way%5B%22leisure%22%3D%22playground%22%5D(32.58153501413734%2C-117.33947753906249%2C32.945877572188245%2C-116.87667846679689)%3B%0A%20%20relation%5B%22leisure%22%3D%22playground%22%5D(32.58153501413734%2C-117.33947753906249%2C32.945877572188245%2C-116.87667846679689)%3B%0A)%3B%0A%2F%2F%20print%20results%0Aout%20body%3B%0A%3E%3B%0Aout%20skel%20qt%3B) from Overpass generated data
- Playgrounds interpreted from Bing/USGS imagery (points)

### <a name="section_stack"></a>Stack

- [Leaflet](http://leafletjs.com/ "Leaflet JavaScript Library")
- Geolocation interface on mobile device
- [Twitter Bootstrap](https://github.com/twbs/bootstrap "The most popular HTML, CSS, and JavaScript framework for developing responsive, mobile first projects on the web")
- [Modernizr](https://github.com/Modernizr/Modernizr "Modernizr is a JavaScript library that detects HTML5 and CSS3 features in the user’s browser")
- [jQuery](https://github.com/jquery/jquery "jQuery JavaScript Library")

### <a name="section_installation"></a>Installation

This project was generated with the [Yeoman webapp generator](https://github.com/yeoman/generator-webapp)
version 1.0.1.

Clone or fork this repository and ensure the following tools are available:
- [Node Package Manager](https://www.npmjs.com/) (NPM)
- [Grunt](http://gruntjs.com/)
- [Bower](http://bower.io/)

Enter your local copy's directory, run `npm install` then `bower install`. Grab some coffee :coffee: …this could take a while

 NPM will install Grunt task runners and dependencies. Bower will install Bootstrap, Chai, jQuery, Leaflet, Mocha, and Modernizr. All of these files will be stored in your project folder under `bower_components/` and `node_modules/` and are referenced automatically in your project. Do not modify these directories. Note: These directories are not included in Git, and are excluded via `.gitignore`.

#### <a name="section_build"></a>Build and development

To add dependencies, `bower install --save [package]` then `grunt wiredep` to ensure the dependency package is referenced by the project. By building with this method, all dependencies will get consolidated properly into the app at deployment using `grunt build`.

Run `grunt serve` for preview, make customizations **only** in the `app/` folder, and `grunt build` to build a release candidate. Grunt will automatically change the dependency paths of all resources to an official CDN or a directory under `dist/`.

Deploy the `dist/` directory to your web host.

### <a name="section_skills"></a>Skills

- GIS (5 hours): Cristiano
- OSM/Image Interpretation (10 hours): ?
- JavaScript (10 hours): James
- HTML5/CSS3 (10 hours): Glenn and others, please!

### <a name="section_team"></a>Team

- [Xavier Leonard](https://github.com/merelyanode "merelyanode")
- [Cristiano Giovando](https://github.com/cgiovando "cgiovando")
- Gary Hayslip
- [James Villanueva](https://github.com/enigma2522 "enigma2522")
- [Glenn Batuyong](https://github.com/47ronin "47ronin")

### <a name="section_similar"></a>Similar projects

[http://www.sandiegocounty.gov/parks/pmap_google.html](http://www.sandiegocounty.gov/parks/pmap_google.html)

### <a name="section_github"></a>GitHub

[https://github.com/opensandiego/sd-playgrounds-parks](https://github.com/opensandiego/sd-playgrounds-parks)

- **Master** branch: Web implementation
- **gh-pages** branch: Web implementation, trunk

### <a name="section_participate"></a>How to Participate

- Chat with us on the project channel [![Join the chat at https://gitter.im/opensandiego/sd-playgrounds-parks](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/opensandiego/sd-playgrounds-parks?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)
- Email us at [opensandiego@googlegroups.com](opensandiego@googlegroups.com)
- Join our [meetups](http://www.meetup.com/Open-San-Diego)
