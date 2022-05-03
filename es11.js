{
/** 
 * Optional Chaining (ES11)
*/
    console.log('Optional Chaining\n');

    const person1 = {
        name: 'Riel',
        job: {
            tirle: 'S/W Engineer',
            manager: {
                name: 'Jay',
            },
        },
    };
    const person2 = {
        name: 'Jay',
    };

    {
        function printManager(person) {
            console.log(person.job.manager.name);
        }
        printManager(person1);
        // person2에는 job이라는 오브젝트가 없기 때문에 오류 발생
        // printManager(person2);
    }

    {
        function printManager(person) {
            console.log(
                person.job 
                    ? person.job.manager
                        ? person.job.manager.name
                        : undefined
                    : undefined
                );
        }
        printManager(person1);
        printManager(person2);
    }

    {
        function printManager(person) {
            // 중복되는 문제
            console.log(person.job && person.job.manager && person.job.manager.name);
        }
        printManager(person1);
        printManager(person2);
    }

    {
        function printManager(person) {
            // 중복되는 문제를 축약해 해결!
            console.log(person.job?.manager?.name);
        }
        printManager(person1);
        printManager(person2);
    }

    console.log('-----------------------------------------------------------------------------------------');

/** 
 * Nullish Coalescing Operator (ES11)
*/
    console.log('Nullish Coalescing Operator\n');

    // Logical OR operator
    // false: false, '', 0, null, undefined
    
    {
        const name = 'Riel';
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = null;
        // name이 null 즉 false라면 뒤에 'Guest'값을 출력시킴
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const name = '';
        // '사용자가 설정한 방향대로 흘러가지 않는 경우가 생김1 => 값을 비우고 싶지만 false의 형태라 'Guest'가 들어감'
        const userName = name || 'Guest';
        console.log(userName);
    }

    {
        const num = 0;
        // '사용자가 설정한 방향대로 흘러가지 않는 경우가 생김2 => 기본값을 0으로 하고 싶지만 false의 형태라 'undefined'가 들어감'
        const userName = num || 'undefined';
        console.log(userName);
    }

    // 이러한 문제점을 해결하기 위해!
    {
        const name = '';
        const userName = name ?? 'Guest';
        console.log(userName)

        const num = 0;
        const message = num ?? 'undefined';
        console.log(message);
    }

}