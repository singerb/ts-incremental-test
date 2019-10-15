# ts-incremental-test

Initialize the repo with `npm install`. Then, despite `incremental` being set to `true` in the TS config, repeated invocations of `time ./node_modules/.bin/tsc --listEmittedFiles` will show all the files being emitted every time, and the same time spent each time, when subdequent runs should be faster.
