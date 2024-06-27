const successResponseHandler = (req, res, next) => {
    // Simpan metode asli res.json
    const originalJson = res.json;

    res.json = function (body) {
        // Periksa apakah status adalah di rentang 2xx
        if (res.statusCode >= 200 && res.statusCode < 300) {
            const modifiedBody = {
                status: res.statusCode,
                message: 'Success',
                data: body
            };
            originalJson.call(this, modifiedBody);
        } else {
            originalJson.call(this, body);
        }
    };

    // Metode res.success untuk mengirim respons sukses
    res.success = function (data) {
        if (!res.statusCode || res.statusCode < 200 || res.statusCode >= 300) {
            res.status(200);
        }
        res.json(data);
    };

    next();
};

module.exports = successResponseHandler;