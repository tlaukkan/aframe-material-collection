// typings/custom.d.ts
declare module "worker-loader?inline=true&name=yoga-worker.js!*" {
    class YogaWorker extends Worker {
        constructor();
    }

    export default YogaWorker;
}
