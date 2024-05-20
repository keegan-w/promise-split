const split = (promise) => {
    return promise
        .then((done) => {
            return [done, null];
        })
        .catch((error) => {
            return [null, error];
        });
};

module.exports = {
	split
}
