// There are N jobs to be done, but you can do only one job at a time.
// Given an array A denoting the start time of the jobs and an array B denoting the finish time of the jobs.
// Your aim is to select jobs in such a way so that you can finish the maximum number of jobs.
// Return the maximum number of jobs you can finish

let A = [5, 7, 9, 8, 12, 14, 18, 17];
let B = [8, 9, 13, 18, 15, 18, 20, 22];
const sortedIndexes = [...new Array(A.length).keys()].sort((a, b) => B[a] - B[b]);
let endTime = 0;
let noOfJobs = 0;
for (let i = 0; i < A.length; i++) {
    if (endTime <= A[sortedIndexes[i]]) {
        noOfJobs++;
        endTime = B[sortedIndexes[i]];
    }
}
console.log(noOfJobs);