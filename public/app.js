import Integrate from './Integrate.js';
import Vehicle from './Vehicle.js';
import Canvas from './Canvas.js';
import { TIME_STEP, MAX_SIMULATION_TIME, CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT } from './config.js';
import trafficList from './trafficList.js';

class App {
    constructor(trafficList, timeStep, maxSimulationTime) {
        this.dt = timeStep;
        this.maxSimulationTime = maxSimulationTime;
        
        this.trafficList = [];
        this.currentTick = -1;
        this.integrate = new Integrate(this.dt);
        this.cc = new Canvas(CANVAS_ID, CANVAS_WIDTH, CANVAS_HEIGHT);

        this.setupHandlers()
            .parseTrafficList(trafficList)
            .init();
    }

    setupHandlers() {
        this.onUpdateHandler = this.onUpdate.bind(this);
        return this;
    }

    parseTrafficList(trafficList) {
        for(let vehicleOpts of trafficList) {
            const vehicleInstance = new Vehicle(vehicleOpts);
            this.trafficList.push(vehicleInstance);
        }
        return this;
    }

    init() {
        this.simulationTime = 0.0;
        setTimeout(this.onUpdateHandler, 100);
    }

    preUpdate() {
        this.cc.newState(this.simulationTime);

        for(let vehicle of this.trafficList) {
            vehicle.onTickHandler(this.simulationTime);
            this.cc.renderVehicle(vehicle);
        }
    }

    onUpdate() {
        this.preUpdate();
        this.trafficList = this.integrate.timeStep(this.trafficList);
        this.postUpdate();

        this.simulationTime += this.dt;
        if(this.simulationTime < this.maxSimulationTime) { this.initNextTimeStep(); }
    }

    postUpdate() {}

    initNextTimeStep() {
        window.requestAnimationFrame(this.onUpdateHandler);
    }
}

const app = new App(trafficList, TIME_STEP, MAX_SIMULATION_TIME);