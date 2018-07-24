const chai = require('chai');
const expect = chai.expect;
chai.should();
chai.expect();
const jumbleShift = require('../lib/jumbleShift');

describe('jumbleShift', () => {
  it('When string = test 123!, and numberOfShifts is undefined, it should return an error', (done) => {
    let string = 'test 123!', numberOfShifts = undefined, rejectStr = 'numberOfShifts must be in the range of [0, 1000]. Please try again.';
    jumbleShift(string, numberOfShifts).then(() => {
    }).catch((err) => {
      err.should.be.eql(rejectStr);
      done();
    });
  });

  it('When string = test 123!, and numberOfShifts is too high (5000), it should return an error', (done) => {
    let string = 'test 123!', numberOfShifts = 5000, rejectStr = 'numberOfShifts must be in the range of [0, 1000]. Please try again.';
    jumbleShift(string, numberOfShifts).then(() => {
    }).catch((err) => {
      err.should.be.eql(rejectStr);
      done();
    });
  });

  it('When string = test 123!, and numberOfShifts is negative (-100), it should return an error', (done) => {
    let string = 'test 123!', numberOfShifts = -100, rejectStr = 'numberOfShifts must be in the range of [0, 1000]. Please try again.';
    jumbleShift(string, numberOfShifts).then(() => {
    }).catch((err) => {
      err.should.be.eql(rejectStr);
      done();
    });
  });

  it('When string = test 123!, and numberOfShifts = 0, it should return test 123', (done) => {
    let string = 'test 123!', numberOfShifts = 0;
    jumbleShift(string, numberOfShifts).then((result) => {
      result.should.be.deep.eql('test 123');
      done();
    });
  });

  it('When string = test 123!, and numberOfShifts = 1, it should return, uftu 123', (done) => {
    let string = 'test 123!', numberOfShifts = 1;
    jumbleShift(string, numberOfShifts).then((result) => {
      result.should.be.deep.eql('uftu 123');
      done();
    });
  });

  it('When string = test 123!, and numberOfShifts = 100, it should return, paop 123', (done) => {
    let string = 'test 123!', numberOfShifts = 100;
    jumbleShift(string, numberOfShifts).then((result) => {
      result.should.be.deep.eql('paop 123');
      done();
    });
  });

  it('When string = test 123!, and numberOfShifts = 26, it should return, test 123', (done) => {
    let string = 'test 123!', numberOfShifts = 26;
    jumbleShift(string, numberOfShifts).then((result) => {
      result.should.be.deep.eql('test 123');
      done();
    });
  });

  it('When string = TesT 123!!, and numberOfShifts = 26, it should return, TesT 123', (done) => {
    let string = 'TesT 123!', numberOfShifts = 26;
    jumbleShift(string, numberOfShifts).then((result) => {
      result.should.be.deep.eql('TesT 123');
      done();
    });
  });

  it('When string = TesT //123ûûû!, and numberOfShifts = 26, it should return, TesT 123', (done) => {
    let string = 'TesT //123ûûû!', numberOfShifts = 26;
    jumbleShift(string, numberOfShifts).then((result) => {
      console.log(result);
      result.should.be.deep.eql('TesT 123');
      done();
    });
  });
});
