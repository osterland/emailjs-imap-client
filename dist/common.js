'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var toTypedArray = exports.toTypedArray = function toTypedArray(str) {
  return new Uint8Array(str.split('').map(function (char) {
    return char.charCodeAt(0);
  }));
};
var fromTypedArray = exports.fromTypedArray = function fromTypedArray(arr) {
  return String.fromCharCode.apply(null, arr);
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21tb24uanMiXSwibmFtZXMiOlsidG9UeXBlZEFycmF5IiwiVWludDhBcnJheSIsInN0ciIsInNwbGl0IiwibWFwIiwiY2hhciIsImNoYXJDb2RlQXQiLCJmcm9tVHlwZWRBcnJheSIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsImFwcGx5IiwiYXJyIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFPLElBQU1BLHNDQUFlLFNBQWZBLFlBQWU7QUFBQSxTQUFPLElBQUlDLFVBQUosQ0FBZUMsSUFBSUMsS0FBSixDQUFVLEVBQVYsRUFBY0MsR0FBZCxDQUFrQjtBQUFBLFdBQVFDLEtBQUtDLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBUjtBQUFBLEdBQWxCLENBQWYsQ0FBUDtBQUFBLENBQXJCO0FBQ0EsSUFBTUMsMENBQWlCLFNBQWpCQSxjQUFpQjtBQUFBLFNBQU9DLE9BQU9DLFlBQVAsQ0FBb0JDLEtBQXBCLENBQTBCLElBQTFCLEVBQWdDQyxHQUFoQyxDQUFQO0FBQUEsQ0FBdkIiLCJmaWxlIjoiY29tbW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHRvVHlwZWRBcnJheSA9IHN0ciA9PiBuZXcgVWludDhBcnJheShzdHIuc3BsaXQoJycpLm1hcChjaGFyID0+IGNoYXIuY2hhckNvZGVBdCgwKSkpXG5leHBvcnQgY29uc3QgZnJvbVR5cGVkQXJyYXkgPSBhcnIgPT4gU3RyaW5nLmZyb21DaGFyQ29kZS5hcHBseShudWxsLCBhcnIpXG4iXX0=