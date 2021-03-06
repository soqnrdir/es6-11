{
/** 
 * Shorthand property names
 */ 
    console.log('Shorthand property names\n');

    const riel1 = {
        name: 'Riel',
        age: '26',
    };

    const name = 'Riel';
    const age = '26';

    const riel2 = {
        name: name,
        age: age,
    };

    const riel3 = {
        name,
        age,
    };

    console.log(riel1, riel2, riel3);

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
    const stars = ['β', 'β'];

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
    const fruits1 = ['π', 'π'];
    const fruits2 = ['π', 'π₯'];
    const fruits = [...fruits1, ...fruits2];
    console.log(fruits);

    //object merge
    const dog1 = {dog: 'π'};
    const dog2 = {dog: 'πΆ'};
    //key valueκ° κ°μΌλ©΄ λ€μ μλ κ°μ΄ μμ κ°μ λ?μ΄ μμ
    const dog = {...dog1, ...dog2};
    console.log(dog);

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Default parameters
 */ 
    console.log('Default parameters\n');
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
            component = 'π±';
        } else {
            component = 'πΆ';
        }
        console.log(component);
    }

    {
        // isCat ? true : false
        const componet = isCat ? 'π±' : 'πΆ';
        console.log(componet);
        console.log(isCat ? 'π±' : 'πΆ');
    }
    console.clear();

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Template Literals
 */ 
    console.log('Template Literals\n');

    const weather = 'β';
    const temparature = '16ΒΊC';

    console.log(
        'Today weather is ' + weather + ' and temparature is ' + temparature + '.'
    );
    // recommand
    console.log(`Today weather is ${weather} and temparature is ${temparature}.`);
}