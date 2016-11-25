import request from 'superagent'

export default (store) => (next) => (action) => {
    const { url, data, type } = action;

    if(!url) return next(action);

    next({type: type + "_START"});

    request.post(url)
        .send(data)
        .end( (err, response) => {

            if(err) {
                action.error = response.text;
                action.type += "_FAIL";
                return next(action);
            }

            action.payload = response.body;
            action.type = type + "_SUCCESS";
            return next(action);
        });
}