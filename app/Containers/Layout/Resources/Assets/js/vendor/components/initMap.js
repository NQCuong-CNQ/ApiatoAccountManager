// set promise googleMaps để khi load thư viện API googleMaps xong mới khởi chạy hàm callback của API là initMap
// hàm initMap là hàm callback của thư viện được khai báo trong link js thư viện googleMap 
var _mapResolve, _mapReject;
var googleMapDeferred = new Promise(function (resolve, reject) {

    _mapResolve = resolve;
    _mapReject = reject;
});
googleMapDeferred.resolve = _mapResolve;
googleMapDeferred.reject = _mapReject;

window.googleMapDeferred = googleMapDeferred;
window.initMap = function() {

    googleMapDeferred.resolve();
};