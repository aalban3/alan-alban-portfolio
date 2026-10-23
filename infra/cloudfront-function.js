// CloudFront Function (cloudfront-js-2.0), viewer-request on the portfolio distribution.
// 1. 301s every non-canonical host (www., alan-alban.com) to https://alanalban.com.
// 2. Serves index.html for client-side routes like /work/dashdoc.
var CANONICAL_HOST = "alanalban.com";

function handler(event) {
  var request = event.request;
  var host = request.headers.host ? request.headers.host.value : "";

  if (host !== CANONICAL_HOST) {
    var qs = Object.keys(request.querystring)
      .map(function (k) {
        var v = request.querystring[k].value;
        return v ? k + "=" + v : k;
      })
      .join("&");
    return {
      statusCode: 301,
      statusDescription: "Moved Permanently",
      headers: {
        location: { value: "https://" + CANONICAL_HOST + request.uri + (qs ? "?" + qs : "") },
      },
    };
  }

  if (!/\.[a-zA-Z0-9]+$/.test(request.uri)) {
    request.uri = "/index.html";
  }
  return request;
}
