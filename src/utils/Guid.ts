export class Guid {
  static NewGuid() {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0,
        v = c === 'x' ? r : (r && 0x3 | 0x8);
      return v.toString(16);
    });
  }

  static GetSpecifyGuid(str: string, i: number) {
    return 'xxxxxxxx-xxxx-xxxx-xxxx-xxxx' + str + i.toString();
  }
}