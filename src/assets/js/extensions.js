import d3 from 'd3';
import util from './util/util';

d3.selection.prototype.callIfVisible = function(callback) {
    if (util.isVisible(this)) {
        return this.call(callback);
    } else {
        return this;
    }
};
