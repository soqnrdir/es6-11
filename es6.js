{
/** 
 * Shorthand property names
 */ 
    console.log('Shorthand property names\n');

    const ellie1 = {
        name: 'Ellie',
        age: '18',
    };

    const name = 'Ellie';
    const age = '18';

    const ellie2 = {
        name: name,
        age: age,
    };

    const ellie3 = {
        name,
        age,
    };

    console.log(ellie1, ellie2, ellie3);

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Destructuring Assignment
 */ 
    console.log('Destructuring Assignment\n');

    // object
    const student = {
        name: 'Anna',
        level: 1,
    };

    {
        const name = student.name;
        const level = student.level;
        console.log(name, level);
    }

    {
        const {name, level} = student;
        console.log(name, level);

        const {name: studentName, level: studentLevel} = student;
        console.log(studentName, studentLevel);
    }

    // array
    const stars = ['★', '☆'];

    {
        const first = stars[0];
        const second = stars[1];
        console.log(first, second);
    }

    {
        const [first, second] = stars;
        console.log(first, second);
    }

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Spread Syntax
 */ 
    console.log('Spread Syntax\n');

    const obj1 = { key: 'key1' };
    const obj2 = { key: 'key2' };
    const array = [obj1, obj2];

    //array copy
    const arrayCopy = [...array]
    console.log(array, arrayCopy);

    const arrayCopy2 = [...array, { key: 'key3' }];
    obj1.key = 'netKey';
    console.log(array, arrayCopy, arrayCopy2);

    // object copy
    const obj3 = {...obj1};
    console.log(obj3);

    //array concatenation
    const fruits1 = ['🍑', '🍓'];
    const fruits2 = ['🍌', '🥝'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    //object merge
    const dog1 = {dog: '🐕'};
    const dog2 = {dog: '🐶'};
    //key value가 같으면 뒤에 있는 값이 앞의 값을 덮어 씌움
    const dog = {...dog1, ...dog2};
    console.log(dog);

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Default parameters
 */ 
    console.log('Default parametersn\n');
    {
        function printMessage(message) {
            if (message == null) {
                message = 'default message';
              }
            console.log(message);
        }
    }

    printMessage('hello');
    printMessage();

    {
        function printMessage(message = 'default message') {
            console.log(message);
        }
    }

    printMessage('hello');
    printMessage();

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Ternary Operator
 */ 
    console.log('Ternary Operator\n');

    const isCat = true;

    {
        let component;
        if( isCat ) {
            component = '🐱';
        } else {
            component = '🐶';
        }
        console.log(component);
    }

    {
        // isCat ? true : false
        const componet = isCat ? '🐱' : '🐶';
        console.log(componet);
        console.log(isCat ? '🐱' : '🐶');
    }
    console.clear();

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Template Literals
 */ 
    console.log('Template Literals\n');

    const weather = '⛅';
    const temparature = '16ºC';

    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
    // recommand
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}