// @note - All these routes will be without a trailibg forward slash '/', so concat endpoints yourselves
// @todo -> Replace `example.com` with the url to the deployed
exports.BASE_API_ROUTE =
  process.env.NODE_ENV === "development"
    ? "https://potential-system-5j5gjppp7q624x45-5000.app.github.dev"
    : "https://example.com";

exports.LOGIN_ROUTE = `${this.BASE_API_ROUTE}/user/login`;
//exports.LOGIN_ROUTE = `${this.BASE_API_ROUTE}/login`;

exports.SIGN_UP_ROUTES = {
  ind: `${this.BASE_API_ROUTE}/sign_up`,
  org: `${this.BASE_API_ROUTE}/sign_up/org`,
};
