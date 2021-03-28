export default class ErrorRepository {
  constructor() {
    this.err = new Map([
      [2100, 'Access to the file is closed'],
      [2200, 'The file was deleted'],
      [2300, 'File upload error'],
      [2400, 'Invalid file name'],
      [2500, 'The file size exceeds 10 MB'],
    ]);
  }

  translate(code) {
    return this.err.get(code) || 'Unknown error';
  }
}
