import express from 'express';
import knex from 'knex';

interface ISample { 
    device? : string, 
    time? : number, 
    v1? : number, 
    i1? : number, 
    p1? : number, 
    v2? : number, 
    i2? : number, 
    p2? : number, 
    v3? : number, 
    i3? : number, 
    p3? : number 
};

const dataProcessor = (req : express.Request, res : express.Response, postgres?: knex) : void => {
    const data: ISample = parseData(req);
    console.log(data);
    requestComplete(res);
};

const requestComplete = (res: express.Response) => res.end();

const parseData = (req : express.Request) => {
    const sensorData : Array<ISample> = req.body.hasOwnProperty('data') ? req.body.data : []
    let newSample: ISample = {};
    if (sensorData) {
        newSample.device = sensorData[0].device;
        newSample.time = Date.now();
        newSample.v1 = sensorData[0].v1;
        newSample.i1 = sensorData[1].i1;
        newSample.p1 = sensorData[2].p1;
        newSample.v2 = sensorData[3].v2;
        newSample.i2 = sensorData[4].i2;
        newSample.p2 = sensorData[5].p2;
        newSample.v3 = sensorData[6].v3;
        newSample.i3 = sensorData[7].i3;
        newSample.p3 = sensorData[8].p3;
    };
    return newSample;
};

export default dataProcessor;
