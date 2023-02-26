// Factory Function
function createCircle(radius){
    return {
        radius, 
        draw: function() {
            console.log('draw in Factory Function');
        }
    };
}

console.log('---index2.js---')
const circle2 = createCircle(1);
circle2.draw();

// Constructor Function
function Circle(radius) {
    this.radius = radius;

    let defaultLocation = { x: 0, y: 0};

    this.getDefaultLocation = function() {
        return defaultLocation;
    }

    this.draw = function() {
        console.log('draw in Constructor Function');
    }

    Object.defineProperty(this, 'defaultlocation', {
        get: function() {
            return defaultLocation;
        },
        set: function(value) {
            if (!value.x || !value.y) {
                throw new Error('Invalid location.')
            }
            defaultLocation = value;
        }
    });
}

const another = new Circle(1);
another.getDefaultLocation();
another.defaultLocation = { x: 1, y: 1 };
another.draw();

// Add Property
another.location = { x: 1 };
const properName = 'location';
another[properName] = { x: 2 };

// Delete Property
delete another['location']

for (let key in another) {
    if (typeof another[key] !== 'function') {
        console.log(key, another[key]);
    }
}

const keys = Object.keys(another);
console.log(keys);

if ('radius' in another) {
    console.log('radius is in another');
}


Circle.call({}, 1);
Circle.apply({}, [1, 2, 3]);

// const Circle1 = new Function('radius', `
// this.radius = radius;
// this.draw = function() {
//     console.log('draw in Constructor Function');
// }
// `);

// const circle = new Circle1(1);