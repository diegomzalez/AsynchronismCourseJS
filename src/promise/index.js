/**
 * The functions is a promise
 * @returns the promise
 */
const somethingWillHappen = () => {
        return new Promise((resolve, reject) => {
                true ?
                resolve('Hey'):
                reject('Whooops');
        });
};

somethingWillHappen()
        .then(response => console.log(response))
        .catch(err => console.error(err));
/**
 * The functions is a promise
 * @returns the promise
 */
const somethingWillHappen2 = () => {
        return new Promise((resolve, reject) => {
                if (true) {
                setTimeout(() => {
                        resolve('True')
                }, 2000)
        } else {
                const error = new Error('Whoops');
                reject(error);
        }
        });
}
somethingWillHappen2()
        .then(response => console.log(response))
        .catch(err => console.error(err))


Promise.all([somethingWillHappen(), somethingWillHappen2()])
        .then(response => {
                console.log('Array of results', response);
        })
        .catch(err => {
                console.error(err)
        })