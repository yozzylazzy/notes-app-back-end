const TokenManager = {
    generateAccessToken(payload) {
        return Jwt.token.generate(payload, process.env.ACCESS_TOKEN_KEY);
    },
};

module.exports = TokenManager;