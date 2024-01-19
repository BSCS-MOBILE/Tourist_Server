/**
 * Database seeder for Products
 */
const Tourist = require('../models/tourist.model');
const TouristService = require('../services/tourist.service')

const tourist = [
    {"touristName": "Cagsawa Ruins", "description": "The Cagsawa Ruins (also spelled as Kagsawa, historically spelled as Cagsaua) are the remnants of a 16th-century Franciscan church, the Cagsawa church. It was originally built in the town of Cagsawa in 1587 but was burned down and destroyed by Dutch pirates in 1636.", "price": "50.00", "image":"cagsawa.jpg"},
    {"touristName": "Albay Park and Wildlife", "description": "A picnic grove and a park rolled into one, this place is the best way to commune with nature right at the heart of Legazpi City. Have a satisfying get-together with your family and friends while roaming the park which houses 347 animals belonging to 75 species. The park is open from 8:00 AM to 6:00 PM daily except on Mondays.", "price": "30.00", "image":"wildlife.jpg"},
    {"touristName": "Daraga Church", "description": "Daraga Church is a rare and outstanding example of the Churrigueresque style in the Philippines. Developed at the height of Spanish Baroque from the late 17th to the early 18th century, the Churrigueresque style is often described as “Baroque on steroids” because of its florid and detailed ornamentation.", "price": "60.00", "image":"daragaChurch.jpg"},
    {"touristName": "Mayon Skyline View Deck", "description": "Mayon Skyline View Deck formerly known as Mayon Resthouse nestled halfway of Mayon Volcano.  This is one of the prime tourist attractions in Albay. A must-visit place because of the cool breeze, the breathtaking view, and the wonderful experience of getting up close to Mayon Volcano, the world’s most perfectly-formed volcano.", "price": "30.00", "image":"mayonSkyline.jpg"},
    {"touristName": "Ligñon Hill", "description": "Ligñon Hill is a prominent hill in the city of Legazpi, some 3 kilometers west of its downtown port area in Albay, Philippines. The summit rises to about 512 feet (156 meters), affording excellent views of the Mayon Volcano to the northwest and the entire city and Albay Gulf to the east.", "price": "60.00", "image":"lignon.jpg"}
];

const TouristSeeder = {
    
    clear: function() {
        return Tourist.collection.drop()
            .then(() => console.log('Tourist collection deleted'))
            .catch(err => console.error(err.errmsg));
    },

    seed: function() {
        const promises = [];
        tourist.forEach(tourist => {
            promises.push(TouristService.saveTourist(tourist));
        });

        return Promise.all(promises)
            .then(() => console.log('Tourist collection seeded successfully'))
            .catch(err => console.error(err));
    },

    freshSeed: async function() {
        await this.clear();
        return this.seed();
    }

}

module.exports = TouristSeeder;


